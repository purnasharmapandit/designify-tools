
import { useCallback } from "react";

// This is a placeholder component that will be replaced with a real rich text editor
// You can integrate Tiptap, React Quill, or any other rich text editor library

interface BlogRichTextEditorProps {
  value: string;
  onChange: (value: string) => void;
}

export const BlogRichTextEditor = ({ value, onChange }: BlogRichTextEditorProps) => {
  // For now, we'll use a simple textarea. In a real implementation,
  // you'd integrate a proper rich text editor library here.
  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      onChange(e.target.value);
    },
    [onChange]
  );

  return (
    <div className="border border-input rounded-md">
      <div className="bg-muted p-2 border-b flex gap-2">
        <button className="p-1 rounded hover:bg-muted-foreground/20" title="Bold">B</button>
        <button className="p-1 rounded hover:bg-muted-foreground/20" title="Italic">I</button>
        <button className="p-1 rounded hover:bg-muted-foreground/20" title="Heading">H</button>
        <button className="p-1 rounded hover:bg-muted-foreground/20" title="Link">Link</button>
        <button className="p-1 rounded hover:bg-muted-foreground/20" title="List">List</button>
        <div className="text-xs text-muted-foreground ml-auto">
          Simple editor. Replace with Tiptap or React Quill for production use.
        </div>
      </div>
      <textarea
        value={value || ""}
        onChange={handleChange}
        className="w-full p-3 min-h-80 focus:outline-none"
        placeholder="Write your blog post content here..."
      />
    </div>
  );
};
