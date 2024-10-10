import { SignedIn, SignedOut, UserButton, SignInButton } from '@clerk/nextjs';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children} {/* Render children (main content) */}
      <div className="fixed bottom-4 right-4">
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </>
  );
}
