import { useState } from 'react';
import Home from './pages/Home';
import ReviewFramework from './pages/ReviewFramework';
import Reviews from './pages/Reviews';
import EvaluationAreas from './pages/EvaluationAreas';
import About from './pages/About';
import AccessScope from './pages/AccessScope';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const pages = {
    home: <Home />,
    framework: <ReviewFramework />,
    reviews: <Reviews />,
    evaluation: <EvaluationAreas />,
    about: <About />,
    access: <AccessScope />
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-6 py-6">
          <h1 className="text-2xl font-semibold text-gray-900 mb-8">ClearPath Reviews</h1>
          <nav className="flex flex-wrap gap-6">
            <button
              onClick={() => setCurrentPage('home')}
              className={`text-sm ${currentPage === 'home' ? 'text-gray-900 font-medium' : 'text-gray-600 hover:text-gray-900'}`}
            >
              Home
            </button>
            <button
              onClick={() => setCurrentPage('framework')}
              className={`text-sm ${currentPage === 'framework' ? 'text-gray-900 font-medium' : 'text-gray-600 hover:text-gray-900'}`}
            >
              Review Framework
            </button>
            <button
              onClick={() => setCurrentPage('reviews')}
              className={`text-sm ${currentPage === 'reviews' ? 'text-gray-900 font-medium' : 'text-gray-600 hover:text-gray-900'}`}
            >
              Reviews
            </button>
            <button
              onClick={() => setCurrentPage('evaluation')}
              className={`text-sm ${currentPage === 'evaluation' ? 'text-gray-900 font-medium' : 'text-gray-600 hover:text-gray-900'}`}
            >
              Evaluation Areas
            </button>
            <button
              onClick={() => setCurrentPage('about')}
              className={`text-sm ${currentPage === 'about' ? 'text-gray-900 font-medium' : 'text-gray-600 hover:text-gray-900'}`}
            >
              About
            </button>
            <button
              onClick={() => setCurrentPage('access')}
              className={`text-sm ${currentPage === 'access' ? 'text-gray-900 font-medium' : 'text-gray-600 hover:text-gray-900'}`}
            >
              Access & Scope
            </button>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {pages[currentPage as keyof typeof pages]}
      </main>

      <footer className="bg-white border-t border-gray-200 mt-20">
        <div className="max-w-5xl mx-auto px-6 py-8">
          <div className="text-sm text-gray-600 space-y-2">
            <p>ClearPath Reviews is an independent evaluation body.</p>
            <p>All reviews are informational and do not constitute endorsements, recommendations, or guarantees.</p>
            <p className="pt-2">© 2026 ClearPath Reviews. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
