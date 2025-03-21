
import { useEffect, useState } from "react";
import { getAllAuthors, deleteAuthor, updateAuthor, createAuthor } from "@/utils/blogAdminUtils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Edit, Trash, Check, X, Plus } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { useToast } from "@/hooks/use-toast";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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

interface Author {
  id: string;
  name: string;
  title?: string;
  avatar?: string;
}

const BlogAuthorsList = () => {
  const [authors, setAuthors] = useState<Author[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editName, setEditName] = useState("");
  const [editTitle, setEditTitle] = useState("");
  const [editAvatar, setEditAvatar] = useState("");
  const [newAuthorName, setNewAuthorName] = useState("");
  const [newAuthorTitle, setNewAuthorTitle] = useState("");
  const [newAuthorAvatar, setNewAuthorAvatar] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    fetchAuthors();
  }, []);

  const fetchAuthors = async () => {
    try {
      const fetchedAuthors = await getAllAuthors();
      setAuthors(fetchedAuthors);
    } catch (error) {
      console.error("Error fetching authors:", error);
      toast({
        title: "Error",
        description: "Failed to load authors",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await deleteAuthor(id);
      setAuthors(authors.filter((author) => author.id !== id));
      toast({
        title: "Success",
        description: "Author deleted successfully",
      });
    } catch (error) {
      console.error("Error deleting author:", error);
      toast({
        title: "Error",
        description: "Failed to delete author",
        variant: "destructive",
      });
    }
  };

  const startEditing = (author: Author) => {
    setEditingId(author.id);
    setEditName(author.name);
    setEditTitle(author.title || "");
    setEditAvatar(author.avatar || "");
  };

  const cancelEditing = () => {
    setEditingId(null);
    setEditName("");
    setEditTitle("");
    setEditAvatar("");
  };

  const saveEditing = async () => {
    if (!editingId) return;
    
    try {
      await updateAuthor(editingId, {
        name: editName,
        title: editTitle,
        avatar: editAvatar,
      });
      
      setAuthors(
        authors.map((author) =>
          author.id === editingId
            ? { ...author, name: editName, title: editTitle, avatar: editAvatar }
            : author
        )
      );
      
      cancelEditing();
      
      toast({
        title: "Success",
        description: "Author updated successfully",
      });
    } catch (error) {
      console.error("Error updating author:", error);
      toast({
        title: "Error",
        description: "Failed to update author",
        variant: "destructive",
      });
    }
  };

  const handleCreateAuthor = async () => {
    if (!newAuthorName.trim()) return;
    
    try {
      const newAuthor = await createAuthor({
        name: newAuthorName,
        title: newAuthorTitle,
        avatar: newAuthorAvatar,
      });
      
      setAuthors([...authors, newAuthor]);
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
        <h2 className="text-xl font-semibold">Authors</h2>
        
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button className="flex items-center gap-2">
              <Plus className="h-4 w-4" /> Add Author
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

      {authors.length === 0 ? (
        <div className="py-12 text-center">
          <p className="text-muted-foreground">No authors found.</p>
        </div>
      ) : (
        <div className="border rounded-md">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Avatar</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Title</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {authors.map((author) => (
                <TableRow key={author.id}>
                  <TableCell>
                    {editingId === author.id ? (
                      <Input
                        value={editAvatar}
                        onChange={(e) => setEditAvatar(e.target.value)}
                        placeholder="Avatar URL"
                        className="w-60"
                      />
                    ) : (
                      <Avatar>
                        <AvatarImage src={author.avatar} alt={author.name} />
                        <AvatarFallback>
                          {author.name.substring(0, 2).toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                    )}
                  </TableCell>
                  <TableCell>
                    {editingId === author.id ? (
                      <Input
                        value={editName}
                        onChange={(e) => setEditName(e.target.value)}
                      />
                    ) : (
                      author.name
                    )}
                  </TableCell>
                  <TableCell>
                    {editingId === author.id ? (
                      <Input
                        value={editTitle}
                        onChange={(e) => setEditTitle(e.target.value)}
                        placeholder="Title"
                      />
                    ) : (
                      author.title || "-"
                    )}
                  </TableCell>
                  <TableCell className="text-right">
                    {editingId === author.id ? (
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
                          onClick={() => startEditing(author)}
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
                                This action cannot be undone. This will permanently delete the author and remove it from any posts.
                              </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                              <AlertDialogCancel>Cancel</AlertDialogCancel>
                              <AlertDialogAction
                                onClick={() => handleDelete(author.id)}
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

export default BlogAuthorsList;
