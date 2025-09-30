import { useState } from "react";
import { FiMapPin, FiMail, FiLinkedin, FiCopy, FiCheck } from "react-icons/fi";

export default function SiteFooter() {
  const [copied, setCopied] = useState(false);
  const email = "frankie@roogen.ai";

  const handleCopy = async () => {
    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(email);
      } else {
        // Fallback for older/insecure contexts
        const ta = document.createElement("textarea");
        ta.value = email;
        document.body.appendChild(ta);
        ta.select();
        document.execCommand("copy");
        document.body.removeChild(ta);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // no-op
    }
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {/* Contact */}
        <section aria-labelledby="footer-contact">
          <h3 id="footer-contact" className="mb-4 text-xl font-semibold">
            Contact
          </h3>
          <address className="not-italic space-y-3 text-neutral-300">
            <p className="flex items-start gap-3">
              <FiMapPin className="mt-1 shrink-0" aria-hidden="true" />
              1046 W. Taylor St, San Jose, CA 94126
            </p>

            <p className="flex flex-wrap items-center gap-3">
              <FiMail aria-hidden="true" />
              <a
                href={`mailto:${email}`}
                className="hover:text-white transition"
              >
                {email}
              </a>

              {/* Copy button */}
              <button
                onClick={handleCopy}
                aria-label="Copy email to clipboard"
                className="inline-flex items-center gap-1 rounded border border-neutral-700 px-2 py-1 text-xs text-neutral-300 hover:text-white hover:border-neutral-500 transition"
              >
                {copied ? (
                  <FiCheck className="text-sm" />
                ) : (
                  <FiCopy className="text-sm" />
                )}
                <span>{copied ? "Copied" : "Copy"}</span>
              </button>

              {/* Screen-reader announcement */}
              <span aria-live="polite" className="sr-only">
                {copied ? "Email copied to clipboard" : ""}
              </span>
            </p>
          </address>
        </section>

        {/* Explore */}
        <section aria-labelledby="footer-explore">
          <h3 id="footer-explore" className="mb-4 text-xl font-semibold">
            Explore
          </h3>
          <ul className="space-y-3 text-neutral-300">
            <li>
              <a href="/blog" className="hover:text-white transition">
                Blog
              </a>
            </li>
          </ul>
        </section>

        {/* Follow us */}
        <section aria-labelledby="footer-follow">
          <h3 id="footer-follow" className="mb-4 text-xl font-semibold">
            Follow us
          </h3>
          <ul className="space-y-3 text-neutral-300">
            <li>
              <a
                href="https://www.linkedin.com/company/roogenai/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="inline-flex items-center gap-2 hover:text-white transition"
              >
                <FiLinkedin aria-hidden="true" />
                LinkedIn
              </a>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
