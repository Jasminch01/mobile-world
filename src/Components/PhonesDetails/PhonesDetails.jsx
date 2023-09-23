import { Link, useLoaderData, useParams } from "react-router-dom";

const PhonesDetails = () => {
  const { id } = useParams();
  const phones = useLoaderData();
  const phoneDetails = phones.find((phone) => phone.id === id);
  console.log(phoneDetails);
  const { image, phone_name, price, brand_name } = phoneDetails;

  const addfavouriteHandler = ()=> {

  }

  return (
    <div className="w-[80%] mx-auto h-screen flex items-center justify-center">
      <div className="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div className="relative mx-4 mt-4 h-96 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
          <img src={image} className="h-full w-full object-cover" />
        </div>
        <div className="p-6">
          <div className="mb-2">
            <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
              {phone_name}
            </p>
            <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
              Price : $ {price}
            </p>
            <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
              Brand : {brand_name}
            </p>
            <p className="block font-sans text-base  leading-relaxed text-blue-gray-900 antialiased">
              Description : Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Placeat, accusantium! Perspiciatis itaque, blanditiis non
              suscipit laborum quidem eaque minus similique, exercitationem ea
              in labore ipsam fugiat architecto ducimus asperiores eum.
            </p>
            <Link >
              <button onClick={() =>addfavouriteHandler ()} className="p-3 mt-3 bg-violet-300 w-full rounded-lg">
                Add to favourite
              </button>
            </Link>
            <Link to="/">
              <button className="p-3 mt-3 bg-green-300 w-full rounded-lg">
                Back to Home
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhonesDetails;
