import { SessionProvider } from "next-auth/react";
import { AuthProvider } from "../../context/AuthContext";
import { Toaster } from "react-hot-toast";
export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <AuthProvider>
      <Toaster position="bottom-right" />
      <SessionProvider session={pageProps.session}>
        {getLayout(<Component {...pageProps} />)}
      </SessionProvider>
    </AuthProvider>
  );
}
