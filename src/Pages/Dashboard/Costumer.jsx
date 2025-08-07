import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Costumer() {
  const [getuser, setgetuser] = useState([]);

  useEffect(() => {
    axios.get("https://freshcart-backend-am1p.onrender.com/allusers")
      .then((res) => {
        if (res.data.status) {
          setgetuser(res.data.ouruser);
        }
      })
      .catch((err) => {
        console.log("API error:", err);
      });
  }, []);

  return (
    <div className="p-5">
      <h1 className="text-xl font-bold mb-4">Customer Data</h1>

      {getuser.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 text-left">
            <thead className="bg-green-500 text-white">
              <tr>
                <th className="py-2 px-4 border-b">#</th>
                <th className="py-2 px-4 border-b">Name</th>
                <th className="py-2 px-4 border-b">Email</th>
                <th className="py-2 px-4 border-b">Password</th>
              </tr>
            </thead>
            <tbody>
              {getuser.map((data, index) => (
                <tr key={data._id} className="hover:bg-gray-100">
                  <td className="py-2 px-4 border-b">{index + 1}</td>
                  <td className="py-2 px-4 border-b">{data.name}</td>
                  <td className="py-2 px-4 border-b">{data.email}</td>
                  <td className="py-2 px-4 border-b">{data.password}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-gray-500">No customer data found or still loading...</p>
      )}
    </div>
  );
}

export default Costumer;
