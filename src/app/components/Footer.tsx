import { devInfo } from "public/devInfo";
import { AiFillGithub } from "react-icons/ai";
import { BsFacebook, BsDownload } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa6";
import Link from "next/link";
const social = devInfo.contacts.social;
const RESUME_PDF = "/CV.pdf";
const ICON_PROPS = "transition-all hover:scale-150 hover:opacity-50";
const socialIconMap: Record<keyof typeof social, React.ReactElement> = {
  github: <AiFillGithub className={ICON_PROPS} />,
  facebook: <BsFacebook className={ICON_PROPS} />,
  twitter: <AiFillTwitterCircle className={ICON_PROPS} />,
  linkedin: <FaLinkedin className={ICON_PROPS} />,
};
export default function Footer() {
  return (
    <footer className="flex justify-between border-t border-slate-800 text-slate-500 shadow md:items-center md:justify-between">
      <span className="flex w-full items-center justify-center text-center text-xs sm:p-3 sm:text-base md:justify-start">
        find me in:
      </span>
      <ul className="flex items-center text-2xl">
        <li className={"border-l border-slate-800 p-3"}>
          <Link href={RESUME_PDF} target="_blank">
            <BsDownload className={ICON_PROPS} />
          </Link>
        </li>
        {Object.entries(social).map(([item, value]) => (
          <li key={item} className={"border-l border-slate-800 p-3"}>
            <Link href={value.url} target="_blank">
              {socialIconMap[item as keyof typeof social]}
            </Link>
          </li>
        ))}
      </ul>
    </footer>
  );
}
