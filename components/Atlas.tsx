'use client'

import 'leaflet/dist/leaflet.css'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import Emblem from '@/components/Emblem'
import Ping from '@/interfaces/Ping'
import Trip from '@/interfaces/Trip'

const toTimestamp = (ping: number) => {
  const date = new Date(ping)
  const formattedDate = date.toLocaleDateString()
  const formattedTime = date.toLocaleTimeString()
  const humanReadableTimestamp = `${formattedDate} ${formattedTime}`

  return humanReadableTimestamp
}

export default function Atlas({ data }: { data: Trip[] | null }) {
  let markers;
  let lat, lon;

  if (data == null) {
    lat = -6.175275008381671
    lon = 106.82713648066166
  } else {
    const initial: Ping = data[0].points[0]
    lat = initial.lat
    lon = initial.lon
    markers = data.map((trip: Trip) =>
      trip.points.map((point: Ping) => (
        <Marker key={point.id} position={[point.lat, point.lon]} icon={Emblem}>
          <Popup>
            [{point.lon}, {point.lon}] <br />
            {toTimestamp(point.pingtimestamp)}
            id: {point.id}
          </Popup>
        </Marker>
      ))
    )
  }

  return (
    <MapContainer
      style={{
        height: '60vh',
        width: '60vw',
      }}
      center={[lat, lon]}
      zoom={13}
      scrollWheelZoom={true}
    >
      <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
      {markers}
    </MapContainer>
  )
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
