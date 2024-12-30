import React from 'react';

const Contact = () => (
  <section
    id="contact"
    className="bg-gradient-to-b from-gray-700 via-gray-900 to-black text-white py-24"
  >
    <div className="max-w-screen-lg mx-auto px-4 pt-6 text-center">
      <h2 className="text-4xl sm:text-6xl font-bold">Contact</h2>
      <p className="text-gray-400 py-4 max-w-2xl mx-auto">
        Reach out to me at:
      </p>
      <p className="text-gray-400">
        Email:{" "}
        <a
          href="mailto:rohithaddagatla25@gmail.com"
          className="text-blue-400 hover:text-blue-600"
        >
          rohithaddagatla25@gmail.com
        </a>
      </p>
      <p className="text-gray-400">
        Mobile:{" "}
        <a
          href="tel:+91 7396582724"
          className="text-blue-400 hover:text-blue-600"
        >
          +91 7396582724
        </a>
      </p>
      <p className="text-gray-400">
        LinkedIn:{" "}
        <a
          href="https://www.linkedin.com/in/rohith-addagatla-390940218/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-600"
        >
          rohith-addagatla
        </a>
      </p>
    </div>
  </section>
);

export default Contact;
