"use server"
import { NextResponse } from "next/server";
import client from "@repo/db/client";
import dotenv from "dotenv";

dotenv.config();

export const POST = async () => {
  await client.merchant.create({
    data: {
      email: "asd",
      name: "adsads",
      auth_type: "Google",
    },
  });
  return NextResponse.json({
    message: "hi there",
  });
};
