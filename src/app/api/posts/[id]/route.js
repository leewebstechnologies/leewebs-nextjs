import { NextResponse } from "next/server";
import connect from "@component/utils/db";
import Post from "../../../models/Post";

export const GET = async (request, { params }) => {
  const { id } = params;
  // return new NextResponse("It works!", { status: 200 });
  try {
    await connect();
    const post = await Post.findById(id);

    return new NextResponse(JSON.stringify(post), { status: 200 });
  } catch (error) {
    return new NextResponse("Database Eror", { status: 500 });
  }
};
