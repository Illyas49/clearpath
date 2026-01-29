import { Lightbulb, Eye, UserPlus, MessageSquare, CreditCard } from 'lucide-react';

export default function EvaluationAreas() {
  return (
    <div>
      <section className="bg-gradient-to-b from-slate-100 to-white py-16">
        <div className="max-w-5xl mx-auto px-8">
          <h2 className="text-4xl font-semibold text-slate-900 mb-4">Evaluation Areas</h2>
          <p className="text-xl text-slate-600">Core dimensions of communication clarity</p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-8 py-16">
        <div className="space-y-8">
          <div className="bg-white rounded-lg border border-slate-200 p-10 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start gap-6">
              <div className="w-14 h-14 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Lightbulb className="w-7 h-7 text-slate-700" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-slate-900 mb-3">Feature Clarity</h3>
                <p className="text-lg text-slate-700 leading-relaxed">
                  How features are explained, labeled, and contextualized for users.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-slate-200 p-10 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start gap-6">
              <div className="w-14 h-14 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Eye className="w-7 h-7 text-slate-700" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-slate-900 mb-3">Control Visibility</h3>
                <p className="text-lg text-slate-700 leading-relaxed">
                  How easily users can locate, understand, and manage available controls.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-slate-200 p-10 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start gap-6">
              <div className="w-14 h-14 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <UserPlus className="w-7 h-7 text-slate-700" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-slate-900 mb-3">Onboarding Experience</h3>
                <p className="text-lg text-slate-700 leading-relaxed">
                  Clarity of information during account setup and early use.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-slate-200 p-10 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start gap-6">
              <div className="w-14 h-14 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <MessageSquare className="w-7 h-7 text-slate-700" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-slate-900 mb-3">Ongoing Communication</h3>
                <p className="text-lg text-slate-700 leading-relaxed">
                  Consistency and transparency of messaging during continued use.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-slate-200 p-10 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start gap-6">
              <div className="w-14 h-14 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <CreditCard className="w-7 h-7 text-slate-700" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-slate-900 mb-3">Payments & Transactions <span className="text-slate-500 text-lg font-normal">(Moderate Focus)</span></h3>
                <p className="text-lg text-slate-700 leading-relaxed">
                  How financial actions and timelines are explained, without assessing speed or value.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 relative h-80 rounded-lg overflow-hidden shadow-lg">
          <img
            src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Evaluation methodology"
            className="w-full h-full object-cover"
          />
        </div>
      </section>
    </div>
  );
}
