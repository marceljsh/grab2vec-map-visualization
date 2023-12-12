export default async function Home() {
  const fetched = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/`)

  return (
    <div className='flex justify-center bg-amber-300'>
      <div className='grid grid-cols-1 gap-4 w-full'>
        <h1 className="text-emerald-600 text-7xl mx-auto">landing page</h1>
      </div>
    </div>
  )
}
