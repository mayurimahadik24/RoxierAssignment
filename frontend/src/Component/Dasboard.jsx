


// import React, { useEffect, useState } from 'react';
// import axios from 'axios'; // For making API calls

// const TransactionDashboard = () => {
//   const [transactions, setTransactions] = useState([]);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [selectedMonth, setSelectedMonth] = useState('March');
//   const months = [
//     'January', 'February', 'March', 'April', 'May', 'June',
//     'July', 'August', 'September', 'October', 'November', 'December'
//   ];

//   // Fetch transactions from the backend API
//   useEffect(() => {
//     const fetchTransactions = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/api/products');
//         setTransactions(response.data);
//       } catch (err) {
//         console.error("Error fetching transactions:", err);
//       }
//     };
    
//     fetchTransactions();
//   }, []);

//   // Filter transactions based on search query
//   const filteredTransactions = transactions.filter((transaction) => {
//     return (
//       transaction.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       transaction.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       transaction.price.toString().includes(searchQuery)
//     );
//   });

//   return (
//     <div className="p-8 bg-gradient-to-r from-blue-200 to-blue-50 min-h-screen">
//       <h1 className="text-3xl font-bold text-center mb-8 text-blue-600">Transaction Dashboard</h1>

//       <div className="mb-6 flex justify-between items-center">
//         <input
//           type="text"
//           placeholder="Search transaction..."
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//           className="border border-gray-300 rounded-lg p-3 w-1/2 shadow-md focus:outline-none focus:ring focus:border-blue-400"
//         />
//         <select
//           value={selectedMonth}
//           onChange={(e) => setSelectedMonth(e.target.value)}
//           className="border border-gray-300 rounded-lg p-3 shadow-md focus:outline-none focus:ring focus:border-blue-400"
//         >
//           {months.map((month) => (
//             <option key={month} value={month}>{month}</option>
//           ))}
//         </select>
//       </div>

//       <div className="overflow-x-auto">
//         <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
//           <thead>
//             <tr className="bg-gradient-to-r from-yellow-400 to-yellow-300 text-gray-800">
//               <th className="py-3 px-5 text-left">ID</th>
//               <th className="py-3 px-5 text-left">Title</th>
//               <th className="py-3 px-5 text-left">Description</th>
//               <th className="py-3 px-5 text-left">Price</th>
//               <th className="py-3 px-5 text-left">Category</th>
//               <th className="py-3 px-5 text-left">Sold</th>
//               <th className="py-3 px-5 text-left">Image</th>
//             </tr>
//           </thead>
//           <tbody>
//             {filteredTransactions.map((transaction) => (
//               <tr key={transaction.id} className="hover:bg-blue-100 transition duration-200 ease-in-out">
//                 <td className="py-3 px-5 border-b">{transaction.id}</td>
//                 <td className="py-3 px-5 border-b">{transaction.title}</td>
//                 <td className="py-3 px-5 border-b">{transaction.description}</td>
//                 <td className="py-3 px-5 border-b">${transaction.price}</td>
//                 <td className="py-3 px-5 border-b">{transaction.category}</td>
//                 <td className="py-3 px-5 border-b">{transaction.sold ? "Yes" : "No"}</td>
//                 <td className="py-3 px-5 border-b">
//                   <img src={transaction.image} alt={transaction.title} className="w-16 h-16 rounded-md shadow-sm" />
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       <div className="mt-6 flex justify-between items-center">
//         <span className="text-gray-600">Page No: 1</span>
//         <div>
//           <button className="mx-2 px-4 py-2 bg-gray-300 hover:bg-gray-400 text-gray-800 rounded-lg shadow-md transition duration-200">Previous</button>
//           <button className="mx-2 px-4 py-2 bg-gray-300 hover:bg-gray-400 text-gray-800 rounded-lg shadow-md transition duration-200">Next</button>
//         </div>
//         <span className="text-gray-600">Per Page: 10</span>
//       </div>
//     </div>
//   );
// };

// export default TransactionDashboard;





// import React, { useEffect, useState } from 'react';
// import axios from 'axios'; // For making API calls

