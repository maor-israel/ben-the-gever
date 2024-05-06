import React from 'react'
import TimelineElement from './timeline-element'
import { benTimelineInfo } from '@/constants'
import butterfly from '@/assets/imgs/timeline-butterfly.png'
import flower from '@/assets/imgs/timeline-flower.png'
import bird from '@/assets/imgs/timeline-bird.png'
import Image from 'next/image'

export default function BenTimeline() {

  const returnAdjustGreenLineImageTailwindString = (index) => {
      if (index === benTimelineInfo.length -1) return 'hidden'
      else if (index % 2 !== 0) return 'rotatex'
      return ''
    }
  const returnAdjustArticleTailwindString = (index) => {
      if (index % 2 === 0) return 'flex-row-reverse'
      else return ''
    }
  return (
    <section className='ben-timeline flex flex-col justify-around items-center gap-15vh mb-5vh'>
         <p className={`font-bold max-w-fit text-center self-center text-2xl text-headline-font-color`}>
              {'"השביל הזה מתחיל כאן.."'}
        </p>
        
        
        {benTimelineInfo.map((article, idx) => {
          return <TimelineElement imgSrc={article.imgSrc} paragraph={article.paragraph} 
          adjustGreenLineImageTailwindString={returnAdjustGreenLineImageTailwindString(idx)}
          adjustArticleTailwindString={returnAdjustArticleTailwindString(idx)}
          />
        })}
        <Image src={flower} alt='timeline image' 
          className={`mobile:hidden absolute top-[49%] right-[10%] object-contain w-33vw h-25vh z-[1]`} 
          />
        <Image src={bird} alt='timeline image' 
          className={`mobile:hidden absolute top-[87%] right-[51%] object-contain w-33vw h-25vh z-[1]`} 
          />
        <Image src={butterfly} alt='timeline image' 
          className={`mobile:hidden absolute top-[22%] right-[54%] object-contain w-33vw h-25vh z-[1]`} 
          />
    </section>
  )
}
