
import { useBlog, blogPosts } from "@/contexts/BlogContext";
import BlogPost from "@/components/BlogPost";

const CreateLogo = () => {
  const { getPostBySlug } = useBlog();
  const post = getPostBySlug('create-logo') || blogPosts.createLogo;

  const content = (
    <>
      <h2 id="getting-started" className="text-2xl font-bold mt-8 mb-4">Getting Started</h2>
      <p>
        Creating your first professional logo is easy with our AI-powered Logo Maker. 
        Follow this step-by-step guide to design a stunning logo in minutes, no design skills required.
      </p>
      
      <h2 id="describe-brand" className="text-2xl font-bold mt-8 mb-4">Step 1: Describe Your Brand</h2>
      <p>
        Start by entering a description of your brand. Include details like your industry, 
        target audience, and the feeling you want your logo to evoke. Our AI uses this information 
        to generate logo concepts that match your brand identity.
      </p>
      
      <h2 id="choose-style" className="text-2xl font-bold mt-8 mb-4">Step 2: Choose a Style</h2>
      <p>
        Select your preferred logo style from options like minimalist, vintage, modern, or playful. 
        This helps our AI narrow down the design options to match your aesthetic preferences.
      </p>
      
      <h2 id="select-colors" className="text-2xl font-bold mt-8 mb-4">Step 3: Select Colors</h2>
      <p>
        Choose a color palette that represents your brand. You can either select from our pre-designed 
        color schemes or create a custom palette. Remember that colors convey emotion, so choose wisely 
        based on your brand personality.
      </p>
      
      <h2 id="review-customize" className="text-2xl font-bold mt-8 mb-4">Step 4: Review and Customize</h2>
      <p>
        Once the AI generates logo options, browse through them and select your favorite. You can then 
        customize various elements like fonts, colors, icon size, and positioning until you're completely 
        satisfied with the result.
      </p>
      
      <h2 id="download-logo" className="text-2xl font-bold mt-8 mb-4">Step 5: Download Your Logo</h2>
      <p>
        When you're happy with your design, download your logo in multiple formats for different use cases. 
        Depending on your subscription plan, you'll have access to various file formats and resolutions.
      </p>
      
      <div className="bg-primary/10 p-6 rounded-xl mt-8">
        <h3 className="text-xl font-bold mb-4">Pro Tips</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Keep your logo simple for better recognition and versatility</li>
          <li>Ensure your logo works well in both color and black-and-white</li>
          <li>Test your logo at different sizes to ensure legibility</li>
          <li>Consider how your logo will look on different backgrounds</li>
        </ul>
      </div>
    </>
  );

  return <BlogPost post={post} contentSlot={content} />;
};

export default CreateLogo;
