import Link from 'next/link';
import { Button } from 'ui/components/button';

export const LogoutButton: React.FC = () => {
  return (
    <Button>
      <Link href="/auth/logout">Logout</Link>
    </Button>
  );
};
