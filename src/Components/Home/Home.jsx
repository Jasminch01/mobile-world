import { useLoaderData } from "react-router-dom";
import Phone from "../Phone/Phone";

const Home = () => {
  const phones = useLoaderData();
  return (
    <div className="w-[80%] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10">
        {phones.map((phone) => (
          <Phone key={phone.id} phone={phone}></Phone>
        ))}
      </div>
    </div>
  );
};

export default Home;
