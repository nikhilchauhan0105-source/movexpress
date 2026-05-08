import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../utills/firebase";
import { X } from "lucide-react";
import { useContext } from "react";
import { informationContext } from "../context/context";
import { useNavigate } from "react-router";

const ShowData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const { setFormSteps, } = useContext(informationContext);
 const [edits, setEdits] = useState({});



  const navigate = useNavigate();

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
      console.log(dataArr);
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    const userRef = doc(db, "User", id);
    try {
      await deleteDoc(userRef);
      alert("data delete");
      fetchData();
    } catch (arr) {
      alert("something went wrong");
    }
  };

  const handleUpdate = async (id) => {
   if(!edits[id]) {
    alert("no changes made");
    return
   }
   try {
      const userUpdateRef = doc(db, "User", id);
      await updateDoc(userUpdateRef, edits[id]);
      fetchData();
      alert("data updated");
      setEdits((prev)=>({...prev ,[id]:{}}))
    } catch (error) {
      console.log(error);
      alert("cant update data");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);


  return (
    <section className="bg-gray-700 pt-3 h-screen">
      {loading ? (
        <p>Loading...</p>
      ) : !data ? (
        <p>No data found</p>
      ) : (
        <div className=" relative  p-4">
          <button
            onClick={() => {
              setFormSteps("/");
              navigate("/");
            }}
            className="absolute top-5 right-5 p-1 rounded-sm text-white hover:bg-red-500 "
          >
            <X size={18} />
          </button>
          <div className=" h-[640px]  custom-scrollbar rounded-lg  overflow-y-auto">
            <table className="w-full  text-left border-collapse  ">
              <thead>
                <tr className="bg-gray-800 text-white text-sm">
                  <th className="py-3 px-4">Pickup address</th>
                  <th className="py-3 px-4">Destination address</th>
                  <th className="py-3 px-4">Van selected</th>
                  <th className="py-3 px-4">Loading time</th>
                  <th className="py-3 px-4">Start time</th>
                  <th className="py-3 px-4">Start date</th>
                  <th className="py-3 px-4 text-center">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-gray-100">
                {data.map((obj, index) => (
                  <tr
                    key={index}
                    className="border-b hover:bg-gray-200 transition"
                  >
                    <td className="py-3 px-4">
                      <input
                        className="p-1"
                        type="text"
                        value={
                          edits[obj.id]?.pickupaddress ??
                          obj.pickupaddress ??
                          ""
                        }
                        onChange={(e) =>
                          setEdits({
                            ...edits,
                            [obj.id]: {
                              ...edits[obj.id],
                              pickupaddress: e.target.value,
                            },
                          })
                        }
                      />
                    </td>
                    <td className="py-3 px-4">
                      <input
                        className="p-1"
                        type="text"
                        value={
                          edits[obj.id]?.destinationaddress ??
                          obj.destinationaddress ??
                          ""
                        }
                        onChange={(e) =>
                          setEdits({
                            ...edits,
                            [obj.id]: {
                              ...edits[obj.id],
                              destinationaddress: e.target.value,
                            },
                          })
                        }
                      />{" "}
                    </td>
                    <td className="py-3 px-4">
                      <input
                        className="p-1"
                        type="text"
                        value={edits[obj.id]?.vantype ?? obj.vantype ?? ""}
                        onChange={(e) =>
                          setEdits({
                            ...edits,
                            [obj.id]: {
                              ...edits[obj.id],
                              vantype: e.target.value,
                            },
                          })
                        }
                      />{" "}
                    </td>
                    <td className="py-3 px-4">
                      <input
                        className="p-1"
                        type="text"
                        value={
                          edits[obj.id]?.loadingtime ?? obj.loadingtime ?? ""
                        }
                        onChange={(e) =>
                          setEdits({
                            ...edits,
                            [obj.id]: {
                              ...edits[obj.id],
                              loadingtime: e.target.value,
                            },
                          })
                        }
                      />
                    </td>
                    <td className="py-3 px-4">
                      <input
                        className="p-1"
                        type="text"
                        value={edits[obj.id]?.startime ?? obj.startime ?? ""}
                        onChange={(e) =>
                          setEdits({
                            ...edits,
                            [obj.id]: {
                              ...edits[obj.id],
                              startime: e.target.value,
                            },
                          })
                        }
                      />{" "}
                    </td>
                    <td className="py-3 px-4">
                      <input
                        className="p-1"
                        type="text"
                        value={edits[obj.id]?.startdate ?? obj.startdate ?? ""}
                        onChange={(e) =>
                          setEdits({
                            ...edits,
                            [obj.id]: {
                              ...edits[obj.id],
                              startdate: e.target.value,
                            },
                          })
                        }
                      />
                    </td>
                    <td className="py-3 px-4 flex justify-center gap-2">
                      <button
                        onClick={() => handleUpdate(obj.id)}
                        className="bg-green-600 hover:bg-green-700 cursor-pointer text-white px-3 py-1 text-sm rounded-md"
                      >
                        Update
                      </button>
                      <button
                        onClick={() => handleDelete(obj.id)}
                        className="bg-red-600 hover:bg-red-700 cursor-pointer text-white px-3 py-1 text-sm rounded-md"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </section>
  );
};

export default ShowData;
