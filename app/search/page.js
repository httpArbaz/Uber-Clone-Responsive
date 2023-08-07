import Link from "next/link";

const Search = () => {
  return (
    <>
      {/* WRAPPER */}
      <div className="bg-gray-200 h-screen">
        {/* BACK BUTTON CONTAINER */}
        <Link href={"/"}>
          <div className="bg-white px-4">
            <img
              className="h-12"
              src="https://img.icons8.com/ios-filled/50/000000/left.png"
            />
          </div>
        </Link>
        {/* INPUT CONTAINER */}
        <div className="bg-white flex items-center px-4 mb-2 pb-4">
          {/* FROM CONTAINER */}
          <div className="w-10 flex flex-col mr-2  items-center">
            <img
              className="h-2.5"
              src="https://img.icons8.com/ios/50/9CA3AF/filled-circle.png"
            />
            <img
              className="h-10"
              src="https://img.icons8.com/ios/50/9CA3AF/vertical-line.png"
            />
            <img
              className="h-3"
              src="https://img.icons8.com/ios/50/9CA3AF/square.png"
            />
          </div>
          {/* INPUT BOXES */}
          <div className="flex flex-col flex-1">
            <input
              className="h-10 bg-gray-200 my-2 rounded-2 p-2 outline-none order-none "
              placeholder="Enter pickup location"
              type="text"
            />
            <input
              className="h-10 bg-gray-200 my-2 rounded-2 p-2 outline-none order-none "
              placeholder="Where to?"
              type="text"
            />
          </div>
          <img
            src="https://img.icons8.com/ios/50/000000/plus-math.png"
            className="h-10 w-10 bg-gray-200 rounded-full ml-3"
          />
        </div>
        {/* SAVED PLACES */}
        <div className="flex items-center bg-white px-4 py-2">
          <img
            className="bg-gray-400 h-10 w-10 p-2 rounded-full mr-2"
            src="https://img.icons8.com/ios-filled/50/ffffff/star--v1.png"
          />
          Saved Places
        </div>
        {/* CONFIRM BUTTON */}
        <Link
          href={{
            pathname: "/confirm",
            query: {
              pickup: "pakistan",
              dropoff: "china",
            },
          }}
        >
          <div className="bg-black text-white flex items-center justify-center mx-2.5 my-4 p-3 text-xl cursor-pointer">
            Confirm Locations
          </div>
        </Link>
      </div>
    </>
  );
};

export default Search;
