import React from 'react';
import Link from 'next/link';

export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
      <p className="mb-4">Last updated: 21st April 2025</p>

      <p className="mb-4">
        Mental Edge ("us", "we", or "our") operates the FindYourMentalEdge.com website (the "Service").
      </p>

      <p className="mb-4">
        This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.
      </p>

      <p className="mb-4">
        We use your data to provide and improve the Service. By using the Service, you agree to the collection and use of information in accordance with this policy.
      </p>

      <h2 className="text-2xl font-bold mt-6 mb-2">Information Collection And Use</h2>
      <p className="mb-4">
        We collect several different types of information for various purposes to provide and improve our Service to you.
      </p>

      <h3 className="text-xl font-semibold mt-4 mb-2">Types of Data Collected</h3>

      <h4 className="text-lg font-medium mt-3 mb-1">Personal Data</h4>
      <p className="mb-4">
        While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ("Personal Data"). Personally identifiable information may include, but is not limited to:
      </p>
      <ul className="list-disc list-inside mb-4 ml-4">
        <li>Email address</li>
        <li>First name and last name</li>
        <li>Cookies and Usage Data</li>
      </ul>

      <h4 className="text-lg font-medium mt-3 mb-1">Usage Data</h4>
      <p className="mb-4">
        We may also collect information how the Service is accessed and used ("Usage Data"). This Usage Data may include information such as your computer's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers and other diagnostic data.
      </p>

      <h2 className="text-2xl font-bold mt-6 mb-2">Use of Data</h2>
      <p className="mb-4">Mental Edge uses the collected data for various purposes:</p>
      <ul className="list-disc list-inside mb-4 ml-4">
        <li>To provide and maintain the Service</li>
        <li>To notify you about changes to our Service</li>
        <li>To allow you to participate in interactive features of our Service when you choose to do so</li>
        <li>To provide customer care and support</li>
        <li>To provide analysis or valuable information so that we can improve the Service</li>
        <li>To monitor the usage of the Service</li>
        <li>To detect, prevent and address technical issues</li>
      </ul>

      {/* Add sections on Transfer Of Data, Disclosure Of Data, Security Of Data, Service Providers, Links To Other Sites, Children's Privacy, Changes To This Privacy Policy etc. as needed */}

      <h2 className="text-2xl font-bold mt-6 mb-2">Contact Us</h2>
      <p className="mb-4">If you have any questions about this Privacy Policy, please contact us:</p>
      <p className="mb-4">
        <Link href="/contact" className="text-blue-600 hover:underline">
          Contact Page
        </Link>
      </p>
    </div>
  );
} 