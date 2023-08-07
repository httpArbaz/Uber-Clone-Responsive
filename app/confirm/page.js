"use client";
import react from "react";
import Map from "../components/Map";
import { useRouter } from "next/navigation";
import Link from "next/link";
import RideSelector from "../components/RideSelector";

const Confirm = () => {
  const router = useRouter();
  const { pickup, dropoff } = router;

  const [pickupCoordinates, setpickupCoordinates] = react.useState();
  const [dropOffCoordinates, setdropOffCoordinates] = react.useState();

  const getPickupCoordinates = (pickup) => {
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?` +
        new URLSearchParams({
          access_token:
            "pk.eyJ1IjoiaHR0cGFyYmF6IiwiYSI6ImNsa3d2dTQxdDA0OGszc3NpYmhxc2c0OTUifQ.0tVpdv0SQw52Fn2u-HpYKw",
          limit: 1,
        })
    )
      .then((response) => response.json())
      .then((data) => {
        setpickupCoordinates(data.features[0].center);
      });
  };

  const getDropOffCoordinates = (dropoff) => {
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?` +
        new URLSearchParams({
          access_token:
            "pk.eyJ1IjoiaHR0cGFyYmF6IiwiYSI6ImNsa3d2dTQxdDA0OGszc3NpYmhxc2c0OTUifQ.0tVpdv0SQw52Fn2u-HpYKw",
          limit: 1,
        })
    )
      .then((response) => response.json())
      .then((data) => {
        setdropOffCoordinates(data.features[0].center);
      });
  };

  react.useEffect(() => {
    if (pickup && dropoff) {
      getPickupCoordinates(pickup);
      getDropOffCoordinates(dropoff);
    }
  }, [pickup, dropoff]);

  return (
    <>
      {/* WRAPPER */}
      {/* BUTTON */}
      <div className="rounded-full absolute top-4 left-4 z-10 bg-white shadow-md cursor-pointer">
        <Link href="/search">
          <img
            src="https://img.icons8.com/ios-filled/50/000000/left.png"
            alt="Back"
          />
        </Link>
      </div>
      <div className="flex  flex-col h-screen">
        <Map
          pickupCoordinate={pickupCoordinates}
          dropoffCoordinate={dropOffCoordinates}
        />
        {/* RIDE CONTAINER */}
        <div className="flex-1  h-1/2 overflow-y-scroll flex flex-col">
          <RideSelector
            pickupCoordinate={pickupCoordinates}
            dropoffCoordinate={dropOffCoordinates}
          />
          <div
            className="bg-black flex text-xl  items-center py-4 text-white mt-4 justify-center text-center m-4 transform hover:scale-105 transition cursor-pointer
"
          >
            CONFIRM
          </div>
        </div>
      </div>
    </>
  );
};

export default Confirm;
