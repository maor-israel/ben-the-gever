import Image from 'next/image'
import React from 'react'
import starImg from '@/assets/imgs/star-img.png'
import aboutImg from '@/assets/imgs/about-img.jpeg'
import benTypoImg from '@/assets/imgs/hand-write-by-ben-about.png'
import { aboutBen } from '@/constants'

export default function About() {
  return (
    <section className='about-section bg-white relative py-8vh'>
        <div className='star-img-container h-17vh w-17vw absolute top-0 -right-10vw mobile:right-0 '>
            <Image src={starImg} alt='star-icon' className='object-cover'/>
        </div>
        <div className='about-div-content flex flex-row justify-around mobile:flex-col gap-1vh'>
        <p dangerouslySetInnerHTML={{ __html: aboutBen }} className=' text-headline-font-color font-medium max-w-35vw max-h-80vh self-start text-sm mobile:max-w-77vw mobile:self-center overflow-auto' />
        
        {/* </p> */}
        <Image src={benTypoImg} alt='ben handwrite sentance' className='bottom-33vh right-37vw max-h-25vh max-w-8vw self-end mobile:max-w-77vw mobile:self-center object-contain'/>
        <Image src={aboutImg} alt='image of ben' className='rounded-r-md h-66vh max-w-30vw object-cover self-end mobile:max-w-77vw mobile:self-center' />
        </div>
        <div className='star-img-2-container h-17vh w-17vw absolute right-60vw -bottom-4vh'>
            <Image src={starImg} alt='star-icon' className='object-cover'/>
        </div>
        
    </section>
  )
}
