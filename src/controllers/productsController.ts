import { Request, Response } from "express";
import { getPaginatedData } from "../helpers";
import { ProductModel } from "../models";

const getAllProducts = async (req: Request, res: Response) => {
  try {
    const results = await getPaginatedData(req, ProductModel);
    res.status(200).json({
      ...results,
      message: "Products fetched successfully",
    });
  } catch (error) {
    res.status(500).json({
      data: { error },
    });
  }
};

const getSearchedProducts = async (req: Request, res: Response) => {
  try {
    const { text } = req.query;

    const products = await ProductModel.find({
      $or: [{ name: { $regex: text } }],
    });

    res.status(200).json({
      data: products,
      message: "Products fetched successfully",
    });
  } catch (error) {
    res.status(500).json({
      data: { error },
    });
  }
};

const createProduct = async (req: Request, res: Response) => {
  try {
    console.log(req.body);
    const product = await ProductModel.create(req.body);
    res.status(200).json({
      data: { product },
      message: "Product created successfully",
    });
  } catch (error) {
    res.status(500).json({
      data: { error },
      message: "Error creating Product",
    });
  }
};

const updateProduct = async (req: Request, res: Response) => {
  try {
    const updatedProduct = req.body;
    const updatedProductData = await ProductModel.findByIdAndUpdate(
      updatedProduct._id,
      updatedProduct,
      { new: true }
    );
    res.status(200).json({
      data: { updatedProductData },
      message: "Product updated successfully",
    });
  } catch (error) {
    res.status(500).json({
      data: { error },
      message: "Error updating Product",
    });
  }
};

const deleteProduct = async (req: Request, res: Response) => {
  try {
    const deletedProduct = await ProductModel.findByIdAndDelete(req.params._id);
    res.status(200).json({
      data: { deletedProductId: deletedProduct?._id, deletedProduct },
      message: "Product deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      data: { error },
      message: "Error deleting Product",
    });
  }
};

export default {
  getAllProducts,
  getSearchedProducts,
  createProduct,
  updateProduct,
  deleteProduct,
};
