import { FileText, CheckSquare } from 'lucide-react';

export default function Reviews() {
  return (
    <div>
      <section className="bg-gradient-to-b from-slate-100 to-white py-16">
        <div className="max-w-5xl mx-auto px-8">
          <h2 className="text-4xl font-semibold text-slate-900 mb-4">Reviews</h2>
          <p className="text-xl text-slate-600">Structured evaluations of product clarity and communication</p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-8 py-16">
        <div className="bg-white rounded-lg border border-slate-200 p-10 shadow-sm mb-12">
          <div className="flex items-start gap-6">
            <div className="w-14 h-14 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <FileText className="w-7 h-7 text-slate-700" />
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">Published Reviews</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-4">
                Each ClearPath review provides a structured summary of how clearly a product communicates with users.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed">
                Reviews are identified by category and focus area rather than promotional titles.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-slate-900 mb-8">Sample Reviews (Illustrative)</h3>

          <div className="space-y-6">
            <div className="bg-white rounded-lg border-2 border-slate-200 overflow-hidden hover:border-slate-300 transition-colors">
              <div className="bg-slate-50 px-8 py-4 border-b border-slate-200">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-slate-900">Review ID: CP-014</span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">Published</span>
                </div>
              </div>
              <div className="px-8 py-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <div className="text-sm font-medium text-slate-500 mb-1">Category</div>
                    <div className="text-base text-slate-900">Digital Services</div>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-slate-500 mb-1">Focus</div>
                    <div className="text-base text-slate-900">Onboarding clarity and control visibility</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg border-2 border-slate-200 overflow-hidden hover:border-slate-300 transition-colors">
              <div className="bg-slate-50 px-8 py-4 border-b border-slate-200">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-slate-900">Review ID: CP-015</span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">Published</span>
                </div>
              </div>
              <div className="px-8 py-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <div className="text-sm font-medium text-slate-500 mb-1">Category</div>
                    <div className="text-base text-slate-900">Financial Interfaces</div>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-slate-500 mb-1">Focus</div>
                    <div className="text-base text-slate-900">Communication of user-managed settings</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <p className="text-slate-600 leading-relaxed mt-8 text-center italic">
            Detailed scoring or endorsements are not provided.
          </p>
        </div>

        <div className="relative h-72 rounded-lg overflow-hidden shadow-lg mb-12">
          <img
            src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Review documentation"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="bg-slate-50 rounded-lg border border-slate-200 p-10">
          <div className="flex items-start gap-6">
            <div className="w-14 h-14 bg-white rounded-lg flex items-center justify-center flex-shrink-0 border border-slate-200">
              <CheckSquare className="w-7 h-7 text-slate-700" />
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">Review Summaries</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-4">
                Each review includes:
              </p>
              <ul className="space-y-3 text-lg text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-slate-400 mt-1">•</span>
                  <span>Scope overview</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-slate-400 mt-1">•</span>
                  <span>Evaluation areas covered</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-slate-400 mt-1">•</span>
                  <span>Observed clarity strengths</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-slate-400 mt-1">•</span>
                  <span>Noted communication gaps</span>
                </li>
              </ul>
              <p className="text-lg text-slate-700 leading-relaxed mt-6 font-medium">
                Summaries are descriptive and non-judgmental.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
