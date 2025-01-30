// // app/insights/page.tsx

// import { ArrowRightIcon, CalendarIcon, ChartBarIcon } from "@heroicons/react/24/outline";

// export default function InsightsPage() {
//   const featuredPost = {
//     title: "The Ultimate Guide to Road Trips in Pakistan",
//     excerpt: "Discover the best routes, hidden gems, and essential tips for your next adventure...",
//     category: "Travel Tips",
//     date: "March 15, 2024",
//     readTime: "8 min read"
//   };

//   const categories = [
//     { name: "Travel Tips", icon: ChartBarIcon },
//     { name: "Car Maintenance", icon: CalendarIcon },
//     { name: "Road Safety", icon: ChartBarIcon },
//     { name: "Destination Guides", icon: CalendarIcon },
//   ];

//   const popularPosts = [
//     { title: "Top 10 Scenic Routes in Northern Areas", views: "1.2k" },
//     { title: "How to Choose the Perfect Rental Car", views: "984" },
//     { title: "Winter Driving Safety Checklist", views: "1.5k" },
//   ];

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Hero Section */}
//       <section className="relative bg-blue-900 text-white py-20 px-4">
//         <div className="max-w-6xl mx-auto">
//           <h1 className="text-4xl md:text-6xl font-bold mb-4">Car Rental Insights</h1>
//           <p className="text-xl md:text-2xl text-blue-200">
//             Expert tips, travel guides, and industry updates
//           </p>
//         </div>
//       </section>

//       {/* Featured Post */}
//       <section className="max-w-6xl mx-auto px-4 py-16">
//         <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col md:flex-row">
//           <img 
//             src="/images/mountain-road.jpg"
//             alt="Featured post"
//             className="md:w-1/2 h-96 object-cover"
//           />
//           <div className="p-8 md:w-1/2">
//             <span className="bg-blue-100 text-blue-800 px-4 py-1 rounded-full text-sm">
//               {featuredPost.category}
//             </span>
//             <h2 className="text-3xl font-bold mt-6 mb-4">{featuredPost.title}</h2>
//             <p className="text-gray-600 mb-6">{featuredPost.excerpt}</p>
//             <div className="flex items-center text-gray-500 text-sm gap-4">
//               <span>{featuredPost.date}</span>
//               <span>{featuredPost.readTime}</span>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Categories Grid */}
//       <section className="max-w-6xl mx-auto px-4 py-16">
//         <h3 className="text-2xl font-bold mb-8">Explore by Category</h3>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//           {categories.map((category) => (
//             <div 
//               key={category.name}
//               className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
//             >
//               <category.icon className="w-8 h-8 text-blue-600 mb-4" />
//               <h4 className="text-xl font-semibold">{category.name}</h4>
//               <button className="mt-4 text-blue-600 flex items-center gap-2">
//                 Explore <ArrowRightIcon className="w-4 h-4" />
//               </button>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Popular Articles */}
//       <section className="max-w-6xl mx-auto px-4 py-16">
//         <div className="flex flex-col lg:flex-row gap-12">
//           <div className="lg:w-2/3">
//             <h3 className="text-2xl font-bold mb-8">Latest Articles</h3>
//             <div className="space-y-8">
//               {[1, 2, 3].map((post) => (
//                 <article 
//                   key={post}
//                   className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
//                 >
//                   <img 
//                     src="/images/car-article.jpg" 
//                     alt="Article" 
//                     className="w-full h-48 object-cover rounded-lg mb-4"
//                   />
//                   <div className="flex items-center text-gray-500 text-sm gap-4 mb-2">
//                     <span>March 18, 2024</span>
//                     <span>•</span>
//                     <span>5 min read</span>
//                   </div>
//                   <h4 className="text-xl font-semibold mb-2">
//                     How to Plan Your Perfect Road Trip Itinerary
//                   </h4>
//                   <p className="text-gray-600">
//                     Learn how to create the ultimate road trip plan with our step-by-step guide...
//                   </p>
//                 </article>
//               ))}
//             </div>
//           </div>

