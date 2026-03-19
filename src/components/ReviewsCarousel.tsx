import { useState, useEffect, useCallback } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

interface Review {
  author: string;
  photoUrl: string | null;
  rating: number;
  text: string;
  relativeTime: string;
}

interface ReviewsData {
  rating: number;
  totalReviews: number;
  reviews: Review[];
}

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${i <= rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
        />
      ))}
    </div>
  );
}

function ReviewCard({ review }: { review: Review }) {
  const initials = review.author
    .split(' ')
    .map((n) => n[0])
    .join('')
    .substring(0, 2)
    .toUpperCase();

  return (
    <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm h-full flex flex-col">
      <div className="flex items-center gap-3 mb-3">
        {review.photoUrl ? (
          <img
            src={review.photoUrl}
            alt={review.author}
            className="w-10 h-10 rounded-full object-cover"
            loading="lazy"
            referrerPolicy="no-referrer"
            width={40}
            height={40}
          />
        ) : (
          <div className="w-10 h-10 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center font-semibold text-sm">
            {initials}
          </div>
        )}
        <div className="min-w-0">
          <p className="font-semibold text-gray-900 text-sm truncate">{review.author}</p>
          <p className="text-xs text-gray-500">{review.relativeTime}</p>
        </div>
      </div>
      <StarRating rating={review.rating} />
      <p className="text-sm text-gray-600 leading-relaxed mt-3 flex-1 line-clamp-4">
        {review.text}
      </p>
    </div>
  );
}

export default function ReviewsCarousel() {
  const [data, setData] = useState<ReviewsData | null>(null);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    async function fetchReviews() {
      try {
        const res = await fetch(`${SUPABASE_URL}/functions/v1/google-reviews`, {
          headers: { Authorization: `Bearer ${SUPABASE_KEY}` },
        });
        if (res.ok) {
          const json = await res.json();
          if (json.reviews && json.reviews.length > 0) {
            setData(json);
          }
        }
      } catch {
        // Silently fail — reviews are non-critical
      }
    }
    fetchReviews();
  }, []);

  const reviews = data?.reviews || [];

  const prev = useCallback(() => {
    setCurrent((c) => (c === 0 ? reviews.length - 1 : c - 1));
  }, [reviews.length]);

  const next = useCallback(() => {
    setCurrent((c) => (c === reviews.length - 1 ? 0 : c + 1));
  }, [reviews.length]);

  // Auto-advance every 6 seconds
  useEffect(() => {
    if (reviews.length <= 1) return;
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next, reviews.length]);

  if (!data || reviews.length === 0) return null;

  // How many cards to show based on screen (CSS handles responsive, JS handles data slicing)
  const getVisibleReviews = () => {
    const result: Review[] = [];
    for (let i = 0; i < Math.min(3, reviews.length); i++) {
      result.push(reviews[(current + i) % reviews.length]);
    }
    return result;
  };

  const visibleReviews = getVisibleReviews();

  return (
    <section className="section-padding bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
            Ce que nos clients disent de nous
          </h2>
          <div className="flex items-center justify-center gap-2 mt-3">
            <div className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${
                    i <= Math.round(data.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <span className="font-bold text-gray-900">{data.rating}/5</span>
            <span className="text-gray-500 text-sm">
              ({data.totalReviews} avis Google)
            </span>
          </div>
        </div>

        <div className="relative">
          {reviews.length > 1 && (
            <>
              <button
                onClick={prev}
                className="absolute -left-3 sm:-left-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full shadow-md border border-gray-200 flex items-center justify-center text-gray-600 hover:text-gray-900 hover:shadow-lg transition-all"
                aria-label="Avis précédent"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={next}
                className="absolute -right-3 sm:-right-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full shadow-md border border-gray-200 flex items-center justify-center text-gray-600 hover:text-gray-900 hover:shadow-lg transition-all"
                aria-label="Avis suivant"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          )}

          {/* Mobile: 1 card */}
          <div className="sm:hidden">
            <ReviewCard review={visibleReviews[0]} />
          </div>

          {/* Tablet: 2 cards */}
          <div className="hidden sm:grid lg:hidden grid-cols-2 gap-4">
            {visibleReviews.slice(0, Math.min(2, reviews.length)).map((review, i) => (
              <ReviewCard key={`${review.author}-${i}`} review={review} />
            ))}
          </div>

          {/* Desktop: 3 cards */}
          <div className="hidden lg:grid grid-cols-3 gap-6">
            {visibleReviews.map((review, i) => (
              <ReviewCard key={`${review.author}-${i}`} review={review} />
            ))}
          </div>
        </div>

        {reviews.length > 1 && (
          <div className="flex justify-center gap-2 mt-6">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-all ${
                  i === current ? 'bg-primary-500 w-6' : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Aller à l'avis ${i + 1}`}
              />
            ))}
          </div>
        )}

        <div className="text-center mt-4">
          <a
            href="https://www.google.com/maps/place/VG+Peintures+et+R%C3%A9novations/@43.8509052,0.9317117,10z"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-primary-500 hover:text-primary-600 font-medium transition-colors"
          >
            Voir tous les avis sur Google &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
