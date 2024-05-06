import { Image } from '@nextui-org/react' 


export default function ImgsGrid ({ images, numOfImagesPerRow, imageSize, toggleMemory }) { // imageSize: {width: num, height: num}
  const templateRows = `grid-cols-3 gap-2vw` // Custom template

  return (
    <div className={`m-2vw grid ${templateRows} justify-items-center mobile:grid-cols-1`}>
      {images.map((image) => (
          <Image
            alt='author-image'
            key={image.id}
            src={image.files[0].url}
            className='object-cover min-w-20vw min-h-33vh mobile:min-w-90vw mobile:min-h-30vh hover:scale-105 hover:cursor-pointer'
            onClick={() => toggleMemory(image.id)}
          />
          ))}
        
    </div>
  );
};

