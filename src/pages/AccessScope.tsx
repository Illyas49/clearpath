export default function AccessScope() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <div className="space-y-16">
        <section>
          <h2 className="text-3xl font-semibold text-gray-900 mb-8">Access & Scope</h2>
        </section>

        <section className="space-y-12">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Access</h3>
            <p className="text-base text-gray-700 leading-relaxed mb-6">
              Full review materials may be subject to access limitations depending on category and scope.
            </p>
            <p className="text-base text-gray-700 leading-relaxed">
              Public summaries are provided where applicable.
            </p>
          </div>

          <div className="pt-8 border-t border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Scope Limitations</h3>
            <p className="text-base text-gray-700 leading-relaxed mb-4">
              ClearPath Reviews does not provide:
            </p>
            <ul className="space-y-2 text-base text-gray-700 ml-6">
              <li className="leading-relaxed">Consumer purchasing advice</li>
              <li className="leading-relaxed">Recommendations or ratings</li>
              <li className="leading-relaxed">Certification or approval</li>
            </ul>
            <p className="text-base text-gray-700 leading-relaxed mt-6">
              Reviews are informational and comparative in structure only.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
