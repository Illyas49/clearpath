import { CheckCircle2, FileSearch, Users, Shield } from 'lucide-react';

export default function Home() {
  return (
    <div>
      <section className="bg-gradient-to-b from-slate-100 to-white py-20">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl font-semibold text-slate-900 mb-6 leading-tight">
                Independent reviews focused on clarity and transparency
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed">
                ClearPath Reviews publishes structured evaluations examining how clearly emerging digital products and services communicate features, controls, and key information to users.
              </p>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Professional workspace"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-8 py-20">
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-lg border border-slate-200 shadow-sm">
            <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-4">
              <FileSearch className="w-6 h-6 text-slate-700" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-3">Independent Review Body</h3>
            <p className="text-slate-600 leading-relaxed">
              Focused on usability, communication clarity, and transparency.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg border border-slate-200 shadow-sm">
            <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-slate-700" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-3">User-Centered</h3>
            <p className="text-slate-600 leading-relaxed">
              Emphasis on onboarding flows, control visibility, and account interactions.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg border border-slate-200 shadow-sm">
            <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-4">
              <Shield className="w-6 h-6 text-slate-700" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-3">Structured & Comparable</h3>
            <p className="text-slate-600 leading-relaxed">
              Designed to be descriptive, structured, and comparable.
            </p>
          </div>
        </div>

        <div className="bg-slate-50 rounded-lg p-10 border border-slate-200">
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            Our reviews assess how users encounter and understand critical product information, with an emphasis on onboarding flows, control visibility, and ongoing account interactions.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed font-medium">
            We do not rank, endorse, or promote products. Reviews are designed to be descriptive, structured, and comparable.
          </p>
        </div>
      </section>

      <section className="bg-white py-20 border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative h-96 rounded-lg overflow-hidden shadow-lg order-2 md:order-1">
              <img
                src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Digital interface evaluation"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <h3 className="text-3xl font-semibold text-slate-900 mb-6">What We Review</h3>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                ClearPath Reviews evaluates how products communicate and structure key elements, including:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-slate-700 mt-1 flex-shrink-0" />
                  <span className="text-slate-700 leading-relaxed">Feature explanations and labeling</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-slate-700 mt-1 flex-shrink-0" />
                  <span className="text-slate-700 leading-relaxed">User controls and settings visibility</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-slate-700 mt-1 flex-shrink-0" />
                  <span className="text-slate-700 leading-relaxed">Onboarding and early-use clarity</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-slate-700 mt-1 flex-shrink-0" />
                  <span className="text-slate-700 leading-relaxed">Communication of limitations and conditions</span>
                </li>
              </ul>
              <p className="text-slate-600 leading-relaxed mt-6 italic">
                Reviews focus on presentation and usability, not outcomes or performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-8 py-20">
        <div className="text-center">
          <h3 className="text-2xl font-semibold text-slate-900 mb-8">Explore Our Evaluation Process</h3>
          <div className="flex justify-center gap-4 flex-wrap">
            <button className="px-8 py-3 text-sm font-medium text-white bg-slate-900 hover:bg-slate-800 transition-colors rounded">
              View Review Framework
            </button>
            <button className="px-8 py-3 text-sm font-medium text-slate-900 bg-white hover:bg-slate-50 border border-slate-300 transition-colors rounded">
              Browse Reviews
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
