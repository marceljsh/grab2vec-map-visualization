import { pool } from "@/lib/db-conn";
import Ping from "@/interfaces/Ping";
import Trajectory from "@/interfaces/Trajectory";
import Trip from "@/interfaces/Trip";
import { NextResponse } from "next/server";

export const GET = async (
  request: Request,
  { params }: { params: { id: number } }
) => {
  const id = params.id;

  try {

    let result = await pool.query(
      "SELECT * FROM trajectories WHERE trj_id = $1",
      [id]
    );
    const trajectory: Trajectory = result.rows[0];

    result = await pool.query(
      "SELECT * FROM points WHERE trj_id = $1",
      [id]
    );
    const points: Ping[] = result.rows;

    const trip: Trip = {
      trajectory,
      points,
    };

    return NextResponse.json(
      { message: "success", data: trip },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ message: "failed", data: error }, { status: 500 });
  }
};
