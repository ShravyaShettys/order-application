export default function Button({ children, className, ...props }) {
  return (
    <button
      className={`px-6 py-3 rounded-lg font-medium text-white bg-gradient-to-r from-indigo-600 to-cyan-500 hover:from-indigo-700 hover:to-cyan-600 transition-all duration-300 shadow-md hover:shadow-lg hover-scale ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}