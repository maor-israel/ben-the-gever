import React from 'react'
import Image from 'next/image'
import greenLine from '@/assets/imgs/green-line.png'
import '@/styles/modules/transform-rotate-globals.scss'
export default function TimelineElement({imgSrc, paragraph, adjustArticleTailwindString, adjustGreenLineImageTailwindString}) {
  return (
    <article className={`timeline-article flex flex-row mobile:flex-col mobile:items-center gap-3vw relative ${adjustArticleTailwindString}`}>
          <Image src={imgSrc} alt="Image of ben" className="z-[2] w-20vw h-20vh mobile:w-40vw object-contain" />
          <p className='timeline-paragraph z-[2] font-bold max-w-fit max-h-15vh text-center self-center text-medium text-headline-font-color'>
              {paragraph}
          </p>
          <Image src={greenLine} alt='green timeline line' 
          className={`mobile:hidden absolute top-[85%] right-[50%] object-cover w-33vw h-25vh ${adjustGreenLineImageTailwindString}`} 
          />
      </article>
  )
}
