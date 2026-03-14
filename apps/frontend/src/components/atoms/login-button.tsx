'use client';
import Link from 'next/link';
import { Button } from 'ui/components/button';

export const LoginButton: React.FC = () => {
  return (
    <Button asChild>
      <Link href="/auth/login">Login</Link>
    </Button>
  );
};
