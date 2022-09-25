import React from 'react'
import { useState } from 'react';
import Link from 'next/link';
import ResearchData from "../components/researchData"
import { Web3Storage} from 'web3.storage'


var projecDetailsValues = {}

var imageData = {}

function CreateProject() {
    const [projectDetails, setprojectDetails] = useState({
        name: " ", summary: " ", clinicalStage: " ", therapeuticArea: " ", patientStatus: " ",
        country: " ", image: " "
    });
    let name, value;

    const handleInputs = async (e) => {
        e.preventDefault();
        name = e.target.name;
        value = e.target.value;
        setprojectDetails({ ...projectDetails, [name]: value })
        projecDetailsValues = { ...projectDetails, [name]: value };
         
    }

    const fileselectedhandler = e => {
        image = (e.target.files[0]);
        console.log(image);
        // console.log(imageData); 
    }

   
    async function callbackFunction(event) {
        event.preventDefault();
        ResearchData(projectDetails)
        var contents = JSON.stringify(projectDetails);
        var blob = new Blob([contents], { type: 'text/plain' });
        var file = new File([blob], "foo.txt", { type: "text/plain" });


        const token = process.env.NEXT_PUBLIC_TOKEN;
        const storage = new Web3Storage({ token });

        var cid = await storage.put([file]);
        console.log(cid);
    
    }


    return (

        <div className=' absolute left-10 mt-20 right-5 m-auto pl-20 flex flex-col w-2/3  rounded-md decoration'>
            <h2 className='relative mb-3 hover:underline'>Create a new Project </h2>

            <div className='mt-5 col-span-2 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
                <div className='relative flex flex-col'>
                    <h2 className='text-2xl text-slate-400 text-center font-thin'> <span className=' relative top-2 text-centre justify-center'> **</span>  This information is used to give investiors the brief overview of your project <span className='relative top-2 text-centre justify-center'> **</span> </h2>
                </div>
                <h2 className='mb-4 mt-10'> Basic Information </h2>
                <div className='p-4'>
                    <form id='researchData'>

                        <div className='flex flex-col'>
                            <label className='uppercase text-md text-slate-400 py-2'> Project Name * </label>
                            <input
                                className='border-2 rounded-lg p-3  text-slate-400 flex border-gray-300'
                                type='text'
                                name='name'
                                id='name'
                                value={projectDetails.name}
                                placeholder='Discovering Novel Autophagy Activation'
                                onChange={handleInputs}
                                autoComplete="off"
                            />
                        </div>

                        <div className='flex flex-col py-2'>
                            <label className='uppercase  text-slate-400 text-md py-2'> Summary * </label>
                            <p className=' text-slate-400 text-sm py-2' >Brief summary for your project. URLs are hyperlinked.</p>
                            <textarea
                                className='border-2 rounded-lg p-3 border-gray-300'
                                rows='6'
                                id='summary'
                                name='summary'
                                value={projectDetails.summary}
                                onChange={handleInputs}
                                autoComplete="off"
                            ></textarea>
                        </div>

                        <div className='flex flex-col py-2'>
                            <label className='uppercase  text-slate-400 text-md py-2'>Clinical Stage *</label>
                            <input
                                className='border-2 rounded-lg p-3 flex border-gray-300'
                                type='text'
                                id='clinicalStage'
                                name='clinicalStage'
                                value={projectDetails.clinicalStage}
                                placeholder='Please Select One'
                                onChange={handleInputs}
                                autoComplete="off"
                            />
                        </div>
                        <div className='flex flex-col py-2'>
                            <label className='uppercase  text-slate-400 text-md py-2'>Therapeutic Area *</label>
                            <input
                                className='border-2 rounded-lg p-3  text-slate-400 flex border-gray-300'
                                type='text'
                                name='therapeuticArea'
                                id='therapeuticArea'
                                value={projectDetails.therapeuticArea}
                                placeholder='Select or search for areas...'
                                onChange={handleInputs}
                                autoComplete="off"
                            />
                        </div>

                        <div className='flex flex-col py-2'>
                            <label className='uppercase  text-slate-400 text-md py-2'>Patent Status *</label>
                            <input
                                className='border-2 rounded-lg p-3  text-slate-400 flex border-gray-300'
                                type='text'
                                name='patientStatus'
                                id='patientStatus'
                                value={projectDetails.patientStatus}
                                placeholder='Please select one'
                                onChange={handleInputs}
                                autoComplete="off"
                            />
                        </div>

                        <div className='flex flex-col py-2'>
                            <label className='uppercase  text-slate-400 text-md py-2'>Country *</label>
                            <input
                                className='border-2 rounded-lg p-3  text-slate-400 flex border-gray-300'
                                type='text'
                                name='country'
                                id='country'
                                value={projectDetails.country}
                                placeholder='Please select one'
                                onChange={handleInputs}
                                autoComplete="off"
                            />
                        </div>
                        <div className='flex flex-col py-2'>
                            <label htmlFor='image' className='uppercase  text-slate-400 text-md py-2'>Choose a file </label>
                            <input
                                className='border-2 rounded-lg p-3  text-slate-400 flex border-gray-300'
                                type='file'
                                name='image'
                                id='image'
                                // value={projectDetails.country}
                                // placeholder='Please select one'
                                onChange={fileselectedhandler}
                                autoComplete="off"
                            />
                           
                        </div>
                        
                         

                        <button className='bg-gradient-to-r from-[#a200d6] to-[#709dff]  rounded-full p-4 text-gray-900 mt-4' type="submit" onClick={callbackFunction}>
                            save & continue
                        </button>
                    </form>
                </div>
                <Link href="/">
                    <p className="relative left-3 rounded-full mt-4 cursor-pointer text-xl text-center justify-center bg-purple-200 w-24">Back</p>
                </Link>
            </div>
        </div>
    )
}


export default CreateProject