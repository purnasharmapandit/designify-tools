
import { useCallback, useEffect } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Link from "@tiptap/extension-link";
import Image from "@tiptap/extension-image";
import Placeholder from "@tiptap/extension-placeholder";
import { 
  Bold, 
  Italic, 
  List, 
  ListOrdered, 
  Heading, 
  Link as LinkIcon, 
  Image as ImageIcon,
  Code,
  Quote,
  Undo,
  Redo,
  Pilcrow
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

interface BlogRichTextEditorProps {
  value: string;
  onChange: (value: string) => void;
}

export const BlogRichTextEditor = ({ value, onChange }: BlogRichTextEditorProps) => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Link.configure({
        openOnClick: false,
        HTMLAttributes: {
          class: 'text-primary underline',
        },
      }),
      Image.configure({
        allowBase64: true,
        inline: true,
      }),
      Placeholder.configure({
        placeholder: "Write your blog post content here...",
      }),
    ],
    content: value,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
  });

  // Update editor content when value prop changes
  useEffect(() => {
    if (editor && value !== editor.getHTML()) {
      editor.commands.setContent(value || "", false);
    }
  }, [editor, value]);

  const handleLinkInsert = useCallback(() => {
    if (!editor) return;
    
    const url = window.prompt("URL");
    if (url) {
      editor
        .chain()
        .focus()
        .extendMarkRange("link")
        .setLink({ href: url })
        .run();
    }
  }, [editor]);

  const handleImageInsert = useCallback(() => {
    if (!editor) return;
    
    const url = window.prompt("Image URL");
    if (url) {
      editor.chain().focus().setImage({ src: url }).run();
    }
  }, [editor]);

  if (!editor) {
    return null;
  }

  const ToolbarButton = ({ 
    active, 
    onClick, 
    icon, 
    title 
  }: { 
    active?: boolean; 
    onClick: () => void; 
    icon: React.ReactNode; 
    title: string;
  }) => (
    <Button
      variant="ghost"
      size="sm"
      className={cn(
        "p-1 h-8 w-8", 
        active ? "bg-muted text-foreground" : "text-muted-foreground"
      )}
      onClick={onClick}
      title={title}
    >
      {icon}
    </Button>
  );

  return (
    <div className="border border-input rounded-md overflow-hidden flex flex-col">
      <div className="bg-muted p-1 border-b flex flex-wrap gap-1 items-center">
        <ToolbarButton
          active={editor.isActive("bold")}
          onClick={() => editor.chain().focus().toggleBold().run()}
          icon={<Bold className="h-4 w-4" />}
          title="Bold"
        />
        <ToolbarButton
          active={editor.isActive("italic")}
          onClick={() => editor.chain().focus().toggleItalic().run()}
          icon={<Italic className="h-4 w-4" />}
          title="Italic"
        />
        <ToolbarButton
          active={editor.isActive("heading", { level: 2 })}
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
          icon={<Heading className="h-4 w-4" />}
          title="Heading 2"
        />
        <ToolbarButton
          active={editor.isActive("heading", { level: 3 })}
          onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
          icon={<Pilcrow className="h-4 w-4" />}
          title="Heading 3"
        />
        
        <Separator orientation="vertical" className="mx-1 h-6" />
        
        <ToolbarButton
          active={editor.isActive("bulletList")}
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          icon={<List className="h-4 w-4" />}
          title="Bullet List"
        />
        <ToolbarButton
          active={editor.isActive("orderedList")}
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          icon={<ListOrdered className="h-4 w-4" />}
          title="Ordered List"
        />
        
        <Separator orientation="vertical" className="mx-1 h-6" />
        
        <ToolbarButton
          active={editor.isActive("blockquote")}
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          icon={<Quote className="h-4 w-4" />}
          title="Quote"
        />
        <ToolbarButton
          active={editor.isActive("codeBlock")}
          onClick={() => editor.chain().focus().toggleCodeBlock().run()}
          icon={<Code className="h-4 w-4" />}
          title="Code Block"
        />
        
        <Separator orientation="vertical" className="mx-1 h-6" />
        
        <ToolbarButton
          active={editor.isActive("link")}
          onClick={handleLinkInsert}
          icon={<LinkIcon className="h-4 w-4" />}
          title="Insert Link"
        />
        <ToolbarButton
          onClick={handleImageInsert}
          icon={<ImageIcon className="h-4 w-4" />}
          title="Insert Image"
        />
        
        <Separator orientation="vertical" className="mx-1 h-6" />
        
        <ToolbarButton
          onClick={() => editor.chain().focus().undo().run()}
          icon={<Undo className="h-4 w-4" />}
          title="Undo"
        />
        <ToolbarButton
          onClick={() => editor.chain().focus().redo().run()}
          icon={<Redo className="h-4 w-4" />}
          title="Redo"
        />
      </div>
      
      <EditorContent 
        editor={editor} 
        className="p-4 min-h-80 prose prose-sm max-w-none"
      />
      
      <style jsx global>{`
        .ProseMirror {
          min-height: 300px;
          outline: none;
        }
        .ProseMirror p.is-editor-empty:first-child::before {
          content: attr(data-placeholder);
          float: left;
          color: #adb5bd;
          pointer-events: none;
          height: 0;
        }
      `}</style>
    </div>
  );
};
