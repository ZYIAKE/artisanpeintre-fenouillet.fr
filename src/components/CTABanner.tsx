import { Phone, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BUSINESS } from '../data/business';

interface CTABannerProps {
  title?: string;
  subtitle?: string;
}

export default function CTABanner({
  title = BUSINESS.ctaTitle,
  subtitle = BUSINESS.ctaSubtitle,
}: CTABannerProps) {
  return (
    <section className="bg-primary-500 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-3">{title}</h2>
        <p className="text-primary-100 mb-8 max-w-xl mx-auto">{subtitle}</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={BUSINESS.phoneTel}
            className="inline-flex items-center gap-2 bg-accent-500 text-white font-bold px-8 py-4 rounded-lg hover:bg-accent-600 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-lg"
          >
            <Phone className="w-5 h-5" />
            {BUSINESS.phone}
          </a>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur text-white font-semibold px-8 py-4 rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-200"
          >
            <FileText className="w-5 h-5" />
            Demander un devis
          </Link>
        </div>
      </div>
    </section>
  );
}
