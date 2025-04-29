'use client'; // This directive makes it a Client Component

import React, { useState, FormEvent } from 'react';

export default function ContactPage() {
  // Removed useState for name, email, message, status as direct form submission is used
  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  // const [message, setMessage] = useState('');
  // const [status, setStatus] = useState(''); // To show success/error messages

  // Removed handleSubmit as Web3Forms handles submission
  // const handleSubmit = async (e: FormEvent<HTMLFormElement>) => { ... };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Contact Us</h1>
      <p className="mb-8 text-center text-gray-600 dark:text-gray-400">
        Have questions or feedback? Fill out the form below and we'll get back to you.
      </p>
      <div className="max-w-lg mx-auto bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
        {/* Update form attributes for Web3Forms */}
        <form action="https://api.web3forms.com/submit" method="POST">
          {/* Add Web3Forms required hidden fields */}
          <input type="hidden" name="access_key" value="bff809d7-cfe5-4a63-a3f9-c20bdcf5b3f5" />
          <input type="hidden" name="subject" value="New Contact Submission from findyourmentaledge.com" />
          {/* Optional: Add redirect URL or other Web3Forms settings here */}
          {/* <input type="hidden" name="redirect" value="https://example.com/thanks.html" /> */}

          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name" // Add name attribute
              required
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-gray-100"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email" // Add name attribute
              required
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-gray-100"
              placeholder="you@example.com"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message" // Add name attribute
              rows={4}
              required
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-gray-100"
              placeholder="Your message..."
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              // Removed disabled attribute related to old status state
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Send Message
            </button>
          </div>
          {/* Removed status message display, Web3Forms handles redirection/response */}
          {/* {status && ( ... )} */}
        </form>
      </div>
    </div>
  );
} 