import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Skill } from '../typings'
import { urlFor } from '../sanity'

type Props = {
    skill: Skill
    directionLeft?: boolean;
}

const Skill = ( {skill, directionLeft}: Props) => {
  return (
    <motion.div
        initial={{
            x: directionLeft ? -200 : 200
        }}
        transition={{ duration:1}}
        whileInView={{opacity:1, x:0}}
        className='group relative flex items-center gap-x-5 cursor-pointer'
    >
        <Image 
            src={urlFor(skill.image).url()}
            alt=''
            width={100}
            height={100}
            className='rounded-full border border-gray-500 object-fit w-24 h-24 md:w-28 md:h-28 xl:h-32 xl:w-32 
            filter group-hover:grayscale transition duration-300 ease-in-out'
        />
        <div className='rounded-full absolute opacity-0 group-hover:opacity-60 transition duration-300
        ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 z-0'>
            <div className='flex items-center justify-center h-full'>
                <p className='text-3xl font-bold text-black opacity-100'>{skill.progress}%</p>
            </div>
        </div>
        <p>{skill.title}</p>
    </motion.div>
  )
}

export default Skill