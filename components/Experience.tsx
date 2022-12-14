import React from 'react'
import ExperienceCard from './ExperienceCard'
import { motion } from 'framer-motion'
import { Experience } from '../typings'

type Props = {
  experiences: Experience[]
}

const Experience = ({experiences}: Props) => {
  return (
    <div className='h-screen flex relative overflow-hidden flex-col text-left  
    max-w-full px-10 justify-evenly mx-auto items-center'>
        <motion.h3 
            initial={{opacity:0}}
            whileInView={{opacity:1}}
            transition={{duration: 1.5}}
            className='uppercase tracking-[20px] ml-[10px] text-gray-500 text-2xl mt-24 '>
            Experience
        </motion.h3>
        <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scroll-fresh">
            {experiences?.map((experience) => (
              <ExperienceCard key={experience._id} experience={experience} />
            ))}

        </div>
    </div>
  )
}

export default Experience