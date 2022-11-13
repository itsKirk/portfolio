import github from '../public/github.png'
import html from '../public/html.png'
import javascript from '../public/javascript.png'
import mongo from '../public/mongo.png'
import node from '../public/node.png'
import react from '../public/react.png'
import tailwind from '../public/tailwind.png'
import React from 'react'
import Image from 'next/image'

function Skills() {
    return (
        <div name='skills' className="h-screen text-white w-full bg-[#0a192f]">
            <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
                <div className='py-4'>
                    <p className='text-4xl  text=[#8892b0] font-bold inline border-b-4 border-[#7abe41]'>Skills</p>
                    <p className='py-4'>These are the technologies I have worked with</p>
                </div>
                <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <Image className='w-20 mx-auto' src={react} width={100} height={100} alt='react' />
                        <p className='my-4'>React</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <Image className='w-20 mx-auto' src={html} width={100} height={100} alt='html' />
                        <p className='my-4'>Html</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <Image className='w-20 mx-auto' src={javascript} width={100} height={100} alt='javascript' />
                        <p className='my-4'>Javascript</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <Image className='w-20 mx-auto' src={tailwind} width={100} height={100} alt='tailwind' />
                        <p className='my-4'>Tailwind</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <Image className='w-20 mx-auto' src={node} width={100} height={100} alt='node' />
                        <p className='my-4'>Node</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <Image className='w-20 mx-auto' src={mongo} width={100} height={100} alt='mongo' />
                        <p className='my-4'>Mongo</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills