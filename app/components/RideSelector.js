"use client";
import React from "react";
import { useEffect, useState } from "react";
import { carList } from "./data/carList";

const RideSelector = (props) => {
  const [rideDuration, setRideDuration] = useState(0);

  useEffect(() => {
    const pickupCoord = props.pickupCoordinate;
    const dropoffCoord = props.dropoffCoordinate;

    if (pickupCoord && dropoffCoord) {
      rideDurationf(props);
    }
  }, [props]);

  const rideDurationf = (props) => {
    fetch(
      `https://api.mapbox.com/directions/v5/mapbox/driving/${props.pickupCoordinate[0]},${props.pickupCoordinate[1]};${props.dropoffCoordinate[0]},${props.dropoffCoordinate[1]}?` +
        new URLSearchParams({
          access_token: "YOUR_ACCESS_TOKEN",
        })
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.routes[0]) {
          setRideDuration(data.routes[0].duration / 100);
        }
      });
  };

  return (
    <div className="flex-1 overflow-y-scroll flex flex-col">
      <div className="text-center text-sm text-gray-500 border-b py-2">
        Choose a ride, or swipe up for more
      </div>
      <div className="border-b overflow-y-scroll">
        {carList.map((car) => (
          <div className="flex items-center" key={car.service}>
            <div className="h-20 px-4">
              <img
                width={100}
                height={100}
                src={car.imgUrl}
                alt={car.service}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "fallback-image-url"; // Replace with a fallback image URL or remove to handle errors silently
                }}
              />
            </div>
            <div className="flex-1 px-8">
              <div className="font-semibold ">{car.service}</div>
              <div className="text-blue-500 text-xs">5 min away</div>
            </div>
            <div className="px-4 text-sm">
              {rideDuration && car.multiplier
                ? "$" + (rideDuration * car.multiplier).toFixed(2)
                : "Calculating..."}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RideSelector;
