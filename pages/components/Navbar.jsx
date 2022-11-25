import React from 'react'
import Image from 'next/image'
import Link from "next/link"

function Navbar() {
  return (
   <>
   <nav className='flex justify-around p-[30px] h-[40px] items-center'>
    <div>
       <Link href="/"> <Image src="/Landsacpe.png" width={150} height={50}/></Link>
    </div>

    <div>
        <ul className='flex gap-[20px]'>
            <li><Link href="">Home</Link></li>
            <li>About Us</li>
            <li><Link href="contact">Contact</Link></li>
            <li>Blog</li>
            <li><Link href="hello">Meet Us</Link></li>
        </ul>
    </div>

    <div className='flex gap-[20px] items-center justify-center'>
        <div><Link href="/login">LOGIN</Link></div>
        <div><button className='bg-[#FFA000] p-1 rounded flex items-center justify-center w-[110px] shadow'><Link href="/signup">REGISTER</Link></button></div>
        <Image src="/android-settings.png" width={30} height={20}></Image>
    </div>
   </nav>
   
   </>
  )
}

export default Navbar