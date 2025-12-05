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
  const oneData = data?.[1] ?? null; // <- this prevents "can't read" errors

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : !oneData ? (
        <p>No data found</p>
      ) : (
        <div className="bg-gray-500 rounded-2xl p-6 mt-40 max-w-[600px] w-full m-auto  flex flex-col gap-5 text-white text-center text-2xl">
          <p>Loading time : {oneData.loadingtime ?? "---"}</p>
          <p>Pickup Address : {oneData.pickupaddress ?? "---"}</p>
          <p>Start Date : {oneData.startdate ?? "---"}</p>
          <p>Start Time :  {oneData.startime ?? "---"}</p>
          <p> Van{oneData.vantype ?? "---"}</p>
        </div>
      )}
    </>
  );
};

export default ShowData;