//           {/* Sidebar */}
//           <div className="lg:w-1/3">
//             <div className="bg-white p-6 rounded-xl shadow-md">
//               <h4 className="text-xl font-semibold mb-4">Popular Articles</h4>
//               <div className="space-y-4">
//                 {popularPosts.map((post) => (
//                   <div 
//                     key={post.title}
//                     className="flex items-center justify-between py-3 border-b"
//                   >
//                     <span className="text-gray-700">{post.title}</span>
//                     <span className="text-gray-500 text-sm">{post.views} views</span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Newsletter Section */}
//       <section className="bg-blue-900 text-white py-16 px-4">
//         <div className="max-w-3xl mx-auto text-center">
//           <h3 className="text-3xl font-bold mb-4">Stay Updated</h3>
//           <p className="text-blue-200 mb-8">
//             Subscribe to our newsletter for latest travel tips and special offers
//           </p>
//           <form className="flex gap-4 max-w-md mx-auto">
//             <input
//               type="email"
//               placeholder="Enter your email"
//               className="flex-1 px-6 py-3 rounded-full text-gray-900"
//             />
//             <button
//               type="submit"
//               className="bg-white text-blue-900 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors"
//             >
//               Subscribe
//             </button>
//           </form>
//         </div>
//       </section>
//     </div>
//   );
// }



// export default function Dashboard() {
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
//               {[100, 80, 60, 40, 20].map((height, index) => (
//                 <div 
//                   key={index}
//                   className="w-8 bg-blue-200"
//                   style={{ height: `${height}px` }}
//                 />
//               ))}
//             </div>
//             <div className="flex justify-between mt-2 text-sm text-gray-500">
//               {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map((month) => (
//                 <span key={month}>{month}</span>
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
//               {[
//                 ['1', '#068499', 'Eron Yaeger', '1x Black Backpack', '21/07/2022 08:21', 'Paid', '$101'],
//                 ['2', '#068499', 'Lovi Ackerman', '1x Distro Backpack', '21/07/2022 08:21', 'Pending', '$144'],
//                 ['3', '#068499', 'Rainer Brown', '1x New Backpack', '21/07/2022 08:21', 'Paid', '$121'],
//                 ['4', '#068499', 'Historia Reiss', '2x Black Backpack', '21/07/2022 08:21', 'Overdue', '$300'],
//               ].map((row, index) => (
//                 <tr key={index} className="text-sm border-b last:border-b-0">
//                   {row.map((cell, cellIndex) => (
//                     <td key={cellIndex} className="py-4">
//                       {cellIndex === 5 ? (
//                         <span className={`px-2 py-1 rounded-full text-xs ${
//                           cell === 'Paid' ? 'bg-green-100 text-green-800' :
//                           cell === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
//                           'bg-red-100 text-red-800'
//                         }`}>
//                           {cell}
//                         </span>
//                       ) : cell}
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
import { useState, useEffect, JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal } from "react";

// Sample function to fetch invoices or data (you can replace it with real API calls)
const fetchInvoices = () => [
  ['1', '#068499', 'Eron Yaeger', '1x Black Backpack', '21/07/2022 08:21', 'Paid', '$101'],
  ['2', '#068499', 'Lovi Ackerman', '1x Distro Backpack', '21/07/2022 08:21', 'Pending', '$144'],
  ['3', '#068499', 'Rainer Brown', '1x New Backpack', '21/07/2022 08:21', 'Paid', '$121'],
  ['4', '#068499', 'Historia Reiss', '2x Black Backpack', '21/07/2022 08:21', 'Overdue', '$300'],
];

const fetchSalesData = () => [
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
  const [invoices, setInvoices] = useState<any[]>([]);
  const [salesData, setSalesData] = useState<any[]>([]);
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
              {filteredInvoices.map((row, index) => (
                <tr key={index} className="text-sm border-b last:border-b-0">
                  {row.map((cell: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined, cellIndex: Key | null | undefined) => (
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



