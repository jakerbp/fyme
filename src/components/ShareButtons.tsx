'use client';

import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faXTwitter,
  faFacebook,
  faLinkedin,
  faRedditAlien,
  faWhatsapp,
  faTelegram,
  faFacebookMessenger,
  faThreads,
  faSnapchat
} from '@fortawesome/free-brands-svg-icons';
import { faLink, faCheck } from '@fortawesome/free-solid-svg-icons';
import { Button } from '@/components/ui/Button';
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from '@/lib/utils';

interface ShareButtonsProps {
  title: string;
  slug: string;
  className?: string;
}

const ShareButtons: React.FC<ShareButtonsProps> = ({ title, slug, className }) => {
  const [currentUrl, setCurrentUrl] = useState('');
  const [copiedButtonName, setCopiedButtonName] = useState<string | null>(null);

  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);

  const encodedTitle = encodeURIComponent(title);
  const encodedUrl = encodeURIComponent(currentUrl);

  const platforms = [
    {
      name: 'X/Twitter',
      icon: faXTwitter,
      url: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
      className: 'hover:text-[#1DA1F2]',
    },
    {
      name: 'Facebook',
      icon: faFacebook,
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      className: 'hover:text-[#1877F2]',
    },
    {
      name: 'LinkedIn',
      icon: faLinkedin,
      url: `https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}`,
      className: 'hover:text-[#0A66C2]',
    },
    {
      name: 'Reddit',
      icon: faRedditAlien,
      url: `https://www.reddit.com/submit?url=${encodedUrl}&title=${encodedTitle}`,
      className: 'hover:text-[#FF4500]',
    },
    {
        name: 'WhatsApp',
        icon: faWhatsapp,
        url: `https://api.whatsapp.com/send?text=${encodedTitle}%20${encodedUrl}`,
        className: 'hover:text-[#25D366]',
      },
      {
        name: 'Telegram',
        icon: faTelegram,
        url: `https://t.me/share/url?url=${encodedUrl}&text=${encodedTitle}`,
        className: 'hover:text-[#0088cc]',
      },
      {
        name: 'Messenger',
        icon: faFacebookMessenger,
        url: `fb-messenger://share/?link=${encodedUrl}`,
        className: 'hover:text-[#00B2FF]',
      },
      {
        name: 'Threads',
        icon: faThreads,
        url: `https://www.threads.net/share?url=${encodedUrl}&text=${encodedTitle}`,
        className: 'hover:text-[#000000]',
      },
      {
        name: 'Snapchat',
        icon: faSnapchat,
        url: `https://www.snapchat.com/share?url=${encodedUrl}`,
        className: 'hover:text-[#FFFC00] hover:bg-black/5 rounded-md',
      },
  ];

  const handleCopy = (textToCopy = currentUrl, buttonName: string) => { 
    if (!textToCopy) return;
    navigator.clipboard.writeText(textToCopy).then(() => {
      setCopiedButtonName(buttonName);
      setTimeout(() => setCopiedButtonName(null), 2000);
    });
  };

  if (!currentUrl) {
    return (
      <div className={cn("mt-12 pt-8 border-t border-border", className)}>
        <Skeleton className="h-6 w-48 mx-auto mb-4" />
        <div className="flex justify-center items-center flex-wrap gap-2">
          {Array.from({ length: platforms.length + 1 }).map((_, index) => (
            <Skeleton key={index} className="h-10 w-10 rounded-md" />
          ))}
        </div>
      </div>
    );
  }

  const isGeneralCopied = copiedButtonName === 'GeneralCopy';

  return (
    <div className={cn("mt-12 pt-8 border-t border-border", className)}>
      <h3 className="text-lg font-medium text-center mb-4">Share this article</h3>
      <div className="flex justify-center items-center flex-wrap gap-2">
        {platforms.map((platform) => (
            <Button
              key={platform.name}
              variant="outline"
              size="icon"
              href={platform.url}
              className={cn(
                "border-border w-10 h-10 rounded-md",
                platform.className
              )}
              aria-label={`Share on ${platform.name}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={platform.icon} className="h-5 w-5" />
            </Button>
        ))}
        <div className="flex items-center">
          <Button
            variant="outline"
            size="icon"
            onClick={() => handleCopy(currentUrl, 'GeneralCopy')}
            className={cn(
              "border border-input bg-background",
              "w-10 h-10 rounded-md",
              isGeneralCopied ? 'bg-green-500/10 text-green-600' : null
            )}
            aria-label="Copy link"
          >
            <FontAwesomeIcon icon={isGeneralCopied ? faCheck : faLink} className="h-5 w-5" />
          </Button>
          {isGeneralCopied && (
            <span className="ml-2 text-sm text-green-600 font-medium">
              Copied to clipboard!
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShareButtons; 