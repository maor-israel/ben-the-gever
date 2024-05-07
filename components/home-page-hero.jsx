'use client'
import { Button, useDisclosure } from '@nextui-org/react';
import Image from 'next/image'
import React, {  } from 'react'
import AddStoryForm from './my-story-page/add-story-form';



export default function HomePageHero({subTitle = '', titleImgSrc = '', buttonTitle = '', 
mainArticleAdjustmentTailwindString = '', buttonAdjustmentTailwindString = '', subTitleAdjustmentTailwindString = ''}) {

    const {isOpen, onOpen, onOpenChange} = useDisclosure(); // for usage of modal ui 


  return (
    <article className={`page-hero absolute flex flex-col h-80vh mobile:right-4vw ${mainArticleAdjustmentTailwindString}`}>
      {titleImgSrc && <div className='hero-name-container'>
        <Image src={titleImgSrc} alt='hero-name' className='object-cover h-33vh mobile:h-27vh max-w-25vh'/>
      </div>}
      {subTitle && <p className={`font-bold max-w-fit text-center text-4xl mobile:text-2xl text-headline-font-color relative bottom-10vh 
      mobile:bottom-9vh smMobile:text-medium ${subTitleAdjustmentTailwindString}`}>
        {subTitle}
      </p>}
      {buttonTitle && <Button className={`font-bold -top-8vh 900px:top-[23%] min-w-fit
       bg-bgc-nav-bar-upper text-center text-lg
        text-headline-font-color p-[8%] ${buttonAdjustmentTailwindString}`} onPress={onOpen}>
        {buttonTitle}
      </Button>}
      <AddStoryForm isOpen={isOpen} onOpenChange={onOpenChange} />
      </article>
 )
}
