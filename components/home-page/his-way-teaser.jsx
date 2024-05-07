'use client'
import Image from 'next/image'
import React from 'react'
import birdsPic from '@/assets/imgs/birds.png'
import '@/styles/modules/border_illusion.scss'
import volunteerImg1 from '@/assets/imgs/volunteer-img-1.jpg'
import volunteerImg2 from '@/assets/imgs/volunteer-img-2.jpg'
import volunteerImg3 from '@/assets/imgs/volunteer-img-3.jpg'
import { useRouter } from 'next/navigation'


export default function HisWayTeaser() {

    const router = useRouter()
    
    return (
    <div className={`bg-bgc-white h-screen flex flex-col justify-around items-center relative max-h-70vh mobile:py-8`}>
        <section className='images-container absolute w-full h-full flex flex-col justify-between'>`
            <Image src={birdsPic} alt='birds in the background' id='up-photo' className=' z-[3] max-w-[50%] h-full self-end object-cover object-center transform translate-y-[-5vh] '/>
            <Image src={birdsPic} alt='birds in the background' id='bottom-photo' className='z-[3] max-w-[50%] h-full object-cover '/>
        </section>
        <section className='in-his-way-section h-full z-[2] flex flex-col justify-around items-center gap-2vh'>
        <article className='headlines flex flex-col gap-2vh z-[5]'>
            <h1 className="text-center text-headline-font-color font-bold text-4xl ">ממשיכים את דרכו</h1>
            <p className='font-bold max-w-fit text-center text-4xl mobile:text-2xl text-headline-font-color smMobile:hidden'>
                את המצווה שעשיתי לך תעביר הלאה...
            </p>
        </article>
    <div className=" flex mobile:flex-col gap-2vw relative">
        <div className='mobile:hidden top-div-border-style white' />
        <div className='mobile:hidden bottome-div-border-style white' />
      {/* First picture */}
      <Image src={volunteerImg1} alt="Image of ben and tal" className="w-20vw h-35vh mobile:h-15vh mobile:w-40vw object-cover" />
      {/* Middle picture */}
      <Image src={volunteerImg2} alt="Image of ben" className=" w-20vw h-35vh mobile:h-15vh mobile:w-40vw object-cover object-top" />
      {/* Third picture */}
      <Image src={volunteerImg3} alt="Image of ben friends" className="w-20vw h-35vh mobile:h-15vh mobile:w-40vw object-cover" />
    </div>

    <div className="flex flex-col items-center justify-center relative">
            <button onClick={()=> router.push('/volunteer')} className="text-center
             text-headline-font-color text-lg p-4 font-medium 
            bg-bgc-nav-bar-upper  rounded-xl">להנצחות והתנדבויות</button>
          </div> 
    </section>
  </div>
  )
}
