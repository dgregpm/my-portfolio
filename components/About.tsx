import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'

type Props = {}

const About = (props: Props) => {
  return (
    <div className='flex flex-col relative h-screen text-center md:text-left 
            md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        
        <motion.h3 
        initial={{
            opacity: 0
        }}
        whileInView={{
            opacity: 1
        }}
        transition={{ 
            duration: 1.5
        }}
        className='absolute top-24 uppercase tracking-[20px] ml-[10px] text-gray-500 text-2xl'>About</motion.h3>
        
        <motion.div
            initial={{
                x:-200,
                opacity:0
            }}
            transition={{
                duration:1.2
            }}
            whileInView={{
                opacity:1,
                x:0
            }}
            viewport={{
                once:false
            }}
            className='flex-shrink-0 max-w-xl'    
        >
            <Image 
                src='/about.jpg'
                alt=''
                width={1280}
                height={720}
                className='-mb-20 md:mb-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:object-contain xl:w-auto xl:h-auto' 
            />
        </motion.div>

        <motion.div 
            initial={{
                opacity: 0
            }}
            whileInView={{
                opacity: 1
            }}
            transition={{ 
                duration: 1.5
            }}
            className='space-y-10 px-0 md:px-10'>   
            <h4 className='text-4xl font-semibold'>Here is a <span className='underline decoration-[#f7AB0A]/50'>little</span> background</h4>
            <p className='text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit nihil ducimus architecto quod iure ratione, alias soluta 
                inventore ipsam aliquid voluptatum mollitia nostrum dicta exercitationem ab provident, esse facilis commodi.</p>
        </motion.div>
    </div>
  )
}

export default About