import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import proj2 from "../public/assets/projects/proj2.png"

const ProjectDetails = ({ heading, title, type, researcher, projDesc, fundedAmt, fundedBy }) => {
    return (
        <div className='absolute left-20 mt-20 right-5 m-auto pl-20 flex flex-col w-full  rounded-md decoration'>
            <h1 className='flex justify-start text-slate-700 uppercase text-wider text-gap-2'>Discovering Novel Autophagy Activators</h1>
            <h3 className='rounded-full  bg-blue-100 text-green-800 w-24 p-2 text-center mt-4 mb-2 '>type </h3>

            <div className=' justify-start items-center mt-4 flex flex-col  w-2/3'>
                <p className='text-xl mt-2 text-slate-400 tracking-wide mb-2'> Ageing is associated with the decline in the capacity of the autophagy pathway to degrade dysfunctional and damaging cellular components, such as protein aggregates and mitochondria. Dysfunctional autophagy, in turn, undermines other cellular functions including DNA repair, metabolism and survival. Therefore, activation of autophagy is considered a promising therapeutic approach to combat ageing and age-related diseases.</p>
                <br />
            </div>

            <div className=' w-2/3 ' >
                <Image src={proj2} className="rounded-2xl " />
            </div>

            <div className='p-2  mt-2'>
                <div className='mt-4'>
                    <hr className='w-2/3' />
                    <h2 className='text-slate-700 text-4xl mt-3 '>
                        Background
                    </h2>
                    <p className='text-slate-600 mt-2 text-xl mb-4'> Problem</p>
                    <p className='text-xl mt-2 mb-4 text-slate-400 w-2/3 tracking-wide '>Lysosomal dysfunction is an important factor contributing to the reduction of autophagy during aging. As dysfunctional lysosomes interfere with autophagy at the terminal stage, stimulation of autophagy initiation can be ineffective to rescue autophagy. Additionally, current methods to measure autophagy are rather unreliable, slow, and with complicated readouts, making the screening of compounds that promote autophagy less efficient.</p>

                    <p className='text-slate-600 mt-2 text-xl mb-4'>Opportunity</p>
                    <p className='text-xl mt-2 mb-4 text-slate-400 w-2/3 tracking-wide '>Lysosomal dysfunction is an important factor contributing to the reduction of autophagy during aging. As dysfunctional lysosomes interfere with autophagy at the terminal stage, stimulation of autophagy initiation can be ineffective to rescue autophagy. Additionally, current methods to measure autophagy are rather unreliable, slow, and with complicated readouts, making the screening of compounds that promote autophagy less efficient.</p>
                    <p className='text-xl mt-1 mb-4 text-slate-400 w-2/3 tracking-wide '>Lysosomal dysfunction is an important factor contributing to the reduction of autophagy during aging. As dysfunctional lysosomes interfere with autophagy at the terminal stage, stimulation of autophagy initiation can be ineffective to rescue autophagy. </p>

                    <p className='text-slate-600 mt-2 text-xl mb-4'>Highlights</p>
                    <ul className='text-md mt-2 mb-2 text-slate-400 w-2/3 tracking-wide'>
                        <li>-Assay with easy readout, decent throughput, good controls and targeting one of the most important processes in cellular aging (autophagy)</li>
                        <li>-Assay with easy readout, decent throughput, good controls and targeting one of the most important processes in cellular aging (autophagy)</li>
                        <li>-Assay with easy readout, decent throughput, good controls and targeting one of the most important processes in cellular aging (autophagy)</li>
                        <li>-Assay with easy readout, decent throughput, good controls and targeting one of the most important processes in cellular aging (autophagy)</li>
                    </ul>
                </div>

            </div>
            <hr className='w-2/3' />

            <div className='relative grid mt-4 justify-start items-center'>
                <h2 className='mb-4 text-3xl  text-slate-700'>Project details</h2>

                <p className='w-2/3 mb-2 text-slate-500'>
                    Extensive work leading to this proposal identified a unique phenotype of cells with dysfunctional autophagy in tissue culture (Autophagy promotes cell survival by maintaining NAD(H) levels | Research Square, https://www.biorxiv.org/content/10.1101/2020.01.31.928424v1, under revision for Nat Cell Biol). In normal glucose-containing medium autophagy KOs upregulate glycolysis at the expense of mitochondrial respiration. When glucose is replaced with galactose, which results in zero net ATP production through glycolysis and cells are forced to respire, autophagy deficient cells become apoptotic. This phenotype is common for Npc1 KO MEFs where autophagosome maturation is impaired as well as for cells with the loss of core autophagy genes (Atg5, Atg7 and FIP200/Rb1cc1).
                </p>

                <p className='w-2/3 mb-2 text-slate-500'>
                    Extensive work leading to this proposal identified a unique phenotype of cells with dysfunctional autophagy in tissue culture (Autophagy promotes cell survival by maintaining NAD(H) levels | Research Square, https://www.biorxiv.org/content/10.1101/2020.01.31.928424v1, under revision for Nat Cell Biol). In normal glucose-containing medium autophagy KOs upregulate glycolysis at the expense of mitochondrial respiration. When glucose is replaced with galactose, which results in zero net ATP production through glycolysis and cells are forced to respire, autophagy deficient cells become apoptotic. This phenotype is common for Npc1 KO MEFs where autophagosome maturation is impaired as well as for cells with the loss of core autophagy genes (Atg5, Atg7 and FIP200/Rb1cc1).
                </p>

                <p className='w-2/3 mb-2 text-slate-500'>
                    Extensive work leading to this proposal identified a unique phenotype of cells with dysfunctional autophagy in tissue culture (Autophagy promotes cell survival by maintaining NAD(H) levels | Research Square, https://www.biorxiv.org/content/10.1101/2020.01.31.928424v1, under revision for Nat Cell Biol). In normal glucose-containing medium autophagy KOs upregulate glycolysis at the expense of mitochondrial respiration. When glucose is replaced with galactose, which results in zero net ATP production through glycolysis and cells are forced to respire, autophagy deficient cells become apoptotic. This phenotype is common for Npc1 KO MEFs where autophagosome maturation is impaired as well as for cells with the loss of core autophagy genes (Atg5, Atg7 and FIP200/Rb1cc1).
                </p>

                <p className='w-2/3 mb-2 text-slate-500 '>
                    Extensive work leading to this proposal identified a unique phenotype of cells with dysfunctional autophagy in tissue culture (Autophagy promotes cell survival by maintaining NAD(H) levels | Research Square, https://www.biorxiv.org/content/10.1101/2020.01.31.928424v1, under revision for Nat Cell Biol). In normal glucose-containing medium autophagy KOs upregulate glycolysis at the expense of mitochondrial respiration. When glucose is replaced with galactose, which results in zero net ATP production through glycolysis and cells are forced to respire, autophagy deficient cells become apoptotic. This phenotype is common for Npc1 KO MEFs where autophagosome maturation is impaired as well as for cells with the loss of core autophagy genes (Atg5, Atg7 and FIP200/Rb1cc1).
                </p>

            </div>
            <hr className='w-2/3' />



        </div>
    )
}

export default ProjectDetails