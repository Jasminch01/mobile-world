import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const PhonesDetailsCard = ({ phone }) => {
  const {id, image, phone_name, price, brand_name } = phone;

  const favouriteHandler = ()=>{
    const favouriteList = [];
    const favouriteItmes = JSON.parse(localStorage.getItem('favourite'));
    if (!favouriteItmes) {
        favouriteList.push(phone)
        localStorage.setItem('favourite', JSON.stringify(favouriteList))
        alert('success')

    }else{
        const isExixst = favouriteItmes.find(item => item.id == id);
        if(!isExixst){
            favouriteList.push(...favouriteItmes, phone);
            localStorage.setItem('favourite', JSON.stringify(favouriteList));
            alert('success')
        }else{
            alert('error already exixt ')
        }
    }
    console.log('added to favourite')
  }

  return (
    <div>
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
            <Link>
              <button onClick={()=>favouriteHandler()} className="p-3 mt-3 bg-violet-300 w-full rounded-lg">
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

PhonesDetailsCard.propTypes = {
  phone: PropTypes.object.isRequired,
};

export default PhonesDetailsCard;
