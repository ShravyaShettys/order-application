export default function Select({ className, children, ...props }) {
  return (
    <select
      className={`w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 bg-white shadow-sm transition-all duration-200 ${className}`}
      {...props}
    >
      {children}
    </select>
  );
}