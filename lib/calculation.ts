import Ping from "@/interfaces/Ping";

export function calculateAvgSpeed(points: Ping[]): number {
  let totalSpeed = 0;
  for (const point of points) {
    totalSpeed += point.speed;
  }
  return totalSpeed / points.length;
}

export function calculateDistance(points: Ping[]): number {
  let distance = 0;
  for (let i = 0; i < points.length - 1; i++) {
    distance += haversine(
      points[i].lat,
      points[i].lon,
      points[i + 1].lat,
      points[i + 1].lon
    );
  }
  return distance;
};

const haversine = (
  lat1: number,
  long1: number,
  lat2: number,
  long2: number
) => {
  const earthRadius = 6371; // Earth's radius in kilometers

  // Convert degrees to radians
  const deltaLat = degreesToRadians(lat2 - lat1);
  const deltaLon = degreesToRadians(long2 - long1);

  // Calculate the central angle
  const a =
    Math.sin(deltaLat / 2) * Math.sin(deltaLat / 2) +
    Math.cos(degreesToRadians(lat1)) *
      Math.cos(degreesToRadians(lat2)) *
      Math.sin(deltaLon / 2) *
      Math.sin(deltaLon / 2);

  // Calculate the great circle distance
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = earthRadius * c;

  return distance;
};

function degreesToRadians(degrees: number) {
  return degrees * (Math.PI / 180);
}
