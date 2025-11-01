// components/Sponsorship.js
export default function Sponsorship() {
  return (
    <section className="bg-yellow-50 p-6 rounded-lg my-8 text-center">
      <h3 className="text-2xl font-bold mb-4 text-gray-800">Sponsored Content</h3>
      <img
        src="/sponsor-logo.png"
        alt="Brand Logo"
        className="mx-auto w-40 rounded shadow-md mb-2"
      />
      <p className="text-gray-700">
        YouStream partners with brands to showcase exclusive sponsored content.
        This placeholder shows where sponsored videos or banners will appear.
      </p>
    </section>
  );
}