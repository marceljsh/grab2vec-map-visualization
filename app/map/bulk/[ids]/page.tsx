import { MultiViz } from "@/components/map-viz";
import Trip from "@/interfaces/Trip";

export default async function Page({ params }: any) {
  const res = await getTripsData(params.ids);

  if (res.message === "failed") {
    return <div>Failed to load data</div>;
  }

  const data = res.data as Trip[];

  const trjIds = data.map((trip: Trip) => trip.trajectory.trj_id);

  return (
    <div className="h-full flex justify-center">
      <div className="grid grid-cols-1 gap-4 w-full justify-center items-center">
        <MultiViz data={data} />
        <div>
          {trjIds.map((id: number) => (
            <h1>TRJ {id}</h1>
          ))}
        </div>
      </div>
    </div>
  );
}

async function getTripsData(ids: string[]) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_APP_URL}/api/trips/bulk/${ids}`,
    {
      method: "GET",
    }
  );

  return res.json();
}
