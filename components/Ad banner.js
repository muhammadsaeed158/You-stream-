// components/AdBanner.js
export default function AdBanner() {
  return (
    <div className="bg-gray-200 p-6 rounded-lg my-8 text-center">
      <h3 className="text-xl font-semibold mb-2 text-gray-800">Advertisement</h3>
      <div className="bg-gray-400 h-32 flex items-center justify-center text-white font-bold text-lg rounded">
        Ads Placeholder
      </div>
      <p className="mt-2 text-gray-600 text-sm">
        This area is reserved for future ad integration (Google AdSense or other networks)
      </p>
    </div>
  );
}