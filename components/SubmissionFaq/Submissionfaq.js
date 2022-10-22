import React, { useState } from 'react'
import MySubmissionFaq from './mysubmissionfaq';

import { questions } from './questions'


const Submissionfaq = () => {
    const [data, setData] = useState(questions);

    return (
        <div>
            <section className='relative mt-2 justify-start '>
                <h1 className='text-4xl text-center'>Project submission FAQ's?</h1>
                {
                    data.map((currElem) => {
                        const { id } = currElem;
                        return <MySubmissionFaq key={id} {...currElem} />

                    })
                }
            </section>
        </div>
    )
}

export default Submissionfaq