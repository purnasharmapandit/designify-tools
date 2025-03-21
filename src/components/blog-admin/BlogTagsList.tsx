
import { useEffect, useState } from "react";
import { getAllTags, deleteTag, updateTag, createTag } from "@/utils/blogAdminUtils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Edit, Trash, Check, X, Plus } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { useToast } from "@/hooks/use-toast";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

interface Tag {
  id: string;
  name: string;
  slug: string;
}

const BlogTagsList = () => {
  const [tags, setTags] = useState<Tag[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editName, setEditName] = useState("");
  const [newTagName, setNewTagName] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    fetchTags();
  }, []);

  const fetchTags = async () => {
    try {
      const fetchedTags = await getAllTags();
      setTags(fetchedTags);
    } catch (error) {
      console.error("Error fetching tags:", error);
      toast({
        title: "Error",
        description: "Failed to load tags",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await deleteTag(id);
      setTags(tags.filter((tag) => tag.id !== id));
      toast({
        title: "Success",
        description: "Tag deleted successfully",
      });
    } catch (error) {
      console.error("Error deleting tag:", error);
      toast({
        title: "Error",
        description: "Failed to delete tag",
        variant: "destructive",
      });
    }
  };

  const startEditing = (tag: Tag) => {
    setEditingId(tag.id);
    setEditName(tag.name);
  };

  const cancelEditing = () => {
    setEditingId(null);
    setEditName("");
  };

  const saveEditing = async () => {
    if (!editingId) return;
    
    try {
      await updateTag(editingId, {
        name: editName,
      });
      
      setTags(
        tags.map((tag) =>
          tag.id === editingId
            ? { ...tag, name: editName }
            : tag
        )
      );
      
      cancelEditing();
      
      toast({
        title: "Success",
        description: "Tag updated successfully",
      });
    } catch (error) {
      console.error("Error updating tag:", error);
      toast({
        title: "Error",
        description: "Failed to update tag",
        variant: "destructive",
      });
    }
  };

  const handleCreateTag = async () => {
    if (!newTagName.trim()) return;
    
    try {
      const newTag = await createTag({
        name: newTagName,
      });
      
      setTags([...tags, newTag]);
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

  if (loading) {
    return (
      <div className="space-y-4">
        <Skeleton className="h-10 w-full" />
        <Skeleton className="h-96 w-full" />
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Tags</h2>
        
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button className="flex items-center gap-2">
              <Plus className="h-4 w-4" /> Add Tag
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

      {tags.length === 0 ? (
        <div className="py-12 text-center">
          <p className="text-muted-foreground">No tags found.</p>
        </div>
      ) : (
        <div className="border rounded-md">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Slug</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {tags.map((tag) => (
                <TableRow key={tag.id}>
                  <TableCell>
                    {editingId === tag.id ? (
                      <Input
                        value={editName}
                        onChange={(e) => setEditName(e.target.value)}
                      />
                    ) : (
                      tag.name
                    )}
                  </TableCell>
                  <TableCell>{tag.slug}</TableCell>
                  <TableCell className="text-right">
                    {editingId === tag.id ? (
                      <div className="flex justify-end gap-2">
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={saveEditing}
                        >
                          <Check className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={cancelEditing}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    ) : (
                      <div className="flex justify-end gap-2">
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => startEditing(tag)}
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                        
                        <AlertDialog>
                          <AlertDialogTrigger asChild>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="text-destructive"
                            >
                              <Trash className="h-4 w-4" />
                            </Button>
                          </AlertDialogTrigger>
                          <AlertDialogContent>
                            <AlertDialogHeader>
                              <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                              <AlertDialogDescription>
                                This action cannot be undone. This will permanently delete the tag and remove it from any posts.
                              </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                              <AlertDialogCancel>Cancel</AlertDialogCancel>
                              <AlertDialogAction
                                onClick={() => handleDelete(tag.id)}
                                className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                              >
                                Delete
                              </AlertDialogAction>
                            </AlertDialogFooter>
                          </AlertDialogContent>
                        </AlertDialog>
                      </div>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}
    </div>
  );
};

export default BlogTagsList;
