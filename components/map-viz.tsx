"use client";

import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { Emblem } from "@/components/Emblem";
import Trip from "@/interfaces/Trip";
import { toTimestamp } from "@/lib/time-utils";

const SingleViz = ({ data }: { data: Trip }) => {
  let markers;
  let lat, lon;

  if (data === null || data === undefined) {
    lat = -6.175275008381671;
    lon = 106.82713648066166;
  } else {
    const initial = data.points[0];

    lat = initial.lat;
    lon = initial.lon;

    markers = data.points.map((point) => (
      <Marker
        key={point.point_id}
        position={[point.lat, point.lon]}
        icon={Emblem()}
      >
        <Popup>
          [{point.lon}, {point.lon}] <br />
          {toTimestamp(point.pingtimestamp)}
        </Popup>
      </Marker>
    ));
  }

  return (
    <MapContainer
      style={{
        height: "60vh",
        width: "60vw",
      }}
      center={[lat, lon]}
      zoom={13}
      scrollWheelZoom={true}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {markers}
    </MapContainer>
  );
};

const MultiViz = ({ data }: { data: Trip[] }) => {
  let markers;
  let lat, lon;

  if (data === null || data === undefined) {
    lat = -6.175275008381671;
    lon = 106.82713648066166;
  } else {
    const initial = data[0].points[0];

    lat = initial.lat;
    lon = initial.lon;

    let idx = -1
    markers = data.map((trip) => {
      idx++;
      return trip.points.map((point) => (
        <Marker
          key={point.point_id}
          position={[point.lat, point.lon]}
          icon={Emblem(idx)}
        >
          <Popup>
            [{point.lon}, {point.lon}] <br />
            {toTimestamp(point.pingtimestamp)}
          </Popup>
        </Marker>
      ));
    });
  }

  return (
    <MapContainer
      style={{
        height: "60vh",
        width: "60vw",
      }}
      center={[lat, lon]}
      zoom={13}
      scrollWheelZoom={true}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {markers}
    </MapContainer>
  );
};

export { MultiViz, SingleViz };
