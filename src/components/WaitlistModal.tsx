import React, { useState } from "react";

export function WaitlistModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Here you would send the email to your backend/waitlist service
    setSubmitted(true);
  }

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-8 relative">
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl"
          onClick={onClose}
          aria-label="Close"
        >
          &times;
        </button>
        {!submitted ? (
          <>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">Join the Waitlist</h2>
            <p className="mb-6 text-gray-600">
              Enter your email to get early access when PawTrack launches!
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="email"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Your email address"
                className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-2 rounded-md font-medium hover:bg-blue-700 transition-colors"
              >
                Join Waitlist
              </button>
            </form>
          </>
        ) : (
          <div className="text-center">
            <h3 className="text-xl font-bold mb-2 text-blue-600">Thank you!</h3>
            <p className="text-gray-700">You’ve been added to the waitlist.</p>
          </div>
        )}
      </div>
    </div>
  );
}