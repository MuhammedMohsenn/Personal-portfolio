"use client";

import { useState } from "react";

export default function ContactForm() {
  const [state, setState] = useState({ submitted: false });

  if (state.submitted) {
    return (
      <p className="text-green-600">Thanks! Your message has been sent.</p>
    );
  }

  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      onSubmit={() => setState({ submitted: true })}
      className="flex flex-col space-y-4"
    >
      {/* Required hidden input for Netlify */}
      <input type="hidden" name="form-name" value="contact" />

      <input
        type="email"
        name="senderEmail"
        placeholder="Your email"
        required
        className="border rounded p-2"
      />

      <textarea
        name="message"
        placeholder="Your message"
        required
        className="border rounded p-2"
      />

      <button
        type="submit"
        className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
      >
        Send
      </button>
    </form>
  );
}
