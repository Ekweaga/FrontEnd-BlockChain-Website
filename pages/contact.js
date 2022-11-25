import React from 'react'
import Navbar from './components/Navbar'
import Image from "next/image"

function contact() {
  return (
    <>
        <div className='py-[30px]'><Navbar/></div>


        <div className="mt-[300px] ">
            <div className='relative'>
                <div>
            <Image src="/Deco.png" width={1500} height={20}></Image></div>
            <div className="absolute -top-[250px] left-[230px] flex items-center justify-center gap-[0px]">
                <div className='w-[380px] h-[650px] bg-[#424242] border-[1px] border-purple-700 rounded-2xl flex items-center flex-col gap-[30px] p-4  bg-opacity-50 shadow'>
                <h2 className='text-1xl text-[#E1BEE7] text-center font-bold mt-[10px] text-3xl '>Contact Us</h2>
                <p className='text-center text-sm'> Cryptocurrency trading is the act of speculating on Cryptocurrency price movements via ange </p>
              
                <form className='flex flex-col items-center gap-[30px]'>
                    <div>
                        <input type="text" placeholder='What your name?' className=' text-sm bg-[#555555] w-[350px] px-2  border-[1px] border-t-0 border-r-0 border-l-0 border-b-yellow-500 py-[5px] focus:outline-none bg-opacity-50'/>
                    </div>
                    <div>
                        <input type="email" placeholder='What your email?' className='bg-[#555555] w-[350px] px-2 py-[5px] focus:outline-none text-sm bg-opacity-50'/>
                    </div>

                    <div>
                        <input type="email" placeholder='What your phone number?' className='bg-[#555555] w-[350px] px-2  focus:outline-none text-sm bg-opacity-50 border-[1px] border-t-0 border-r-0 border-l-0 border-b-yellow-500 py-[5px]'/>
                    </div>

                    <div>
                        <input type="email" placeholder='What your company?' className='bg-[#555555] w-[350px] px-2 py-[5px] focus:outline-none text-sm bg-opacity-50'/>
                    </div>
                    <div>
                      <textarea rows="3" cols="40" className='bg-opacity-50 bg-[#555555] border-[1px] border-t-0 border-r-0 border-l-0 border-white py-[5px]'></textarea>
                    </div>
                </form>
                <div className='flex justify-between items-center gap-[50px] '>
                    <div className='flex gap-[10px] '>
                        <input type="checkbox" className='checked:bg-yellow-700' />
                    <p className='text-sm '>I have read and accept the Terms of Service Policy </p>
                    </div>
                    </div>

                <div className='flex justify-between items-center gap-[50px] w-[350px] '>
                 
                    <button className='bg-[#9C27B0] px-2 w-[350px] rounded-[5px] text-sm h-[26px]'>SEND MESSAGE</button>
                </div>

                </div>

                <div className='w-[350px] h-[400px] bg-[#C0C0C0] bg-opacity-50 px-3' style={{borderTopRightRadius:'35px',borderBottomRightRadius:'35px'}}>

                  <div className='w-[300px] h-[100px] bg-[#424242] rounded-[10px] mt-[70px] ml-[10px] p-4'>
                    <h3 className='font-bold text-sm mb-[10px]'>Head Quater</h3>
                    <div className='flex gap-[20px] mb-[10px]'>
                      <span className='text-sm'>+234 81488 37221</span>
                      <span className="text-sm">hikay133@gmail.com</span>
                    </div>

                    <div className='flex gap-[20px]'>
                      <span className='text-sm'>Futa Uni Akure NG Ondo state</span>
                     
                    </div>

                  </div>

                </div>
          
            </div>
            </div>


        </div>
    </>
  )
}

export default contact