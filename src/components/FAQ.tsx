import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQProps {
  items: { question: string; answer: string }[];
}

export default function FAQ({ items }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <div key={i} className="border border-gray-200 rounded-lg overflow-hidden">
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full flex items-center justify-between px-5 py-4 text-left bg-white hover:bg-gray-50 transition-colors"
          >
            <span className="font-medium text-gray-900 pr-4">{item.question}</span>
            <ChevronDown
              className={`w-5 h-5 text-gray-400 shrink-0 transition-transform duration-200 ${
                openIndex === i ? 'rotate-180' : ''
              }`}
            />
          </button>
          <div
            className={`overflow-hidden transition-all duration-200 ${
              openIndex === i ? 'max-h-96' : 'max-h-0'
            }`}
          >
            <p className="px-5 pb-4 text-gray-600 leading-relaxed">{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
