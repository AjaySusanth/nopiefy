import { FaArrowLeft } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { FaCheck } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Challenge = () => {
    const navigate = useNavigate()
    const questions = [
        {
            "id": 1,
            "question": "What is the most commonly used illicit drug?",
            "options": ["Cocaine", "Marijuana", "Heroin", "Methamphetamine"],
            "answer": "Marijuana"
        },
        {
            "id": 2,
            "question": "Which of these substances is considered a depressant?",
            "options": ["Alcohol", "Cocaine", "Ecstasy", "Methamphetamine"],
            "answer": "Alcohol"
        },
        {
            "id": 3,
            "question": "Which drug is often referred to as 'acid'?",
            "options": ["LSD", "MDMA", "Ketamine", "Psilocybin"],
            "answer": "LSD"
        },
        {
            "id": 4,
            "question": "What is the primary chemical in tobacco responsible for addiction?",
            "options": ["Tar", "Nicotine", "Carbon Monoxide", "Formaldehyde"],
            "answer": "Nicotine"
        },
        {
            "id": 5,
            "question": "What does 'gateway drug' refer to?",
            "options": [
                "A drug that opens new research",
                "A drug that leads to the use of more harmful drugs",
                "A drug that is harmless",
                "A drug that is prescribed by doctors"
            ],
            "answer": "A drug that leads to the use of more harmful drugs"
        },
        {
            "id": 6,
            "question": "What is the legal drinking age in most parts of the United States?",
            "options": ["16", "18", "21", "25"],
            "answer": "21"
        },
        {
            "id": 7,
            "question": "What is the name of the drug commonly used to reverse opioid overdoses?",
            "options": ["Naloxone", "Methadone", "Buprenorphine", "Naltrexone"],
            "answer": "Naloxone"
        },
        {
            "id": 8,
            "question": "Which of these drugs is often called 'Molly'?",
            "options": ["MDMA", "Ketamine", "LSD", "Cocaine"],
            "answer": "MDMA"
        },
        {
            "id": 9,
            "question": "What is a common side effect of stimulant abuse?",
            "options": ["Decreased appetite", "Drowsiness", "Depression", "Slurred speech"],
            "answer": "Decreased appetite"
        },
        {
            "id": 10,
            "question": "Which of the following is a long-term effect of alcohol abuse?",
            "options": ["Liver damage", "Improved memory", "Increased vision clarity", "Reduced anxiety"],
            "answer": "Liver damage"
        }
    ]


    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const [isAnswerCorrect, setIsAnswerCorrect] = useState(null);

    const currentQuestion = questions[currentQuestionIndex];

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setIsAnswerCorrect(option === currentQuestion.answer);
    };

    const handleNext = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            resetState();
        }
    };

    const handlePrevious = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(currentQuestionIndex - 1);
            resetState();
        }
    };

    const handleSkip = () => {
        handleNext();
    };

    const resetState = () => {
        setSelectedOption(null);
        setIsAnswerCorrect(null);
    };


    return (
        <section className="bg-[#EFEFEF] flex flex-col min-h-screen">
            <div className="bg-white flex gap-x-5 items-center border-b-[1px] px-5 py-5">
                <FaArrowLeft
                    onClick={() => navigate("/")}
                    className="text-2xl" />
                <h1 className="text-3xl font-medium">Daily Challenge</h1>
            </div>

            <div className="mt-2 flex flex-col gap-y-2">
                <div className="bg-white p-5">
                    <h1 className="text-[#799CDF] text-xl font-medium">{currentQuestion.id}. {currentQuestion.question}</h1>
                </div>

                {currentQuestion.options.map((option, index) => (
                    <div
                        key={index}
                        onClick={() => handleOptionClick(option)}
                        className={`py-6 flex items-center px-5 cursor-pointer ${selectedOption === option
                            ? isAnswerCorrect
                                ? "bg-green-200"
                                : "bg-red-200"
                            : "bg-white"
                            }`}
                    >
                        <p>{String.fromCharCode(65 + index)}. {option}</p>
                    </div>
                ))}
            </div>

            <div className="my-5 px-5">

                {selectedOption && (
                    <div className="flex gap-x-2 items-center">
                        {isAnswerCorrect ? (
                            <>
                                <FaCheck className="text-green-500 text-2xl" />
                                <p className="text-green-500 text-xl">Correct</p>
                            </>
                        ) : (
                            <>
                                <IoClose className="text-red-500 text-2xl" />
                                <p className="text-red-500 text-xl">Wrong</p>
                            </>
                        )}
                    </div>
                )}

                {currentQuestionIndex < questions.length - 1 ? (
                    <button
                        className="text-white text-lg mt-5 bg-[#E47043] w-full py-3 rounded-xl"
                        onClick={handleNext}
                    >
                        Next ({currentQuestionIndex + 1}/{questions.length})
                    </button>
                ) : (
                    <button
                    onClick={() => navigate("/result")}
                        className="text-white text-lg mt-5 bg-[#E47043] w-full py-3 rounded-xl"
                    >
                        Result
                    </button>
                )}

            
                <div className="flex justify-between items-center mt-5">
                    <button
                        className="border rounded-lg border-black w-24 py-2"
                        onClick={handlePrevious}
                    >Previous</button>
                    <button
                        onClick={() => navigate("/")}
                        className="border rounded-lg border-black w-24 py-2">Home</button>
                    <button onClick={handleSkip} className="border rounded-lg border-black w-24 py-2">Skip</button>
                </div>
            </div>

        </section>
    )
}
export default Challenge