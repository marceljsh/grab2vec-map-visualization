'use client'

import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import Atlas from '@/components/Atlas'
import APIData from '@/interfaces/APIData'
import { calculateAvgSpeed, calculateDistance } from '@/lib/calculation'

export default function ShowIdPage() {
  const { id } = useParams()
  const [data, setData] = useState<APIData>()

  const [inputId, setInputId] = useState<string>('')

  const onChangeId = (e: Event) => {
    e.preventDefault()
  }

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/trajectories/${id}`)
      .then((res) => res.json())
      .then((result) => {
        if (result.message === 'failed') {
          return <h1 className='text-white'>ERROR FROM API</h1>;
        }
        setData(result);
      });
  }, []);

  if (data == null) {
    return <h1 className='text-white'>DATA IS NULL</h1>;
  }

  if (data.bundle.points === undefined) {
    return <h1 className='text-white'>POINTS ARE UNDEFINED</h1>;
  }

  const distance = calculateDistance(data.bundle.points);
  const avgSpeed = calculateAvgSpeed(data.bundle.points);

  return (
    <div className="h-full flex justify-center">
      <div className="grid grid-cols-1 gap-4 w-full justify-center items-center">
        <Atlas data={data} />
        <div className="justify-between">
          <h1 className="text-white">
            mode: {data.bundle.points[0].driving_mode}
          </h1>
          <h1 className="text-white">distance: {distance.toPrecision(3)} km</h1>
          <h1 className="text-white">avg speed: {avgSpeed.toPrecision(3)} km^2</h1>
        </div>
        <p className="text-white">
          {inputId}
        </p>
        <div className="">
          <input type="number" onChange={(e) => setInputId(e.target.value)}/>
        </div>
      </div>
    </div>
  );
}
