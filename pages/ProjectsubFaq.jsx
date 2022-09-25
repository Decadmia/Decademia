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
                        <p className='text-2xl mb-2 flex justify-start'>Q1: If I upload my research data on the platform, who can access it? </p>
                    </div>
                    <div>
                        <p>You are initially the only party who can access and modify the data. Once you sell or give access/royalty rights to any other parties they are available to view the data.</p>
                    </div>
                </div>

                <div className='m-2 p-2 '>
                    <div className='flex items-center justify-start mt-5'>
                        <p className='text-2xl mb-2 flex justify-start'>Q2: Can I sign a confidentiality agreement with Decademia?</p>
                    </div>
                    <div>
                        <p>Yes, we are happy to sign a confidentiality agreement.</p>
                    </div>
                </div>

                <div className='m-2 p-2 '>
                    <div className='flex items-center justify-start mt-5'>
                        <p className='text-2xl mb-2 flex justify-start'>Q3: What interactions I can have with the investors and researchers on your platform?</p>
                    </div>
                    <div>
                        <p>Investors and other interested parties such as collaborators are able to reach out to you if they are interested in your research project. By providing your preferred path of communication (e.g. email, phone), interested parties can directly get in touch with you.</p>
                    </div>
                </div>

                <div className='m-2 p-2 '>
                    <div className='flex items-center justify-start mt-5'>
                        <p className='text-2xl mb-2 flex justify-start'>Q4: How will the investor be convinced to acquire my data if it is not visible? </p>
                    </div>
                    <div>
                        <p> Data can be partially and sequentially shared given a non-disclosure agreement is signed with the interested party. Decademia is happy to support you in that process.</p>
                    </div>
                </div>

                <div className='m-2 p-2 '>
                    <div className='flex items-center justify-start mt-5'>
                        <p className='text-2xl mb-2 flex justify-start'>Q5: When a party purchases my IP-NFT can they resell it for higher prices?How will I benefit from this? </p>
                    </div>
                    <div>
                        <p>Yes, the IP-NFT can be resold by your investor at any point in time.</p>
                    </div>
                </div>


            </div>


        </div>
    )
}

export default ProjectsubFaq