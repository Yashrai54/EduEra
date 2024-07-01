import { ReactTyped } from "react-typed";

function Banner(){
 return(
    <div className=" bg-sky-400 w-full py-[100px]">
       <div className=" max-w-[1240px] mx-auto text-center">
        <div className=" text-xl md:text-4xl md:p-3 text-white">
            Learn With Us
        </div>
        <div className= "text-2xl md:text-5xl md:p-3 text-white font-bold">
            Grow with us
        </div>
        <div className="text-xl md:text-4xl md:p-3 text-white">
            Learn 
            <ReactTyped className="p-3" strings={["Web Development","Blockchain","DSA"]} typeSpeed={60} backSpeed={50} loop={true} />
        </div>
        <button className=" bg-black text-white p-3 m-3 rounded-md">Get Started</button>
       </div>
    </div>
 );
}
export default Banner;