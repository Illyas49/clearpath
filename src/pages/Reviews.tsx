export default function Reviews() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <div className="space-y-16">
        <section>
          <h2 className="text-3xl font-semibold text-gray-900 mb-8">Reviews</h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Published Reviews</h3>
              <p className="text-base text-gray-700 leading-relaxed mb-4">
                Each ClearPath review provides a structured summary of how clearly a product communicates with users.
              </p>
              <p className="text-base text-gray-700 leading-relaxed">
                Reviews are identified by category and focus area rather than promotional titles.
              </p>
            </div>
          </div>
        </section>

        <section className="pt-8 border-t border-gray-200">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">Sample Reviews (Illustrative)</h3>

          <div className="space-y-8">
            <div className="bg-white border border-gray-200 p-6">
              <div className="space-y-3">
                <div className="flex items-baseline gap-2">
                  <span className="text-sm font-medium text-gray-900">Review ID:</span>
                  <span className="text-sm text-gray-700">CP-014</span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-sm font-medium text-gray-900">Category:</span>
                  <span className="text-sm text-gray-700">Digital Services</span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-sm font-medium text-gray-900">Focus:</span>
                  <span className="text-sm text-gray-700">Onboarding clarity and control visibility</span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-sm font-medium text-gray-900">Status:</span>
                  <span className="text-sm text-gray-700">Published</span>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 p-6">
              <div className="space-y-3">
                <div className="flex items-baseline gap-2">
                  <span className="text-sm font-medium text-gray-900">Review ID:</span>
                  <span className="text-sm text-gray-700">CP-015</span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-sm font-medium text-gray-900">Category:</span>
                  <span className="text-sm text-gray-700">Financial Interfaces</span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-sm font-medium text-gray-900">Focus:</span>
                  <span className="text-sm text-gray-700">Communication of user-managed settings</span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-sm font-medium text-gray-900">Status:</span>
                  <span className="text-sm text-gray-700">Published</span>
                </div>
              </div>
            </div>
          </div>

          <p className="text-base text-gray-700 leading-relaxed mt-8">
            Detailed scoring or endorsements are not provided.
          </p>
        </section>

        <section className="pt-8 border-t border-gray-200">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">Review Summaries</h3>
          <p className="text-base text-gray-700 leading-relaxed mb-4">
            Each review includes:
          </p>
          <ul className="space-y-2 text-base text-gray-700 ml-6">
            <li className="leading-relaxed">Scope overview</li>
            <li className="leading-relaxed">Evaluation areas covered</li>
            <li className="leading-relaxed">Observed clarity strengths</li>
            <li className="leading-relaxed">Noted communication gaps</li>
          </ul>
          <p className="text-base text-gray-700 leading-relaxed mt-6">
            Summaries are descriptive and non-judgmental.
          </p>
        </section>
      </div>
    </div>
  );
}
