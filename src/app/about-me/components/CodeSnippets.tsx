import Image from "next/image";
import "highlight.js/styles/github-dark-dimmed.css";
import Link from "next/link";
import { AiFillStar } from "react-icons/ai";
import { FaComment } from "react-icons/fa";
import { getGists, type Gist } from "@/app/actions";
import "highlight.js/styles/default.css";
export default async function CodeSnippets() {
  const gistData = await getGists();
  console.log(gistData);
  return (
    <div className="flex size-full flex-col gap-4 text-white">
      <h1>{"// Code snippet showcase:"}</h1>
      <div className="flex max-h-min w-full flex-col gap-2 overflow-auto">
        {gistData.map((gist, index) => (
          <section key={index}>
            <div className="flex flex-row justify-between">
              <GistAuthor gist={gist} />
              <div className="flex flex-row gap-2 text-sm text-slate-500">
                <button
                  className="flex flex-row items-center gap-2 hover:text-slate-400"
                  // onClick={() => {
                  //   setGistData((prevData: Gist[]) =>
                  //     prevData.map((prevGist, prevIndex) => ({
                  //       ...prevGist,
                  //       showDescription:
                  //         prevIndex === index
                  //           ? !prevGist.showDescription
                  //           : prevGist.showDescription,
                  //     })),
                  //   );
                  // }}
                >
                  <FaComment />
                  <p className="select-none">details</p>
                </button>
                <Link
                  href={gist.html_url}
                  className="flex flex-row items-center gap-2 font-bold hover:text-slate-400"
                  target={"_blank"}
                >
                  <AiFillStar />
                  <p>star</p>
                </Link>
              </div>
            </div>
            <pre>
              <div
                dangerouslySetInnerHTML={{ __html: gist.code }}
                className="whitespace-pre-wrap rounded-2xl border border-slate-800 bg-slate-950 shadow xl:whitespace-pre"
              />
            </pre>

            {gist.showDescription && (
              <div className="mt-4 border-t border-slate-800 pt-2 text-white">
                {gist.description}
              </div>
            )}
          </section>
        ))}
      </div>
    </div>
  );
}
function GistAuthor({ gist }: { gist: Gist }) {
  return (
    <div className="flex flex-row items-center">
      <Image
        className="size-12 rounded-full"
        src={gist.owner.avatar_url}
        alt={""}
        width={48}
        height={48}
      />
      <div className="p-2">
        <Link
          className="text-sm font-bold text-indigo-500"
          href={gist.owner.html_url}
          target="_blank"
        >
          @{gist.owner.login}
        </Link>
        <div className="text-xs text-slate-500">
          Created {gist.monthsAgo} months ago
        </div>
      </div>
    </div>
  );
}
