export default async function Home() {
  const fetched = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/`)

  return (
    <div className='flex justify-center'>
      <div className='grid grid-cols-1 gap-4 w-full'>
        <h1 className="text-emerald-600 text-7xl mx-auto">landing page</h1>
        <a href="/map/123">test</a>
      </div>
    </div>
  )
}
