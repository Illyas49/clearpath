import { Target, ShieldCheck, BookOpen } from 'lucide-react';

export default function About() {
  return (
    <div>
      <section className="bg-gradient-to-b from-slate-100 to-white py-16">
        <div className="max-w-5xl mx-auto px-8">
          <h2 className="text-4xl font-semibold text-slate-900 mb-4">About</h2>
          <p className="text-xl text-slate-600">Independent evaluation focused on clarity and transparency</p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
            <img
              src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="About ClearPath Reviews"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center">
            <div className="bg-white rounded-lg border border-slate-200 p-8 shadow-sm">
              <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-slate-700" />
              </div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">Purpose</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-4">
                ClearPath Reviews was created to provide structured, independent evaluations of how clearly products communicate with users.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed">
                The organization focuses on transparency of method and consistency of evaluation.
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-lg border border-slate-200 p-10 shadow-sm">
            <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-4">
              <ShieldCheck className="w-6 h-6 text-slate-700" />
            </div>
            <h3 className="text-2xl font-semibold text-slate-900 mb-4">Independence</h3>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              ClearPath Reviews operates independently and does not accept compensation tied to review outcomes.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed font-medium">
              We do not promote, rank, or endorse products or services.
            </p>
          </div>

          <div className="bg-white rounded-lg border border-slate-200 p-10 shadow-sm">
            <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-4">
              <BookOpen className="w-6 h-6 text-slate-700" />
            </div>
            <h3 className="text-2xl font-semibold text-slate-900 mb-4">Review Governance</h3>
            <p className="text-lg text-slate-700 leading-relaxed">
              Review criteria and frameworks are internally defined and periodically updated to maintain relevance and consistency.
            </p>
          </div>
        </div>

        <div className="bg-slate-50 rounded-lg border border-slate-200 p-12 text-center">
          <h3 className="text-2xl font-semibold text-slate-900 mb-4">Our Commitment</h3>
          <p className="text-lg text-slate-700 leading-relaxed max-w-3xl mx-auto">
            ClearPath Reviews is dedicated to providing structured, independent evaluations that help users understand how clearly digital products communicate critical information. Our focus remains on transparency, consistency, and objectivity.
          </p>
        </div>
      </section>
    </div>
  );
}
