import { FaArrowLeft } from "react-icons/fa6"
import { useNavigate } from "react-router-dom"

const Progress = () => {
    const navigate = useNavigate()
    return (
        <section>
            <div className="flex gap-x-5 items-center border-b-[1px] px-5 py-5">
                <FaArrowLeft 
                onClick={() => navigate("/")}
                className="text-2xl" />
                <h1 className="text-3xl font-medium">Progress</h1>
            </div>

            <div className="flex flex-col bg-[#8E45AC] rounded-lg mx-3 px-6 py-4 text-white mt-5">
                <div className="flex justify-between items-center">
                    <h1 className="text-2xl font-medium">Last Exam</h1>
                    <p className="text-sm opacity-50">01 Jan 2025</p>
                </div>
                <div className="flex gap-x-5 my-3">
                    <div>
                        <h1 className="text-xl font-medium">50%</h1>
                        <p className="text-sm opacity-50">Marks</p>
                    </div>
                    <div>
                        <h1 className="text-xl font-medium">Pass</h1>
                        <p className="text-sm opacity-50">Status</p>
                    </div>
                </div>
            </div>

            <div className="flex flex-col bg-[#799CDF] rounded-lg mx-3 px-6 py-8 text-white mt-5">
                <h1 className="text-2xl font-medium">Total Percentage</h1>
                <h1 className="text-2xl font-medium">90%</h1>
            </div>

            <div className="flex flex-col bg-[#4ADA85] rounded-lg mx-3 px-6 py-8 text-white mt-5">
                <h1 className="text-2xl font-medium">Knowledge Obtained</h1>
                <h1 className="text-2xl font-medium">90%</h1>
            </div>

            <div className="flex flex-col bg-[#FF6338] rounded-lg mx-3 px-6 py-8 text-white mt-5">
                <h1 className="text-2xl font-medium">Gained Points</h1>
                <h1 className="text-2xl font-medium">20</h1>
            </div>



        </section>
    )
}
export default Progress