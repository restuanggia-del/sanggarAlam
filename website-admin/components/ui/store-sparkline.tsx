"use client";

import React from "react";
import { ResponsiveContainer, AreaChart, Area, Tooltip } from "recharts";

type DataPoint = { date: string; value: number };

const generateMockData = (days = 14): DataPoint[] => {
  const today = new Date();
  return Array.from({ length: days }).map((_, i) => {
    const d = new Date(today);
    d.setDate(today.getDate() - (days - 1 - i));
    return {
      date: d.toISOString().slice(0, 10),
      value: Math.round(40 + Math.random() * 160),
    };
  });
};

export const StoreSparkline: React.FC<{ data?: DataPoint[] }> = ({ data }) => {
  const series = data ?? generateMockData(14);

  return (
    <div className="w-full h-24">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={series}>
          <defs>
            <linearGradient id="sparklineGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#10B981" stopOpacity={0.7} />
              <stop offset="95%" stopColor="#10B981" stopOpacity={0} />
            </linearGradient>
          </defs>

          <Tooltip
            formatter={(value: number) => value}
            labelFormatter={(label: string) => label}
            wrapperStyle={{ fontSize: 12 }}
          />

          <Area
            type="monotone"
            dataKey="value"
            stroke="#059669"
            fill="url(#sparklineGradient)"
            strokeWidth={2}
            dot={false}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default StoreSparkline;
