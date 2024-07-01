import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaReddit } from "react-icons/fa";


function Footer(){
   return(
     <div className=" bg-sky-400  h-[200px] grid grid-cols-4  mx-auto w-full">
         <div className=" col-span-1 "><h1 className=" font-bold text-xl md:text-2xl text-center m-4">EduEra</h1>
            <ul className=" flex ">
                <li className=" text-xl md:text-3xl border rounded-full text-white border-black bg-black mx-auto md:p-2 m-5"><FaTwitter />
                </li>
                <li className=" text-xl md:text-3xl border rounded-full text-white border-black bg-black mx-auto md:p-2 m-5"><FaInstagram />
                </li>
                <li className=" text-xl md:text-3xl border rounded-full   border-black mx-auto md:p-2 m-5 text-white bg-black"><FaReddit />
                </li>
                <li></li>
            </ul>
         </div>
         <div className=" col-span-1  text-center ">
            <h2 className=" font-bold md:text-xl m-3">Courses</h2>
            <ul>
              <li>DSA</li>
              <li>Web Dev</li>
              <li>Blockchain</li>
            </ul>
         </div>
         <div className=" col-span-1 text-center">
           <h2 className=" font-bold md:text-xl m-3">Company</h2>
            <ul>
              <li>About us</li>
              <li>Contact us</li>
              <li>Updates</li>
            </ul>
         </div>
         <div className=" col-span-1  text-center">
           <h2 className=" font-bold md:text-xl m-3">Our Centres</h2>
           <ul>
            <li>Delhi</li>
            <li>Noida</li>
            <li>Pathankot</li>
           </ul>
         </div>
     </div>
   );
}
export default Footer;