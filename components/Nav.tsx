import Link from 'next/link';

const Nav = () => {
  return (
    <nav className='relative h-20 bg-white'>
      <Link href='/' passHref>
        <h2 className='pointer'>Ebenezer Don</h2>
      </Link>

      <Link href='/bio' passHref>
        <p className='ms-5 pointer lead my-auto'>Bio</p>
      </Link>
    </nav>
  );
};

export default Nav;
