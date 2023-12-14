'use client'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import Atlas from '@/components/Atlas'
import { calculateAvgSpeed, calculateDistance } from '@/lib/calculation'

async function getData(id: string) {
  const res = await fetch(
		`${process.env.NEXT_PUBLIC_APP_URL}/api/trajectories/${id}`
	);

	if (!res.ok) {
		return { error: true }
	}

	return res.json()
}

export default async function ShowIdPage() {
  const { id } = useParams()
  const data = await getData(id as string)

  const [inputId, setInputId] = useState<string>('')

  const onChangeId = (e: Event) => {
    e.preventDefault()
  }


  if (data.error) {
    return <h1 className='text-white'>ERROR FETCHING DATA</h1>;
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
