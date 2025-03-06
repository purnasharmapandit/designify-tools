import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const BillingSubscriptions = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-28 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/help-center" className="inline-flex items-center text-primary mb-6 hover:underline">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Help Center
          </Link>
          
          <div className="prose prose-lg max-w-none">
            <h1 className="text-4xl font-bold font-display mb-6">Account Billing and Subscriptions</h1>
            <p className="text-gray-500 mb-8">Published on October 12, 2023 · 9 min read</p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Understanding Our Subscription Plans</h2>
            <p>
              We offer several subscription options to meet different needs and budgets. Each plan provides access 
              to our design tools with varying features, export quality options, and usage limits.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 my-8">
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-2">Basic Plan</h3>
                <p className="text-2xl font-bold mb-2">$20/month</p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>5 AI design generations/day</li>
                  <li>Basic templates</li>
                  <li>Standard support</li>
                  <li>720p export quality</li>
                  <li>2 team members</li>
                </ul>
              </div>
              
              <div className="border border-primary rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold mb-2">Pro Plan</h3>
                <p className="text-2xl font-bold mb-2">$30/month</p>
                <span className="bg-primary text-white text-xs px-2 py-1 rounded-full">Most Popular</span>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>20 AI design generations/day</li>
                  <li>Premium templates</li>
                  <li>Priority support</li>
                  <li>1080p export quality</li>
                  <li>5 team members</li>
                  <li>Custom branding</li>
                </ul>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-2">Enterprise Plan</h3>
                <p className="text-2xl font-bold mb-2">$50/month</p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>Unlimited AI generations</li>
                  <li>All premium features</li>
                  <li>24/7 priority support</li>
                  <li>4K export quality</li>
                  <li>Unlimited team members</li>
                  <li>Custom integration</li>
                </ul>
              </div>
            </div>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Managing Your Subscription</h2>
            
            <h3 className="text-xl font-bold mt-6 mb-3">How to Subscribe</h3>
            <ol className="list-decimal pl-6 space-y-2 mb-6">
              <li>Log in to your account and navigate to &quot;Account Settings&quot;</li>
              <li>Click on &quot;Subscription&quot; in the sidebar menu</li>
              <li>Choose your preferred plan</li>
              <li>Enter your payment information</li>
              <li>Review your order and confirm the subscription</li>
            </ol>
            
            <h3 className="text-xl font-bold mt-6 mb-3">Changing Your Plan</h3>
            <p>
              You can upgrade or downgrade your subscription at any time:
            </p>
            <ol className="list-decimal pl-6 space-y-2 mb-6">
              <li>Go to &quot;Account Settings&quot; &gt; &quot;Subscription&quot;</li>
              <li>Click &quot;Change Plan&quot;</li>
              <li>Select your new plan and confirm the change</li>
            </ol>
            <p>
              When upgrading, the new plan takes effect immediately, and you'll be charged the prorated difference. 
              When downgrading, the new plan will take effect at the end of your current billing cycle.
            </p>
            
            <h3 className="text-xl font-bold mt-6 mb-3">Payment Methods</h3>
            <p>
              We accept the following payment methods:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Credit/Debit Cards (Visa, MasterCard, American Express, Discover)</li>
              <li>PayPal</li>
              <li>Apple Pay (on compatible devices)</li>
              <li>Google Pay (on compatible devices)</li>
            </ul>
            
            <h3 className="text-xl font-bold mt-6 mb-3">Billing Cycle and Invoices</h3>
            <p>
              Subscriptions are billed monthly or annually, depending on your chosen billing cycle. You'll receive 
              an email receipt for each payment. All invoices are also available in your account dashboard under 
              &quot;Billing History.&quot;
            </p>
            
            <div className="bg-blue-50 border-l-4 border-blue-400 p-5 mt-8">
              <h3 className="text-lg font-bold mb-2">Cancellation Policy</h3>
              <p>
                You can cancel your subscription at any time from your account settings. Upon cancellation:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Your plan will remain active until the end of your current billing period</li>
                <li>You won't be charged for future billing cycles</li>
                <li>Your account will revert to the free tier with limited features after your paid period ends</li>
                <li>Your designs will remain accessible, but some editing features may be restricted</li>
              </ul>
            </div>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Frequently Asked Questions</h2>
            
            <h3 className="text-xl font-bold mt-6 mb-3">Do you offer refunds?</h3>
            <p>
              We offer a 14-day money-back guarantee for new subscribers. If you're not satisfied with our service, 
              you can request a refund within 14 days of your initial subscription. Please contact our support team 
              to process your refund.
            </p>
            
            <h3 className="text-xl font-bold mt-6 mb-3">Can I try before I subscribe?</h3>
            <p>
              Yes! We offer a 7-day free trial of our Pro plan. No credit card is required to start the trial.
            </p>
            
            <h3 className="text-xl font-bold mt-6 mb-3">Do you offer team or organization plans?</h3>
            <p>
              Yes, our Pro and Enterprise plans include team collaboration features. For larger organizations with 
              specific needs, please contact our sales team for custom enterprise solutions.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BillingSubscriptions;
