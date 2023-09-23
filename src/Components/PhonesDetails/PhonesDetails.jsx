import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import PhonesDetailsCard from "../PhonesDetailsCard/PhonesDetailsCard";

const PhonesDetails = () => {

  const [phone, setPhone] = useState({});
  const { id } = useParams();

  const phones = useLoaderData();

  useEffect(() => {

    const phoneDetails = phones.find((phone) => phone.id === id);
    setPhone(phoneDetails);
    
  }, [id, phones]);

  return (
    <div className="w-[80%] mx-auto h-screen flex items-center justify-center">
        <PhonesDetailsCard phone = {phone}></PhonesDetailsCard>
    </div>
  );
};

export default PhonesDetails;
