/* eslint-disable react/no-unescaped-entities */
const Bio = () => {
  return (
    <>
      <span className='text-3xl font-semibold mb-6 italic'>👋 Hey!</span>
      <h2 className='font-semibold text-lg mb-3'>My name is Anderson.</h2>
      <div className='max-w-2xl'>
        <p>
          I'm a software developer based in 🇧🇷 São Paulo area and i like to
          build many things.
          <br />
          <br />
          This is my{' '}
          <span className='font-bold text-blue-400 dark:text-white underline decoration-wavy underline-offset-8'>
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
    </>
  );
};

export default Bio;
