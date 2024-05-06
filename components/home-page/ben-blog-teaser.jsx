
'use client'
import React from 'react'
import Image from 'next/image'
import benInDesert from '@/assets/imgs/ben-in-desert.jpeg'
import smilyHandwrite from '@/assets/imgs/ben-handwrite-smily.png'
import { useRouter } from 'next/navigation'

export default function BenBlogTeaser() {

    const router = useRouter()

    return (
    <div className={`bg-bgc-white py-5vh h-screen flex flex-col justify-around items-center relative max-h-70vh mobile:py-15`}>
        <section className='in-his-way-section h-full flex flex-col justify-around items-center gap-2vh'>
        <article className='headlines flex flex-col gap-2vh'>
            <h1 className="text-center text-headline-font-color font-bold text-4xl ">הבלוג של בן</h1>
            <div className=" rounded-lg flex mobile:flex-col gap-2vw ">
                <Image src={smilyHandwrite} alt="Image of ben handwrite" className="w-40vw h-10vh 
                mobile:w-70vw object-contain" />
        </div>
        </article>
    <div className=" rounded-lg flex mobile:flex-col gap-2vw ">
      <Image src={benInDesert} alt="Image of ben" className="w-80vw h-35vh mobile:h-20vh mobile:w-40vw rounded-lg object-cover object-center" />
    </div>
    <div className="flex flex-col items-center justify-center">
            <button onClick={()=> router.push('/blog')} className="text-center
             text-headline-font-color text-lg p-4 font-medium 
             bg-bgc-nav-bar-upper  rounded-xl">לבלוג של בן</button>
          </div> 
    </section>
  </div>
  )
}

