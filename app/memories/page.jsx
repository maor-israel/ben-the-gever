import BackgroundImage from '@/components/background-img'
import React from 'react'
import MemoPageHeroImg from '@/assets/imgs/memories-page-hero-img.png'
import HomePageHero from '@/components/home-page-hero'
import smileyByBen from '@/assets/imgs/smiley.png'
import Image from 'next/image'
import MemoriesSection from '@/components/memories-page/memories-section'

export default function MemoriesPage() {
  return (
  <>
    <BackgroundImage imgSrc={MemoPageHeroImg} adjustImageStyleTailwindString='min-h-20vh' />
    <HomePageHero buttonTitle='להוספת סיפור משותף' subTitle='הסיפורים שלנו' 
    buttonAdjustmentTailwindString='900px:-top-8vh mobile:text-sm' mainArticleAdjustmentTailwindString='h-max top-15vh mobile:top-10vh'
    subTitleAdjustmentTailwindString='mobile:text-md' />
    <article className='memories-page-heading flex flex-row justify-center items-center gap-5vw'>
        <h1 className="text-center text-headline-font-color font-bold text-4xl mobile:text-medium">אני לא משוגע אני נורמלי בסטנדרטים שלי</h1>
        <Image src={smileyByBen} className='h-[35px] w-[40px]' alt='smiley img'/>
    </article>
    <MemoriesSection />
  </>
  )
}
