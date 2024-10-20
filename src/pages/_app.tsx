import Layout from '../components/layout';
import { ClerkProvider, useAuth, useUser } from "@clerk/nextjs";
import '@/styles/globals.css';
import type { AppProps } from "next/app";
import { useEffect } from 'react';

function AuthRedirectWrapper({ children }: { children: React.ReactNode }) {
  const { isSignedIn } = useAuth();
  const { user } = useUser();

  if (!isSignedIn) {
    return null; // or show a loading spinner while Clerk is checking the session
  }

  if (!user?.publicMetadata.hasCompletedOnboarding) {
    // Let Clerk handle the redirection via its configuration
    return null; // Or a loading spinner if needed
  }

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
