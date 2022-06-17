import { Request, Response } from "express";
import { CategoryModel } from "../models";

const getAllCategory = async (_: Request, res: any) => {
  try {
    res.status(200).json({
      ...res.paginatedData,
      message: "Category fetched successfully",
    });
  } catch (error) {
    res.status(500).json({
      data: { error },
    });
  }
};

const getSearchedCategory = async (req: Request, res: Response) => {
  try {
    const { text } = req.query;

    const categories = await CategoryModel.find({
      $or: [{ name: { $regex: text } }],
    });

    res.status(200).json({
      data: categories,
      message: "Category fetched successfully",
    });
  } catch (error) {
    res.status(500).json({
      data: { error },
    });
  }
};

const createCategory = async (req: Request, res: Response) => {
  try {
    const category = await CategoryModel.create(req.body);
    res.status(200).json({
      data: { category },
      message: "Category created successfully",
    });
  } catch (error) {
    res.status(500).json({
      data: { error },
      message: "Error creating Category",
    });
  }
};

const updateCategory = async (req: Request, res: Response) => {
  try {
    const updatedCategory = req.body;
    const updatedCategoryData = await CategoryModel.findByIdAndUpdate(
      updatedCategory._id,
      updatedCategory,
      { new: true }
    );
    res.status(200).json({
      data: { updatedCategoryData },
      message: "Category updated successfully",
    });
  } catch (error) {
    res.status(500).json({
      data: { error },
      message: "Error updating Category",
    });
  }
};

const deleteCategory = async (req: Request, res: Response) => {
  try {
    const deletedCategory = await CategoryModel.findByIdAndDelete(
      req.params._id
    );
    res.status(200).json({
      data: { deletedCategoryId: deletedCategory?._id, deletedCategory },
      message: "Category deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      data: { error },
      message: "Error deleting Category",
    });
  }
};

export default {
  getAllCategory,
  getSearchedCategory,
  createCategory,
  updateCategory,
  deleteCategory,
};
