import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import crypto from "crypto";

import sendEmail from "../utils/email/sendEmail.js";
import Token from "../models/token.model.js";
import User from "../models/user.model.js";

const bcryptSalt = process.env.BCRYPT_SALT;

export const signup = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const existinguser = await User.findOne({ email });
    if (existinguser) {
      return res.status(404).json({ message: "user already Exist" });
    }

    const hashpassword = await bcrypt.hash(password, Number(bcryptSalt));
    const newUser = await User.create({
      name,
      email,
      password: hashpassword,
    });
    const token = jwt.sign(
      { email: newUser.email, id: newUser._id },
      process.env.JWT_SECRET
    );
    res.status(200).json({ result: newUser, token });
  } catch (error) {
    res.status(500).json("Something went wrong");
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const existinguser = await User.findOne({ email });
    if (!existinguser) {
      return res.status(404).json({ message: "user not Exist" });
    }

    const isPasswordCrt = await bcrypt.compare(password, existinguser.password);
    if (!isPasswordCrt) {
      return res.status(400).json({ message: "Invalid Credentials" });
    }
    const token = jwt.sign(
      { email: existinguser.email, id: existinguser._id },
      process.env.JWT_SECRET
    );
    res.status(200).json({ result: existinguser, token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const requestPasswordResetController = async (req, res) => {
  const { email } = req.body;

  const existinguser = await User.findOne({ email });
  if (!existinguser) {
    return res.status(404).json({ message: "Email does not exist" });
  }

  const token = Token.findOne({ userId: existinguser._id });
  if (token) {
    await token.deleteOne();
  }

  let resetToken = crypto.randomBytes(32).toString("hex");
  const hashToken = await bcrypt.hash(resetToken, Number(bcryptSalt));

  await new Token({
    userId: existinguser._id,
    token: hashToken,
    createdAt: Date.now(),
  }).save();

  const link = `/passwordReset/${resetToken}/${existinguser._id}`;

  sendEmail(existinguser.email, "Password Reset Request", {
    name: existinguser.name,
    link: link,
  });
  return res.json({ link });
};

export const resetPasswordController = async (req, res) => {
  const { userId, token, password } = req.body;
  try {
    let passwordResetToken = await Token.findOne({ userId });

    if (!passwordResetToken) {
      return res
        .status(404)
        .json({ message: "Invalid or expired password reset token" });
    }

    const isValidToken = await bcrypt.compare(token, passwordResetToken.token);
    if (!isValidToken) {
      return res.status(404).json({ message: "Invalid Token" });
    }

    const hashPwd = await bcrypt.hash(password, Number(bcryptSalt));

    await User.findByIdAndUpdate({ _id: userId }, { password: hashPwd });

    await passwordResetToken.deleteOne();

    return res.status(200).json({ message: "Updated Successfully" });
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong" });
  }
};
