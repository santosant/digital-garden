/* eslint-disable react/no-unescaped-entities */
import { useTheme } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const { theme, setTheme } = useTheme();

  return (
    <>
      <div className=' mr-20 mt-8 flex justify-around'>
        <span>@santosantt</span>
        <div>
          <Link href='/'>
            <a className='ml-3 hover:underline decoration-wavy underline-offset-8'>
              Home
            </a>
          </Link>
          <Link href='/'>
            <a className='ml-3 hover:underline decoration-wavy underline-offset-8'>
              Experiences
            </a>
          </Link>
          <Link href='/'>
            <a className='ml-3 hover:underline decoration-wavy underline-offset-8'>
              Articles
            </a>
          </Link>
        </div>

        <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
          click
        </button>
      </div>
      <div className='font-serif text-left flex flex-col sm:flex-row justify-center  items-center overflow-hidden py-8 lg:py-12'>
        <div className='max-w-5xl flex flex-col items-start px-8'>
          <span className='text-3xl font-semibold mb-6 italic'>👋 Hey</span>
          <h2 className='font-semibold text-lg mb-3 text-left'>
            My name is Anderson.
          </h2>
          <div className='max-w-2xl'>
            <p className='text-left'>
              I'm a software developer based in 🇧🇷 São Paulo area and i like to
              build many things.
              <br />
              <br />
              This is my{' '}
              <span className='font-bold text-blue-400 underline decoration-wavy underline-offset-8'>
                space
              </span>{' '}
              where i'll share my experiences.
              <br />
              <br />
              Below are some of my links, you can follow me on{' '}
              <a
                href='https://twitter.com/santosantt'
                target='_blank'
                className='underline decoration-wavy underline-offset-8 font-bold italic text-[#00acee] dark:decoration-slate-300'
                rel='noreferrer'
              >
                Twitter
              </a>
              , I talk about everything and I really like technologies.
              <br />
              <br />
              If you are in São Paulo let's walk around.
            </p>
          </div>
          <div className='mt-8'>
            <a
              className='mr-3 underline decoration-wavy underline-offset-8 decoration-black font-bold italic dark:text-gray-300 dark:decoration-slate-300'
              href='https://github.com/santosant'
            >
              Github
            </a>
            <a
              className='mr-3 underline decoration-wavy underline-offset-8 decoration-black-800 font-bold italic text-[#00acee] dark:decoration-slate-300'
              href='https://twitter.com/santosantt'
            >
              Twitter
            </a>
            <a
              className='mr-3 underline decoration-wavy underline-offset-8 decoration-blue-800 text-[#0078c7] font-bold italic dark:decoration-slate-300'
              href='https://www.linkedin.com/in/santosant/'
            >
              LinkedIn
            </a>
          </div>
          <div className='max-w-xs mt-8 '>
            <Image
              src='/me.jpg'
              alt='Anderson in the beach'
              className='rounded-md'
              width={1242}
              height={2208}
            />
            <figcaption className='italic'>Anderson, in the beach.</figcaption>
          </div>
        </div>
      </div>
    </>
  );
}
