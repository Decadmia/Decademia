import Navbar from '../components/Navbar';
import '../styles/globals.css';
import CreateProject from './CreateProject';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
