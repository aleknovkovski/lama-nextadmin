import { User } from "./models";
import { connectToDatabase } from "../lib/mongoose"

export const fetchUsers = async (q) => {
  const regex = new RegExp(q, "i");

  try {
    connectToDatabase();
    const users = await User.find({ username: { $regex: regex } })
    return { users };
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch users!");
  }
};
