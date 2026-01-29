export default function Home() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <div className="space-y-16">
        <section>
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">
            Independent reviews focused on clarity and transparency
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            ClearPath Reviews publishes structured evaluations examining how clearly emerging digital products and services communicate features, controls, and key information to users.
          </p>
        </section>

        <section className="pt-8 border-t border-gray-200">
          <p className="text-base text-gray-700 leading-relaxed mb-6">
            ClearPath Reviews is an independent review body focused on usability, communication clarity, and transparency.
          </p>
          <p className="text-base text-gray-700 leading-relaxed mb-6">
            Our reviews assess how users encounter and understand critical product information, with an emphasis on onboarding flows, control visibility, and ongoing account interactions.
          </p>
          <p className="text-base text-gray-700 leading-relaxed">
            We do not rank, endorse, or promote products. Reviews are designed to be descriptive, structured, and comparable.
          </p>
        </section>

        <section className="pt-8 border-t border-gray-200">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">What We Review</h3>
          <p className="text-base text-gray-700 leading-relaxed mb-4">
            ClearPath Reviews evaluates how products communicate and structure key elements, including:
          </p>
          <ul className="space-y-2 text-base text-gray-700 ml-6">
            <li className="leading-relaxed">Feature explanations and labeling</li>
            <li className="leading-relaxed">User controls and settings visibility</li>
            <li className="leading-relaxed">Onboarding and early-use clarity</li>
            <li className="leading-relaxed">Communication of limitations and conditions</li>
          </ul>
          <p className="text-base text-gray-700 leading-relaxed mt-6">
            Reviews focus on presentation and usability, not outcomes or performance.
          </p>
        </section>

        <section className="pt-8">
          <div className="flex gap-4">
            <a
              href="#framework"
              className="inline-block px-5 py-2.5 text-sm text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 transition-colors"
            >
              View Review Framework
            </a>
            <a
              href="#reviews"
              className="inline-block px-5 py-2.5 text-sm text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 transition-colors"
            >
              Browse Reviews
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
