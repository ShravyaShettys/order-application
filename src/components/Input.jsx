export default function Input({ className, ...props }) {
  return (
    <input
      className={`w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 bg-white shadow-sm transition-all duration-200 placeholder-gray-400 ${className}`}
      {...props}
    />
  );
}