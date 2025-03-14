
import React, { useState, useEffect } from "react";
import { useBlog, blogPosts } from "@/contexts/BlogContext";
import BlogPost from "@/components/BlogPost";
import { BlogPostType } from "@/types/blog";

const CustomizingProfilePicture = () => {
  const { getPostBySlug } = useBlog();
  const [post, setPost] = useState<BlogPostType>(blogPosts.customizingProfilePicture);

  useEffect(() => {
    const fetchPost = async () => {
      const fetchedPost = await getPostBySlug('customizing-profile-picture');
      if (fetchedPost) {
        setPost(fetchedPost);
      }
    };

    fetchPost();
  }, [getPostBySlug]);

  const content = (
    <>
      <h2 id="why-it-matters" className="text-2xl font-bold mt-8 mb-4">Why Your Profile Picture Matters</h2>
      <p>
        Your profile picture is often the first impression people have of you or your brand online. 
        A professional, well-designed profile picture can significantly impact how others perceive you 
        and increase engagement with your content.
      </p>
      
      <h2 id="creating-perfect-pic" className="text-2xl font-bold mt-8 mb-4">Creating the Perfect Profile Picture</h2>
      
      <h3 className="text-xl font-bold mt-6 mb-3">Step 1: Upload Your Image</h3>
      <p>
        Start by uploading a high-quality image to our Profile Picture Editor. For best results, use an image 
        that is at least 1000x1000 pixels. You can upload photos, logos, or any image you'd like to use.
      </p>
      
      <h3 className="text-xl font-bold mt-6 mb-3">Step 2: Crop and Resize</h3>
      <p>
        Use our intuitive cropping tool to select the most important part of your image. Most social 
        platforms display profile pictures in a circle or square, so make sure the key elements are centered.
      </p>
      
      <h3 className="text-xl font-bold mt-6 mb-3">Step 3: Apply Enhancements</h3>
      <p>
        Our AI-powered tools can help enhance your image automatically:
      </p>
      <ul className="list-disc pl-6 space-y-2 mb-6">
        <li>Adjust brightness, contrast, and saturation</li>
        <li>Apply professional color grading</li>
        <li>Remove backgrounds for a clean look</li>
        <li>Enhance facial features for portrait photos</li>
      </ul>
      
      <h3 className="text-xl font-bold mt-6 mb-3">Step 4: Add Customizations</h3>
      <p>
        Make your profile picture stand out with custom elements:
      </p>
      <ul className="list-disc pl-6 space-y-2 mb-6">
        <li>Apply filters and effects</li>
        <li>Add frames or borders</li>
        <li>Include text or your brand name</li>
        <li>Overlay brand elements or icons</li>
      </ul>
      
      <h3 className="text-xl font-bold mt-6 mb-3">Step 5: Preview and Export</h3>
      <p>
        Preview how your profile picture will look on different platforms. You can see how it appears 
        in various sizes and formats before finalizing. Then export your image in the optimal format 
        for each platform.
      </p>
      
      <div id="platform-tips" className="bg-primary/10 p-6 rounded-xl mt-8">
        <h3 className="text-xl font-bold mb-4">Platform-Specific Tips</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>LinkedIn:</strong> Professional headshot, neutral background, professional attire</li>
          <li><strong>Instagram:</strong> Colorful, high-contrast images work well</li>
          <li><strong>Twitter:</strong> Simple designs that are recognizable even at small sizes</li>
          <li><strong>YouTube:</strong> Consider using your logo or a consistent personal brand image</li>
        </ul>
      </div>
    </>
  );

  return <BlogPost post={post} contentSlot={content} />;
};

export default CustomizingProfilePicture;
