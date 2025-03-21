
import { useState } from "react";
import { TableOfContentsItem } from "@/types/blog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Plus, Trash, GripVertical, ArrowUp, ArrowDown } from "lucide-react";
import { generateSlug } from "@/utils/blogPostUtils";

interface TOCEditorProps {
  items: TableOfContentsItem[];
  onChange: (items: TableOfContentsItem[]) => void;
}

const TOCEditor = ({ items, onChange }: TOCEditorProps) => {
  const [newTitle, setNewTitle] = useState("");
  
  const addItem = () => {
    if (!newTitle.trim()) return;
    
    const newItem: TableOfContentsItem = {
      title: newTitle,
      slug: generateSlug(newTitle),
    };
    
    onChange([...items, newItem]);
    setNewTitle("");
  };
  
  const updateItem = (index: number, title: string) => {
    const updatedItems = [...items];
    updatedItems[index] = {
      title,
      slug: generateSlug(title),
    };
    onChange(updatedItems);
  };
  
  const removeItem = (index: number) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    onChange(updatedItems);
  };
  
  const moveItem = (index: number, direction: "up" | "down") => {
    if (
      (direction === "up" && index === 0) ||
      (direction === "down" && index === items.length - 1)
    ) {
      return;
    }
    
    const updatedItems = [...items];
    const newIndex = direction === "up" ? index - 1 : index + 1;
    
    [updatedItems[index], updatedItems[newIndex]] = [
      updatedItems[newIndex],
      updatedItems[index],
    ];
    
    onChange(updatedItems);
  };
  
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">Table of Contents</h3>
      
      <div className="space-y-2">
        {items.map((item, index) => (
          <div key={index} className="flex items-center gap-2 group">
            <div className="text-muted-foreground flex items-center">
              <GripVertical className="h-5 w-5" />
            </div>
            <Input
              value={item.title}
              onChange={(e) => updateItem(index, e.target.value)}
              placeholder="Section title"
            />
            <div className="flex items-center gap-1">
              <Button
                type="button"
                variant="ghost"
                size="icon"
                onClick={() => moveItem(index, "up")}
                disabled={index === 0}
              >
                <ArrowUp className="h-4 w-4" />
              </Button>
              <Button
                type="button"
                variant="ghost"
                size="icon"
                onClick={() => moveItem(index, "down")}
                disabled={index === items.length - 1}
              >
                <ArrowDown className="h-4 w-4" />
              </Button>
              <Button
                type="button"
                variant="ghost"
                size="icon"
                onClick={() => removeItem(index)}
                className="text-destructive"
              >
                <Trash className="h-4 w-4" />
              </Button>
            </div>
          </div>
        ))}
      </div>
      
      <div className="flex items-center gap-2">
        <Input
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          placeholder="Add new section title"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              addItem();
            }
          }}
        />
        <Button
          type="button"
          onClick={addItem}
          disabled={!newTitle.trim()}
          className="flex items-center gap-2"
        >
          <Plus className="h-4 w-4" /> Add
        </Button>
      </div>
    </div>
  );
};

export default TOCEditor;
