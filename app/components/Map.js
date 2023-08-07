"use client";
import mapboxgl from "!mapbox-gl";
import { useEffect } from "react";

mapboxgl.accessToken =
  "pk.eyJ1IjoiaHR0cGFyYmF6IiwiYSI6ImNsa3d2dTQxdDA0OGszc3NpYmhxc2c0OTUifQ.0tVpdv0SQw52Fn2u-HpYKw";

export default function Map(props) {
  console.log(props);

  useEffect(() => {
    const pickupCoord = props.pickupCoordinate;
    const dropoffCoord = props.dropoffCoordinate;

    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [-96, 37.8],
      zoom: 3,
    });

    if (pickupCoord && dropoffCoord) {
      addToMap(map, pickupCoord, dropoffCoord);
    }
  });

  const addToMap = (map, pickupCoord, dropoffCoord) => {
    // Create a default Marker and add it to the map.
    const marker1 = new mapboxgl.Marker().setLngLat(pickupCoord).addTo(map);

    // Create a default Marker and add it to the map.
    const marker2 = new mapboxgl.Marker().setLngLat(dropoffCoord).addTo(map);

    // Add padding to the map to visualize correctly the markers
    map.fitBounds([pickupCoord, dropoffCoord], { padding: 100 });
  };

  return (
    <>
      <div id="map" className=" bg-blue-200 flex-1"></div>
    </>
  );
}
