import React from 'react'

const Contact = () => {
    return (
        <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center py-2 px-4'>
            <form method='POST' action={process.env.GETFORM} className='flex py-4 flex-col max-w-[600px] w-full'>
                <div className='pb-0'>
                    <p className='text-4xl font-bold inline my-2 border-b-4 border-[#7abe41] text-gray-300'>Contact</p>
                    <p className='text-gray-300  py-2'> Fill & submit the form below or send me an email - kirkrepository@gmail.com</p>
                </div>
                <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Enter Your Name' name='name' required/>
                <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
                <textarea className='bg-[#ccd6f6] p-2' name="message" rows="8" placeholder='Message' required minLength='3' maxLength='100'></textarea>
                <button className='text-white border-2 hover:bg-[#7abe41] hover:border-[#7abe41] px-4 py-2 my-4 mx-auto flex items-center'>Let&apos;s Collaborate</button>
            </form>
        </div>
    )
}

export default Contact