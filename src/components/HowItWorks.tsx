import React from 'react';
export function HowItWorks() {
  const steps = [{
    number: '01',
    title: 'Add Client',
    description: 'Create detailed client profiles with contact information, home access details, and billing preferences.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80'
  }, {
    number: '02',
    title: 'Add Pets',
    description: 'Create detailed profiles for each pet with special needs, emergency contacts, photos, and service history all in one place.',
    image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2664&q=80'
  }, {
    number: '03',
    title: 'Set Up Schedules',
    description: 'Create recurring appointments, one-time visits, or service templates for quick and efficient booking.',
    image: 'https://images.unsplash.com/photo-1517331156700-3c241d2b4d83?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2668&q=80'
  }, {
    number: '04',
    title: 'Provide Services',
    description: 'Check in/out with one tap, take photos, and send automated updates to pet parents during your visits.',
    image: 'https://images.unsplash.com/photo-1601758125946-6ec2ef64daf8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80'
  }, {
    number: '05',
    title: 'Get Paid',
    description: 'Send professional invoices, accept online payments, and automate payment reminders for overdue accounts.',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80'
  }, {
    number: '06',
    title: 'Track Revenue',
    description: 'Monitor your business performance with pre-made reports that are compatible with QuickBooks for seamless accounting.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80'
  }];
  return <section id="how-it-works" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How PawTrack Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Simplify your pet sitting business with our easy-to-use platform
          </p>
        </div>
        <div className="space-y-16">
          {steps.map((step, index) => <div key={index} className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 md:gap-12`}>
              <div className="md:w-1/2">
                <img src={step.image} alt={step.title} className="rounded-lg shadow-lg w-full h-64 md:h-80 object-cover" />
              </div>
              <div className="md:w-1/2">
                <div className="inline-block bg-blue-100 text-blue-800 font-bold px-4 py-2 rounded-full mb-4">
                  {step.number}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-lg text-gray-600 mb-6">{step.description}</p>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
}