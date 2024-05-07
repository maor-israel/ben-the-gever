'use client'
import { fetchService } from '@/services/fetch.service';
import React, { useEffect, useState } from 'react'
import ImgsGrid from '../imgs-grid';
import MemoryModal from './memory-modal';
import { Spinner, useDisclosure } from '@nextui-org/react';
import { FaSearch } from 'react-icons/fa';

export default function MemoriesGrid() {

  const {isOpen, onOpen, onClose, onOpenChange} = useDisclosure();
  const [selectedMemory, setSelectedMemory] = useState(undefined);
  const [memories, setMemories] = useState([]);

  useEffect(() => {
    const getMemoriesData = async () => {
      let res = await fetchService.GET('getAllMemories')
      // res = res.filter((t) => t.files)
      setMemories(res);
    };
    getMemoriesData();
  }, [])

  const handleSearch = async (ev) => {
    const value = ev.target.value
    if (value === "") {
      const res = await fetchService.GET('getAllMemories')
      setMemories(res);
    } else {
      const filteredMemories = memories.filter((memory) => {
        if (memory.name) return memory.name.includes(value)}
      );
      setMemories(filteredMemories);
    }
  }

  const toggleMemory = async (memoryId) => {
    let memory = memories.find((memory)=> memory.id === memoryId)
    // if (!story) story = await fetchService.GET('getAllMemories') // for future use
    setSelectedMemory(memory)
    onOpen()
  }
  
  return (
    <>
    <div className='memories-section-heading flex flex-row justify-between mx-1'>
      <p className={`font-bold max-w-fit text-center text-2xl mobile:text-lg text-headline-font-color smMobile:text-medium`}>כל הסיפורים</p>
      <div className='input-wrapper relative'>
        <input className='border-none p-1 min-w-20vw bg-app-blue rounded-lg' 
          type="text"
          onChange={handleSearch}
          placeholder="חיפוש..." />
          <FaSearch className='absolute top-[25%] right-[90%] smMobile:hidden' />
      </div>
    </div>
    {(memories.length) ? <ImgsGrid images={memories} numOfImagesPerRow={'3'} toggleMemory={toggleMemory}  /> : <Spinner className='my-10vh' />}
    <MemoryModal memory={selectedMemory} isOpen={isOpen} onClose={onClose} onOpenChange={onOpenChange} />
    </>
  )
}

// and also an array of objects that looks like that {id text name date ,
// headline files} in the files there is an array of images src