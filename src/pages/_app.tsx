import Layout from '../components/layout';
import { ClerkProvider, useAuth, useUser } from "@clerk/nextjs";
import '@/styles/globals.css';
import type { AppProps } from "next/app";
import { useEffect } from 'react';
import { useRouter } from 'next/router';

function AuthRedirectWrapper({ children }: { children: React.ReactNode }) {
  const { isSignedIn } = useAuth();
  const { user } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (isSignedIn) {
      if (!user?.publicMetadata.hasCompletedOnboarding) {
        // Redirect to onboarding if it's not completed
        router.push('/onboarding');
      }
    }
  }, [isSignedIn, user]);

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
