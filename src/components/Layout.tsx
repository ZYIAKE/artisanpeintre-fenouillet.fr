import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import FloatingCTA from './FloatingCTA';
import ReviewsCarousel from './ReviewsCarousel';

export default function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 pt-16 sm:pt-[72px]">
        <Outlet />
      </main>
      <ReviewsCarousel />
      <Footer />
      <FloatingCTA />
    </div>
  );
}
