import Blockchain from '../assets/Blockchain.png'
function Experts() {
    return (
        <div className=" max-w-[1240px] mx-auto my-10  h-[200px]  md:grid grid-cols-3">
            <div className="hidden md:block h-[200px] w-[300px] col-span-1">
                <img className=" md: h-[200px] md:w-[300px]" src={Blockchain} alt="" />
            </div>
            <div className=" text-center md:h-[200px] col-span-2 ">
                <h1 className=" font-bold text-2xl ">Learn Trendy Libraries</h1>
               <p className=""> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente enim nulla mollitia architecto perspiciatis delectus quisquam quae dolore error qui magnam distinctio nemo expedita iusto voluptas, assumenda nihil! Assumenda, asperiores.</p>
               <button className=" bg-black text-white p-3 m-3 rounded-md">Join now</button>

            </div>

        </div>
    );
}
export default Experts;