import L from 'leaflet'

const schema = `data:image/svg+xml;utf8,${encodeURIComponent(`<?xml version="1.0" encoding="iso-8859-1"?>
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="36.059" height="36.059" viewBox="0 0 36.059 36.059">
            <defs>
              <filter id="Path_10080" x="0" y="0" width="36.059" height="36.059" filterUnits="userSpaceOnUse">
                <feOffset input="SourceAlpha"/>
                <feGaussianBlur stdDeviation="2.5" result="blur"/>
                <feFlood flood-opacity="0.161"/>
                <feComposite operator="in" in2="blur"/>
                <feComposite in="SourceGraphic"/>
              </filter>
            </defs>
            <g id="Group_8038" data-name="Group 8038">
              <circle id="Circle_2670" data-name="Circle 2670" cx="18.0295" cy="18.0295" r="6" fill="${"magenta"}"/>
            </g>
          </svg>
          `)}`;

const Emblem = L.icon({
	iconUrl: schema,
	iconSize: [40, 40],
	iconAnchor: [12, 12],
	popupAnchor: [0, 0],
})

export default Emblem