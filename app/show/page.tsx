import Atlas from '@/components/Atlas'

async function getData() {
	const res = await fetch(
		`${process.env.NEXT_PUBLIC_APP_URL}/api/trajectories/69`
	);

	if (!res.ok) {
		return { error: true }
	}

	return res.json()
}

export default async function ShowPage() {
	const data = await getData()

	if (data?.error) {
		return (
			<section className='min-h-full flex flex-col items-center'>
				<div className='justify-center items-center'>
					<Atlas data={null} />
				</div>
				<h1 className="text-white mt-5">no data displayed</h1>
			</section>
		)
	}

	return (
		<section className='min-h-full flex flex-col items-center'>
			<div className='justify-center items-center'>
				<Atlas data={[data.bundle]} />
			</div>
		</section>
	)
}