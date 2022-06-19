import Image from 'next/image';
import { useState } from 'react';

function cn(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

type Image = {
  imageSrc: string;
  href: string;
};

const Picture = ({ photo }) => {
  return (
    <>
      <div className='max-w-xs mt-8'>
        <BlurImage photo={photo} />
        <figcaption className='italic'>Anderson, in the beach.</figcaption>
      </div>
    </>
  );

  function BlurImage({ photo }) {
    const [isLoading, setLoading] = useState(true);

    return (
      <a href='#'>
        <div className='aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg xl:aspect-w-7 xl:aspect-h-8'>
          <Image
            alt=''
            src={photo}
            width={1242}
            height={2208}
            objectFit='cover'
            className={cn(
              'duration-700 ease-in-out group-hover:opacity-75',
              isLoading
                ? 'scale-110 blur-2xl grayscale'
                : 'scale-100 blur-0 grayscale-0'
            )}
            onLoadingComplete={() => setLoading(false)}
          />
        </div>
      </a>
    );
  }
};

export default Picture;
