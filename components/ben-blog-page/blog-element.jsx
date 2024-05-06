import CarouselCmp from '../carousel'
export default function BlogElement({toggleModal, data, idx}) {

  return (
      <>
      <p className='font-bold max-w-fit text-center text-4xl mobile:text-2xl text-width-font-color smMobile:text-medium'>
        {data.title}
      </p>
      {<CarouselCmp data={data} toggleModal={toggleModal} idx={idx}/> }
     </>
  )
}
