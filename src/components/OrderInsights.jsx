import { generateOrderInsights } from '../utils/aiInsights';

export default function OrderInsights() {
  const insights = generateOrderInsights();

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-8 animate-fade-in">
      <div className="flex items-center mb-4">
        <svg className="w-6 h-6 text-indigo-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2v12a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
        <h3 className="text-2xl font-semibold text-gray-800">AI Order Insights</h3>
      </div>
      {insights.length === 0 ? (
        <p className="text-gray-500 italic">No insights available at this time.</p>
      ) : (
        <div className="grid gap-4 md:grid-cols-2">
          {insights.map((insight, index) => (
            <div
              key={index}
              className={`p-4 rounded-lg border-l-4 ${
                insight.priority === 'high'
                  ? 'bg-red-50 border-red-500'
                  : insight.priority === 'medium'
                  ? 'bg-blue-50 border-blue-500'
                  : 'bg-gray-50 border-gray-500'
              } hover-scale shadow-sm transition-all duration-200`}
            >
              <div className="flex items-center">
                <span className="text-lg font-medium text-gray-800">
                  {insight.type === 'alert' && '⚠️ '}
                  {insight.type === 'trend' && '📊 '}
                  {insight.type === 'prediction' && '🔮 '}
                  {insight.message}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}