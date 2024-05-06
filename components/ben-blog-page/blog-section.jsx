'use client'
import { Spinner, useDisclosure } from '@nextui-org/react';
import React, { useEffect, useState } from 'react'
import BlogElement from './blog-element';


import CarouselCmp from '../carousel';
import { fetchService } from '@/services/fetch.service';
import BlogModal from './blog-modal';

export default function BlogSection() {

  const {isOpen, onOpen, onClose, onOpenChange} = useDisclosure();
  const [blogData, setBlogData] = useState([])
  const [contetSelected, setContentSelected] = useState(undefined)
  
  const toggleModal = (id,idx) => {
    const contentIdx = blogData[idx].content.findIndex((data) => data.id === id )
    setContentSelected(blogData[idx].content[contentIdx])
    onOpen()
  }

  useEffect(() => {
    const getBlogData = async () => {
        let res = await fetchService.GET('getBlogData')
        // res = res.filter((t) => t.files)
        setBlogData(res);
      };
      getBlogData();
  },[])




  return (
    <>
    {(blogData.length) ? <section className='flex flex-col gap-5vh  overflow-hidden'>
      {blogData.map((data, idx) => {
        return (
        <BlogElement key={idx} toggleModal={toggleModal} data={data} idx={idx}/>
        ) 
      })}
    </section> : <Spinner className='my-10vh'/>}
        <BlogModal blogContent={contetSelected} isOpen={isOpen} onClose={onClose} onOpenChange={onOpenChange} />
    </>
  )
}
// [{
//   title: 'המתכונים של בן' ,
//   content: [
//     {
//       contentTitle: 'פסטה ברוטב עגבניות',
//       image: [benShirt.src], 
//       text: 'paaaaaaa paaaaaaaaaaaaa paaaaaaaaaap apap appapapap p papa p p pppap p apa pa pappa kdopjs jn n sjfsjjjj j jjaj ap jk j jJAJSJAJ J J JASJJJJJ J J J J JJJJJJ'
//     }
//   ]
// },  
// {
// title: 'הבנות של בן' ,
// content: [
//   {
//     contentTitle: 'פסטה ברוטב עגבניות',
//     image: [benShirt.src], 
//     text: 'paaaaaaa paaaaaaaaaaaaa paaaaaaaaaap apap appapapap p papa p p pppap p apa pa pappa kdopjs jn n sjfsjjjj j jjaj ap jk j jJAJSJAJ J J JASJJJJJ J J J J JJJJJJ'
//   }
// ]
// }
// ]