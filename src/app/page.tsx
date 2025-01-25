// import { client } from "@/sanity/lib/client";

import Booking from "./Component/Booking";
import Hero from "./Component/Hero";

import Popular from "./Component/Popular";
import Recommanded from "./Component/Recommanded";




// async function getdata() {
//   const fetchdata = await client.fetch(`*[_type == "student"] {name,age}`)
//   return fetchdata;
// }


// export default async function Home() {
//   const data = await getdata()
//   console.log(data)
//   return (
//     <>
//      <h1>Sanity</h1>
//      {
//       data.map((val:any,i:any)=>{
//         return(
//           <>
//           <h1>{val.name}</h1>
//           <h1>{val.age}</h1>
//           </>
//         )

//       })
//      }

//      </>

//   );
// }

export default function Home() {
    return(
        <div className="bg-[#F6F7F9] pb-6 sm:pb-8 lg:pb-12">
            <Hero />
            <Booking />
            <Popular />
            <Recommanded />
         
        </div>
    )
}