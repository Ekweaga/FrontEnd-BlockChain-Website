import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Footer from './components/Footer'
import MarketInfo from './components/MarketInfo'
import Navbar from './components/Navbar'

export default function Home() {

  const boxes = [
    {
      name:"BTC",
      icon:"/bitcoin (5).png",
      coinpercent:"3%",
      value:"$12, 356, 768",
      color:"red",
      currency:"USD",
      top:"Top Volume"
    }, {
      name:"IOT",
      icon:"/bitcoin (2).png",
      coinpercent:"3%",
      value:"$19, 856, 768",
      color:"red",
      currency:"USD",
      top:"Top Volume"
    }, {
      name:"BTC",
      icon:"/bitcoin.png",
      coinpercent:"3%",
      value:"$12, 356, 768",
      color:"red",
      currency:"USD",
      top:"Top Volume"
    },
  ]
  return (
    <>
      <Head>
        <title>BlockChain Website</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
      <MarketInfo/>
      </div>

   

      <div className='h-[960px] ' style={{backgroundImage:'url("/Mask.png")'}}>
        <div className='py-[30px]'><Navbar/></div>

        <div className='flex mt-[80px] items-center justify-center gap-[20px]'>
        <div className='ml-[100px]'>
          <h1 className='text-4xl font-bold mb-[20px]'>Digital currency leads at market in the right amount</h1>
          <p className='w-[500px]'> Cryptocurrency trading is the act of speculating on Cryptocurrency price movements via a CFD trading account,buying and selling the underlying coins via exchange </p>

          <div className='mt-[30px] flex gap-[20px]'>
          <button className='bg-[#9C27B0] p-1 rounded flex items-center justify-center w-[150px] shadow'>GET STARTED</button>
          <button className='border-[1px] border-white p-1 rounded flex items-center justify-center w-[150px] shadow'>VIEW MARKET</button>
          </div>
        </div>
        <Image src="/Banner1.png" width={600} height={200}/>
        </div>


        <div className='mt-[80px] grid grid-cols-2 md:grid-cols-3  gap-[10px] w-[1200px]'>
          <div className='border-r-[1px] px-[40px]'>
            <h2 className='font-bold text-2xl text-[#FFA000]'>Business solution</h2>
            <p>Cryptocurrency trading is the trade </p>
          </div>
          <div className='border-r-[1px] px-[30px]'>
            <h2 className='font-bold text-2xl '>Business solution</h2>
            <p>Cryptocurrency trading is the trade </p>
          </div>
          <div >
            <h2 className='font-bold text-2xl px-[40px] text-left'>Business solution</h2>
            <p>Cryptocurrency trading is the trade </p>
          </div>
        </div>

       

      </div>

      <div className='-mt-[120px] h-[400px] flex items-center justify-center'>
      <Image src="/Main Feature.png" width={900} height={400}/>
      </div>


      <div className='mt-[100px] h-[400px] flex items-center justify-center gap-[50px]'>

        <div>
        <Image src="/Fill 1.png" width={50} height={400}/>
        <div>
          <h3 className='text-2xl'>Cryptocurrency is the act of trading</h3>
          <p className='text-1xl w-[350px] mt-[20px]'>Cryptocurrency is the act of tradingCryptocurrency is the act of trading</p>
        </div>
        </div>
      <Image src="/Feature1.png" width={500} height={400}/>
      </div>


      <div className='mt-[30px] h-[400px] flex items-center justify-center gap-[150px]'>
      <Image src="/Feature2.png" width={500} height={400}/>
      <div>
      <Image src="/Fill 1.png" width={50} height={400}/>
          <h3 className='text-2xl'>Cryptocurrency is the act of trading</h3>
          <p className='text-1xl w-[350px] mt-[20px]'>Cryptocurrency is the act of tradingCryptocurrency is the act of trading</p>
        </div>
      </div>

      <div className="flex items-center justify-center ">
  <div>
    <div className='flex flex-col items-center justify-center gap-[20px]'>
    <Image src="/Fill 1.png" width={50} height={400}/>

    <div>
      <h1 className='text-2xl text-center'>Cryptocurrency is the act of trading</h1>
      <p className='text-1xl  mt-[20px]'>Cryptocurrency is the act of tradingCryptocurrency is the act of trading</p>
    </div>
    
    <div>

    <Image src="/Crypto Increment List.png" width={600} height={300}/>
    </div>

    </div>
  </div>
</div>


      <div className='h-[600px] flex items-center justify-center mt-[50px] relative' style={{backgroundImage:'url("/Mask (1).png")'}}>
      <Image src="/Deco.png" width={900} height={400}/>
      <div className='absolute -bottom-[100px] left-[30%]'>
      <div>
      <h1 className='text-2xl text-center'>Cryptocurrency is the act of trading</h1>
      <p className='text-1xl  mt-[20px]'>Cryptocurrency is the act of tradingCryptocurrency is the act of trading</p>
    </div>
        <Image src="/Screen.png" width={600} height={400}/>
      </div>
      </div>
    
    <div className='mt-[150px] flex flex-col items-center justify-center'>
    <Image src="/Fill 1.png" width={50} height={400}/>
      <div>
     
        <h2 className='text-2xl text-center mt-[30px] '>Top Coins Today</h2>
        <p className='text-1xl  mt-[20px] text-center'>Cryptocurrency is the act of tradingCryptocurrency is the act of trading</p>
      </div>



      <div className='mt-[60px] text-white relative z-1'>

        <div className='flex justify-between z-5 absolute -left-[60px] -right-[60px] top-[80px]'>
        <Image src="/Prev.png" width={40} height={100}/>
        <Image src="/Next.png" width={40} height={100}/>
        </div>

        <div className='flex justify-between items-center gap-[40px]'>
        <div>
        <Image src="/Feature3.png" width={350} height={400}/>
        </div>
        <div className='grid grid-cols-3 gap-[20px]'>

          {
            boxes.map((item)=>{
              return(
                <div className="border-[3px] border-[#6F3579]  w-[250px] bg-[#424242] rounded-[30px] flex flex-col px-4 py-3 ">
                  <div className="flex  gap-[15px] mt-[30px]">
                  <Image src={item.icon} width={50} height={100}/>
                  <div>
                    <span className="font-bold">{item.name}</span>
                  </div>
                  </div>
                  <h1 className="text-3xl mt-[30px] mb-[30px] text-center">{item.value}</h1>
                  <div className="flex justify-between gap-[30px]">
                    <div>
                    <span className="" style={{color:`${item.color}`}}>{item.coinpercent}</span><br/><span className="text-sm text-[#909090]">24h Change</span>
                    </div>
                    <div>
                    <span className="" >{item.value}</span><br/><span className="text-sm text-[#909090]">24h Volume</span>
                    </div>
                  </div>

                </div>
              )
            })
          }
         

        </div>
        </div>
       
      </div>


    </div>

    <div className='flex items-center justify-center mt-[150px] mb-[70px]'>
      <div className='flex gap-[30px] items-center justify-center'>
<div className='flex gap-[15px]'>
<Image src="/Rectangle.png" width={150} height={400}/>
<div>
  <h2>EVENT</h2>
  <p className='w-[400px]'> Cryptocurrency trading is the act of speculating on Cryptocurrency price movements via a CFD trading account,buying and selling the underlying coins via exchange </p>
  <div className='mt-[15px]'>Read more</div>
</div>
</div>

<div className='flex gap-[15px]'>
<Image src="/Rectangle (1).png" width={150} height={400}/>
<div>
  <h2>EVENT</h2>
  <p className='w-[400px]'> Cryptocurrency trading is the act of speculating on Cryptocurrency price movements via a CFD trading account,buying and selling the underlying coins via exchange </p>
  <div className='mt-[15px]'>Read more</div>
</div>
</div>
      </div>
    </div>

    <div className='-mb-[100px] flex items-center justify-center'>
            <Image src="/Mobile Download.png" width={650} height={100}/>

        </div>
     
    </>
  )
}
