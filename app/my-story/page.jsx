import React from 'react'
import myStoryHeroImg from '@/assets/imgs/my-story-hero-img.png'
import BackgroundImage from '@/components/background-img'
import PageHero from '@/components/page-hero'
import '@/styles/modules/background-img.scss'
import BenTimeline from '@/components/my-story-page/ben-timeline'
export default function MyStoryPage() {
  return (
    <> 
      <BackgroundImage imgSrc={myStoryHeroImg} adjustImageStyleTailwindString='h-66vh mobile:h-33vh object-fill' />
      <PageHero title={'הסיפור שלי'} subTitle={'בן אברהם רומנו ז"ל'} 
        mainArticleAdjustmentTailwindString={'top-3vh -right-3vw mobile:right-3vw'}
        adjustTitleTailwindString={'mobile:w-27vw'}
        />
       <BenTimeline />
     
    </>
  )
}
