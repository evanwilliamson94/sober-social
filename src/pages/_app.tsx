import Layout from '../components/layout';
import { ClerkProvider, useAuth } from "@clerk/nextjs";
import '@/styles/globals.css';
import type { AppProps } from "next/app";
import { useEffect } from 'react';
import { useRouter } from 'next/router';

function AuthRedirectWrapper({ children }: { children: React.ReactNode }) {
  const { isSignedIn } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isSignedIn) {
      router.push('/onboarding');  // Redirect to onboarding after sign-up
    }
  }, [isSignedIn]);

  return <>{children}</>;
}


export default function App({ Component, pageProps }: AppProps) {
  return (
    <ClerkProvider>
      <AuthRedirectWrapper>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AuthRedirectWrapper>
    </ClerkProvider>
  );
}

