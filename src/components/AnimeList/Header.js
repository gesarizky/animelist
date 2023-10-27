import Link from "next/link";
const Header = ({ title, LinkHref, LinkTitle }) => {
  return (
    <div className="flex justify-between item-center p-4">
      <h1 className="text-2xl font-bold">{title}</h1>
      {LinkHref && LinkTitle ? (
        <Link
          href={LinkHref}
          className="text-xl underline hover:text-indigo-500"
        >
          {LinkTitle}
        </Link>
      ) : null}
    </div>
  );
};
export default Header;
