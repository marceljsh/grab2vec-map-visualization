import { pool } from '@/lib/helper'
import Trajectory from '@/interfaces/Trajectory'
import { NextResponse } from 'next/server'

export const GET = async () => {
  try {
    const trajectories: Trajectory[] = await pool.query(
      'SELECT * FROM trajectories'
    );

    return NextResponse.json(
      { message: 'success', trajectories },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ message: 'failed', error }, { status: 500 });
  }
};
