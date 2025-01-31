// "use client"
// import { useState, useEffect, JSXElementConstructor, Key, ReactElement, ReactNode } from "react";

// // Define proper types for invoices and sales data
// type Invoice = [string, string, string, string, string, string, string];
// type SalesData = { month: string; value: number };

// // Sample function to fetch invoices or data (you can replace it with real API calls)
// const fetchInvoices = (): Invoice[] => [
//   ['1', '#068499', 'Eron Yaeger', '1x Black Backpack', '21/07/2022 08:21', 'Paid', '$101'],
//   ['2', '#068499', 'Lovi Ackerman', '1x Distro Backpack', '21/07/2022 08:21', 'Pending', '$144'],
//   ['3', '#068499', 'Rainer Brown', '1x New Backpack', '21/07/2022 08:21', 'Paid', '$121'],
//   ['4', '#068499', 'Historia Reiss', '2x Black Backpack', '21/07/2022 08:21', 'Overdue', '$300'],
// ];

// const fetchSalesData = (): SalesData[] => [
//   { month: 'Jan', value: 100 },
//   { month: 'Feb', value: 80 },
//   { month: 'Mar', value: 60 },
//   { month: 'Apr', value: 40 },
//   { month: 'May', value: 20 },
//   { month: 'Jun', value: 50 },
//   { month: 'Jul', value: 70 },
//   { month: 'Aug', value: 30 },
//   { month: 'Sep', value: 90 },
//   { month: 'Oct', value: 60 },
//   { month: 'Nov', value: 100 },
//   { month: 'Dec', value: 110 },
// ];

// export default function Dashboard() {
//   const [invoices, setInvoices] = useState<Invoice[]>([]);
//   const [salesData, setSalesData] = useState<SalesData[]>([]);
//   const [searchQuery, setSearchQuery] = useState("");

//   // Fetching invoices and sales data on component mount
//   useEffect(() => {
//     setInvoices(fetchInvoices());
//     setSalesData(fetchSalesData());
//   }, []);

//   // Filter invoices based on search query
//   const filteredInvoices = invoices.filter(
//     (invoice) =>
//       invoice[2].toLowerCase().includes(searchQuery.toLowerCase()) ||
//       invoice[5].toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   return (
//     <div className="p-6 bg-gray-50 min-h-screen">
//       {/* Top Metrics Row */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
//         {/* Customers Card */}
//         <div className="bg-white p-6 rounded-lg shadow-sm">
//           <h3 className="text-gray-500 text-sm font-medium">Customers</h3>
//           <p className="text-2xl font-bold mt-2">1.456</p>
//           <span className="text-green-500 text-sm">+4.5% Since last week</span>
//         </div>

//         {/* Revenue Card */}
//         <div className="bg-white p-6 rounded-lg shadow-sm">
//           <h3 className="text-gray-500 text-sm font-medium">Revenue</h3>
//           <p className="text-2xl font-bold mt-2">$3.345</p>
//           <span className="text-red-500 text-sm">-0.10% Since last week</span>
//         </div>

//         {/* Profit Card */}
//         <div className="bg-white p-6 rounded-lg shadow-sm">
//           <h3 className="text-gray-500 text-sm font-medium">Profit</h3>
//           <p className="text-2xl font-bold mt-2">60%</p>
//           <span className="text-red-500 text-sm">-0.2% Since last week</span>
//         </div>

//         {/* Invoices Card */}
//         <div className="bg-white p-6 rounded-lg shadow-sm">
//           <h3 className="text-gray-500 text-sm font-medium">Invoices</h3>
//           <p className="text-2xl font-bold mt-2">1.135</p>
//           <span className="text-green-500 text-sm">+1.5% Since last week</span>
//         </div>
//       </div>

//       {/* Search Bar */}
//       <div className="mb-4">
//         <input
//           type="text"
//           placeholder="Search invoices..."
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//           className="px-4 py-2 border border-gray-300 rounded-md w-full"
//         />
//       </div>

