export default function ReviewFramework() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <div className="space-y-16">
        <section>
          <h2 className="text-3xl font-semibold text-gray-900 mb-8">Review Framework</h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Overview</h3>
              <p className="text-base text-gray-700 leading-relaxed mb-4">
                ClearPath Reviews applies a standardized review framework to assess clarity and transparency across products and services.
              </p>
              <p className="text-base text-gray-700 leading-relaxed">
                Each review follows the same structure, enabling comparison across categories and time.
              </p>
            </div>
          </div>
        </section>

        <section className="pt-8 border-t border-gray-200">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">Evaluation Structure</h3>
          <p className="text-base text-gray-700 leading-relaxed mb-4">
            Reviews are organized around defined evaluation areas, including:
          </p>
          <ul className="space-y-2 text-base text-gray-700 ml-6">
            <li className="leading-relaxed">Information clarity</li>
            <li className="leading-relaxed">Control visibility</li>
            <li className="leading-relaxed">Communication consistency</li>
            <li className="leading-relaxed">User comprehension at key interaction points</li>
          </ul>
          <p className="text-base text-gray-700 leading-relaxed mt-6">
            Each area is assessed using predefined criteria.
          </p>
        </section>

        <section className="pt-8 border-t border-gray-200">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">Review Method</h3>
          <p className="text-base text-gray-700 leading-relaxed mb-4">
            Reviews are conducted through structured evaluation and observation, focusing on:
          </p>
          <ul className="space-y-2 text-base text-gray-700 ml-6">
            <li className="leading-relaxed">User-facing language and explanations</li>
            <li className="leading-relaxed">Navigation and discoverability</li>
            <li className="leading-relaxed">Consistency of messaging across flows</li>
          </ul>
          <p className="text-base text-gray-700 leading-relaxed mt-6">
            Reviews are time-bound and limited in scope.
          </p>
        </section>

        <section className="pt-8 border-t border-gray-200">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">What Reviews Do Not Measure</h3>
          <p className="text-base text-gray-700 leading-relaxed mb-4">
            ClearPath Reviews does not evaluate:
          </p>
          <ul className="space-y-2 text-base text-gray-700 ml-6">
            <li className="leading-relaxed">Product quality or value</li>
            <li className="leading-relaxed">Commercial competitiveness</li>
            <li className="leading-relaxed">Regulatory compliance</li>
            <li className="leading-relaxed">Legal or financial outcomes</li>
          </ul>
          <p className="text-base text-gray-700 leading-relaxed mt-6">
            The framework is focused solely on clarity and usability.
          </p>
        </section>
      </div>
    </div>
  );
}
