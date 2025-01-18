import { FaArrowLeft } from "react-icons/fa6"
import { FaArrowDown } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
const Practice = () => {
    const navigate = useNavigate()
    const data = [
        {
            "title": "Trial Questions",
            "numbers": "53/100",
            "img": "/imgs/Group 66.png"
        },
        {
            "title": "Mixed Questions",
            "numbers": "66/100",
            "img": "/imgs/Button container.png"
        },
        {
            "title": "Civic Questions",
            "numbers": "84/100",
            "img": "/imgs/civics.png"
        },
        {
            "title": "Flash Cards",
            "numbers": "58/100",
            "img": "/imgs/flash.png"
        }
    ]

    return (
        <section className="bg-[#EFEFEF] flex flex-col min-h-screen">
            <div className="bg-white flex gap-x-5 items-center border-b-[1px] px-5 py-5">
                <FaArrowLeft 
                onClick={() => navigate("/")}
                className="text-2xl" />
                <h1 className="text-3xl font-medium">Practice Questions</h1>
            </div>

            <div className="mt-4 flex flex-col gap-y-2">
                {
                    data.map((item,index) => (
                        <div key={index} className="flex bg-white px-4 py-2 mx-3 rounded-lg items-center gap-x-3">
                            <img src={item.img} />
                            <div>
                                <h1 className="text-2xl font-medium">{item.title}</h1>
                                <p className="text-[#100B1A]">{item.numbers}</p>
                            </div>
                            <FaArrowDown className="ml-auto text-xl text-[#bebebe] float-end" />
                        </div>
                    ))
                }
            </div>
        </section>
    )
}
export default Practice