
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "The Logo Maker saved my startup thousands on branding. Absolutely incredible results!",
    author: "Sarah Johnson",
    role: "Startup Founder",
    rating: 5
  },
  {
    quote: "I've tried many design tools but nothing compares to the ease and quality of these AI tools.",
    author: "Michael Chen",
    role: "Marketing Director",
    rating: 5
  },
  {
    quote: "My business cards look professional and get compliments every time I hand them out.",
    author: "Emma Rodriguez",
    role: "Freelance Photographer",
    rating: 5
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">What Our Users Say</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied users
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-6 rounded-3xl shadow-sm relative"
            >
              <Quote className="h-10 w-10 text-gray-200 absolute top-4 right-4" />
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-brand-yellow fill-brand-yellow" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 relative z-10">"{testimonial.quote}"</p>
              <div>
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
