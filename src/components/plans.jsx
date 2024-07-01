import { SiHiveBlockchain } from "react-icons/si";
import { CgWebsite } from "react-icons/cg";
import { BsStack } from "react-icons/bs";
function Plans(){
    return(
        
        <div className=" max-w-[1240px] mx-auto m-7  md:grid grid-cols-3  gap-10 p-10">
            <div className=" col-span-1 border shadow-xl text-center h-[400px] hover:scale-105 duration-100"><SiHiveBlockchain className=" text-5xl mx-auto m-4 " />
            <h1 className=" font-bold text-2xl text-center ">Blockchain Technology</h1>
            <p className=" text-center font-bold text-xl m-3">&#8377;149 </p>
            <p className="text-center m-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos nemo dolores molestias?</p>
            <button className=" bg-green-400 text-center p-5 m-3 rounded-md font-bold">Start Course</button>
            
            </div>
            <div className=" h-[400px] col-span-1 border bg-gray-300 shadow-xl text-center hover:scale-105 duration-100">
            <CgWebsite className=" text-5xl mx-auto m-4"/>
            <h1 className=" font-bold text-2xl text-center">Web Development</h1>
            <p className="text-center font-bold text-xl m-3">&#8377; 199</p>
            <p className=" text-center m-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum aliquam voluptate saepe.</p>
            <button className=" bg-black text-white text-center p-5 m-3 rounded-md ">Join now</button>


            </div>
            <div className=" col-span-1 border shadow-xl text-center h-[400px] hover:scale-105 duration-100">
            <BsStack className=" text-5xl mx-auto m-4" />
            <h1 className=" font-bold text-2xl text-center">Data Structures</h1>
            <p className=" text-center font-bold text-xl m-3">&#8377; 299</p>
            <p className=" text-center m-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut ullam nesciunt quam!</p>
            <button className=" bg-green-400 text-center p-5 m-3 rounded-md font-bold">Start Course</button>
            </div>

      </div>
    );
}
export default Plans;