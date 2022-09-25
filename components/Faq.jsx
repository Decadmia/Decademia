import React from 'react'

const Faq = () => {
    return (
        <div >

   

            <div className=' m-auto pl-20 text-center  rounded-md decoration'>
                <h1 className='text-xl ]'>
                </h1>
                <h2 className='py-4 tracking-widest  text-[#005071]'>Frequently asked questions ? </h2>
                <hr className='w-2/3' />
            </div>
            <hr />

            <div className=' m-20 p-10 gap-2 grid md:grid-cols-1 text-white bg-gradient-to-r from-[#a200d6] to-[#467df3] rounded-md'>
                <div className='m-2 p-2 '>
                    <div className='flex items-center justify-start mt-5'>
                        <p className='text-2xl mb-2 flex justify-start'>Q1:  Who can apply? </p>

                        <div>
                            <p>All researchers are welcome to apply, including students. You should have access to appropriate facilities for the work you propose. We prioritise projects with a clear pathway to generating intellectual property and potential commercial value. Not sure whether your project is a fit? Our discord community can help.</p>
                        </div>
                    </div>

                    <div className='m-2 p-2 '>
                        <div className='flex items-center justify-start mt-5'>
                            <p className='text-2xl mb-2 flex justify-start'>Q2: What is the application structure?
                            </p>
                        </div>
                        <div>
                            <p>Please send us a 500-1000 word proposal for your project or company. Make sure you include: goal/market, approach/product, methods/technology used, team, funding needed, and project timeline.</p>
                        </div>
                    </div>

                    <div className='m-2 p-2 '>
                        <div className='flex items-center justify-start mt-5'>
                            <p className='text-2xl mb-2 flex justify-start'>Q3: What project stages do you fund? </p>
                        </div>
                        <div>
                            <p>We have a preference for early-stage, pre-patent projects that are attempting to bridge “the valley of death”​​, traditionally thought of as the gap between academic research and industrial commercialisation. However, we are open to receiving applications for projects at any stage, and aim to fund projects based on potential over maturity.</p>
                        </div>
                    </div>

                </div>


            </div>
            <div />
        </div>
)}

export default Faq