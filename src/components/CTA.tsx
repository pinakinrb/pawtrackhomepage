
import { WaitlistButton } from './WaitlistButton';
export function CTA() {
  return <section className="py-16 md:py-24 bg-blue-600">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Be Among the First to Try PawTrack
        </h2>
        <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
          Join our exclusive waitlist to get early access when we launch. We're
          building PawTrack for independent pet sitters like you!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <WaitlistButton />
          <a href="#" className="border border-white text-white px-8 py-3 rounded-md text-center font-medium hover:bg-blue-700 transition-colors">
            Learn More
          </a>
        </div>
      </div>
    </section>;
}