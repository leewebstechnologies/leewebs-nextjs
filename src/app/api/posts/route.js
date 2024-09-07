import { NextResponse } from "next/server";
import connect from "@component/utils/db";
import Post from "../../models/Post";

export const GET = async (request) => {
  const url = new URL(request.url);

  const username = url.searchParams.get("username");
  // return new NextResponse("It works!", { status: 200 });
  try {
    await connect();
    const posts = await Post.find(username && { username });

    return new NextResponse(JSON.stringify(posts), { status: 200 });
  } catch (error) {
    return new NextResponse("Database Eror", { status: 500 });
  }
};
