
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ShieldCheck } from "lucide-react";

const TermsOfService = () => {
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
              <ShieldCheck className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl font-bold font-display mb-4">Terms of Service</h1>
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
              Welcome to AI Design Tools! These Terms of Service govern your use of our website, products, and services. By accessing or using our platform, you agree to be bound by these Terms. Please read them carefully.
            </p>

            <div className="my-8 p-6 bg-gray-50 rounded-lg border-l-4 border-primary">
              <h2 className="mt-0 text-2xl font-semibold font-display flex items-center">
                <span className="w-8 h-8 flex items-center justify-center rounded-full bg-primary/20 mr-3 text-primary">1</span>
                Acceptance of Terms
              </h2>
              <p>
                By accessing or using our services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
              </p>
            </div>

            <div className="my-8 p-6 bg-gray-50 rounded-lg border-l-4 border-primary">
              <h2 className="mt-0 text-2xl font-semibold font-display flex items-center">
                <span className="w-8 h-8 flex items-center justify-center rounded-full bg-primary/20 mr-3 text-primary">2</span>
                Use License
              </h2>
              <p>
                Permission is granted to temporarily use our platform for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title. Under this license, you may not:
              </p>
              <ul className="space-y-2 mt-4">
                <li className="flex items-start">
                  <span className="inline-block w-5 h-5 bg-accent/30 rounded-full flex-shrink-0 mt-1 mr-3"></span>
                  <span>Modify or copy the materials</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-5 h-5 bg-accent/30 rounded-full flex-shrink-0 mt-1 mr-3"></span>
                  <span>Use the materials for any commercial purpose</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-5 h-5 bg-accent/30 rounded-full flex-shrink-0 mt-1 mr-3"></span>
                  <span>Attempt to decompile or reverse engineer any software contained on our platform</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-5 h-5 bg-accent/30 rounded-full flex-shrink-0 mt-1 mr-3"></span>
                  <span>Remove any copyright or other proprietary notations from the materials</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-5 h-5 bg-accent/30 rounded-full flex-shrink-0 mt-1 mr-3"></span>
                  <span>Transfer the materials to another person or "mirror" the materials on any other server</span>
                </li>
              </ul>
            </div>

            <div className="my-8 p-6 bg-gray-50 rounded-lg border-l-4 border-primary">
              <h2 className="mt-0 text-2xl font-semibold font-display flex items-center">
                <span className="w-8 h-8 flex items-center justify-center rounded-full bg-primary/20 mr-3 text-primary">3</span>
                Account Responsibilities
              </h2>
              <p>
                If you create an account on our platform, you are responsible for maintaining the security of your account and for all activities that occur under your account. You must immediately notify us of any unauthorized use of your account or any other breach of security.
              </p>
            </div>

            <div className="my-8 p-6 bg-gray-50 rounded-lg border-l-4 border-primary">
              <h2 className="mt-0 text-2xl font-semibold font-display flex items-center">
                <span className="w-8 h-8 flex items-center justify-center rounded-full bg-primary/20 mr-3 text-primary">4</span>
                Intellectual Property
              </h2>
              <p>
                The content, features, and functionality of our platform are owned by us and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
              </p>
            </div>

            <div className="my-8 p-6 bg-gray-50 rounded-lg border-l-4 border-primary">
              <h2 className="mt-0 text-2xl font-semibold font-display flex items-center">
                <span className="w-8 h-8 flex items-center justify-center rounded-full bg-primary/20 mr-3 text-primary">5</span>
                User-Generated Content
              </h2>
              <p>
                By uploading content to our platform, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, adapt, publish, translate, and distribute your content in any existing or future media.
              </p>
            </div>

            <div className="my-8 p-6 bg-gray-50 rounded-lg border-l-4 border-primary">
              <h2 className="mt-0 text-2xl font-semibold font-display flex items-center">
                <span className="w-8 h-8 flex items-center justify-center rounded-full bg-primary/20 mr-3 text-primary">6</span>
                Termination
              </h2>
              <p>
                We may terminate your access to our platform at our sole discretion, without notice, for any reason, including if you breach these Terms of Service.
              </p>
            </div>

            <div className="my-8 p-6 bg-gray-50 rounded-lg border-l-4 border-primary">
              <h2 className="mt-0 text-2xl font-semibold font-display flex items-center">
                <span className="w-8 h-8 flex items-center justify-center rounded-full bg-primary/20 mr-3 text-primary">7</span>
                Governing Law
              </h2>
              <p>
                These Terms shall be governed by and defined following the laws of [Your Country]. Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the courts of [Your Country].
              </p>
            </div>

            <div className="my-8 p-6 bg-gray-50 rounded-lg border-l-4 border-primary">
              <h2 className="mt-0 text-2xl font-semibold font-display flex items-center">
                <span className="w-8 h-8 flex items-center justify-center rounded-full bg-primary/20 mr-3 text-primary">8</span>
                Changes to Terms
              </h2>
              <p>
                We reserve the right to modify these terms at any time. We will notify users of any changes by updating the date at the top of these Terms.
              </p>
            </div>

            <div className="my-8 p-6 bg-gray-50 rounded-lg border-l-4 border-primary">
              <h2 className="mt-0 text-2xl font-semibold font-display flex items-center">
                <span className="w-8 h-8 flex items-center justify-center rounded-full bg-primary/20 mr-3 text-primary">9</span>
                Contact Information
              </h2>
              <p>
                If you have any questions about these Terms, please contact us at support@aidesigntools.com.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </motion.div>
  );
};

export default TermsOfService;
