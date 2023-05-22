import db from "@/lib/db";
import bcrypt from "bcrypt";
import User from "@/models/User";

export async function POST(req, res) {
  try {
    await db.connect();

    const { username, email, password: pass } = await req.json();

    const isExisting = await User.findOne({ email });

    if (isExisting) {
      throw new Error("User already exists");
    }

    const hashPassword = await bcrypt.hash(pass, 10);

    const newUser = await User.create({
      username,
      email,
      password: hashPassword,
    });

    // ._doc -> the value of user as object
    const { password, ...user } = newUser._doc;

    return new Response(JSON.stringify(user), { status: 201 });
  } catch (error) {
    return new Response(JSON.stringify(error.message), { status: 500 });
  }
}
