import React from 'react'
import volunteerHeroImg from '@/assets/imgs/volunteer-hero-img.png'
import BackgroundImage from '@/components/background-img'
import '@/styles/modules/background-img.scss'
import VolunteerPageElement from '@/components/volunteer-page/volunteer-page-element'
import { benVolunteerInfo } from '@/constants'

export default function VolunteerPage() {

    return (
        <> 
      <BackgroundImage imgSrc={volunteerHeroImg} adjustImageStyleTailwindString='h-66vh mobile:h-33vh object-cover' />
      <section className='ben-volunteer-page flex flex-col justify-around items-center gap-15vh mb-5vh'>
         <p className={`font-bold max-w-fit text-center self-center text-2xl text-headline-font-color`}>
              {'"את המצווה שעשיתי לך תעביר הלאה.."'}
        </p>
        
        {benVolunteerInfo.map((article, idx)=> {
            return <VolunteerPageElement article={article} index={idx} />
        } 
        )}

        </section>
     
    </>
  )
}
