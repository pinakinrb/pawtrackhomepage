import React, { useState } from "react";
import { supabase } from "../supabaseClient";

export function WaitlistButton({
  buttonClass = "bg-blue-600 text-white px-6 py-2 rounded-md font-medium hover:bg-blue-700 transition-colors",
  buttonText = "Join Waitlist",
}: {
  buttonClass?: string;
  buttonText?: string;
}) {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  function validateEmail(email: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    setLoading(true);

    // Check if email already exists
    const { data, error: fetchError } = await supabase
      .from("waitlist")
      .select("id")
      .eq("email", email)
      .single();

    if (fetchError && fetchError.code !== "PGRST116") {
      setError("Something went wrong. Please try again.");
      setLoading(false);
      return;
    }

    if (data) {
      setError("This email is already subscribed.");
      setLoading(false);
      return;
    }

    // Insert new email
    const { error: insertError } = await supabase
      .from("waitlist")
      .insert({ email });

    if (insertError) {
      setError("Could not subscribe. Please try again.");
      setLoading(false);
      return;
    }

    setSubmitted(true);
    setLoading(false);
  }

  function handleClose() {
    setOpen(false);
    setEmail("");
    setSubmitted(false);
    setError("");
    setLoading(false);
  }

  return (
    <>
      <button className={buttonClass} onClick={() => setOpen(true)}>
        {buttonText}
      </button>
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-8 relative">
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl"
              onClick={handleClose}
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
                    disabled={loading}
                  />
                  {error && (
                    <span className="text-red-600 text-sm">{error}</span>
                  )}
                  <button
                    type="submit"
                    className="bg-blue-600 text-white px-6 py-2 rounded-md font-medium hover:bg-blue-700 transition-colors"
                    disabled={loading}
                  >
                    {loading ? "Submitting..." : buttonText}
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
      )}
    </>
  );
}
