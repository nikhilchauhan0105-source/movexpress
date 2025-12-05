import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../utills/firebase";

const ShowData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const collectionRef = collection(db, "User");
      const UserData = await getDocs(collectionRef);
      const dataArr = UserData.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setData(dataArr);
    } catch (error) {
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // safe first document

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : !data ? (
        <p>No data found</p>
      ) : (
        <div className="bg-gray-500 rounded-2xl p-6 max-w-[1440px]  w-full m-auto  flex flex-col gap-5 text-white  text-2xl">
          <div className="flex justify-around  ">
            <p>Loading time</p>
            <p>Pickup Address</p>
            <p>Start Date</p>
            <p>Start Time</p>
            <p>Van </p>
          </div>
          {data.map((obj, index) => (
            <div className="flex justify-around" key={index}>
              <p className="w-[250px]"> {obj.loadingtime ?? "---"}</p>
              <p className="w-[250px]">  {obj.pickupaddress ?? "---"}</p>
              <p className="w-[250px]">  {obj.startdate ?? "---"}</p>
              <p className="w-[250px]">  {obj.startime ?? "---"}</p>
              <p className="w-[250px]">  {obj.vantype ?? "---"}</p>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default ShowData;
