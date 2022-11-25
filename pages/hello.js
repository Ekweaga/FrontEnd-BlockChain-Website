import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

function hello() {
  return (
    <>
      <nav className='flex justify-around p-[30px] h-[40px] items-center'>
    <div>
       <Link href="/"> <Image src="/Landsacpe.png" width={150} height={50}/></Link>
    </div>


    <div className='flex gap-[20px] items-center justify-center'>
        <div><Link href="/login">LOGIN</Link></div>
        <div><button className='bg-[#FFA000] p-1 rounded flex items-center justify-center w-[110px] shadow'><Link href="/signup">REGISTER</Link></button></div>
        <Image src="/android-settings.png" width={30} height={20}></Image>
    </div>
   </nav>


   <div className="mt-[100px] ">
                <div className='relative'>
                    <div>
                <Image src="/Deco.png" width={1500} height={20}></Image></div>
                <div className="absolute top-0 left-[30%] flex items-center justify-center ">
                    <div className=' h-[450px]  '>
                    <h2 className=' text-[#E1BEE7] text-center font-bold mt-[30px] text-3xl mb-[20px]'>Say Hello To Us</h2>
                    <p className='text-center text-sm w-[550px] mb-[20px]'> Cryptocurrency trading is the act of speculating on Cryptocurrency price  the act of tradingCryptocurrency is the act of tradingmovements via ange </p>
                    
                
                    <form className='flex flex-col items-center gap-[30px] mt-[20px]'>
                        <div className='flex gap-[20px]'>
                        <input type="text" placeholder='What your name?' className=' text-sm bg-[#555555] w-[300px] px-2 py-[5px] focus:outline-none bg-opacity-50'/>
                        <input type="text" placeholder='What your email?' className=' text-sm bg-[#555555] w-[300px] px-2  border-[1px] border-t-0 border-r-0 border-l-0 border-b-yellow-500 py-[5px] focus:outline-none bg-opacity-50'/>
                        </div>

                        <div className='flex gap-[20px]'>
                        <input type="text" placeholder='What your number?' className=' text-sm bg-[#555555] w-[300px] px-2  border-[1px] border-t-0 border-r-0 border-l-0 border-b-yellow-500 py-[5px] focus:outline-none bg-opacity-50'/>
                        <input type="text" placeholder='What your company?' className=' text-sm bg-[#555555] w-[300px] px-2   focus:outline-none bg-opacity-50'/>
                        </div>
                        <div>
                      <textarea rows="3" cols="75" className='bg-opacity-50 bg-[#555555] border-[1px] border-t-0 border-r-0 border-l-0 border-white py-[5px]'></textarea>
                    </div>
                      
                    </form>

                   

                    <div className='flex justify-between mt-[40px]'>
                    <div className='flex gap-[10px] items-center'>
                        <input type="checkbox" className='checked:bg-yellow-700' />
                    <p className='text-sm '>I have read and accept the Terms of Service Policy </p>
                    </div>
                        <button className='bg-[#9C27B0] px-2 w-[150px] rounded-sm text-sm py-2 h-[30px]'>SEND MESSAGE</button>
                    </div>

                    </div>
               
                </div>
                </div>


            </div>
    </>
  )
}

export default hello