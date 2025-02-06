"use server";
import hljs from "highlight.js/lib/core";
import typescript from "highlight.js/lib/languages/typescript";
hljs.registerLanguage("typescript", typescript);
import { devInfo } from "public/devInfo";
import { type GistReturnType } from "./types";

const gistIDs = devInfo.gists;

const gistRequests = gistIDs.map((gistID) =>
  fetch(`https://api.github.com/gists/${gistID}`),
);

export type Gist = GistReturnType & {
  showDescription: boolean;
  monthsAgo: number;
  code: string;
};
export async function getGists(): Promise<Gist[]> {
  const currentDate = new Date();
  try {
    const responses = await Promise.all(gistRequests);

    const result = await Promise.all(
      responses.map(async (response) => {
        if (!response.ok) {
          console.log(response);
          throw new Error("Error fetching gists");
        }
        const data = (await response.json()) as GistReturnType;
        const createdDate = new Date(data.created_at);
        const monthsAgo =
          currentDate.getMonth() -
          createdDate.getMonth() +
          12 * (currentDate.getFullYear() - createdDate.getFullYear());

        const code = hljs.highlightAuto(getGistCode(data), [
          "typescript",
        ]).value;
        return {
          ...data,
          monthsAgo: monthsAgo,
          showDescription: false,
          code,
        } as Gist;
      }),
    );

    return result;
  } catch (error) {
    console.error("Error fetching gists:", error);
    return [];
  }
}

function getGistCode(gist: GistReturnType) {
  const gistFileName = Object.keys(gist.files)[0]!;
  const code = gist.files[gistFileName]!.content;
  return code;
}
