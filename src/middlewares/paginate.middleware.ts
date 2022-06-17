import { NextFunction, Request } from "express";
import mongoose from "mongoose";

const paginateMiddleware = (
  DBModel: typeof mongoose.Model,
  populate?: string
) => {
  return async (req: Request, res: any, next: NextFunction) => {
    const { limit, page } = req.query;
    const total = await DBModel.countDocuments();
    res.paginatedData = {};
    if (limit && page) {
      const skip = +limit * (+page - 1);
      res.paginatedData.data = await DBModel.find()
        .sort({ createdAt: -1 })
        .limit(+limit)
        .skip(+skip)
        .populate(populate || "");
      if (+page * +limit < total)
        res.paginatedData.next = {
          limit: +limit,
          page: +page + 1,
        };
      if (skip > 0)
        res.paginatedData.previous = {
          limit: +limit,
          page: +page - 1,
        };
    } else {
      res.paginatedData.data = await DBModel.find()
        .sort({ createdAt: -1 })
        .populate(populate || "");
    }
    res.paginatedData.total = total;
    next();
  };
};

export default paginateMiddleware;
