import { GrFormClose } from "react-icons/gr";
interface InfoDescription {
  title: string;
  description: string;
  files?:
    | undefined
    | {
        "high-school": string;
        university: string;
      };
}
interface aboutSection {
  title: string;
  icon?: string;
  info: (
    | {
        title: string;
        description: string;
        files?: undefined;
      }
    | {
        title: string;
        description: string;
        files: {
          "high-school": string;
          university: string;
        };
      }
  )[];
}
export default function InfoView({
  infoDescription,
}: {
  infoDescription: InfoDescription;
  aboutSection: aboutSection;
}) {
  function addAsteriskAfterLineWrap(text: string) {
    // Use a regular expression to match line continuations (lines starting with whitespace)
    const regex = /(\n\s+)/g;

    // Replace each line continuation with '* ' followed by the whitespace
    const modifiedText = text.replace(regex, (match) => `\n*${match.trim()}`);
    return modifiedText;
  }

  return (
    <>
      <div className="border-slate-800 lg:border-b">
        <div className="flex w-52 flex-row items-center justify-between border-slate-800 p-2 lg:border-r">
          <div className="inline whitespace-nowrap">
            <span className="text-white lg:hidden">
              {"// {aboutSection.title}"}
            </span>
            <span className="text-white">
              <span className="text-white lg:hidden"> / </span>
              {infoDescription.title}
            </span>
          </div>

          <GrFormClose className="hidden cursor-pointer hover:bg-gray-700 lg:block" />
        </div>
      </div>
      <div>
        <p className="overflow-hidden p-2 text-white">
          {addAsteriskAfterLineWrap(infoDescription.description)}
        </p>
      </div>
    </>
  );
}
