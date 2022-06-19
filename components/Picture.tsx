import Image from 'next/image';

const Picture = ({ photo }) => {
  return (
    <>
      <div className='max-w-xs mt-8 '>
        <Image
          src={photo}
          alt='Anderson in the beach'
          className='rounded-md'
          width={1242}
          height={2208}
        />
        <figcaption className='italic'>Anderson, in the beach.</figcaption>
      </div>
    </>
  );
};

export default Picture;
