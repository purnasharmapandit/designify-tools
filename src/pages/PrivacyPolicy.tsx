
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Lock } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-white"
    >
      <Navbar />
      <div className="pt-28 pb-6 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-block p-3 rounded-full bg-primary/10 mb-4">
              <Lock className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl font-bold font-display mb-4">Privacy Policy</h1>
            <p className="text-lg text-gray-600">
              Last updated: June 1, 2023
            </p>
          </div>
        </div>
      </div>
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          <p>
            At AI Design Tools, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
          </p>

          <h2>1. Information We Collect</h2>
          <p>
            We may collect personal identification information, including but not limited to:
          </p>
          <ul>
            <li>Name and email address when you create an account</li>
            <li>Billing information when you subscribe to our services</li>
            <li>User-generated content that you upload to our platform</li>
            <li>Usage data such as how you interact with our services</li>
            <li>Device information including IP address, browser type, and operating system</li>
          </ul>

          <h2>2. How We Use Your Information</h2>
          <p>We may use the information we collect for various purposes, including to:</p>
          <ul>
            <li>Provide, maintain, and improve our services</li>
            <li>Process transactions and send related information</li>
            <li>Send administrative information, such as updates or changes to our terms</li>
            <li>Respond to customer service requests and support needs</li>
            <li>Send promotional communications (with your consent)</li>
            <li>Monitor and analyze usage patterns and trends</li>
          </ul>

          <h2>3. Cookies and Tracking Technologies</h2>
          <p>
            We use cookies and similar tracking technologies to track activity on our platform and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
          </p>

          <h2>4. Third-Party Services</h2>
          <p>
            We may use third-party service providers to help us operate our business and the platform or administer activities on our behalf. We may share your information with these third parties only to the extent necessary for them to provide these services.
          </p>

          <h2>5. Data Security</h2>
          <p>
            We implement reasonable security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure.
          </p>

          <h2>6. Your Privacy Rights</h2>
          <p>
            Depending on your location, you may have certain rights regarding your personal information, such as the right to access, correct, or delete your data. To exercise these rights, please contact us using the information provided below.
          </p>

          <h2>7. Children's Privacy</h2>
          <p>
            Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13.
          </p>

          <h2>8. Changes to This Privacy Policy</h2>
          <p>
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
          </p>

          <h2>9. Contact Information</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at privacy@aidesigntools.com.
          </p>
        </div>
      </main>
      <Footer />
    </motion.div>
  );
};

export default PrivacyPolicy;
