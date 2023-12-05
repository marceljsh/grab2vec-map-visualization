"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Atlas from "@/app/components/Atlas";
import APIData from "@/app/interfaces/APIData";
import calculateDistance from "@/lib/haversine";

export default function ShowPage() {
  const { id } = useParams();
  const [data, setData] = useState<APIData>();

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/trajectories/${id}`)
      .then(res => res.json())
      .then(result => {
        if (result.message === 'failed') {
          return <h1 className="text-white">ERROR FROM API</h1>
        }
        setData(result);
      });
  }, []);

  if (data == null) {
    return <h1 className="text-white">DATA IS NULL</h1>
  }

  if (data.bundle.points === undefined) {
    return <h1 className="text-white">POINTS ARE UNDEFINED</h1>
  }

  const distance = calculateDistance(data.bundle.points)

  return (
    <div className="h-full flex justify-center">
      <div className="grid grid-cols-1 gap-4 w-full justify-center items-center">
        <Atlas data={data} />
        <div className="justify-between">
          <h1 className="text-white">distance: {distance.toPrecision(3)} km</h1>
          <h1 className="text-white">mode: {data.bundle.points[0].driving_mode}</h1>
        </div>
      </div>
    </div>
  );
}
