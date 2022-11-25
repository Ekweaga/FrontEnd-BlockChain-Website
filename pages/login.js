import React from 'react'
import Image from "next/image"
import Link from "next/link"
function login() {

     const NavMenu = ()=>{
        return(
            <>
            <nav className="flex justify-around items-center p-4">
            <Link href="/"> <Image src="/Landsacpe.png" width={150} height={50}/></Link>

            <div>
                <ul className="flex justify-around items-center gap-[60px]">
                    <li><Link href="/signup">REGISTER</Link></li>
                    <Image src="/android-settings.png" width={30} height={20}></Image>
                </ul>
            </div>
            </nav>


            <div className="mt-[100px] ">
                <div className='relative'>
                    <div>
                <Image src="/Deco.png" width={1500} height={20}></Image></div>
                <div className="absolute top-0 left-[130px] flex items-center justify-center gap-[50px]">
                    <div className='w-[450px] h-[450px] bg-[#424242] border-[1px] border-purple-700 rounded-2xl flex items-center flex-col gap-[30px] p-4  bg-opacity-2 shadow'>
                    <h2 className='text-1xl text-[#E1BEE7] text-center font-bold mt-[30px]'>Login to Your Account</h2>
                    <div className='flex gap-[20px]'>
                    <Image src="/Facebook Login.png" width={100} height={20}></Image> 
                    <Image src="/Twitter Login.png" width={100} height={20}></Image>
                    <Image src="/Google Login.png" width={100} height={20}></Image>
                    </div>
                    <div>----or login with email-----</div>
                    <form className='flex flex-col items-center gap-[20px]'>
                        <div>
                            <input type="email" placeholder='email' className='bg-opacity-50 bg-[#555555] w-[350px] px-2 border-[1px] border-t-0 border-r-0 border-l-0 border-b-yellow-500 py-[5px] focus:outline-none'/>
                        </div>
                        <div>
                            <input type="email" placeholder='password' className='bg-[#555555] w-[350px] px-2 py-[5px] focus:outline-none bg-opacity-50'/>
                        </div>
                        <div className='w-[350px] flex justify-between'>
                        <span className='text-sm'>Remember</span>
                        <span className='text-sm'>Forget Password?</span>

                    </div>
                    </form>

                   

                    <div>
                        <button className='bg-[#9C27B0] px-2 w-[350px] rounded-sm text-sm py-2 h-[30px]'>CONTINUE</button>
                    </div>

                    </div>
                <Image src="/Right Side.png" width={400} height={20}></Image>
                </div>
                </div>


            </div>
            </>
        )
    }
  return (
    <>

    <NavMenu/>

      
    </>
  )
}

export default login

