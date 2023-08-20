"use client"
import { NextRequest, NextResponse } from "next/server";
import { db, cartTable } from "@/app/lib/drizzle";
import { v4 as uuid } from "uuid";
import { cookies } from "next/dist/client/components/headers";
import { eq } from "drizzle-orm";


interface Product {
  _id: string;
  productname: string;
  description: string;
  price: number;
  image: {
    asset: {
      _ref: string;
    };
  };
}

export const GET = async (request: NextRequest) => {
  try {
    const uid = uuid();
    const setcookies = cookies();

    const user_id = cookies().get("user_id");
    if (!user_id) {
      setcookies.set("user_id", uid);
    }

    const res = await db
      .select()
      .from(cartTable)
      .where(eq(cartTable.user_id, cookies().get("user_id")?.value as string));

    return NextResponse.json({ res });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ Message: "Something went wrong" });
  }
};

export const POST = async( request:NextRequest) =>{
  const req = await request.json()
  const uid =uuid();
  const setcookies =cookies();

  const user_id =cookies().get("user_id") 
  if(!user_id){
      setcookies.set("user_id",uid)
  }
  try{
      const res = await db.insert(cartTable).values({
          product_id: req.product_id,
          quantity : 1,
          user_id :  cookies().get("user_id")?.value as string
      }).returning();
      return  NextResponse.json({res}) 
  } catch (error){

  }
};

export const DELETE = async (request: NextRequest) => {
  try {
    const deleteResult = await db
      .delete(cartTable)
      .execute();

    if (deleteResult.rowCount > 0) {
      return new Response("All data deleted successfully", { status: 200 });
    } else {
      return new Response("No data found to delete", { status: 404 });
    }
  } catch (error) {
    console.log(error);
    return new Response("Something went wrong", { status: 500 });
  }
};
