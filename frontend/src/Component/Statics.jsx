// import React, { useState } from "react";

// const Statistics = () => {
//   const [selectedMonth, setSelectedMonth] = useState("June");

//   const data = {
//     totalSale: 100000,
//     totalSoldItem: 55,
//     totalNotSoldItem: 15,
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-blue-50">
//       <div className="text-center">
//         <h2 className="text-2xl font-bold mb-4">
//           Statistics - {selectedMonth}
//           <span className="text-sm font-normal"> (Selected month name from dropdown)</span>
//         </h2>
//         <div className="bg-yellow-200 rounded-lg p-6 shadow-md">
//           <div className="text-lg font-medium flex justify-between mb-2">
//             <span>Total sale</span>
//             <span>{data.totalSale}</span>
//           </div>
//           <div className="text-lg font-medium flex justify-between mb-2">
//             <span>Total sold item</span>
//             <span>{data.totalSoldItem}</span>
//           </div>
//           <div className="text-lg font-medium flex justify-between">
//             <span>Total not sold item</span>
//             <span>{data.totalNotSoldItem}</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Statistics;











import React, { useEffect, useState } from "react";
import axios from "axios"; // Import axios to make API calls

const Statistics = () => {
  const [selectedMonth, setSelectedMonth] = useState("June");
  const [data, setData] = useState({
    totalSale: 0,
    totalSoldItem: 0,
    totalNotSoldItem: 0,
  });
  const [loading, setLoading] = useState(true); // Loading state

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const fetchStatistics = async (month) => {
    setLoading(true);
    try {
      const response = await axios.get(`/api/products/statistics`, {
        params: { month },
      });
      setData(response.data); // Set the fetched data
    } catch (error) {
      console.error("Error fetching statistics:", error);
      // You may want to set error state here to show an error message
    } finally {
      setLoading(false);
    }
  };

  // Fetch data whenever selectedMonth changes
  useEffect(() => {
    fetchStatistics(selectedMonth);
  }, [selectedMonth]);

  return (
    <div className="flex justify-center items-center min-h-screen bg-blue-50">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">
          Statistics - {selectedMonth}
          <span className="text-sm font-normal">
            {" "}
            (Selected month name from dropdown)
          </span>
        </h2>
        
        {/* Month selection dropdown */}
        <select
          value={selectedMonth}
          onChange={(e) => setSelectedMonth(e.target.value)}
          className="mb-4 border border-gray-300 rounded-lg p-2"
        >
          {months.map((month) => (
            <option key={month} value={month}>
              {month}
            </option>
          ))}
        </select>

        {/* Loading state */}
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="bg-yellow-200 rounded-lg p-6 shadow-md">
            <div className="text-lg font-medium flex justify-between mb-2">
              <span>Total sale</span>
              <span>{data.totalSale}</span>
            </div>
            <div className="text-lg font-medium flex justify-between mb-2">
              <span>Total sold item</span>
              <span>{data.totalSoldItem}</span>
            </div>
            <div className="text-lg font-medium flex justify-between">
              <span>Total not sold item</span>
              <span>{data.totalNotSoldItem}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Statistics;
