
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ShieldCheck } from "lucide-react";

const RefundPolicy = () => {
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
            <h1 className="text-4xl font-bold font-display mb-4">Refund Policy</h1>
            <p className="text-lg text-gray-600">
              Last updated: June 1, 2023
            </p>
          </div>
        </div>
      </div>
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
          <div className="prose prose-lg max-w-none">
            <p className="lead text-lg">
              We want you to be completely satisfied with our services. This Refund Policy outlines when and how you can receive a refund for your purchase of our services.
            </p>

            <div className="my-8 p-6 bg-gray-50 rounded-lg border-l-4 border-primary">
              <h2 className="mt-0 text-2xl font-semibold font-display flex items-center">
                <span className="w-8 h-8 flex items-center justify-center rounded-full bg-primary/20 mr-3 text-primary">1</span>
                Subscription Refunds
              </h2>
              <p>
                We offer a 14-day money-back guarantee for all new subscriptions. If you're not satisfied with our service within the first 14 days after your initial purchase, you can request a full refund.
              </p>
              <p>
                To be eligible for a refund, you must submit your request within this 14-day period by contacting our customer support team.
              </p>
            </div>

            <div className="my-8 p-6 bg-gray-50 rounded-lg border-l-4 border-primary">
              <h2 className="mt-0 text-2xl font-semibold font-display flex items-center">
                <span className="w-8 h-8 flex items-center justify-center rounded-full bg-primary/20 mr-3 text-primary">2</span>
                Refund Process
              </h2>
              <p>
                To request a refund, please contact our support team at refunds@aidesigntools.com with your order details. Please include:
              </p>
              <ul className="space-y-2 mt-4">
                <li className="flex items-start">
                  <span className="inline-block w-5 h-5 bg-accent/30 rounded-full flex-shrink-0 mt-1 mr-3"></span>
                  <span>Your full name</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-5 h-5 bg-accent/30 rounded-full flex-shrink-0 mt-1 mr-3"></span>
                  <span>Email address associated with your account</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-5 h-5 bg-accent/30 rounded-full flex-shrink-0 mt-1 mr-3"></span>
                  <span>Date of purchase</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-5 h-5 bg-accent/30 rounded-full flex-shrink-0 mt-1 mr-3"></span>
                  <span>Reason for refund request</span>
                </li>
              </ul>
              <p className="mt-4">
                Once your refund request is received, we will review it and notify you of the status of your refund. If approved, your refund will be processed, and a credit will automatically be applied to your original method of payment within 5-10 business days.
              </p>
            </div>

            <div className="my-8 p-6 bg-gray-50 rounded-lg border-l-4 border-primary">
              <h2 className="mt-0 text-2xl font-semibold font-display flex items-center">
                <span className="w-8 h-8 flex items-center justify-center rounded-full bg-primary/20 mr-3 text-primary">3</span>
                Exceptions
              </h2>
              <p>
                The following situations are not eligible for refunds:
              </p>
              <ul className="space-y-2 mt-4">
                <li className="flex items-start">
                  <span className="inline-block w-5 h-5 bg-accent/30 rounded-full flex-shrink-0 mt-1 mr-3"></span>
                  <span>Requests made after the 14-day period has expired</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-5 h-5 bg-accent/30 rounded-full flex-shrink-0 mt-1 mr-3"></span>
                  <span>Subscription renewals (after the initial subscription period)</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-5 h-5 bg-accent/30 rounded-full flex-shrink-0 mt-1 mr-3"></span>
                  <span>Cases of account misuse or violation of our Terms of Service</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-5 h-5 bg-accent/30 rounded-full flex-shrink-0 mt-1 mr-3"></span>
                  <span>Premium add-ons or one-time purchases (unless specified otherwise)</span>
                </li>
              </ul>
            </div>

            <div className="my-8 p-6 bg-gray-50 rounded-lg border-l-4 border-primary">
              <h2 className="mt-0 text-2xl font-semibold font-display flex items-center">
                <span className="w-8 h-8 flex items-center justify-center rounded-full bg-primary/20 mr-3 text-primary">4</span>
                Pro-rated Refunds for Annual Subscriptions
              </h2>
              <p>
                For annual subscription plans, if you cancel after the initial 14-day refund period, you may be eligible for a pro-rated refund for the unused portion of your subscription, minus any applicable service fees.
              </p>
            </div>

            <div className="my-8 p-6 bg-gray-50 rounded-lg border-l-4 border-primary">
              <h2 className="mt-0 text-2xl font-semibold font-display flex items-center">
                <span className="w-8 h-8 flex items-center justify-center rounded-full bg-primary/20 mr-3 text-primary">5</span>
                Promotional Offers
              </h2>
              <p>
                Purchases made with promotional offers or significant discounts may have different refund terms. These terms will be clearly communicated at the time of purchase.
              </p>
            </div>

            <div className="my-8 p-6 bg-gray-50 rounded-lg border-l-4 border-primary">
              <h2 className="mt-0 text-2xl font-semibold font-display flex items-center">
                <span className="w-8 h-8 flex items-center justify-center rounded-full bg-primary/20 mr-3 text-primary">6</span>
                Changes to the Refund Policy
              </h2>
              <p>
                We reserve the right to modify this Refund Policy at any time. Changes will be effective immediately upon posting on our website. It is your responsibility to review this policy periodically.
              </p>
            </div>

            <div className="my-8 p-6 bg-gray-50 rounded-lg border-l-4 border-primary">
              <h2 className="mt-0 text-2xl font-semibold font-display flex items-center">
                <span className="w-8 h-8 flex items-center justify-center rounded-full bg-primary/20 mr-3 text-primary">7</span>
                Contact Information
              </h2>
              <p>
                If you have any questions about our Refund Policy, please contact us at refunds@aidesigntools.com.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </motion.div>
  );
};

export default RefundPolicy;
