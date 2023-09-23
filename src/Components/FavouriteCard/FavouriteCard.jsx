import PropTypes from "prop-types";

// const FavouriteCard = ({ phone }) => {
//   const { image, phone_name, brand_name } = phone;
//   return (
//     <div className="">
//       <div className="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
//         <div className="relative mx-4 mt-4 h-96 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
//           <img src={image} className="h-full w-full object-cover" />
//         </div>
//         <div className="p-6">
//           <div className="mb-2">
//             <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
//               {phone_name}
//             </p>
//             <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
//               Brand : {brand_name}
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// FavouriteCard.propTypes = {
//   phone: PropTypes.object,
// };
// export default FavouriteCard;

const FavouriteCard = ({phone}) => {
  const {image, phone_name, brand_name}= phone;
  return (
    <div>
       <div className="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div className="relative mx-4 mt-4 h-96 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
          <img
            src= {image}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="p-6">
          <div className="mb-2">
            <p className="block font-sans text-2xl font-medium leading-relaxed text-blue-gray-900 antialiased">
            {phone_name}
            </p>
            <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
            Brand : {brand_name}
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

FavouriteCard.propTypes = {
  phone: PropTypes.object,
};
export default FavouriteCard;

