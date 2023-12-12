import { pool } from '@/lib/helper'
import Ping from '@/interfaces/Ping'
import { NextResponse } from 'next/server'

export const GET = async () => {
  try {
    const points: Ping[] = await pool.query(
      'SELECT * FROM points'
    );
    return NextResponse.json(
      { message: 'success', points },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ message: 'failed', error }, { status: 500 });
  }
};
