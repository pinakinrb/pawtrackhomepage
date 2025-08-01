
import { CheckIcon } from 'lucide-react';
import { WaitlistButton } from './WaitlistButton';
export function Pricing() {
  const freePlanFeatures = ['Up to 5 pet profiles', 'Basic scheduling', 'Manual client updates', 'Payment tracking', 'Mobile access'];
  const proPlanFeatures = ['Unlimited pet profiles', 'Smart recurring scheduling', 'Automated client updates', 'Weather alerts & cancellations', 'Payment tracking & reminders', 'Monthly revenue reports', 'Photo proof of service', 'Priority support'];
  return <section id="pricing" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Affordable plans designed for independent pet sitters
          </p>
        </div>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Free Plan */}
          <div className="bg-white rounded-lg border border-gray-200 p-8 hover:shadow-md transition-shadow">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Free Plan</h3>
            <p className="text-gray-600 mb-6">Perfect for getting started</p>
            <div className="mb-6">
              <span className="text-4xl font-bold text-gray-900">$0</span>
              <span className="text-gray-600">/month</span>
            </div>
            <ul className="space-y-3 mb-8">
              {freePlanFeatures.map((feature, index) => <li key={index} className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">{feature}</span>
                </li>)}
            </ul>
                        <WaitlistButton />
          </div>
          {/* Pro Plan */}
          <div className="bg-blue-600 rounded-lg p-8 shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-blue-800 text-white px-4 py-1 text-sm font-medium">
              MOST POPULAR
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Pro Plan</h3>
            <p className="text-blue-100 mb-6">For serious pet sitters</p>
            <div className="mb-6">
              <span className="text-4xl font-bold text-white">$8</span>
              <span className="text-blue-100">/month</span>
              <span className="text-blue-100 text-sm ml-1">
                billed annually
              </span>
            </div>
            <ul className="space-y-3 mb-8">
              {proPlanFeatures.map((feature, index) => <li key={index} className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-blue-200 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-white">{feature}</span>
                </li>)}
            </ul>
            <WaitlistButton buttonText="Join Priority Waitlist" buttonClass="bg-yellow-600 text-black px-6 py-2 rounded-md font-medium hover:bg-yellow-700 transition-colors"/>
          </div>
        </div>
        <div className="mt-12 text-center text-gray-600">
          <p>Join our waitlist today to be notified when PawTrack launches.</p>
        </div>
      </div>
    </section>;
}