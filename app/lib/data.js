import { User } from "./models";
import { connectToDatabase } from "../lib/mongoose"

export const fetchUsers = async () => {
  try {
    connectToDatabase();
    const users = await User.find({})
    return { users };
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch users!");
  }
};
