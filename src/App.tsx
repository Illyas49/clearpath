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
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <header className="bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-8 py-8">
          <div className="flex items-baseline justify-between mb-10">
            <h1 className="text-3xl font-semibold tracking-tight text-slate-900">ClearPath Reviews</h1>
            <span className="text-sm text-slate-500">Independent Evaluation Body</span>
          </div>
          <nav className="flex flex-wrap gap-8">
            <button
              onClick={() => setCurrentPage('home')}
              className={`text-sm transition-colors ${currentPage === 'home' ? 'text-slate-900 font-medium border-b-2 border-slate-900 pb-1' : 'text-slate-600 hover:text-slate-900'}`}
            >
              Home
            </button>
            <button
              onClick={() => setCurrentPage('framework')}
              className={`text-sm transition-colors ${currentPage === 'framework' ? 'text-slate-900 font-medium border-b-2 border-slate-900 pb-1' : 'text-slate-600 hover:text-slate-900'}`}
            >
              Review Framework
            </button>
            <button
              onClick={() => setCurrentPage('reviews')}
              className={`text-sm transition-colors ${currentPage === 'reviews' ? 'text-slate-900 font-medium border-b-2 border-slate-900 pb-1' : 'text-slate-600 hover:text-slate-900'}`}
            >
              Reviews
            </button>
            <button
              onClick={() => setCurrentPage('evaluation')}
              className={`text-sm transition-colors ${currentPage === 'evaluation' ? 'text-slate-900 font-medium border-b-2 border-slate-900 pb-1' : 'text-slate-600 hover:text-slate-900'}`}
            >
              Evaluation Areas
            </button>
            <button
              onClick={() => setCurrentPage('about')}
              className={`text-sm transition-colors ${currentPage === 'about' ? 'text-slate-900 font-medium border-b-2 border-slate-900 pb-1' : 'text-slate-600 hover:text-slate-900'}`}
            >
              About
            </button>
            <button
              onClick={() => setCurrentPage('access')}
              className={`text-sm transition-colors ${currentPage === 'access' ? 'text-slate-900 font-medium border-b-2 border-slate-900 pb-1' : 'text-slate-600 hover:text-slate-900'}`}
            >
              Access & Scope
            </button>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {pages[currentPage as keyof typeof pages]}
      </main>

      <footer className="bg-slate-900 text-slate-400">
        <div className="max-w-6xl mx-auto px-8 py-12">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-white font-semibold mb-3">ClearPath Reviews</h3>
              <p className="text-sm leading-relaxed">Independent evaluation body focused on clarity and transparency in digital products.</p>
            </div>
            <div>
              <h4 className="text-white font-medium text-sm mb-3">Disclaimer</h4>
              <p className="text-sm leading-relaxed">All reviews are informational and do not constitute endorsements, recommendations, or guarantees.</p>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-6">
            <p className="text-sm">© 2026 ClearPath Reviews. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
