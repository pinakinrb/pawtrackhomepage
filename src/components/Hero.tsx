
import { CheckCircleIcon } from 'lucide-react';
import { WaitlistButton } from './WaitlistButton';
export function Hero() {
  return <section className="bg-gradient-to-b from-blue-50 to-white py-16 md:py-24">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            The All-in-One Tool for Independent Pet Sitters
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Manage your pet sitting business with ease. Track pets, schedule
            services, communicate with clients, and get paid—all in one place
            for just $8/month.
          </p>
          <div className="space-y-3 mb-8">
            <div className="flex items-start">
              <CheckCircleIcon className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" />
              <p className="text-gray-700">
                <span className="font-semibold">Save time</span> with automated
                scheduling and client updates
              </p>
            </div>
            <div className="flex items-start">
              <CheckCircleIcon className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" />
              <p className="text-gray-700">
                <span className="font-semibold">Never miss details</span> with
                comprehensive pet profiles
              </p>
            </div>
            <div className="flex items-start">
              <CheckCircleIcon className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" />
              <p className="text-gray-700">
                <span className="font-semibold">Get paid faster</span> with
                payment tracking and reminders
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <WaitlistButton />
            <a href="#how-it-works" className="border border-gray-300 text-gray-700 px-8 py-3 rounded-md text-center font-medium hover:bg-gray-50 transition-colors">
              See How It Works
            </a>
          </div>
        </div>
        <div className="md:w-1/2">
          <div className="relative">
            <div className="bg-white rounded-lg shadow-xl overflow-hidden">
              <img src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2669&q=80" alt="Pet sitter with dogs" className="w-full h-64 md:h-96 object-cover" />
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-medium text-lg">Today's Schedule</h3>
                  <span className="text-blue-600 text-sm">
                    Wednesday, July 12
                  </span>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center p-3 bg-blue-50 rounded-md">
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                      🐕
                    </div>
                    <div>
                      <p className="font-medium">Max - Morning Walk</p>
                      <p className="text-sm text-gray-500">
                        10:00 AM - 10:30 AM
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center p-3 bg-green-50 rounded-md">
                    <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mr-4">
                      🐱
                    </div>
                    <div>
                      <p className="font-medium">Luna - Feeding Visit</p>
                      <p className="text-sm text-gray-500">
                        12:00 PM - 12:30 PM
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center p-3 bg-purple-50 rounded-md">
                    <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mr-4">
                      🐕
                    </div>
                    <div>
                      <p className="font-medium">Bella - Afternoon Walk</p>
                      <p className="text-sm text-gray-500">3:00 PM - 3:30 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
}