
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
              Last updated: May 11, 2025
            </p>
          </div>
        </div>
      </div>
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
          <div className="prose prose-lg max-w-none">
            <p className="lead text-lg">
              At AI Design Tools, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>

            <div className="my-8 p-6 bg-gray-50 rounded-lg border-l-4 border-primary">
              <h2 className="mt-0 text-2xl font-semibold font-display flex items-center">
                <span className="w-8 h-8 flex items-center justify-center rounded-full bg-primary/20 mr-3 text-primary">1</span>
                Information We Collect
              </h2>
              <p>
                We may collect personal identification information, including but not limited to:
              </p>
              <ul className="space-y-2 mt-4">
                <li className="flex items-start">
                  <span className="inline-block w-5 h-5 bg-accent/30 rounded-full flex-shrink-0 mt-1 mr-3"></span>
                  <span>Name and email address when you create an account</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-5 h-5 bg-accent/30 rounded-full flex-shrink-0 mt-1 mr-3"></span>
                  <span>Billing information when you subscribe to our services</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-5 h-5 bg-accent/30 rounded-full flex-shrink-0 mt-1 mr-3"></span>
                  <span>User-generated content that you upload to our platform</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-5 h-5 bg-accent/30 rounded-full flex-shrink-0 mt-1 mr-3"></span>
                  <span>Usage data such as how you interact with our services</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-5 h-5 bg-accent/30 rounded-full flex-shrink-0 mt-1 mr-3"></span>
                  <span>Device information including IP address, browser type, and operating system</span>
                </li>
              </ul>
            </div>

            <div className="my-8 p-6 bg-gray-50 rounded-lg border-l-4 border-primary">
              <h2 className="mt-0 text-2xl font-semibold font-display flex items-center">
                <span className="w-8 h-8 flex items-center justify-center rounded-full bg-primary/20 mr-3 text-primary">2</span>
                How We Use Your Information
              </h2>
              <p>We may use the information we collect for various purposes, including to:</p>
              <ul className="space-y-2 mt-4">
                <li className="flex items-start">
                  <span className="inline-block w-5 h-5 bg-accent/30 rounded-full flex-shrink-0 mt-1 mr-3"></span>
                  <span>Provide, maintain, and improve our services</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-5 h-5 bg-accent/30 rounded-full flex-shrink-0 mt-1 mr-3"></span>
                  <span>Process transactions and send related information</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-5 h-5 bg-accent/30 rounded-full flex-shrink-0 mt-1 mr-3"></span>
                  <span>Send administrative information, such as updates or changes to our terms</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-5 h-5 bg-accent/30 rounded-full flex-shrink-0 mt-1 mr-3"></span>
                  <span>Respond to customer service requests and support needs</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-5 h-5 bg-accent/30 rounded-full flex-shrink-0 mt-1 mr-3"></span>
                  <span>Send promotional communications (with your consent)</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-5 h-5 bg-accent/30 rounded-full flex-shrink-0 mt-1 mr-3"></span>
                  <span>Monitor and analyze usage patterns and trends</span>
                </li>
              </ul>
            </div>

            <div className="my-8 p-6 bg-gray-50 rounded-lg border-l-4 border-primary">
              <h2 className="mt-0 text-2xl font-semibold font-display flex items-center">
                <span className="w-8 h-8 flex items-center justify-center rounded-full bg-primary/20 mr-3 text-primary">3</span>
                Cookies and Tracking Technologies
              </h2>
              <p>
                We use cookies and similar tracking technologies to track activity on our platform and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
              </p>
            </div>

            <div className="my-8 p-6 bg-gray-50 rounded-lg border-l-4 border-primary">
              <h2 className="mt-0 text-2xl font-semibold font-display flex items-center">
                <span className="w-8 h-8 flex items-center justify-center rounded-full bg-primary/20 mr-3 text-primary">4</span>
                Third-Party Services
              </h2>
              <p>
                We may use third-party service providers to help us operate our business and the platform or administer activities on our behalf. We may share your information with these third parties only to the extent necessary for them to provide these services.
              </p>
            </div>

            <div className="my-8 p-6 bg-gray-50 rounded-lg border-l-4 border-primary">
              <h2 className="mt-0 text-2xl font-semibold font-display flex items-center">
                <span className="w-8 h-8 flex items-center justify-center rounded-full bg-primary/20 mr-3 text-primary">5</span>
                Data Security
              </h2>
              <p>
                We implement reasonable security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure.
              </p>
            </div>

            <div className="my-8 p-6 bg-gray-50 rounded-lg border-l-4 border-primary">
              <h2 className="mt-0 text-2xl font-semibold font-display flex items-center">
                <span className="w-8 h-8 flex items-center justify-center rounded-full bg-primary/20 mr-3 text-primary">6</span>
                Your Privacy Rights
              </h2>
              <p>
                Depending on your location, you may have certain rights regarding your personal information, such as the right to access, correct, or delete your data. To exercise these rights, please contact us using the information provided below.
              </p>
            </div>

            <div className="my-8 p-6 bg-gray-50 rounded-lg border-l-4 border-primary">
              <h2 className="mt-0 text-2xl font-semibold font-display flex items-center">
                <span className="w-8 h-8 flex items-center justify-center rounded-full bg-primary/20 mr-3 text-primary">7</span>
                Children's Privacy
              </h2>
              <p>
                Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13.
              </p>
            </div>

            <div className="my-8 p-6 bg-gray-50 rounded-lg border-l-4 border-primary">
              <h2 className="mt-0 text-2xl font-semibold font-display flex items-center">
                <span className="w-8 h-8 flex items-center justify-center rounded-full bg-primary/20 mr-3 text-primary">8</span>
                Changes to This Privacy Policy
              </h2>
              <p>
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
              </p>
            </div>

            <div className="my-8 p-6 bg-gray-50 rounded-lg border-l-4 border-primary">
              <h2 className="mt-0 text-2xl font-semibold font-display flex items-center">
                <span className="w-8 h-8 flex items-center justify-center rounded-full bg-primary/20 mr-3 text-primary">9</span>
                Contact Information
              </h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at privacy@aidesigntools.com.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </motion.div>
  );
};

export default PrivacyPolicy;
