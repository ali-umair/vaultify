import { SnippetCard } from "./SnippetCard";

interface Snippet {
  id: number;
  title: string;
  language: string;
  code: string;
  pinned: boolean;
}

const dummySnippets: Snippet[] = [
  { id: 1, title: "React Fetch Example", language: "JavaScript", code: "fetch(url).then(res => res.json())", pinned: false },
  { id: 2, title: "SQL Join", language: "SQL", code: "SELECT * FROM users", pinned: true },
];

export function SnippetList({ filter }: { filter: "pinned" | "recent" | "all" }) {
  const snippets = dummySnippets; // Replace with actual data fetching

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {snippets.map((snippet) => (
        <SnippetCard key={snippet.id} snippet={snippet} />
      ))}
    </div>
  );
}
