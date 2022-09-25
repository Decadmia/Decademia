import React from 'react'

const ProjectsubFaq = () => {
    return (
        <div className='relative  right-6 m-auto pl-20 flex flex-col w-2/3  rounded-md decoration'>

            <div className=' m-auto pl-20 text-center  rounded-md decoration'>
               
                <h2 className='py-4 tracking-widest  text-[#005071]'> .</h2>
                <hr className='w-2/3' />
            </div>
            <hr />
            
            
            <div className=' m-auto mt-4  text-start justify-start  rounded-md decoration'>
               
                <h2 className='text-center  tracking-widest  text-[#005071]'> Project submission FAQ's?  </h2>
                <hr className='w-2/3' />
            </div>
            <hr />

            <div className=' m-10 w-full p-10 gap-2 grid md:grid-cols-1 text-white bg-gradient-to-r from-[#a200d6] to-[#467df3] rounded-md'>
                <div className='m-2 p-2'>
                    <div className='flex items-center justify-start mt-5'>
                        <p className='text-2xl mb-2 flex justify-start'>Who can apply? </p>
                    </div>
                    <div>
                        <p>Projects must be focused on making an impact on human health- and/or life-span by targeting the ageing process directly, or by targeting age-related diseases. Age-related diseases include cardiovascular disease, cancer, and neurodegenerative diseases. Projects with the potential of leading to new therapeutics, interventions, diagnostics, and biomarkers will be prioritised.</p>
                    </div>
                </div>

                <div className='m-2 p-2 '>
                    <div className='flex items-center justify-start mt-5'>
                        <p className='text-2xl mb-2 flex justify-start'>What type of project do you fund? </p>
                    </div>
                    <div>
                        <p>Projects must be focused on making an impact on human health- and/or life-span by targeting the ageing process directly, or by targeting age-related diseases. Age-related diseases include cardiovascular disease, cancer, and neurodegenerative diseases. Projects with the potential of leading to new therapeutics, interventions, diagnostics, and biomarkers will be prioritised.</p>
                    </div>
                </div>

                <div className='m-2 p-2 '>
                    <div className='flex items-center justify-start mt-5'>
                        <p className='text-2xl mb-2 flex justify-start'>What is the application structure? </p>
                    </div>
                    <div>
                        <p>Please send us a 500-1000 word proposal for your project or company. Make sure you include: goal/market, approach/product, methods/technology used, team, funding needed, and project timeline.</p>
                    </div>
                </div>

                <div className='m-2 p-2 '>
                    <div className='flex items-center justify-start mt-5'>
                        <p className='text-2xl mb-2 flex justify-start'>Who owns the IP from funded project? </p>
                    </div>
                    <div>
                        <p>The VitaDAO community owns the intellectual property that results from the projects that it funds, either directly or in the form of an exclusive license. However, this can be negotiated on a project basis. The researcher and other third parties can maintain partial ownership of IP, depending on the funding amounts and nature of the project. Usually, VitaDAO finances projects and acquires intellectual property through sponsored research agreements that are negotiated with the commercialisation office of a host university.</p>
                    </div>
                </div>

                <div className='m-2 p-2 '>
                    <div className='flex items-center justify-start mt-5'>
                        <p className='text-2xl mb-2 flex justify-start'>What project stage do you fund? </p>
                    </div>
                    <div>
                        <p>We have a preference for early-stage, pre-patent projects that are attempting to bridge “the valley of death”​​, traditionally thought of as the gap between academic research and industrial commercialisation. However, we are open to receiving applications for projects at any stage, and aim to fund projects based on potential over maturity.</p>
                    </div>
                </div>


            </div>


        </div>
    )
}

export default ProjectsubFaq