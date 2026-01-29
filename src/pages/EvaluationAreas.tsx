export default function EvaluationAreas() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <div className="space-y-16">
        <section>
          <h2 className="text-3xl font-semibold text-gray-900 mb-8">Evaluation Areas</h2>
        </section>

        <section className="space-y-12">
          <div className="pt-8 border-t border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Feature Clarity</h3>
            <p className="text-base text-gray-700 leading-relaxed">
              How features are explained, labeled, and contextualized for users.
            </p>
          </div>

          <div className="pt-8 border-t border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Control Visibility</h3>
            <p className="text-base text-gray-700 leading-relaxed">
              How easily users can locate, understand, and manage available controls.
            </p>
          </div>

          <div className="pt-8 border-t border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Onboarding Experience</h3>
            <p className="text-base text-gray-700 leading-relaxed">
              Clarity of information during account setup and early use.
            </p>
          </div>

          <div className="pt-8 border-t border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Ongoing Communication</h3>
            <p className="text-base text-gray-700 leading-relaxed">
              Consistency and transparency of messaging during continued use.
            </p>
          </div>

          <div className="pt-8 border-t border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Payments & Transactions (Moderate Focus)</h3>
            <p className="text-base text-gray-700 leading-relaxed">
              How financial actions and timelines are explained, without assessing speed or value.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