// const TransactionDashboard = () => {
//   const [transactions, setTransactions] = useState([]);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [selectedMonth, setSelectedMonth] = useState('March'); // Default month
//   const [page, setPage] = useState(1);
//   const [perPage, setPerPage] = useState(10);
//   const [totalProducts, setTotalProducts] = useState(0);

//   const months = [
//     'January', 'February', 'March', 'April', 'May', 'June',
//     'July', 'August', 'September', 'October', 'November', 'December'
//   ];

//   // Get the numeric value of the selected month (e.g., March = 3)
//   const monthIndex = months.indexOf(selectedMonth) + 1;

//   // Fetch transactions from the backend API
//   useEffect(() => {
//     const fetchTransactions = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/api/products', {
//           params: {
//             page,
//             perPage,
//             search: searchQuery,
//             month: monthIndex,  // Pass the selected month as a numeric value (1-12)
//           },
//         });
//         setTransactions(response.data.products);
//         setTotalProducts(response.data.totalProducts);
//       } catch (err) {
//         console.error('Error fetching transactions:', err);
//       }
//     };

//     fetchTransactions();
//   }, [page, perPage, searchQuery, monthIndex]);

//   // Handle previous/next page functionality
//   const handleNextPage = () => {
//     if (page * perPage < totalProducts) {
//       setPage(page + 1);
//     }
//   };

//   const handlePrevPage = () => {
//     if (page > 1) {
//       setPage(page - 1);
//     }
//   };

//   return (
//     <div className="p-8 bg-gradient-to-r from-blue-200 to-blue-50 min-h-screen">
//       <h1 className="text-3xl font-bold text-center mb-8 text-blue-600">Transaction Dashboard</h1>

//       <div className="mb-6 flex justify-between items-center">
//         <input
//           type="text"
//           placeholder="Search transaction..."
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//           className="border border-gray-300 rounded-lg p-3 w-1/2 shadow-md focus:outline-none focus:ring focus:border-blue-400"
//         />
//         <select
//           value={selectedMonth}
//           onChange={(e) => setSelectedMonth(e.target.value)}
//           className="border border-gray-300 rounded-lg p-3 shadow-md focus:outline-none focus:ring focus:border-blue-400"
//         >
//           {months.map((month) => (
//             <option key={month} value={month}>{month}</option>
//           ))}
//         </select>
//       </div>

//       <div className="overflow-x-auto">
//         <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
//           <thead>
//             <tr className="bg-gradient-to-r from-yellow-400 to-yellow-300 text-gray-800">
//               <th className="py-3 px-5 text-left">ID</th>
//               <th className="py-3 px-5 text-left">Title</th>
//               <th className="py-3 px-5 text-left">Description</th>
//               <th className="py-3 px-5 text-left">Price</th>
//               <th className="py-3 px-5 text-left">Category</th>
//               <th className="py-3 px-5 text-left">Sold</th>
//               <th className="py-3 px-5 text-left">Image</th>
//             </tr>
//           </thead>
//           <tbody>
//             {transactions.map((transaction) => (
//               <tr key={transaction.id} className="hover:bg-blue-100 transition duration-200 ease-in-out">
//                 <td className="py-3 px-5 border-b">{transaction.id}</td>
//                 <td className="py-3 px-5 border-b">{transaction.title}</td>
//                 <td className="py-3 px-5 border-b">{transaction.description}</td>
//                 <td className="py-3 px-5 border-b">${transaction.price}</td>
//                 <td className="py-3 px-5 border-b">{transaction.category}</td>
//                 <td className="py-3 px-5 border-b">{transaction.sold ? "Yes" : "No"}</td>
//                 <td className="py-3 px-5 border-b">
//                   <img src={transaction.image} alt={transaction.title} className="w-16 h-16 rounded-md shadow-sm" />
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       <div className="mt-6 flex justify-between items-center">
//         <span className="text-gray-600">Page No: {page}</span>
//         <div>
//           <button
//             onClick={handlePrevPage}
//             className={`mx-2 px-4 py-2 bg-gray-300 hover:bg-gray-400 text-gray-800 rounded-lg shadow-md transition duration-200 ${page === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
//           >
//             Previous
//           </button>
//           <button
//             onClick={handleNextPage}
//             className={`mx-2 px-4 py-2 bg-gray-300 hover:bg-gray-400 text-gray-800 rounded-lg shadow-md transition duration-200 ${page * perPage >= totalProducts ? 'opacity-50 cursor-not-allowed' : ''}`}
//           >
//             Next
//           </button>
//         </div>
//         <span className="text-gray-600">Per Page: {perPage}</span>
//       </div>
//     </div>
//   );
// };

