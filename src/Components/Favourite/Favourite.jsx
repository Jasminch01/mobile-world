import { useEffect, useState } from "react";
import FavouriteCard from "../FavouriteCard/FavouriteCard";

const Favourite = () => {
  const [favouriteItems, setFavouriteItems] = useState([]);
  const [noDataFound, setNoDataFound] = useState("");
  const [isShowAll, setIsShowAll] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const favourites = JSON.parse(localStorage.getItem("favourite"));
    if (favourites) {
      setFavouriteItems(favourites);
      // const total = favoriteItems.reduce (preValue, currentItem) => preValue + currentItem.price,  0
      const total = favourites.reduce(
        (priviousVlue, current) => priviousVlue + current.price,
        0
      );
      setTotalPrice(total.toFixed(2));
      console.log(total);
    } else {
      setNoDataFound("No data found");
    }
  }, []);

  const removeAllHandle = ()=> {
    localStorage.clear();
    setFavouriteItems([]);
    setNoDataFound('No data found')
  }

  return (
    <div className="w-[80%] mx-auto my-10">
      {noDataFound ? (
        <p className="flex items-center justify-center h-screen">
          {noDataFound}
        </p>
      ) : (
        <div>
          <div className="p-5 bg-slate-300  mb-10">
            <div className="flex justify-center items-center">
              <p className="font-semibold">Total Price : $ {totalPrice}</p>
            </div>
            <div className="flex justify-center items-center mt-5">
              <button onClick={()=>removeAllHandle()} className="p-3 bg-red-400 text-white rounded-lg">Delete All</button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {isShowAll
              ? favouriteItems.map((phone) => (
                  <FavouriteCard key={phone.id} phone={phone}></FavouriteCard>
                ))
              : favouriteItems
                  .slice(0, 2)
                  .map((phone) => (
                    <FavouriteCard key={phone.id} phone={phone}></FavouriteCard>
                  ))}
          </div>
          {favouriteItems.length > 2 && (
            <div className="flex justify-center items-center my-10">
              <button
                className={
                  !isShowAll
                    ? "bg-green-400 p-3 rounded-lg"
                    : "bg-violet-400 p-3 rounded-lg"
                }
                onClick={() => setIsShowAll(!isShowAll)}
              >
                {!isShowAll ? "ShowAll" : "Show less"}
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Favourite;
