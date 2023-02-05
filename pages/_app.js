import "/styles/globals.css";
import {GlobalProvider} from "../context/store";
export default function App({ Component, pageProps }) {
  return (
    <>
     <GlobalProvider>

        <Component {...pageProps} />
     </GlobalProvider>
    
    </>
  );
}
