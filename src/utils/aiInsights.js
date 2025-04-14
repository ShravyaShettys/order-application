import { mockOrders } from '../data/orders';

export function generateOrderInsights() {
  const insights = [];
  const today = new Date('2025-04-13');

  // Priority Alerts: High-value pending orders
  const highValuePending = mockOrders.filter(
    (order) => order.status === 'Pending' && order.amount > 200
  );
  highValuePending.forEach((order) => {
    insights.push({
      type: 'alert',
      message: `High-value order #${order.id} ($${order.amount}) is still Pending. Consider prioritizing.`,
      priority: 'high',
    });
  });

  // Status Trends
  const statusCounts = mockOrders.reduce((acc, order) => {
    acc[order.status] = (acc[order.status] || 0) + 1;
    return acc;
  }, {});
  const totalOrders = mockOrders.length;
  Object.entries(statusCounts).forEach(([status, count]) => {
    const percentage = ((count / totalOrders) * 100).toFixed(1);
    insights.push({
      type: 'trend',
      message: `${percentage}% of orders are ${status} (${count} orders).`,
      priority: 'medium',
    });
  });

  // Mock Delay Predictions
  mockOrders.forEach((order) => {
    const orderDate = new Date(order.date);
    const daysPending = Math.floor((today - orderDate) / (1000 * 60 * 60 * 24));
    if (order.status === 'Pending' && daysPending > 3) {
      insights.push({
        type: 'prediction',
        message: `Order #${order.id} may be delayed (Pending for ${daysPending} days).`,
        priority: 'high',
      });
    }
  });

  // Sort by priority
  const priorityOrder = { high: 1, medium: 2, low: 3 };
  return insights.sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]);
}