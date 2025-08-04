import React from "react";
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    LineChart,
    Line,
    PieChart,
    Pie,
    Cell,
} from "recharts";

const areaData = [
    { month: "Jan", income: 30000, expense: 78000 },
    { month: "Feb", income: 40000, expense: 30000 },
    { month: "Mar", income: 28000, expense: 45000 },
    { month: "Apr", income: 50000, expense: 77000 },
    { month: "May", income: 38000, expense: 32000 },
    { month: "Jun", income: 64000, expense: 37000 },
    { month: "Jul", income: 98000, expense: 34000 },
];

const pieData = [
    { name: "Shippings", value: 32.98, percent: "2%", color: "#22c55e" }, // green
    { name: "Refunds", value: 11.0, percent: "11%", color: "#facc15" }, // yellow
    { name: "Order", value: 14.87, percent: "1%", color: "#ef4444" }, // red
    { name: "Income", value: 12.0, percent: "86%", color: "#3b82f6" }, // blue
];

const DashboardCharts = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-gray-50">
            {/* Revenue Chart */}
            <div className="bg-white p-6 rounded-xl shadow">
                <div className="flex justify-between items-center mb-4">
                    <div>
                        <h2 className="text-lg font-semibold text-gray-800">Revenue</h2>
                        <p className="text-sm text-gray-500">(+63%) than last year</p>
                    </div>
                    <select className="border rounded px-3 py-1 text-sm">
                        <option>2019</option>
                        <option>2020</option>
                        <option>2021</option>
                    </select>
                </div>
                <ResponsiveContainer width="100%" height={250}>
                    <AreaChart data={areaData}>
                        <defs>
                            <linearGradient id="income" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#22c55e" stopOpacity={0.5} />
                                <stop offset="95%" stopColor="#22c55e" stopOpacity={0} />
                            </linearGradient>
                            <linearGradient id="expense" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#facc15" stopOpacity={0.5} />
                                <stop offset="95%" stopColor="#facc15" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Area
                            type="monotone"
                            dataKey="income"
                            stroke="#22c55e"
                            fill="url(#income)"
                            name="Total Income"
                        />
                        <Area
                            type="monotone"
                            dataKey="expense"
                            stroke="#facc15"
                            fill="url(#expense)"
                            name="Total Expense"
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>

            {/* Pie Chart Section */}
            <div className="bg-white p-6 rounded-xl shadow">
                <h2 className="text-lg font-semibold text-gray-800 mb-4">Total Sales</h2>
                <div className="flex flex-col items-center">
                    <PieChart width={220} height={220}>
                        <Pie
                            data={pieData}
                            dataKey="value"
                            innerRadius={60}
                            outerRadius={100}
                            paddingAngle={2}
                        >
                            {pieData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                        </Pie>
                    </PieChart>
                </div>

                {/* Legend */}
                <ul className="mt-6 space-y-2 text-sm">
                    <div className="absolute mt-[-150px] text-center text-xl font-semibold">
                        <p>Total Sales</p>
                        <p className="text-2xl font-bold">9600</p>
                    </div>
                    {pieData.map((item, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                            <span
                                className="inline-block w-3 h-3 rounded-full"
                                style={{ backgroundColor: item.color }}
                            ></span>
                            <span className="text-gray-700 font-medium">{item.name}</span>
                            <span className="text-gray-500 ml-auto">
                                ${item.value} ({item.percent})
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default DashboardCharts;
