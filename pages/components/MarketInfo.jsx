import React from 'react'
import Image from "next/image"

function MarketInfo() {
    const coins = [
        {
            name:"BTC",
            icon:"/bitcoin (5).png",
            coinpercent:"3%",
            value:"$10.200",
            color:"red"
        },  {
            name:"XRP",
            icon:"/bitcoin (4).png",
            coinpercent:"3%",
            value:"$0.003",
            color:"green"
        },  {
            name:"NEW",
            icon:"/bitcoin (3).png",
            coinpercent:"3%",
            value:"$10.200",
            color:"red"
        },
        {
            name:"IOTA",
            icon:"/bitcoin (2).png",
            coinpercent:"3%",
            value:"$0.010",
            color:"green"
        },
        {
            name:"MNR",
            icon:"/bitcoin (1).png",
            coinpercent:"3%",
            value:"$10.200",
            color:"red"
        },  {
            name:"BYC",
            icon:"/bitcoin.png",
            coinpercent:"3%",
            value:"$10.200",
            color:"green"
        }
    ]
  return (
    <>

    <div className=' h-[50px] text-white bg-[#424242]'>
        <div className='flex justify-around items-center p-3 '>
            {coins.map((coin)=>{
              return( <div className='flex items-center justify-center gap-[10px]'>
                <Image src={coin.icon} width={30} height={30} alt="icon"/>
                <div className='flex gap-[6px]'>
                    <span>{coin.name}</span>
                    <span>{coin.value}</span>
                    <span style={{color:`${coin.color}`}}>({coin.coinpercent})</span>
                    </div>
            </div>) 
            })}
        </div>

    </div>
      
    </>
  )
}

export default MarketInfo
