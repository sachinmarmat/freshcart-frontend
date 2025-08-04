// DashboardOverview.jsx
import React from 'react';
import { FaBell, FaLightbulb } from 'react-icons/fa';

const stats = [
  {
    label: 'Total Profit',
    value: '$1,619',
    percent: 8.6,
    barColor: 'bg-green-500',
    barBg: 'bg-green-100',
  },
  {
    label: 'Total Income',
    value: '$3,571',
    percent: 86.4,
    barColor: 'bg-blue-600',
    barBg: 'bg-blue-100',
  },
  {
    label: 'Total Expenses',
    value: '$3,430',
    percent: 74.5,
    barColor: 'bg-red-500',
    barBg: 'bg-red-100',
  },
];

const notifications = [
  {
    icon: <FaBell className="text-yellow-500 text-2xl" />,
    title: 'Start your day with New Notification.',
    subtitle: <>You have <span className="text-blue-600 font-semibold">2 new notification</span></>,
  },
  {
    icon: <FaLightbulb className="text-green-600 text-2xl" />,
    title: 'Monitor your Sales and Profitability',
    subtitle: <>You have <span className="text-blue-600 font-semibold">View Performance</span></>,
  },
];

const DashboardOverview = () => (
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-10">
    {/* Sales Overview Card */}
    <div className="bg-white p-6 rounded-xl shadow">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Sales Overview</h3>
      <div className="space-y-6">
        {stats.map((s) => (
          <div key={s.label}>
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium text-gray-700">{s.label}</span>
              <span className="text-sm font-semibold text-gray-800">
                {s.value} <span className="text-gray-500">({s.percent}%)</span>
              </span>
            </div>
            <div className={`w-full h-2 rounded-full ${s.barBg}`}>
              <div
                className={`${s.barColor} h-2 rounded-full`}
                style={{ width: `${s.percent}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Notifications Column */}
    <div className="space-y-6">
      {notifications.map((n, idx) => (
        <div
          key={idx}
          className="flex items-center bg-white p-5 rounded-xl shadow hover:shadow-md transition-shadow"
        >
          <div className="mr-4">{n.icon}</div>
          <div>
            <h4 className="font-semibold text-gray-800">{n.title}</h4>
            <p className="text-gray-600 mt-1">{n.subtitle}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default DashboardOverview;
