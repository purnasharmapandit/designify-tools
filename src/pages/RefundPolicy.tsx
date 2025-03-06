
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
        <div className="prose prose-lg max-w-none">
          <p>
            We want you to be completely satisfied with our services. This Refund Policy outlines when and how you can receive a refund for your purchase of our services.
          </p>

          <h2>1. Subscription Refunds</h2>
          <p>
            We offer a 14-day money-back guarantee for all new subscriptions. If you're not satisfied with our service within the first 14 days after your initial purchase, you can request a full refund.
          </p>
          <p>
            To be eligible for a refund, you must submit your request within this 14-day period by contacting our customer support team.
          </p>

          <h2>2. Refund Process</h2>
          <p>
            To request a refund, please contact our support team at refunds@aidesigntools.com with your order details. Please include:
          </p>
          <ul>
            <li>Your full name</li>
            <li>Email address associated with your account</li>
            <li>Date of purchase</li>
            <li>Reason for refund request</li>
          </ul>
          <p>
            Once your refund request is received, we will review it and notify you of the status of your refund. If approved, your refund will be processed, and a credit will automatically be applied to your original method of payment within 5-10 business days.
          </p>

          <h2>3. Exceptions</h2>
          <p>
            The following situations are not eligible for refunds:
          </p>
          <ul>
            <li>Requests made after the 14-day period has expired</li>
            <li>Subscription renewals (after the initial subscription period)</li>
            <li>Cases of account misuse or violation of our Terms of Service</li>
            <li>Premium add-ons or one-time purchases (unless specified otherwise)</li>
          </ul>

          <h2>4. Pro-rated Refunds for Annual Subscriptions</h2>
          <p>
            For annual subscription plans, if you cancel after the initial 14-day refund period, you may be eligible for a pro-rated refund for the unused portion of your subscription, minus any applicable service fees.
          </p>

          <h2>5. Promotional Offers</h2>
          <p>
            Purchases made with promotional offers or significant discounts may have different refund terms. These terms will be clearly communicated at the time of purchase.
          </p>

          <h2>6. Changes to the Refund Policy</h2>
          <p>
            We reserve the right to modify this Refund Policy at any time. Changes will be effective immediately upon posting on our website. It is your responsibility to review this policy periodically.
          </p>

          <h2>7. Contact Information</h2>
          <p>
            If you have any questions about our Refund Policy, please contact us at refunds@aidesigntools.com.
          </p>
        </div>
      </main>
      <Footer />
    </motion.div>
  );
};

export default RefundPolicy;
