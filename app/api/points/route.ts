import { pool } from "@/app/helpers/helper";
import Ping from "@/app/interfaces/Ping";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const points: Ping[] = await pool.query(
      "SELECT * FROM points"
    );
    return NextResponse.json(
      { message: "success", points },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ message: "failed", error }, { status: 500 });
  }
};
