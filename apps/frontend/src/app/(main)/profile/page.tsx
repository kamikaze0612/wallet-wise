import { Profile } from '@/components/molecules/profile';
import { auth0 } from '@/lib/auth0';

const ProfilePage: React.FC = async () => {
  const session = await auth0.getSession();

  // NOTE: This is just for demonstration purposes. In a real application, you would typically not log the session information to the console, especially in a production environment, as it may contain sensitive information.
  console.log({ session });

  return (
    <div>
      <Profile />
    </div>
  );
};

export default ProfilePage;
