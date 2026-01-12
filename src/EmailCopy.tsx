import { useState } from 'react';
import { Copy, Check } from 'lucide-react';

const EMAIL = 'varshithvuppala1@gmail.com';

function EmailCopy() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      console.error('Failed to copy email');
    }
  };

  return (
    <div className="relative">

      {/* Copy Button – Top Right */}
      <button
        onClick={handleCopy}
        aria-label="Copy email to clipboard"
        className="absolute top-0 right-0 flex items-center gap-1.5
                   px-3 py-1 text-xs rounded-md
                   bg-[#B48A3A]/20 text-[#B48A3A]
                   hover:bg-[#B48A3A]/30
                   transition-all duration-200"
      >
        {copied ? <Check size={14} /> : <Copy size={14} />}
        {copied ? 'Copied' : 'Copy'}
      </button>

      {/* Email Address */}
      <p
        className="text-center text-xl sm:text-2xl md:text-3xl
                   font-medium tracking-wide text-[#B48A3A]
                   select-all"
      >
        {EMAIL}
      </p>

    </div>
  );
}

export default EmailCopy;
