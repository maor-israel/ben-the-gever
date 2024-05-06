import Image from 'next/image'
import React from 'react'

export default function VolunteerPageElement({ article, index }) {
  return (
    <article className={`timeline-article flex ${(index % 2 === 0) ? 'flex-row' : 'flex-row-reverse'}  mobile:flex-col mobile:items-center gap-10vw relative`}>
          <Image src={article.imgSrc} alt="Image of ben" className="z-[2] w-20vw h-20vh mobile:w-40vw object-cover" />
          <div>
          <p className='timeline-paragraph overflow-auto z-[2] font-bold max-w-fit max-h-15vh text-center self-center text-lg text-headline-font-color'>
              {article.title}
          </p>
          <p dangerouslySetInnerHTML={{ __html: article.paragraph }} 
          className='timeline-paragraph overflow-auto z-[2] font-bold max-w-fit max-h-15vh 
          text-center self-center text-medium text-headline-font-color' />
              
          {/* </p> */}
          </div>
      </article>
  )
}
