import React from 'react'
import { MapPinIcon, EnvelopeIcon, PhoneIcon} from '@heroicons/react/20/solid'
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
    name: string,
    email: string,
    subject: string,
    message: string,
  };

type Props = {}

const Contact = (props: Props) => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = formData => { 
        window.location.href = `mailto:dgregpm@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name},
         ${formData.message} (${formData.email})`;
        console.log(formData) 
    };
  
  return (
    <div className='h-screen flex relative flex-col text-center md:text-left 
    md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='sectionTitle'>Contact Me</h3>
        <div className='flex flex-col space-y-10'>
            <h4 className='text-4xl font-semibold text-center'>
                I have got just what you need.{' '}
                <span className='decoration-[#F7AB0A]/50 underline'>Lets Talk</span>
            </h4>

            <div className='space-y-10'>
                <div className='flex items-center space-x-5 justify-center'>
                    <PhoneIcon className='text-primary h-7 w-7 animate-pulse'/>
                    <p>+1(954)-367-9221</p>
                </div>
                <div className='flex items-center space-x-5 justify-center'>
                    <EnvelopeIcon className='text-primary h-7 w-7 animate-pulse'/>
                    <p>dgregpm@gmail.com</p>
                </div>
                <div className='flex items-center space-x-5 justify-center'>
                    <MapPinIcon className='text-primary h-7 w-7 animate-pulse'/>
                    <p>Pembroke Pines, FL</p>
                </div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 mx-auto'>
                <div className='flex space-x-2'>
                    <input {...register('name')} placeholder='Name' className='contactInput' type="text" />
                    <input {...register('email')} placeholder='Email' className='contactInput' type="email" />
                </div>
                <input {...register('subject')} placeholder="Subject" className='contactInput' type="text" />
                <textarea {...register('message')} placeholder='Message' className='contactInput'/>
                <button className='bg-primary py-5 px-10 rounded-md text-black font-bold'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Contact