import MainHeader from '@/components/NavigationBar/MainHeader';
import '@/styles/globals.css'


 export default function App({ Component, pageProps })
 {
  return (
   <MainHeader>
    <Component {...pageProps} />
   </MainHeader>
  );
   }
//pages/_app.js;

