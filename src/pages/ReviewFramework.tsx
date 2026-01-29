import { Clipboard, Target, Search, XCircle } from 'lucide-react';

export default function ReviewFramework() {
  return (
    <div>
      <section className="bg-gradient-to-b from-slate-100 to-white py-16">
        <div className="max-w-5xl mx-auto px-8">
          <h2 className="text-4xl font-semibold text-slate-900 mb-4">Review Framework</h2>
          <p className="text-xl text-slate-600">A standardized approach to evaluating clarity and transparency</p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-8 py-16">
        <div className="bg-white rounded-lg border border-slate-200 p-10 shadow-sm mb-12">
          <div className="flex items-start gap-6">
            <div className="w-14 h-14 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <Clipboard className="w-7 h-7 text-slate-700" />
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">Overview</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-4">
                ClearPath Reviews applies a standardized review framework to assess clarity and transparency across products and services.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed">
                Each review follows the same structure, enabling comparison across categories and time.
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-lg border border-slate-200 p-8 shadow-sm">
            <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-4">
              <Target className="w-6 h-6 text-slate-700" />
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-4">Evaluation Structure</h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              Reviews are organized around defined evaluation areas, including:
            </p>
            <ul className="space-y-3 text-slate-700">
              <li className="flex items-start gap-2">
                <span className="text-slate-400 mt-1">•</span>
                <span>Information clarity</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-slate-400 mt-1">•</span>
                <span>Control visibility</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-slate-400 mt-1">•</span>
                <span>Communication consistency</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-slate-400 mt-1">•</span>
                <span>User comprehension at key interaction points</span>
              </li>
            </ul>
            <p className="text-slate-600 leading-relaxed mt-6">
              Each area is assessed using predefined criteria.
            </p>
          </div>

          <div className="bg-white rounded-lg border border-slate-200 p-8 shadow-sm">
            <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-4">
              <Search className="w-6 h-6 text-slate-700" />
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-4">Review Method</h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              Reviews are conducted through structured evaluation and observation, focusing on:
            </p>
            <ul className="space-y-3 text-slate-700">
              <li className="flex items-start gap-2">
                <span className="text-slate-400 mt-1">•</span>
                <span>User-facing language and explanations</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-slate-400 mt-1">•</span>
                <span>Navigation and discoverability</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-slate-400 mt-1">•</span>
                <span>Consistency of messaging across flows</span>
              </li>
            </ul>
            <p className="text-slate-600 leading-relaxed mt-6">
              Reviews are time-bound and limited in scope.
            </p>
          </div>
        </div>

        <div className="relative h-80 rounded-lg overflow-hidden shadow-lg mb-12">
          <img
            src="https://images.pexels.com/photos/3184432/pexels-photo-3184432.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Framework evaluation process"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="bg-slate-50 rounded-lg border border-slate-200 p-10">
          <div className="flex items-start gap-6">
            <div className="w-14 h-14 bg-white rounded-lg flex items-center justify-center flex-shrink-0 border border-slate-200">
              <XCircle className="w-7 h-7 text-slate-700" />
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">What Reviews Do Not Measure</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-4">
                ClearPath Reviews does not evaluate:
              </p>
              <ul className="space-y-3 text-lg text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-slate-400 mt-1">•</span>
                  <span>Product quality or value</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-slate-400 mt-1">•</span>
                  <span>Commercial competitiveness</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-slate-400 mt-1">•</span>
                  <span>Regulatory compliance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-slate-400 mt-1">•</span>
                  <span>Legal or financial outcomes</span>
                </li>
              </ul>
              <p className="text-lg text-slate-700 leading-relaxed mt-6 font-medium">
                The framework is focused solely on clarity and usability.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
