"use client";

import React from "react";

import {
	BarChart as BarGraph,
	ResponsiveContainer,
	CartesianGrid,
	XAxis,
	YAxis,
	Bar,
} from "recharts";
import BarSummary from "./ui/BarSummary";
import { Button } from "./ui/button";

type Props = {};

const data = [
	{
		name: "MON",
		total: 40,
	},
	{
		name: "TUE",
		total: 50,
	},
	{
		name: "WED",
		total: 20,
	},
	{
		name: "THU",
		total: 28,
	},
	{
		name: "FRI",
		total: 6,
	},
	{
		name: "SAT",
		total: 42,
	},
	{
		name: "SUN",
		total: 18,
	},
];

const BarChart = (props: Props) => {
	return (
		<>
			<BarSummary />

			<ResponsiveContainer width={"100%"} height={450}>
				<BarGraph data={data}>
					<CartesianGrid stroke="#eee" strokeDasharray="5 5" />
					<XAxis
						dataKey={"name"}
						tickLine={false}
						axisLine={false}
						fontSize={12}
					/>
					<YAxis
						tickLine={false}
						axisLine={false}
						stroke="#888"
						fontSize={12}
						ticks={[0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50]}
						tickFormatter={(value) => `$${value}`}
					/>
					<Bar
						dataKey={"total"}
						barSize={20}
						radius={[4, 4, 0, 0]}
						fill="#0ea5e9"
					/>
				</BarGraph>
			</ResponsiveContainer>
			<div className="flex justify-end gap-2">
				<Button variant="outline" className="rounded-md">
					Export Data
				</Button>
				<Button className="rounded-md">Distribute Equal</Button>
			</div>
		</>
	);
};

export default BarChart;
