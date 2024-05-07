'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'
import benLogo from '@/assets/imgs/ben-name-title.png'
import '@/styles/modules/navbar.scss'
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";


export default function AppFooter() {

  const navbarLinks = [
    { id: 2, label: "הסיפור שלי", link: "/my-story", icon: null },
    { id: 3, label: "הסיפורים שלנו", link: "/memories", icon: null },
    { id: 4, label: "התנדבויות", link: "/volunteer", icon: null },
    { id: 5, label: "הבלוג של בן", link: "/blog", icon: null },
  ];

  const [formEmail, setFormEmail] = useState('')

const submitNewsletterForm = () => {
    console.log(formEmail)
}


const onChange = ({target}) => {
    let {value} = target
    setFormEmail(value)
}

  return (
    <>
    <nav className='app-footer h-25vh full bg-bgc-app-footer flex flex-row items-center justify-center gap-5vw p-2vw'>
      <div className='mobile:hidden logo-container h-logo-img-h w-logo-img-w'>
        <Image  src={benLogo} alt='page-logo' />
      </div>
      <div className='mobile:hidden links-div flex flex-col justify-around items-center gap-1vw'>
        {navbarLinks.map(({ id, label, link }) => (
          <Link key={id} href={link} className='no-underline font-medium mobile:text-small'>
            {label}
          </Link>
        ))}
      </div>
      <article className='mobile:justify-between contact-article flex flex-col justify-around items-center'>
            <p className='mb-2vh'>יצירת קשר</p>
            <div className='icons-container flex flex-row justify-between items-center gap-2vw pb-5vh'>
            <FaInstagram />
            <FaFacebook />
            <FaWhatsapp />
            </div>
            <a href='/privacy' className='text-center'>מדיניות הפרטיות</a>

      </article>
      
      <article className='newsletter and policy-links links-div flex flex-col justify-around items-center gap-1vw p-5'>
            <section className='newsletter-form flex flex-col justify-around items-start gap-1vw'>
                <h4 className='text-headline-font-color underline text-right'>הירשמו לניוזלטר</h4>
                <p className=''>הישארו מעודכנים על פעילויות והתנדבויות</p>
                <form action="submit " onSubmit={submitNewsletterForm}>
                    <input value={formEmail} onChange={onChange} type="text" className='bg-headline-font-color focus:bg-white max-w-30vw h-3vh' />
                    <button type='submit' className='bg-send-btn-footer h-3vh w-[50px]'>שלח</button>
                </form>
            </section>
      </article>
    </nav>
    </>
  );
}
