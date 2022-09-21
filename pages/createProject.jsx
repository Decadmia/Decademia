import React from 'react'
import { useState } from 'react';
import Link from 'next/link';

function createProject(projectUrl) {
    const [name, setName] = useState('');
    const [summary, setSummary] = useState('');
    const [clinicalStage, setclinicalStage] = useState('');
    const [therapeuticArea, settherapeuticArea] = useState('');
    const [patientStatus, setpatientStatus] = useState('');
    const [country, setCountry] = useState('');

    const handleSubmit = () => {
        setName('');
        setSummary('');
        setclinicalStage('');
        settherapeuticArea('');
        setpatientStatus('');
        setCountry('');
    };

    return (

        <div className=' absolute left-10 mt-20 right-5 m-auto pl-20 flex flex-col w-2/3  rounded-md decoration'>
            <h2 className='relative mb-3 hover:underline'>Create a new Project </h2>
           
            <div className='mt-5 col-span-2 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
                <div className='relative flex flex-col'>
                    <h2 className='text-2xl text-slate-400 text-center font-thin'> <span className=' relative top-2 text-centre justify-center'> **</span>  This information is used to give investiors the brief overview of your project <span className='relative top-2 text-centre justify-center'> **</span> </h2>
                </div>
                <h2 className='mb-4 mt-10'> Basic Information </h2>
                <div className='p-4'>
                    <form
                        onSubmit={handleSubmit}
                        action='https://getform.io/f/08ebcd37-f5b5-45be-8c13-714f011ce060'
                        method='POST'
                    >

                        <div className='flex flex-col'>
                            <label className='uppercase text-md text-slate-400 py-2'> Project Name * </label>
                            
                            <input
                                className='border-2 rounded-lg p-3  text-slate-400 flex border-gray-300'
                                type='text'
                                name='name'
                                value={name}
                                placeholder='Discovering Novel Autophagy Activation'
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>

                        <div className='flex flex-col py-2'>
                            <label className='uppercase  text-slate-400 text-md py-2'> Summary * </label>
                            <p className=' text-slate-400 text-sm py-2' >Brief summary for your project. URLs are hyperlinked.</p>
                            <textarea
                                className='border-2 rounded-lg p-3 border-gray-300'
                                rows='6'
                                name='summary'
                                value={summary}
                                onChange={(e) => setMessage(e.target.value)}
                            ></textarea>
                        </div>

                        <div className='flex flex-col py-2'>
                            <label className='uppercase  text-slate-400 text-md py-2'>Clinical Stage *</label>
                            <input
                                className='border-2 rounded-lg p-3 flex border-gray-300'
                                type='text'
                                name='clinicalStage'
                                value={clinicalStage}
                                placeholder='Please Select One'
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className='flex flex-col py-2'>
                            <label className='uppercase  text-slate-400 text-md py-2'>Therapeutic Area *</label>
                            <input
                                className='border-2 rounded-lg p-3 flex border-gray-300'
                                type='text'
                                name='TherapeuticArea'
                                value={therapeuticArea}
                                placeholder='Select or search for areas...'
                                onChange={(e) => setSubject(e.target.value)}
                            />
                        </div>
                        
                        <div className='flex flex-col py-2'>
                            <label className='uppercase  text-slate-400 text-md py-2'>Patent Status *</label>
                            <input
                                className='border-2 rounded-lg p-3 flex border-gray-300'
                                type='text'
                                name='PatientStatus'
                                value={patientStatus}
                                placeholder='Please select one'
                                onChange={(e) => setSubject(e.target.value)}
                            />
                        </div>

                        <div className='flex flex-col py-2'>
                            <label className='uppercase  text-slate-400 text-md py-2'>Country *</label>
                            <input
                                className='border-2 rounded-lg p-3 flex border-gray-300'
                                type='text'
                                name='Country'
                                value={country}
                                placeholder='Please select one'
                                onChange={(e) => setSubject(e.target.value)}
                            />
                        </div>


                        <button className='rounded-full p-4 text-gray-100 mt-4'>
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

export default createProject