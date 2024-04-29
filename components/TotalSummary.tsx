"use client";

import React from "react";
import { FaUsers, FaDollarSign, FaHandHoldingUsd } from "react-icons/fa";
import { SiTheconversation } from "react-icons/si";

const totals = [
	{
		icon: FaUsers,
		bgColor: `${`bg-fuchsia-300`}`,
		label: "Total Users",
		value: "256",
	},
	{
		icon: SiTheconversation,
		bgColor: `${`bg-cyan-200`}`,
		label: "Total Reviews",
		value: "88",
	},
	{
		icon: FaHandHoldingUsd,
		bgColor: `${`bg-yellow-500`}`,
		label: "Total Transactions",
		value: "64",
	},
	{
		icon: FaDollarSign,
		bgColor: `${`bg-lime-300`}`,
		label: "Total Tips",
		value: "33",
	},
];
export default function TotalSummary() {
	return (
		<div className="flex  justify-between w-full p-4 cursor-auto flex-nowrap">
			{totals.map((total, index) => (
				<div
					key={index}
					className="w-full flex flex-row justify-between m-2 p-5 items-center border rounded bg-white shadow-md"
				>
					<span className="flex flex-row items-center">
						<total.icon
							className={`${total.bgColor} text-3xl rounded-md p-2`}
						/>
						<h3 className="ml-2 text-slate-500">{total.label}</h3>
					</span>
					<p className="font-semibold">{total.value}</p>
				</div>
			))}
		</div>
	);
}
