import { Nav, Bio, Links, Picture } from '../components';

export default function Home() {
  return (
    <>
      <div className='font-serif text-left flex flex-col sm:flex-row justify-center items-center overflow-hidden py-8 lg:py-12'>
        <div className='max-w-5xl flex flex-col px-8 '>
          <Bio />
          <Links />
          <Picture photo='/me.jpg' />
        </div>
      </div>
    </>
  );
}
