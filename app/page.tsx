
import MarkdownPreviewer from "./components/MarkDownPreviewer";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-4">
      <div><h1 className="text-2xl mb-4 font-bold">React Markdown Previewer</h1></div>
      <MarkdownPreviewer/>
    </main>
  );
}