//       {/* Middle Section */}
//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
//         {/* Invoice Statistics */}
//         <div className="bg-white p-6 rounded-lg shadow-sm">
//           <h3 className="text-lg font-semibold mb-4">Invoice Statistics</h3>
//           <div className="space-y-3">
//             <div className="bg-blue-50 p-4 rounded">
//               <span className="text-gray-600">Total Paid</span>
//               <p className="text-xl font-bold">234</p>
//             </div>
//             <div className="bg-red-50 p-4 rounded">
//               <span className="text-gray-600">Total Overdue</span>
//               <p className="text-xl font-bold">514</p>
//             </div>
//             <div className="bg-yellow-50 p-4 rounded">
//               <span className="text-gray-600">Total Unpaid</span>
//               <p className="text-xl font-bold">345</p>
//             </div>
//           </div>
//         </div>

//         {/* Sales Analytics */}
//         <div className="bg-white p-6 rounded-lg shadow-sm lg:col-span-2">
//           <h3 className="text-lg font-semibold mb-4">Sales Analytics</h3>
//           <div className="h-64">
//             {/* Chart Placeholder */}
//             <div className="flex items-end justify-between h-full border-b-2 border-l-2 border-gray-200 pb-4 pl-4">
//               {salesData.map((data, index) => (
//                 <div
//                   key={index}
//                   className="w-8 bg-blue-200"
//                   style={{ height: `${data.value}px` }}
//                 />
//               ))}
//             </div>
//             <div className="flex justify-between mt-2 text-sm text-gray-500">
//               {salesData.map((data) => (
//                 <span key={data.month}>{data.month}</span>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Recent Invoices */}
//       <div className="bg-white p-6 rounded-lg shadow-sm">
//         <h3 className="text-lg font-semibold mb-4">Recent Invoices</h3>
//         <div className="overflow-x-auto">
//           <table className="w-full">
//             <thead>
//               <tr className="text-left text-gray-500 text-sm border-b">
//                 <th className="pb-3">No</th>
//                 <th className="pb-3">Id Customers</th>
//                 <th className="pb-3">Customer name</th>
//                 <th className="pb-3">Items Name</th>
//                 <th className="pb-3">Order Date</th>
//                 <th className="pb-3">Status</th>
//                 <th className="pb-3">Price</th>
//               </tr>
//             </thead>
//             <tbody>
//               {filteredInvoices.map((row: Invoice, index) => (
//                 <tr key={index} className="text-sm border-b last:border-b-0">
//                   {row.map((cell: string | number, cellIndex: number) => (
//                     <td key={cellIndex} className="py-4">
//                       {cellIndex === 5 ? (
//                         <span
//                           className={`px-2 py-1 rounded-full text-xs ${
//                             cell === 'Paid'
//                               ? 'bg-green-100 text-green-800'
//                               : cell === 'Pending'
//                               ? 'bg-yellow-100 text-yellow-800'
//                               : 'bg-red-100 text-red-800'
//                           }`}
//                         >
//                           {cell}
//                         </span>
//                       ) : (
//                         cell
//                       )}
//                     </td>
//                   ))}
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// }


"use client"
import { useState, useEffect } from "react";

// Define proper types for invoices and sales data
type Invoice = [string, string, string, string, string, string, string];
type SalesData = { month: string; value: number };

// Sample function to fetch invoices or data (you can replace it with real API calls)
const fetchInvoices = (): Invoice[] => [
  ['1', '#068499', 'Eron Yaeger', '1x Black Backpack', '21/07/2022 08:21', 'Paid', '$101'],
  ['2', '#068499', 'Lovi Ackerman', '1x Distro Backpack', '21/07/2022 08:21', 'Pending', '$144'],
  ['3', '#068499', 'Rainer Brown', '1x New Backpack', '21/07/2022 08:21', 'Paid', '$121'],
  ['4', '#068499', 'Historia Reiss', '2x Black Backpack', '21/07/2022 08:21', 'Overdue', '$300'],
];

const fetchSalesData = (): SalesData[] => [
  { month: 'Jan', value: 100 },
  { month: 'Feb', value: 80 },
  { month: 'Mar', value: 60 },
  { month: 'Apr', value: 40 },
  { month: 'May', value: 20 },
  { month: 'Jun', value: 50 },
  { month: 'Jul', value: 70 },
  { month: 'Aug', value: 30 },
  { month: 'Sep', value: 90 },
  { month: 'Oct', value: 60 },
  { month: 'Nov', value: 100 },
  { month: 'Dec', value: 110 },
];

