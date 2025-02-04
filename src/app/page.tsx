import { devInfo } from "public/devInfo";
import { RxCrossCircled } from "react-icons/rx";
import Game from "./components/Game";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import Circle from "./components/Circle";
const CROSS_STYLES = "absolute size-4 rounded-full shadow-inner opacity-20 ";
export default function page() {
  return (
    <div className="m-4 flex flex-row md:m-12 lg:m-16 xl:m-24">
      <Hero />
      <GameContainer />
    </div>
  );
}
function Hero() {
  return (
    <section className="w-full text-slate-500">
      <p className="text-lg text-slate-200">Welcome. I am</p>
      <p className="text-4xl text-slate-200 sm:text-6xl">{devInfo.name}</p>
      <p className="text-2xl text-indigo-600 lg:text-3xl">
        &gt; Software Engineer
      </p>
      <div className="hidden pt-8 lg:block">
        <p>{"// complete the game to continue"}</p>
        <p>{"// you can also see it on my Github page"}</p>
      </div>
      <p className="text-xs sm:text-base lg:hidden">
        {"// View on desktop for the full experience"}
      </p>
      <div className="text-sm font-medium md:text-base">
        <span className="text-indigo-600">const</span>
        <span className="text-white"> </span>
        <span className="text-emerald-400">githubLink</span>
        <span className="text-white"> = </span>
        <span className="text-rose-400">
          “
          <Link
            href={devInfo.contacts.social.github.url}
            target="_blank"
            className="underline"
          >
            {devInfo.contacts.social.github.url}
          </Link>
          ”
        </span>
      </div>
    </section>
  );
}
function GameContainer() {
  return (
    <div className="hidden w-full backdrop-blur-3xl lg:flex">
      <Circle className="-right-1/4 top-1/2 bg-indigo-600" />
      <Circle className="-left-1/4 bottom-1/2 bg-emerald-500" />
      <div className="flex w-full rounded-lg border border-neutral-900 bg-gradient-to-br from-teal-900 via-transparent to-indigo-950 p-8 shadow-inner backdrop-blur">
        <div className={twMerge(CROSS_STYLES, "left-1 top-1")}>
          <RxCrossCircled />
        </div>
        <div className={twMerge(CROSS_STYLES, "right-1 top-1")}>
          <RxCrossCircled />
        </div>
        <div className={twMerge(CROSS_STYLES, "bottom-1 left-1")}>
          <RxCrossCircled />
        </div>
        <div className={twMerge(CROSS_STYLES, "bottom-1 right-1")}>
          <RxCrossCircled />
        </div>
        <Game />
      </div>
    </div>
  );
}
