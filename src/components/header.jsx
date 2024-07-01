import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";

function Header(){
    const [toggle,setToggle]=useState(false)
  return(
    <div className=" bg-sky-400 p-4">
       <div className="max-w-[1240px]  py-5 flex justify-between mx-auto">
        <div className=" text-3xl font-bold">
            EduEra
        </div>
        
        {toggle?<IoMdClose onClick={()=>setToggle(!toggle) } className=" text-2xl md:hidden block"></IoMdClose>:<IoMdMenu onClick={()=>setToggle(!toggle)} className=" text-2xl md:hidden block"></IoMdMenu>}
        
        
            <ul className="hidden md:flex items-center gap-10 cursor-pointer">
             <li>Home</li>
             <li>Company</li>
             <li>About</li>
             <li>Contact us</li>   
            </ul>
            <ul className ={` duration-300 h-full md:hidden block cursor-pointer fixed left-0 top-[102px] bg-black text-white w-full ${toggle? 'left-[0]':'left-[-100%]'}`}>
            <li className="p-3">Home</li>
             <li className="p-3">Company</li>
             <li className="p-3">About</li>
             <li className="p-3">Contact us</li>   
            </ul>

       </div>
    </div>
  );
}
export default Header;