
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
import { getAllCategories, createCategory } from "@/utils/blogAdminUtils";
import { useToast } from "@/hooks/use-toast";

interface Category {
  id: string;
  name: string;
  slug: string;
  color?: string;
}

interface BlogCategorySelectProps {
  value?: string;
  onChange: (value: string) => void;
}

const BlogCategorySelect = ({ value, onChange }: BlogCategorySelectProps) => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [newCategoryName, setNewCategoryName] = useState("");
  const [newCategoryColor, setNewCategoryColor] = useState("blue");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const fetchedCategories = await getAllCategories();
        setCategories(fetchedCategories);
      } catch (error) {
        console.error("Error fetching categories:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  const handleCreateCategory = async () => {
    if (!newCategoryName.trim()) return;

    try {
      const newCategory = await createCategory({
        name: newCategoryName,
        color: newCategoryColor,
      });
      
      setCategories([...categories, newCategory]);
      onChange(newCategory.id);
      setNewCategoryName("");
      setIsDialogOpen(false);
      
      toast({
        title: "Success",
        description: "Category created successfully",
      });
    } catch (error) {
      console.error("Error creating category:", error);
      toast({
        title: "Error",
        description: "Failed to create category",
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
          <SelectValue placeholder="Select category" />
        </SelectTrigger>
        <SelectContent>
          {categories.map((category) => (
            <SelectItem key={category.id} value={category.id}>
              {category.name}
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
            <DialogTitle>Add New Category</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Category Name</label>
              <Input
                value={newCategoryName}
                onChange={(e) => setNewCategoryName(e.target.value)}
                placeholder="e.g., Tutorials"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Color</label>
              <Select value={newCategoryColor} onValueChange={setNewCategoryColor}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {["blue", "green", "red", "purple", "yellow", "pink"].map((color) => (
                    <SelectItem key={color} value={color}>
                      {color.charAt(0).toUpperCase() + color.slice(1)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <Button 
              onClick={handleCreateCategory} 
              disabled={!newCategoryName.trim()}
              className="w-full"
            >
              Create Category
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default BlogCategorySelect;
