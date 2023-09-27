import { useEffect, useState } from "preact/hooks";
import hljs from "highlight.js";
import typescript from "highlight.js/lib/languages/typescript";
import "highlight.js/styles/github-dark-dimmed.css";
import axios from "axios";
import devInfo from "../../devInfo.json";
import { AiFillStar } from "react-icons/ai";
import { FaComment } from "react-icons/fa";
interface GistFile {
  filename: string;
  content: string;
}

interface Gist {
  description: string;
  showDescription: boolean;
  files: Record<string, GistFile>;
  owner: {
    login: string;
    avatar_url: string;
    html_url: string;
  };
  monthsAgo: number;
  creation_displacement: number;
  html_url: string;
  // You can add more properties from the API response if needed
}
export default function CodeSnippets() {
  // hljs.registerLanguage("typescript", typescript);

  const [gistData, setGistData] = useState<Gist[]>([]);

  useEffect(() => {
    const gistIDs = devInfo.gists;
    gistIDs.map((gistID: string) => {
      axios
        .get(`https://api.github.com/gists/${gistID}`)
        .then((response) => {
          console.log(response.data);

          const createdDate = new Date(response.data.created_at);
          const currentDate = new Date();
          const monthsAgo =
            currentDate.getMonth() -
            createdDate.getMonth() +
            12 * (currentDate.getFullYear() - createdDate.getFullYear());

          const gistWithMonthsAgo = {
            ...response.data,
            monthsAgo: monthsAgo,
            showDescription: false,
          };
          setGistData((prevData: Gist[]) => [...prevData, gistWithMonthsAgo]);
        })

        .catch((error) => {
          console.error("Error fetching gists:", error);
        });
    });
  }, []);

  useEffect(() => {
    hljs.initHighlightingOnLoad();
  }, [gistData]);

  return (
    <>
      <div className="flex flex-col">
        <div className=" inline-block border border-t-0 border-l-0 border-r-0 border-slate-800 p-5" />
        <div className="p-4">
          <div class="">// Code snippet showcase:</div>
          {gistData.map((gist: Gist, index) => (
            <div class="py-2">
              <div className="flex flex-row justify-between">
                <div className="flex flex-row items-center">
                  <img
                    class="h-12 w-12 rounded-full"
                    src={gist.owner.avatar_url}
                  ></img>
                  <div className="p-2">
                    <a
                      className=" text-indigo-500 text-sm font-bold"
                      href={gist.owner.html_url}
                      target="_blank"
                    >
                      @{gist.owner.login}
                    </a>
                    <div className="text-xs text-slate-500">
                      Created {gist.monthsAgo} months ago
                    </div>
                  </div>
                </div>
                <div className="flex flex-row gap-2 text-sm">
                  <div
                    className="flex flex-row items-center gap-2 cursor-pointer text-slate-500 hover:text-slate-400"
                    onClick={() => {
                      setGistData((prevData: Gist[]) =>
                        prevData.map((prevGist, prevIndex) => ({
                          ...prevGist,
                          showDescription:
                            prevIndex === index
                              ? !prevGist.showDescription
                              : prevGist.showDescription,
                        }))
                      );
                    }}
                  >
                    <FaComment />
                    <p class=" select-none ">details</p>
                  </div>
                  <a
                    href={gist.html_url}
                    class="flex flex-row items-center text-slate-500 hover:text-slate-400 font-bold gap-2"
                    target={"_blank"}
                  >
                    <AiFillStar />
                    <p>star</p>
                  </a>
                </div>
              </div>

              <div>
                {Object.keys(gist.files).map((file) => (
                  <pre key={file}>
                    <code class="language-typescript bg-slate-950 rounded-2xl shadow border border-slate-800">
                      {gist.files[file].content}
                    </code>
                  </pre>
                ))}
              </div>
              {gist.showDescription && <div>{gist.description}</div>}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
