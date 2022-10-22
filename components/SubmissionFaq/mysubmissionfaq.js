import React, { useState } from 'react'

const MySubmissionFaq = ({ question, answer }) => {

    const [show, setShow] = useState(false);
    return (
        <>
            <div className=''>
                <div className=' relative left-80 w-1/2 mb-10 text-center mt-4 shadow-2xl rounded-3xl shadow-gray-400   p-1 '>
                    <div className='text-center mt-9 w-5/6   relative content-center ' >
                        <h2 className=' w-full justify-self-start relative  text-2xl hover:underline'> {question}</h2>
                        <p onClick={() => setShow(!show)} className="text-3xl cursor-pointer text-end left-20 hover:text-blue-600 bottom-16 relative " > {show ? "−" : "＋"}</p>

                    </div>
                    <div className='relative text-xl mb-2 flex  content-start text-slate-500  tracking-wide '>
                        {show && <p className=" flex content-start "> {answer} </p>}
                    </div>
                </div>
            </div>

        </>
    )
}

export default MySubmissionFaq