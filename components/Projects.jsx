import React from 'react';
import proj1 from '../public/assets/projects/proj1.gif'
import ProjectItem from './ProjectItem';
import proj2 from "../public/assets/projects/proj2.png"
import proj4 from "../public/assets/projects/proj4.gif"
import proj5 from "../public/assets/projects/proj6.gif"
import ResearchProjs from './ResearchProjs';


const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className=''>
        <h2>.</h2>
      </div>
      <div className='relative mx-auto mt-8 flex justify-center items-center'>
        <h1>Decademia </h1>
      </div>
      <div className='mx-auto  flex justify-center items-center'>
        <h2>Discover Research Projects </h2>
      </div>

      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <div className='flex'>
          <div className='flex m-8 p-2  w-1/3'>
            <input
              className=' border-2 rounded-full p-2 flex border-gray-300 '
              type='text'
              name='search'
              placeholder="Search Product"
            />
          </div>
          <div className='relative left-8 flex  m-5 p-2  w-1/5'>

            <input
              className='border-2 rounded-full p-3 m-3 flex border-gray-300'
              type='text'
              name='Sort by Newest first'
              value='Sort by Newest first'
              
            />
            <input
              className='border-2 rounded-full p-3 m-3 flex border-gray-300'
              type='text'
              name='All Therapeutic Areas'
              value="All Therapeutic Areas"
            /> <input
              className='border-2 rounded-full p-3 m-3 flex border-gray-300 box-decoration-none'
              type='text'
              name='All Stages'
              value="All Stages"
            />

          </div>
        </div>
        <hr />
        <div className='p-2'>
          <h1 className='text-xl ]'>
          </h1>
          <h2 className='py-4 tracking-widest  text-[#005071]'>Recently Funded  Projects</h2>
        </div>

        <div className='grid md:grid-cols-3 w-full  gap-6'>
          <ProjectItem
            title='Discovering Novel Autophagy Activators Ageing'
            backgroundImg={proj1}
            projectUrl='https://www.dreamdateworld.com/'
            projDesc="Ageing is associated with the decline in the capacity of the autophagy pathway to degrade dysfunctional. "
            fundedAmt="$23,576"
            fundedBy="Decademia"
          />

          <ProjectItem
            title='Discovering Novel Autophagy Activators Ageing'
            backgroundImg={proj1}
            projectUrl='https://www.dreamdateworld.com/'
            projDesc="Ageing is associated with the decline in the capacity of the autophagy pathway to degrade dysfunctional. "
            fundedAmt="$23,576"
            fundedBy="Decademia"
          /><ProjectItem
            title='Discovering Novel Autophagy Activators Ageing'
            backgroundImg={proj4}
            projectUrl='https://www.dreamdateworld.com/'
            projDesc="Ageing is associated with the decline in the capacity of the autophagy pathway to degrade dysfunctional. "
            fundedAmt="$23,576"
            fundedBy="Decademia"
          /><ProjectItem
            title='Discovering Novel Autophagy Activators Ageing'
            backgroundImg={proj4}
            projectUrl='https://www.dreamdateworld.com/'
            projDesc="Ageing is associated with the decline in the capacity of the autophagy pathway to degrade dysfunctional. "
            fundedAmt="$23,576"
            fundedBy="Decademia"
          /><ProjectItem
            title='Discovering Novel Autophagy Activators Ageing'
            backgroundImg={proj1}
            projectUrl='https://www.dreamdateworld.com/'
            projDesc="Ageing is associated with the decline in the capacity of the autophagy pathway to degrade dysfunctional. "
            fundedAmt="$23,576"
            fundedBy="Decademia"
          /><ProjectItem
            title='Discovering Novel Autophagy Activators Ageing'
            backgroundImg={proj4}
            projectUrl='https://www.dreamdateworld.com/'
            projDesc="Ageing is associated with the decline in the capacity of the autophagy pathway to degrade dysfunctional. "
            fundedAmt="$23,576"
            fundedBy="Decademia"
          />
        </div>

        <div >
          <hr />
          <div className='p-2 mt-8'>
            <hr />
            <h1 className='text-xl ]'>
            </h1>
            <h2 className='py-4 tracking-widest  text-[#005071]'>All Research Projects</h2>
          </div>

          <div className='grid md:grid-cols-4 w-full  gap-6'>
            <ResearchProjs
              heading="Clinical Trials"
              title="Discovering Novel Autophagy Activators Ageing"
              type="Liver Disease"
              projDesc="Ageing is associated with the decline in the capacity of the autophagy pathway to degrade dysfunctional. "
              researcher="Nike Ainsile"
              fundedAmt="$ 23,890"
            />
            <ResearchProjs
              heading="Clinical Trials"
              title="Discovering Novel Autophagy Activators Ageing"
              type="Liver Disease"
              projDesc="Ageing is associated with the decline in the capacity of the autophagy pathway to degrade dysfunctional. "
              researcher="Nike Ainsile"
              fundedAmt="$ 23,890"
            />
            <ResearchProjs
              heading="Clinical Trials"
              title="Discovering Novel Autophagy Activators Ageing"
              type="Liver Disease"
              projDesc="Ageing is associated with the decline in the capacity of the autophagy pathway to degrade dysfunctional. "
              researcher="Nike Ainsile"
              fundedAmt="$ 23,890"
            />
            <ResearchProjs
              heading="Clinical Trials"
              title="Discovering Novel Autophagy Activators Ageing"
              type="Liver Disease"
              projDesc="Ageing is associated with the decline in the capacity of the autophagy pathway to degrade dysfunctional. "
              researcher="Nike Ainsile"
              fundedAmt="$ 23,890"
            />
            <ResearchProjs
              heading="Clinical Trials"
              title="Discovering Novel Autophagy Activators Ageing"
              type="Liver Disease"
              projDesc="Ageing is associated with the decline in the capacity of the autophagy pathway to degrade dysfunctional. "
              researcher="Nike Ainsile"
              fundedAmt="$ 23,890"
            />
            <ResearchProjs
              heading="Clinical Trials"
              title="Discovering Novel Autophagy Activators Ageing"
              type="Liver Disease"
              projDesc="Ageing is associated with the decline in the capacity of the autophagy pathway to degrade dysfunctional. "
              researcher="Nike Ainsile"
              fundedAmt="$ 23,890"
            />
            <ResearchProjs
              heading="Clinical Trials"
              title="Discovering Novel Autophagy Activators Ageing"
              type="Liver Disease"
              projDesc="Ageing is associated with the decline in the capacity of the autophagy pathway to degrade dysfunctional. "
              researcher="Nike Ainsile"
              fundedAmt="$ 23,890"
            />
            <ResearchProjs
              heading="Clinical Trials"
              title="Discovering Novel Autophagy Activators Ageing"
              type="Liver Disease"
              projDesc="Ageing is associated with the decline in the capacity of the autophagy pathway to degrade dysfunctional. "
              researcher="Nike Ainsile"
              fundedAmt="$ 23,890"
            />
            <ResearchProjs
              heading="Clinical Trials"
              title="Discovering Novel Autophagy Activators Ageing"
              type="Liver Disease"
              projDesc="Ageing is associated with the decline in the capacity of the autophagy pathway to degrade dysfunctional. "
              researcher="Nike Ainsile"
              fundedAmt="$ 23,890"
            />


          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;





