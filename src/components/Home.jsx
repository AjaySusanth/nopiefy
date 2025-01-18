import { GoGlobe } from "react-icons/go";
import { IoMdNotificationsOutline } from "react-icons/io";
import { RiHome6Line } from "react-icons/ri";
const Home = () => {
    return (
        <section>
            <div className="px-5 mt-10">
                <h1 className="text-2xl font-semibold text-[#E47043]">hello!! welcome</h1>
                <div className="flex items-center justify-between my-2">
                    <h1 className="text-4xl font-medium">Nopiefy</h1>
                    <div className="flex gap-x-3 items-center mt-2">
                        <GoGlobe className="text-2xl" />
                        <IoMdNotificationsOutline className="text-3xl" />
                    </div>
                </div>
                <h1 className="text-xl mt-4 text-[#8F8F95]">"Say Nope, Stay Dope"</h1>
                <div className="grid grid-cols-2 grid-rows-3 gap-4 mt-10">
                    <div className="row-span-2 bg-[#DFF3FE] rounded-xl py-3">
                        <div className="px-3 mt-2">
                            <img src="\imgs\Rating container.png" alt="home img 1" />
                        </div>
                        <div className="my-3 px-3 text-[#282828]">
                            <h1 className="text-xl font-bold w-10 leading-tight">Daily Game Challenge</h1>
                            <p className="mt-2 text-sm font-medium">Ready Go</p>
                        </div>
                    </div>
                    <div className="col-start-1 row-start-3 bg-[#FDEFE4] rounded-xl flex justify-left items-center px-3">
                        <div>
                            <h1 className="text-xl text-center font-bold w-10 leading-tight">Progress Tracker</h1>
                            <p className="mt-2 text-sm font-medium">Points awarded</p>
                        </div>
                    </div>
                    <div className="col-start-2 row-start-1 bg-[#E7E0FF] rounded-xl flex justify-left items-center px-3">
                        <div>
                            <h1 className="text-xl text-center font-bold w-10 leading-tight">Study Materials</h1>
                            <p className="mt-2 text-sm font-medium">23 Materials</p>
                        </div>
                    </div>
                    <div className="row-span-2 bg-[#DFF3FE] rounded-xl py-3">
                        <div className="px-3 mt-5">
                            <img src="\imgs\no drugs.png" alt="home img 1" />
                        </div>
                        <div className="my-3 px-3 text-[#282828]">
                            <h1 className="text-xl font-bold w-26 leading-tight">Say No To Drugs</h1>
                            <p className="mt-2 text-sm font-medium">Legal Knowledge</p>
                        </div>
                    </div>
                </div>
            </div>

            < div className="flex mt-10 justify-between border-t-[1px] py-2 px-8" >
                <div className="flex flex-col items-center">
                    <RiHome6Line className="text-2xl" />
                    <p className="text-[#282828] text-base">Home</p>
                </div>
                <div className="flex flex-col items-center">
                    <RiHome6Line className="text-2xl" />
                    <p className="text-[#282828] text-base">Home</p>
                </div>
                <div className="flex flex-col items-center">
                    <RiHome6Line className="text-2xl" />
                    <p className="text-[#282828] text-base">Home</p>
                </div>
                <div className="flex flex-col items-center">
                    <RiHome6Line className="text-2xl" />
                    <p className="text-[#282828] text-base">Home</p>
                </div>

            </div >
        </section>
    )
}
export default Home

