import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

const ProjectItem = ({ title, backgroundImg, projectUrl, projDesc, fundedAmt, fundedBy }) => {
  return (
    <div className='items-center justify-center cursor-pointer w-full shadow-xl shadow-gray-400 rounded-lg p-3 group '>
      <Image className='rounded-md bg-contain bg-center' src={backgroundImg} alt='/' />
      <div className='flex justify-start '>
        <h3 className='text-2xl text-gray-900 tracking-wider hover:underline '>{title}</h3>
      </div>

      <div className=' justify-start items-center  '>
        <p className='text-xl mt-2 text-slate-400 tracking-wide '>{projDesc}</p>
        <br />
        <Link href={projectUrl}>
          <button className="text-center py-3 w-full rounded-lg  text-gray-700 font-bold text-xl cursor-pointer">
            More Info
          </button>
        </Link>
      </div>
      <br />

      <div className='relative grid mt-1 justify-start items-center  '>
        <h3 className='text-xl text-gray-900  text-center'>{fundedAmt}</h3>
        <p> {fundedBy}</p>
      </div>

    </div>
  )
}

export default ProjectItem