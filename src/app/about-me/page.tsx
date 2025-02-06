import CodeSnippets from "./components/CodeSnippets";
import UserInfo from "./components/UserInfo";

export default function page() {
  return (
    <div className="flex size-full flex-col lg:flex-row">
      <h1 className="px-3 py-4 text-sm text-white sm:hidden">_about-me</h1>
      <UserInfo />
      <CodeSnippets />
    </div>
  );
}
