import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles';
import Image from 'next/image'
import Link from 'next/link';
import { PageInfo } from '../typings';
import { urlFor } from '../sanity'

type Props = {
    pageInfo: PageInfo
}

const Hero = ({pageInfo}: Props) => {
    console.log(pageInfo)
    const [text, count] = useTypewriter ({
        words: [
            `Hi, my name is ${pageInfo?.name}`,
            'Developer', 
            'Designer', 
            'Creator'
        ],
        loop: true,
        delaySpeed: 2000,
    });
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
        {/* <BackgroundCircles /> */}
        <Image 
            className='relative rounded-full h-32 w-32 mx-auto object-cover'
            src={urlFor(pageInfo?.profilePic).url()}
            alt=''
            width={250}
            height={250}
        />
        <div className='z-20'>
            <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px] ml-[7.5px]'>{pageInfo?.role}</h2>
            <h1 className='text-4xl lg:text-5xl'>
                <span className='mr-2'>{text}</span>
                <Cursor cursorColor='#F7AB0A' />
            </h1>
            <div className='pt-5'>
                <Link href='#about'><button className='heroButton'>About</button></Link>
                <Link href='#experience'><button className='heroButton'>Experience</button></Link>
                <Link href='#skills'><button className='heroButton'>Skills</button></Link>
                <Link href='#projects'><button className='heroButton'>Projects</button></Link>
            </div>
        </div>
    </div>
  )
}

export default Hero