export default function Dashboard() {
  const [invoices, setInvoices] = useState<Invoice[]>([]);
  const [salesData, setSalesData] = useState<SalesData[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  // Fetching invoices and sales data on component mount
  useEffect(() => {
    setInvoices(fetchInvoices());
    setSalesData(fetchSalesData());
  }, []);

  // Filter invoices based on search query
  const filteredInvoices = invoices.filter(
    (invoice) =>
      invoice[2].toLowerCase().includes(searchQuery.toLowerCase()) ||
      invoice[5].toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Top Metrics Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        {/* Customers Card */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-gray-500 text-sm font-medium">Customers</h3>
          <p className="text-2xl font-bold mt-2">1.456</p>
          <span className="text-green-500 text-sm">+4.5% Since last week</span>
        </div>

        {/* Revenue Card */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-gray-500 text-sm font-medium">Revenue</h3>
          <p className="text-2xl font-bold mt-2">$3.345</p>
          <span className="text-red-500 text-sm">-0.10% Since last week</span>
        </div>

        {/* Profit Card */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-gray-500 text-sm font-medium">Profit</h3>
          <p className="text-2xl font-bold mt-2">60%</p>
          <span className="text-red-500 text-sm">-0.2% Since last week</span>
        </div>

        {/* Invoices Card */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-gray-500 text-sm font-medium">Invoices</h3>
          <p className="text-2xl font-bold mt-2">1.135</p>
          <span className="text-green-500 text-sm">+1.5% Since last week</span>
        </div>
      </div>

      {/* Search Bar */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search invoices..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-md w-full"
        />
      </div>

      {/* Middle Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        {/* Invoice Statistics */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Invoice Statistics</h3>
          <div className="space-y-3">
            <div className="bg-blue-50 p-4 rounded">
              <span className="text-gray-600">Total Paid</span>
              <p className="text-xl font-bold">234</p>
            </div>
            <div className="bg-red-50 p-4 rounded">
              <span className="text-gray-600">Total Overdue</span>
              <p className="text-xl font-bold">514</p>
            </div>
            <div className="bg-yellow-50 p-4 rounded">
              <span className="text-gray-600">Total Unpaid</span>
              <p className="text-xl font-bold">345</p>
            </div>
          </div>
        </div>

        {/* Sales Analytics */}
        <div className="bg-white p-6 rounded-lg shadow-sm lg:col-span-2">
          <h3 className="text-lg font-semibold mb-4">Sales Analytics</h3>
          <div className="h-64">
            {/* Chart Placeholder */}
            <div className="flex items-end justify-between h-full border-b-2 border-l-2 border-gray-200 pb-4 pl-4">
              {salesData.map((data, index) => (
                <div
                  key={index}
                  className="w-8 bg-blue-200"
                  style={{ height: `${data.value}px` }}
                />
              ))}
            </div>
            <div className="flex justify-between mt-2 text-sm text-gray-500">
              {salesData.map((data) => (
                <span key={data.month}>{data.month}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Recent Invoices */}
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-lg font-semibold mb-4">Recent Invoices</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left text-gray-500 text-sm border-b">
                <th className="pb-3">No</th>
                <th className="pb-3">Id Customers</th>
                <th className="pb-3">Customer name</th>
                <th className="pb-3">Items Name</th>
                <th className="pb-3">Order Date</th>
                <th className="pb-3">Status</th>
                <th className="pb-3">Price</th>
              </tr>
            </thead>
            <tbody>
              {filteredInvoices.map((row: Invoice, index) => (
                <tr key={index} className="text-sm border-b last:border-b-0">
                  {row.map((cell: string | number, cellIndex: number) => (
                    <td key={cellIndex} className="py-4">
                      {cellIndex === 5 ? (
                        <span
                          className={`px-2 py-1 rounded-full text-xs ${
                            cell === 'Paid'
                              ? 'bg-green-100 text-green-800'
                              : cell === 'Pending'
                              ? 'bg-yellow-100 text-yellow-800'
                              : 'bg-red-100 text-red-800'
                          }`}
                        >
                          {cell}
                        </span>
                      ) : (
                        cell
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