// export default TransactionDashboard;


import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TransactionDashboard = () => {
  const [transactions, setTransactions] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMonth, setSelectedMonth] = useState('March');
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const [totalProducts, setTotalProducts] = useState(0);

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const monthIndex = months.indexOf(selectedMonth) + 1;

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        console.log('Fetching data with:', { page, perPage, searchQuery, monthIndex });
        const response = await axios.get('http://localhost:5000/api/products', {
          params: {
            page,
            perPage,
            search: searchQuery,
            month: monthIndex,
          },
        });
        console.log('API Response:', response.data);
        setTransactions(response.data.products);
        setTotalProducts(response.data.totalProducts);
      } catch (err) {
        console.error('Error fetching transactions:', err);
      }
    };

    fetchTransactions();
  }, [page, perPage, searchQuery, monthIndex]);

  const handleNextPage = () => {
    if (page * perPage < totalProducts) {
      setPage(page + 1);
    }
  };

  const handlePrevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  return (
    <div className="p-8 bg-gradient-to-r from-blue-200 to-blue-50 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8 text-blue-600">Transaction Dashboard</h1>

      <div className="mb-6 flex justify-between items-center">
        <input
          type="text"
          placeholder="Search transaction..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="border border-gray-300 rounded-lg p-3 w-1/2 shadow-md focus:outline-none focus:ring focus:border-blue-400"
        />
        <select
          value={selectedMonth}
          onChange={(e) => setSelectedMonth(e.target.value)}
          className="border border-gray-300 rounded-lg p-3 shadow-md focus:outline-none focus:ring focus:border-blue-400"
        >
          {months.map((month) => (
            <option key={month} value={month}>{month}</option>
          ))}
        </select>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-gradient-to-r from-yellow-400 to-yellow-300 text-gray-800">
              <th className="py-3 px-5 text-left">ID</th>
              <th className="py-3 px-5 text-left">Title</th>
              <th className="py-3 px-5 text-left">Description</th>
              <th className="py-3 px-5 text-left">Price</th>
              <th className="py-3 px-5 text-left">Category</th>
              <th className="py-3 px-5 text-left">Sold</th>
              <th className="py-3 px-5 text-left">Image</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction._id} className="hover:bg-blue-100 transition duration-200 ease-in-out">
                <td className="py-3 px-5 border-b">{transaction._id}</td>
                <td className="py-3 px-5 border-b">{transaction.title}</td>
                <td className="py-3 px-5 border-b">{transaction.description}</td>
                <td className="py-3 px-5 border-b">${transaction.price}</td>
                <td className="py-3 px-5 border-b">{transaction.category}</td>
                <td className="py-3 px-5 border-b">{transaction.sold ? "Yes" : "No"}</td>
                <td className="py-3 px-5 border-b">
                  <img src={transaction.image} alt={transaction.title} className="w-16 h-16 rounded-md shadow-sm" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 flex justify-between items-center">
        <span className="text-gray-600">Page No: {page}</span>
        <div>
          <button
            onClick={handlePrevPage}
            className={`mx-2 px-4 py-2 bg-gray-300 hover:bg-gray-400 text-gray-800 rounded-lg shadow-md transition duration-200 ${page === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            Previous
          </button>
          <button
            onClick={handleNextPage}
            className={`mx-2 px-4 py-2 bg-gray-300 hover:bg-gray-400 text-gray-800 rounded-lg shadow-md transition duration-200 ${page * perPage >= totalProducts ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            Next
          </button>
        </div>
        <span className="text-gray-600">Per Page: {perPage}</span>
      </div>
    </div>
  );
};

export default TransactionDashboard;
