import '../styles/globals.css';
import { ThemeProvider } from 'next-themes';
import { Nav } from '../components';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute='class'>
      <Nav />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
