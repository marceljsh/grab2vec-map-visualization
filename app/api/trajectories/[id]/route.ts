import { pool } from '@/lib/helper'
import Ping from '@/interfaces/Ping'
import Trajectory from '@/interfaces/Trajectory'
import { NextResponse } from 'next/server'

export const GET = async (
  request: Request,
  { params }: { params: { id: number } }
) => {
  const id = params.id;
  try {
    const trajectories: Trajectory[] = await pool.query(
      `SELECT * FROM trajectories WHERE id=${id}`
    );

    if (trajectories.length == 0) {
      return NextResponse.json(
        { message: 'failed', bundle: { error: new Error('record not found') } },
        { status: 404 }
      );
    }

    const trajectory = trajectories[0];
    const points: Ping[] = await pool.query(
      `SELECT * FROM points WHERE trj_id=${id}`
    );

    return NextResponse.json(
      { message: 'success', bundle: { trajectory, points } },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ message: 'failed', error }, { status: 500 });
  }
};
