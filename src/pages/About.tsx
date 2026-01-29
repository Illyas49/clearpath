export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <div className="space-y-16">
        <section>
          <h2 className="text-3xl font-semibold text-gray-900 mb-8">About</h2>
        </section>

        <section className="space-y-12">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Purpose</h3>
            <p className="text-base text-gray-700 leading-relaxed mb-6">
              ClearPath Reviews was created to provide structured, independent evaluations of how clearly products communicate with users.
            </p>
            <p className="text-base text-gray-700 leading-relaxed">
              The organization focuses on transparency of method and consistency of evaluation.
            </p>
          </div>

          <div className="pt-8 border-t border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Independence</h3>
            <p className="text-base text-gray-700 leading-relaxed mb-6">
              ClearPath Reviews operates independently and does not accept compensation tied to review outcomes.
            </p>
            <p className="text-base text-gray-700 leading-relaxed">
              We do not promote, rank, or endorse products or services.
            </p>
          </div>

          <div className="pt-8 border-t border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Review Governance</h3>
            <p className="text-base text-gray-700 leading-relaxed">
              Review criteria and frameworks are internally defined and periodically updated to maintain relevance and consistency.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
