import Link from "next/link";
import { authUserSession } from "@/libs/auth-libs";

const UserActionButton = async () => {
  const user = await authUserSession();
  const actionLabel = user ? "Sign Out" : "Sign In";
  const actionURL = user ? "/api/auth/signout" : "/api/auth/signin";
  const buttonDashboard = user ? (
    <Link href="/users/dashboard" className="py-1">Dashboard</Link>
  ) : null;
  return (
    <div className="flex justify-between gap-2">
      {buttonDashboard}
      <Link href={actionURL} className="bg-color-dark text-color-accent py-1 px-12 inline-block">
        {actionLabel}
      </Link>
    </div>
  );
};
export default UserActionButton;
