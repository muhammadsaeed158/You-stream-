// components/Monetization.js
export default function Monetization() {
  return (
    <section className="bg-gray-100 p-8 rounded-lg my-8">
      <h2 className="text-3xl font-bold mb-4 text-center text-gray-800">
        Future Monetization Plans
      </h2>
      <p className="mb-6 text-gray-700 text-center max-w-2xl mx-auto">
        YouStream has the potential to generate revenue through ads, subscriptions, sponsorships, and donations. 
        This section highlights the investment opportunity for future growth.
      </p>
      <ul className="list-disc list-inside text-gray-700 max-w-xl mx-auto space-y-2">
        <li>Ad integration (Google AdSense / Media.net)</li>
        <li>Premium subscriptions for exclusive content</li>
        <li>Sponsorships and brand partnerships</li>
        <li>Affiliate marketing opportunities</li>
        <li>Donation / tipping system for creators</li>
      </ul>
    </section>
  );
}