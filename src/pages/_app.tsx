import Layout from '../components/layout';
import { ClerkProvider } from "@clerk/nextjs";
import '@/styles/globals.css';
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ClerkProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ClerkProvider>
  );
}
