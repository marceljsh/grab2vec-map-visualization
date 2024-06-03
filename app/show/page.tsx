// import Atlas from '@/components/Atlas'
import { useState } from 'react';

// async function getData() {
// 	const res = await fetch(
// 		`${process.env.NEXT_PUBLIC_APP_URL}/api/trajectories/69`
// 	);
// 	const data = await res.json()

// 	if (data.message === 'failed') {
// 		return { error: true }
// 	}

// 	return data
// }

export default async function ShowPage() {
	// const data = await getData()
	// const bundle = data?.error ? [null] : data.bundle

	// const [inputId, setInputId] = useState<string>('')

	return (
		<section className='min-h-full flex flex-col items-center'>
			<div className='justify-center items-center'>
			{/* <Atlas data={bundle} /> */}
			</div>
			{/* {data?.error && <h1 className="text-white mt-5">no data displayed</h1>} */}

			{/* <p className="text-white">{inputId}</p> */}
			{/* <div className="">
				<input type="number" onChange={(e) => setInputId(e.target.value)}/>
			</div> */}
		</section>
	)
}