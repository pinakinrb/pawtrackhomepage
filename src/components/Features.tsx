import React from 'react';
import { ClipboardListIcon, CalendarIcon, MessageSquareIcon, DollarSignIcon, SmartphoneIcon } from 'lucide-react';
export function Features() {
  const features = [{
    icon: <ClipboardListIcon className="h-10 w-10 text-blue-500" />,
    title: 'Pet Profile Management',
    description: 'Create detailed profiles for each pet with special needs, emergency contacts, photos, and service history all in one place.'
  }, {
    icon: <CalendarIcon className="h-10 w-10 text-blue-500" />,
    title: 'Smart Scheduling',
    description: 'Set up recurring services, weather-based cancellations, and service templates to streamline your booking process.'
  }, {
    icon: <MessageSquareIcon className="h-10 w-10 text-blue-500" />,
    title: 'Automated Communication',
    description: 'Send pre-built messages to clients, automated service updates, and review requests with just a tap.'
  }, {
    icon: <DollarSignIcon className="h-10 w-10 text-blue-500" />,
    title: 'Payment Tracking',
    description: 'Track payments by client or pet, send automated reminders for overdue payments, and generate monthly revenue reports.'
  }, {
    icon: <SmartphoneIcon className="h-10 w-10 text-blue-500" />,
    title: 'Simple Mobile Interface',
    description: 'Check-in and check-out with one tap, take timestamped photos as proof of service, and manage your business on the go.'
  }];
  return <section id="features" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Everything You Need, Nothing You Don't
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            PawTrack is designed specifically for independent pet sitters, with
            features that simplify your workflow and help you provide
            exceptional service.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => <div key={index} className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>)}
        </div>
      </div>
    </section>;
}