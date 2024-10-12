// import React, { useState } from "react";
// import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

// const BarChartStats = () => {
//   const [selectedMonth, setSelectedMonth] = useState("June");

//   const data = [
//     { range: "0-100", value: 5 },
//     { range: "101-200", value: 10 },
//     { range: "201-300", value: 20 },
//     { range: "301-400", value: 15 },
//     { range: "401-500", value: 60 },
//     { range: "501-600", value: 30 },
//     { range: "601-700", value: 40 },
//     { range: "701-800", value: 80 },
//     { range: "801-900", value: 15 },
//     { range: "901-above", value: 30 },
//   ];

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-blue-50">
//       <div className="text-center">
//         <h2 className="text-2xl font-bold mb-4">
//           Bar Chart Stats - {selectedMonth}
//           <span className="text-sm font-normal"> (Selected month name from dropdown)</span>
//         </h2>
//         <div className="bg-white p-6 rounded-lg shadow-md">
//           <ResponsiveContainer width="100%" height={300}>
//             <BarChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 30 }}>
//               <CartesianGrid strokeDasharray="3 3" />
//               <XAxis dataKey="range" />
//               <YAxis />
//               <Tooltip />
//               <Bar dataKey="value" fill="#00c8ff" />
//             </BarChart>
//           </ResponsiveContainer>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BarChartStats;


import React, { useState, useEffect } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import axios from "axios"; // Make sure axios is installed

const BarChartStats = () => {
  const [selectedMonth, setSelectedMonth] = useState("6"); // Start with June
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch data whenever selectedMonth changes
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); // Start loading
      setError(null); // Reset error state
      try {
        const response = await axios.get(`/api/products/bar-chart?month=${selectedMonth}`);
        setData(response.data);
      } catch (error) {
        console.error("Error fetching bar chart data:", error);
        setError("Failed to fetch data");
      } finally {
        setLoading(false); // Stop loading
      }
    };

    fetchData();
  }, [selectedMonth]);

  return (
    <div className="flex justify-center items-center min-h-screen bg-blue-50">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">
          Bar Chart Stats - {selectedMonth}
          <span className="text-sm font-normal"> (Selected month name from dropdown)</span>
        </h2>
        
        {/* Month Selection Dropdown */}
        <select
          className="mt-4 p-2 border rounded"
          value={selectedMonth}
          onChange={(e) => setSelectedMonth(e.target.value)}
        >
          {/* Month options */}
          {Array.from({ length: 12 }, (_, i) => (
            <option key={i} value={i + 1}>
              {new Date(0, i).toLocaleString("default", { month: "long" })}
            </option>
          ))}
        </select>
        
        <div className="bg-white p-6 rounded-lg shadow-md mt-4">
          {loading ? ( // Loading State
            <p>Loading...</p>
          ) : error ? ( // Error Handling
            <p className="text-red-500">{error}</p>
          ) : (
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 30 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="range" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#00c8ff" />
              </BarChart>
            </ResponsiveContainer>
          )}
        </div>
      </div>
    </div>
  );
};

export default BarChartStats;
