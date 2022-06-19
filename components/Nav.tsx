import { useTheme } from 'next-themes';
import Link from 'next/link';

const Nav = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div className='mt-8 pb-4 flex items-enter justify-around border-b-2 dark:border-gray-900'>
      <span className='font-semibold underline underline-offset-8'>
        @santosantt
      </span>

      <nav>
        <Link href='/'>
          <a className='ml-3 hover:underline decoration-wavy underline-offset-8'>
            home
          </a>
        </Link>
        <Link href='#'>
          <a className='ml-3 hover:underline decoration-wavy underline-offset-8'>
            experiences
          </a>
        </Link>
        <Link href='#'>
          <a className='ml-3 hover:underline decoration-wavy underline-offset-8'>
            articles
          </a>
        </Link>
      </nav>

      <button
        className='rounded-md'
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      >
        {theme === 'dark' ? '☀️' : '🌙'}
      </button>
    </div>
  );
};

export default Nav;
