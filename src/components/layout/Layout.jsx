import Navbar from './Navbar';
import ScrollToTopButton from '../ui/ScrollToTopButton';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-primary-900">
      <Navbar />
      <main id="main-content" className="flex-1 pt-20" tabIndex="-1">
        {children}
      </main>
      <ScrollToTopButton />
    </div>
  );
}
