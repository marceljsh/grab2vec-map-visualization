import { SingleViz } from "@/components/map-viz";
import { calculateAvgSpeed, calculateDistance } from "@/lib/calculation";

export default async function Page({ params }: any) {
  const { message, data } = await getTripData(params.id);

  if (message === "failed") {
    return <div>Failed to load data</div>;
  }

  const distance = calculateDistance(data.points);
  const avgSpeed = calculateAvgSpeed(data.points);

  return (
    <div className="h-full flex justify-center">
      <div className="grid grid-cols-1 gap-4 w-full justify-center items-center">
        <SingleViz data={data} />
        <div className="justify-between">
          <h1 className="text-white">mode: {data.points[0].driving_mode}</h1>
          <h1 className="text-white">distance: {distance.toPrecision(3)} km</h1>
          <h1 className="text-white">
            avg speed: {avgSpeed.toPrecision(3)} km/h
          </h1>
        </div>
      </div>
    </div>
  );
}

async function getTripData(trjId: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/trips/${trjId}`,{
    method: "GET"
  });

  return res.json();
};
