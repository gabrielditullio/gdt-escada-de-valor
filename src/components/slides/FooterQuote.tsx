import { cn } from "@/lib/utils";

interface FooterQuoteProps {
  children: React.ReactNode;
  className?: string;
}

const FooterQuote: React.FC<FooterQuoteProps> = ({ children, className }) => (
  <blockquote
    className={cn(
      "italic text-slide-gray border-l-2 border-slide-gold pl-4 text-sm font-body",
      className
    )}
  >
    {children}
  </blockquote>
);

export default FooterQuote;
