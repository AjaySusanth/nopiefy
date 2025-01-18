import { useNavigate } from "react-router-dom"

const Result = () => {
  const navigate = useNavigate()
  return (
    <section className="flex flex-col min-h-screen text-center px-12">
        <div className="mt-40 flex flex-col items-center gap-y-3">
            <img src="/imgs/cup.png"/>
            <p className="text-3xl font-semibold">Congrats!</p>
            <h1 className="text-[#2ECC71] text-4xl font-bold">90% Score</h1>
        </div>

        <p className="mt-8 text-xl font-semibold">Games completed successfully</p>
        <p  className="mt-2 text-xl font-medium">You got <span className="text-[#799CDF]">20 points</span></p>

        <div className="mt-8 flex flex-col gap-y-4">
        <button 
        onClick={() => navigate("/progress")}
        className=" bg-[#FF6338] text-white py-2 rounded-xl text-xl">Review</button>
        <button 
        onClick={() => navigate("/daily-challenges")}
        className="text-xl text-[#799CDF] border border-[#799CDF] py-2 rounded-xl">Restart</button>
        <button 
        onClick={() => navigate("/")}
        className="text-xl">Back to Home</button>
        </div>
    </section>
  )
}
export default Result