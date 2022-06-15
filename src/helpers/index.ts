import { Request } from "express";

export const getPaginatedData = async (req: Request, DBModel: any) => {
  const { limit, page } = req.query;
  let data;
  let next;
  let previous;
  const total = await DBModel.countDocuments();
  if (limit && page) {
    const skip = +limit * (+page - 1);
    data = await DBModel.find({})
      .limit(+limit)
      .skip(+skip);
    if (+page * +limit < total)
      next = {
        limit,
        page: +page + 1,
      };
    if (skip > 0)
      previous = {
        limit,
        page: +page - 1,
      };
  } else {
    data = await DBModel.find({});
  }
  return { total, next, previous, data };
};
