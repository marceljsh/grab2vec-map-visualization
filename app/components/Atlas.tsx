"use client";

import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import Emblem from "@/app/components/Emblem";
import Ping from "@/app/interfaces/Ping";
import APIData from "@/app/interfaces/APIData";

const toTimestamp = (ping: number) => {
  const date = new Date(ping);
  const formattedDate = date.toLocaleDateString();
  const formattedTime = date.toLocaleTimeString();
  const humanReadableTimestamp = `${formattedDate} ${formattedTime}`;

  return humanReadableTimestamp;
};

export default function Atlas({ data }: { data: APIData }) {
	const hasBundle = 'bundle' in data
	if (!hasBundle) {
		return <h1 className="text-white">missing bundle</h1>
	}

  const hasPoints = "points" in data.bundle;
  if (!hasPoints) {
    return <h1 className="text-white">no point provided</h1>;
  }

  if (data.bundle.points !== undefined) {
    return (
      <MapContainer
        style={{
          height: "60vh",
          width: "60vw",
        }}
        center={
          [data.bundle.points[0].rawlat, data.bundle.points[0].rawlng] ?? [
            -6.175275008381671, 106.82713648066166,
          ]
        }
        zoom={13}
        scrollWheelZoom={true}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {data.bundle.points.map((point: Ping) => (
          <Marker
            key={point.id}
            position={[point.rawlat, point.rawlng]}
            icon={Emblem}
          >
            <Popup>
              [{point.rawlat}, {point.rawlng}] <br />
              {toTimestamp(point.pingtimestamp)} <br />
              id: {point.id}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    );
  }

  return <h1 className="text-white">this is supposed to be ATLAS component</h1>;
}

/* 
<MapContainer
	style={{
		height: '75vh',
		width: '75vw'
	}}
	center={[data.points[0].rawlat, data.points[0].rawlng] ?? [-6.175559834688233, 106.82719290455229]}
	zoom={13}
	scrollWheelZoom={true}
>
	<TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
	<Marker
		position={[2.9557766131760466, 99.06052638051908]}
		icon={Emblem}
	>
		<Popup>
			DEFAULT POINT
		</Popup>
	</Marker>

	{data.points.map((point: Ping) =>
		<Marker position={[point.rawlat, point.rawlng]} icon={Emblem}>
			<Popup>
				[{point.rawlat}, {point.rawlng}] <br />
				{toTimestamp(point.pingtimestamp)}
			</Popup>
		</Marker>
	)}
</MapContainer>
*/

/* 
<Marker
	position={[2.9557766131760466, 99.06052638051908]}
	icon={
		new L.Icon({
			iconUrl: MarkerIcon.src,
			iconRetinaUrl: MarkerIcon.src,
			iconSize: [25, 41],
			iconAnchor: [12.5, 41],
			popupAnchor: [0, -41],
			shadowUrl: MarkerShadow.src,
			shadowSize: [41, 41]
		})
	}
>
 */
