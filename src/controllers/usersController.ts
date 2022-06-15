import { Request, Response } from "express";
import { getPaginatedData } from "../helpers";
import { UsersModel } from "../models";

const getAllUsers = async (req: Request, res: Response) => {
  try {
    const results = await getPaginatedData(req, UsersModel);
    res.status(200).json({
      ...results,
      message: "Users fetched successfully",
    });
  } catch (error) {
    res.status(500).json({
      data: { error },
    });
  }
};

const createUser = async (req: Request, res: Response) => {
  try {
    console.log(req.body);
    const user = await UsersModel.create(req.body);
    res.status(200).json({
      data: { user },
      message: "User created successfully",
    });
  } catch (error) {
    res.status(500).json({
      data: { error },
      message: "Error creating user",
    });
  }
};

const updateUser = async (req: Request, res: Response) => {
  try {
    const updatedUser = req.body;
    const updatedUserData = await UsersModel.findByIdAndUpdate(
      updatedUser._id,
      updatedUser,
      { new: true }
    );
    res.status(200).json({
      data: { updatedUserData },
      message: "User updated successfully",
    });
  } catch (error) {
    res.status(500).json({
      data: { error },
      message: "Error updating user",
    });
  }
};

const deleteUser = async (req: Request, res: Response) => {
  try {
    const deletedUser = await UsersModel.findByIdAndDelete(req.params._id);
    res.status(200).json({
      data: { deletedUserId: deletedUser?._id, deletedUser },
      message: "User deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      data: { error },
      message: "Error deleting user",
    });
  }
};

export default { getAllUsers, createUser, updateUser, deleteUser };
