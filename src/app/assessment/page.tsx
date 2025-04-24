'use client'; // Make this a Client Component

import Script from "next/script";
import { useEffect } from "react"; // Import useEffect

// export const metadata = {
//   title: "Find Your Mental Edge - Assessment",
// };

declare global {
  interface Window {
    Tally?: {
      loadEmbeds: () => void;
    };
  }
}

export default function AssessmentPage() {
  const initializeTally = () => {
    // Check if Tally script is loaded and has the function
    if (window.Tally && typeof window.Tally.loadEmbeds === 'function') {
      window.Tally.loadEmbeds();
    }
  };

  // Run initialization logic when the component mounts
  useEffect(() => {
    // Delay slightly to ensure script might be ready if cached
    const timer = setTimeout(() => {
       initializeTally();
    }, 100); // 100ms delay, adjust if needed
    return () => clearTimeout(timer); // Cleanup timer
  }, []);

  return (
    <div className="relative w-full">
      {/* Add onLoad prop to the Script component */}
      <Script 
        async 
        src="https://tally.so/widgets/embed.js" 
        onLoad={initializeTally} // Call initializeTally when script loads
        onError={() => console.error('Tally script failed to load')} // Optional: Add error handling
      />
      <iframe
        data-tally-src="https://tally.so/r/mOrDMK?transparentBackground=1"
        className="w-full min-h-screen border-0"
        title="Find Your Mental Edge"
        id="tally-iframe" // Add an ID for potential easier selection by the script
      />
    </div>
  );
} 