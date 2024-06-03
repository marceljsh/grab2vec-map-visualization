'use client'

import { useParams } from 'next/navigation'
import Atlas from '@/components/Atlas'
import { calculateAvgSpeed, calculateDistance } from '@/lib/calculation'
import { useEffect, useState } from 'react';
import Trajectory from '@/interfaces/Trajectory';
import Ping from '@/interfaces/Ping';
import Trip from '@/interfaces/Trip';

// async function getData(id: string) {
//   const res = await fetch(
// 		`${process.env.NEXT_PUBLIC_APP_URL}/api/trajectories/${id}`
// 	);

// 	if (!res.ok) {
// 		return { error: true }
// 	}

// 	return res.json()
// }

type ResData = {
  message: string
  data: Trip | Error
}

export default function ShowIdPage() {
  const { id } = useParams()
  const [data, setData] = useState<ResData>()
  
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/trajectories/${id}`)
    .then(res => res.json())
    .then(result => setData(result))
  }, [])

  if (data === undefined) {
    return <h1 className="text-white">DATA IS UNDEFINED, ID: ({id})</h1>
  }

  // if (data.message === 'failed' && 'error' in data.bundle) {
  //   return <h1 className='text-white'>{data.bundle.error}</h1>;
  // }

  if (data.data === undefined) {
    console.log('===============')
    console.log(data)
    console.log('===============')
    return <h1 className='text-white'>POINTS ARE UNDEFINED</h1>;
  }

  const x = data.data as Trip

  const distance = calculateDistance(x.points);
  const avgSpeed = calculateAvgSpeed(x.points);

  return (
    <div className="h-full flex justify-center">
      <div className="grid grid-cols-1 gap-4 w-full justify-center items-center">
        <Atlas data={[x]} />
        <div className="justify-between">
          <h1 className="text-white">
            mode: {x.points[0].driving_mode}
          </h1>
          <h1 className="text-white">distance: {distance.toPrecision(3)} km</h1>
          <h1 className="text-white">avg speed: {avgSpeed.toPrecision(3)} km/h</h1>
        </div>
      </div>
    </div>
  );
}
