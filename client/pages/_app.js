import '@/styles/globals.scss';
import '@/styles/globals.module.scss';
import ContextProvider from '@/components/context/ContextApp';

function App({ Component, pageProps }) {
  return <ContextProvider>
    <Component {...pageProps} />
  </ContextProvider>
};

export default App;