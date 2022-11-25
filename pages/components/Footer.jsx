import React from 'react'
import Image from "next/image"

function Footer() {
  return (
    <>
      
      <footer className=' text-white   flex-col flex items-center bg-gradient-to-b from-[#583930] to-[#432E47] py-[50px] ' style={{backgroundSize:'cover',borderTopLeftRadius:'500px',borderTopRightRadius:'500px'}}>
      


        <div className='mt-[200px]'>
            <div>
                <div>

                    <h1 className='text-4xl text-[#E1BEE7] text-center'>1 234 567 </h1>
                    <p className='text-[#E1BEE7] text-center'>Users and counting</p>
                    <div className='flex flex-col items-center justify-center mt-[30px]'>
                        <h2 className='text-3xl font-bold'>What are you waiting for?</h2>
                        <button className='bg-[#FFA000] p-1 rounded flex items-center justify-center w-[150px] shadow mt-[30px]'>REGISTER</button></div>
                  
                </div>

                <div className="mt-[100px] grid grid-cols-2 md:grid-cols-5  px-[40px] gap-[30px] md:gap-0 items-center ">

                <div >
        <Image src="/Landsacpe.png" width={150} height={50}/>
        <div>
        <p className='text-1xl  mt-[20px] '>Cryptocurrency is the act of tradingCryptocurrency is the act of trading</p>
        <div className='mt-[25px]'>
          @Scheme theme 2021
        </div>
        </div>
   
    </div>


    <div className="flex flex-col items-center justify-center"><h2 className='text-1xl text-[#E1BEE7] text-center font-bold'>COMPANY</h2>
    <ul className="flex flex-col text-sm gap-[15px] mt-[20px]">
        <li>Home</li>
        <li>Community</li>
         <li>Event</li>
          <li>Contact</li>
    </ul>
    </div>

    <div className="flex flex-col items-center justify-center"><h2 className='text-1xl text-[#E1BEE7] text-center font-bold'>SERVICES</h2>
    <ul className="flex flex-col text-sm gap-[15px] mt-[20px]">
        <li>NewsFeed</li>
        <li>Wallet</li>
         <li>Forex</li>
          <li>Trade</li>
    </ul>
    </div>

    <div className="flex flex-col items-center justify-center"><h2 className='text-1xl text-[#E1BEE7] text-center font-bold'>RESOURCES</h2>
    <ul className="flex flex-col text-sm gap-[15px] mt-[20px]">
        <li>Blog</li>
        <li>News</li>
         <li>Guide</li>
          <li>Help guide</li>
    </ul>
    </div>

    <div className="flex flex-col items-center justify-center"><h2 className='text-1xl text-[#E1BEE7] text-center font-bold'>MEDIA</h2>
    <ul className="flex flex-col text-sm gap-[15px] mt-[20px]">
    <Image src="/Socmed.png" width={150} height={50}/>
        
    </ul>
    </div>

                </div>

            </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
