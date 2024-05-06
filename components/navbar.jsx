'use client'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import benLogo from '@/assets/imgs/ben-name-title.png'
import '@/styles/modules/navbar.scss'
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";
import { GiHamburgerMenu } from "react-icons/gi";


export default function Navbar() {

  const navbarLinks = [
    { id: 2, label: "הסיפור שלי", link: "/my-story", icon: null },
    { id: 3, label: "הסיפורים שלנו", link: "/memories", icon: null },
    { id: 4, label: "התנדבויות", link: "/volunteer", icon: null },
    { id: 5, label: "הבלוג של בן", link: "/blog", icon: null },
  ];

  

  return (
    <>
    <nav className='w-full pr-right-padding-nav bg-bgc-nav-bar-upper h-navbar-height flex flex-row justify-start items-center mobile:justify-between gap-nav-gap mobile:gap-8vw'>
      <div className='logo-container h-logo-img-h w-logo-img-w'>
        <a href="/">
        <Image src={benLogo} alt='page-logo' />
        </a>
      </div>
      <div className='mobile:hidden links-div flex flex-row justify-around items-center gap-nav-links-gap mobile:gap-2vw'>
        {navbarLinks.map(({ id, label, link }) => (
          <Link key={id} href={link} className='no-underline font-medium mobile:text-small'>
            {label}
          </Link>
        ))}
      </div>
      <DropdownNavbarLinks linksInfoArray={navbarLinks} />
    </nav>
    </>
  );
}


const DropdownNavbarLinks = ({linksInfoArray}) => {

  return (
    <Dropdown backdrop='blur'>
      <DropdownTrigger>
        <Button 
          variant="light" 
          className='sm:hidden'
        >
          <GiHamburgerMenu />
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Navigation routing">
      {linksInfoArray.map((link) => {
        return <DropdownItem href={link.link} key={link.id}>{link.label}</DropdownItem>
      })}
      </DropdownMenu>
    </Dropdown>
  );
}