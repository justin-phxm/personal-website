import Link from "next/link";
import { devInfo } from "public/devInfo";
import { RxHamburgerMenu } from "react-icons/rx";

const navigation2 = {
  "_about-me": "/about-me",
  _projects: "/projects",
  "_contact-me": "/contact",
} as const;

export default function NavBar() {
  return (
    <nav className="flex flex-col justify-between text-slate-500">
      <div className="flex justify-between gap-2 border-b border-slate-800">
        <div className="flex">
          <Link
            className="border-r border-slate-800 px-4 py-2 text-sm font-medium text-gray-300 transition-opacity hover:opacity-50 sm:px-12"
            href="/"
          >
            {devInfo.logo_name}
          </Link>
          <ul className="hidden items-center sm:flex">
            {Object.entries(navigation2)
              .slice(0, 2)
              .map(([item, value]) => (
                <li key={item}>
                  <Link
                    href={value}
                    className="flex border-r border-slate-800 px-4 py-2 text-sm font-medium text-gray-300 transition-colors hover:bg-slate-800"
                  >
                    {item}
                  </Link>
                </li>
              ))}
          </ul>
        </div>
        <Link
          className="hidden px-4 py-2 text-sm font-medium text-gray-300 transition-colors hover:bg-slate-800 sm:flex"
          href={navigation2["_contact-me"]}
        >
          {"_contact-me" as keyof typeof navigation2}
        </Link>
      </div>
      <details className="relative h-0 items-center px-4 transition-all open:h-24 sm:hidden">
        <summary className="absolute -top-9 right-2 list-none rounded p-1 text-2xl focus:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-800">
          <RxHamburgerMenu />
        </summary>
        <ul className="absolute inset-0">
          {Object.entries(navigation2).map(([item, value]) => (
            <li key={item}>
              <Link
                href={value}
                className="flex bg-slate-800 py-1 focus:opacity-80 focus:outline-none focus:ring-2 focus:ring-slate-800"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </details>
    </nav>
  );
}
