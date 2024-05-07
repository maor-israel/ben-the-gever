import Image from 'next/image'
import React from 'react'
export default function PageHero({title, subTitle, mainArticleAdjustmentTailwindString, adjustTitleTailwindString}) {

  return (
 <article className={`headlines flex flex-col gap-2vh absolute ${mainArticleAdjustmentTailwindString}`}>
 <h1 className={`text-center text-headline-font-color font-bold text-4xl ${adjustTitleTailwindString}`}>{title}</h1>
 {subTitle && <p className={`font-bold max-w-fit text-center text-2xl text-headline-font-color smMobile:hidden ${adjustTitleTailwindString}`}>
      {subTitle}
 </p>}
</article>
 )
}

