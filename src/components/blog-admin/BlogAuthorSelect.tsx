
import { useEffect, useState } from "react";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { getAllAuthors, createAuthor } from "@/utils/blogAdminUtils";
import { useToast } from "@/hooks/use-toast";

interface Author {
  id: string;
  name: string;
  title?: string;
  avatar?: string;
}

interface BlogAuthorSelectProps {
  value?: string;
  onChange: (value: string) => void;
}

const BlogAuthorSelect = ({ value, onChange }: BlogAuthorSelectProps) => {
  const [authors, setAuthors] = useState<Author[]>([]);
  const [loading, setLoading] = useState(true);
  const [newAuthorName, setNewAuthorName] = useState("");
  const [newAuthorTitle, setNewAuthorTitle] = useState("");
  const [newAuthorAvatar, setNewAuthorAvatar] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const fetchAuthors = async () => {
      try {
        const fetchedAuthors = await getAllAuthors();
        setAuthors(fetchedAuthors);
      } catch (error) {
        console.error("Error fetching authors:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAuthors();
  }, []);

  const handleCreateAuthor = async () => {
    if (!newAuthorName.trim()) return;

    try {
      const newAuthor = await createAuthor({
        name: newAuthorName,
        title: newAuthorTitle,
        avatar: newAuthorAvatar,
      });
      
      setAuthors([...authors, newAuthor]);
      onChange(newAuthor.id);
      setNewAuthorName("");
      setNewAuthorTitle("");
      setNewAuthorAvatar("");
      setIsDialogOpen(false);
      
      toast({
        title: "Success",
        description: "Author created successfully",
      });
    } catch (error) {
      console.error("Error creating author:", error);
      toast({
        title: "Error",
        description: "Failed to create author",
        variant: "destructive",
      });
    }
  };

  if (loading) {
    return <div className="h-10 animate-pulse bg-muted rounded-md" />;
  }

  return (
    <div className="flex gap-2">
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select author" />
        </SelectTrigger>
        <SelectContent>
          {authors.map((author) => (
            <SelectItem key={author.id} value={author.id}>
              {author.name} {author.title && `(${author.title})`}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogTrigger asChild>
          <Button variant="outline" size="icon">
            <Plus className="h-4 w-4" />
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add New Author</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Name</label>
              <Input
                value={newAuthorName}
                onChange={(e) => setNewAuthorName(e.target.value)}
                placeholder="Author name"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Title</label>
              <Input
                value={newAuthorTitle}
                onChange={(e) => setNewAuthorTitle(e.target.value)}
                placeholder="e.g., Content Writer"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Avatar URL</label>
              <Input
                value={newAuthorAvatar}
                onChange={(e) => setNewAuthorAvatar(e.target.value)}
                placeholder="https://example.com/avatar.jpg"
              />
            </div>
            <Button 
              onClick={handleCreateAuthor} 
              disabled={!newAuthorName.trim()}
              className="w-full"
            >
              Create Author
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default BlogAuthorSelect;
