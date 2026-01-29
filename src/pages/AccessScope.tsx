import { Lock, AlertCircle } from 'lucide-react';

export default function AccessScope() {
  return (
    <div>
      <section className="bg-gradient-to-b from-slate-100 to-white py-16">
        <div className="max-w-5xl mx-auto px-8">
          <h2 className="text-4xl font-semibold text-slate-900 mb-4">Access & Scope</h2>
          <p className="text-xl text-slate-600">Understanding review availability and limitations</p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-8 py-16">
        <div className="space-y-12">
          <div className="bg-white rounded-lg border border-slate-200 p-10 shadow-sm">
            <div className="flex items-start gap-6">
              <div className="w-14 h-14 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Lock className="w-7 h-7 text-slate-700" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-slate-900 mb-4">Access</h3>
                <p className="text-lg text-slate-700 leading-relaxed mb-6">
                  Full review materials may be subject to access limitations depending on category and scope.
                </p>
                <p className="text-lg text-slate-700 leading-relaxed">
                  Public summaries are provided where applicable.
                </p>
              </div>
            </div>
          </div>

          <div className="relative h-72 rounded-lg overflow-hidden shadow-lg">
            <img
              src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Access and scope framework"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="bg-slate-50 rounded-lg border border-slate-200 p-10">
            <div className="flex items-start gap-6">
              <div className="w-14 h-14 bg-white rounded-lg flex items-center justify-center flex-shrink-0 border border-slate-200">
                <AlertCircle className="w-7 h-7 text-slate-700" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-slate-900 mb-4">Scope Limitations</h3>
                <p className="text-lg text-slate-700 leading-relaxed mb-4">
                  ClearPath Reviews does not provide:
                </p>
                <ul className="space-y-3 text-lg text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="text-slate-400 mt-1">•</span>
                    <span>Consumer purchasing advice</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-slate-400 mt-1">•</span>
                    <span>Recommendations or ratings</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-slate-400 mt-1">•</span>
                    <span>Certification or approval</span>
                  </li>
                </ul>
                <p className="text-lg text-slate-700 leading-relaxed mt-6 font-medium">
                  Reviews are informational and comparative in structure only.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
