import Image from "next/image";
import Map from "./components/Map";
import logo from "../public/Uber-Logo.wine.png";
import profile from "../public/400edb72-0832-4dba-b2aa-5d8768972f89 (1).jpg";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* WRAPPER DIV */}
      <div className="flex flex-col h-screen">
        <Map />
        {/* ACTION HEADER DIV */}
        <div className="flex-1 p-4">
          <header className="flex justify-between items-center">
            <img
              className="h-28"
              src="https://i.ibb.co/84stgjq/uber-technologies-new-20218114.jpg"
            />
            {/* PROFILE */}
            <div className="flex items-center  ">
              <p className="mr-4 text-l">Arbaz</p>
              <Image
                className="h-14 w-14 rounded-full border border-gray-400 p-px"
                src={profile}
                width={100}
                height={100}
              />
            </div>
          </header>
          {/* ACTION BUTTONS */}
          <div className="flex">
            {/* ACTION BUTTON */}
            <Link
              href={"/search"}
              className="flex bg-gray-200 flex-1 m-1 h-32 items-center flex-col justify-center rounded-lg transform hover:scale-105 transition text-xl"
              style={{ textDecoration: "none" }}
            >
              {/* <div> */}
              <img
                // className="h-3/5"
                style={{ height: "60%" }}
                src="https://i.ibb.co/cyvcpfF/uberx.png"
              />
              Ride
              {/* </div> */}
            </Link>
            <div className="flex bg-gray-200 flex-1 m-1 mx-5 h-32 items-center flex-col justify-center rounded-lg transform hover:scale-105 transition text-xl">
              <img className="h-3/5" src="https://i.ibb.co/n776JLm/bike.png" />
              <Link href={"/search"} style={{ textDecoration: "none" }}>
                Wheels
              </Link>
            </div>

            <div className="flex bg-gray-200 flex-1 m-1 h-32 items-center flex-col justify-center rounded-lg transform hover:scale-105 transition text-xl">
              <img
                className="h-3/5"
                src="https://i.ibb.co/5RjchBg/uberschedule.png"
              />
              <Link href={"/search"} style={{ textDecoration: "none" }}>
                Reverse
              </Link>
            </div>
          </div>

          {/* INPUT */}
          <div className="h-20 bg-gray-200 text-2xl p-4 flex items-center mt-8 ">
            Where to?
          </div>
        </div>
      </div>
    </>
  );
}
