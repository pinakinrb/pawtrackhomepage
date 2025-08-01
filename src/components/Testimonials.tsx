import React from 'react';
import { StarIcon } from 'lucide-react';
export function Testimonials() {
  const testimonials = [{
    quote: 'PawTrack has saved me hours every week. I used to juggle between 4 different apps for my dog walking business, but now everything is in one place!',
    name: 'Sarah M.',
    title: 'Dog Walker, Chicago',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80'
  }, {
    quote: 'As someone who specializes in caring for cats with medical needs, the medication tracking feature is a lifesaver. My clients love the detailed updates.',
    name: 'Michael T.',
    title: 'Cat Specialist, Boston',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80'
  }, {
    quote: "The recurring scheduling feature has eliminated booking errors completely. I've increased my monthly revenue by 30% since I started using PawTrack.",
    name: 'Jessica L.',
    title: 'Pet Sitter, Austin',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2061&q=80'
  }];
  return <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Loved by Independent Pet Sitters
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from pet care professionals who have simplified their
            businesses with PawTrack
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => <StarIcon key={i} className="h-5 w-5 text-yellow-400 fill-current" />)}
              </div>
              <p className="text-gray-600 mb-6 italic">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4 object-cover" />
                <div>
                  <p className="font-medium text-gray-900">
                    {testimonial.name}
                  </p>
                  <p className="text-gray-600 text-sm">{testimonial.title}</p>
                </div>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
}