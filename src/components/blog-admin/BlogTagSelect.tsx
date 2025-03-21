
import { useEffect, useState } from "react";
import { X, Plus } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { getAllTags, createTag } from "@/utils/blogAdminUtils";
import { useToast } from "@/hooks/use-toast";

interface Tag {
  id: string;
  name: string;
  slug: string;
}

interface BlogTagSelectProps {
  value: string[];
  onChange: (value: string[]) => void;
}

const BlogTagSelect = ({ value, onChange }: BlogTagSelectProps) => {
  const [tags, setTags] = useState<Tag[]>([]);
  const [loading, setLoading] = useState(true);
  const [newTagName, setNewTagName] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const { toast } = useToast();

  useEffect(() => {
    const fetchTags = async () => {
      try {
        const fetchedTags = await getAllTags();
        setTags(fetchedTags);
      } catch (error) {
        console.error("Error fetching tags:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTags();
  }, []);

  const handleCreateTag = async () => {
    if (!newTagName.trim()) return;

    try {
      const newTag = await createTag({
        name: newTagName,
      });
      
      setTags([...tags, newTag]);
      onChange([...value, newTag.id]);
      setNewTagName("");
      setIsDialogOpen(false);
      
      toast({
        title: "Success",
        description: "Tag created successfully",
      });
    } catch (error) {
      console.error("Error creating tag:", error);
      toast({
        title: "Error",
        description: "Failed to create tag",
        variant: "destructive",
      });
    }
  };

  const removeTag = (tagId: string) => {
    onChange(value.filter((id) => id !== tagId));
  };

  const addTag = (tagId: string) => {
    if (!value.includes(tagId)) {
      onChange([...value, tagId]);
    }
  };

  const filteredTags = searchTerm
    ? tags.filter((tag) => 
        tag.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        !value.includes(tag.id)
      )
    : tags.filter((tag) => !value.includes(tag.id));

  const selectedTags = tags.filter((tag) => value.includes(tag.id));

  if (loading) {
    return <div className="h-10 animate-pulse bg-muted rounded-md" />;
  }

  return (
    <div className="space-y-2">
      <div className="flex flex-wrap gap-2">
        {selectedTags.map((tag) => (
          <Badge key={tag.id} variant="secondary" className="flex items-center gap-1">
            {tag.name}
            <button
              type="button"
              onClick={() => removeTag(tag.id)}
              className="rounded-full hover:bg-muted-foreground/20"
            >
              <X className="h-3 w-3" />
            </button>
          </Badge>
        ))}
      </div>

      <div className="flex gap-2">
        <Input
          placeholder="Search tags..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-1"
        />
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button variant="outline" size="icon">
              <Plus className="h-4 w-4" />
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Tag</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Tag Name</label>
                <Input
                  value={newTagName}
                  onChange={(e) => setNewTagName(e.target.value)}
                  placeholder="e.g., Design"
                />
              </div>
              <Button 
                onClick={handleCreateTag} 
                disabled={!newTagName.trim()}
                className="w-full"
              >
                Create Tag
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {filteredTags.length > 0 && searchTerm && (
        <div className="mt-2 border rounded-md p-2 max-h-32 overflow-y-auto">
          <div className="flex flex-wrap gap-2">
            {filteredTags.map((tag) => (
              <Badge 
                key={tag.id} 
                variant="outline" 
                className="cursor-pointer hover:bg-secondary"
                onClick={() => addTag(tag.id)}
              >
                {tag.name}
              </Badge>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogTagSelect;
