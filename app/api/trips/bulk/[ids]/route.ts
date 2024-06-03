import Ping from "@/interfaces/Ping";
import Trajectory from "@/interfaces/Trajectory";
import Trip from "@/interfaces/Trip";
import { pool } from "@/lib/db-conn";
import { NextResponse } from "next/server";

export const GET = async (
  request: Request,
  { params }: { params: { ids: string } }
) => {
  const ids = params.ids.split(",").map((id) => parseInt(id));

  try {
    const trips: Trip[] = await Promise.all(ids.map(async (id) => {
      const resultTrajectories = await pool.query(
        "SELECT * FROM trajectories WHERE trj_id = $1",
        [id]
      );
      const trajectory: Trajectory = resultTrajectories.rows[0];

      const resultPoints = await pool.query(
        "SELECT * FROM points WHERE trj_id = $1",
        [id]
      );
      const points: Ping[] = resultPoints.rows;

      return { trajectory, points };
    }));

    return NextResponse.json({
      message: "success",
      data: trips
    }, {
      status: 200
    });
  } catch (error) {
    console.error("Error fetching data:", error);
    return NextResponse.json({
      message: "failed",
      data: error
    }, {
      status: 500
    });
  }
};
