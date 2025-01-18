import { FaArrowLeft, FaArrowRight } from "react-icons/fa6"
import { useNavigate } from "react-router-dom"

const Study = () => {
    const navigate = useNavigate()
    const data = [
        {
            "title": "Civic lessons",
            "numbers": 89,
            "img": "/imgs/civic.png"
        },
        {
            "title": "English Section",
            "numbers": 75,
            "img": "/imgs/Mask group.png"
        },
        {
            "title": "Documents",
            "numbers": 56,
            "img": "/imgs/Group.png"
        },
        {
            "title": "Videos",
            "numbers": 100,
            "img": "/imgs/Group 21.png"
        },
    ]

    return (
        <section className="bg-[#EFEFEF] flex flex-col min-h-screen">
            <div className="bg-white flex gap-x-5 items-center border-b-[1px] px-5 py-5">
                <FaArrowLeft
                onClick={()=>navigate("/")}
                className="text-2xl" />
                <h1 className="text-3xl font-medium">Study Materials</h1>
            </div>

            <div className="mt-4 flex flex-col gap-y-2">
                {
                    data.map((item, index) => (
                        <div key={index} className="flex bg-white px-4 py-2 mx-3 rounded-lg items-center gap-x-3">
                            <img src={item.img} />
                            <div>
                                <h1 className="text-2xl font-medium">{item.title}</h1>
                                <p className="text-[#100B1A]">{item.numbers}</p>
                            </div>
                            <FaArrowRight className="ml-auto text-xl text-[#bebebe] float-end" />
                        </div>
                    ))
                }
            </div>
        </section>
    )
}
export default Study