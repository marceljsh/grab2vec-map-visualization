export default async function Home() {
  const fetched = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/`)

  return (
    <div className='h-full flex justify-center bg-amber-300'>
      <div className='grid grid-cols-1 gap-4 w-full'>
        {/*  */}
      </div>
    </div>
  )
}
