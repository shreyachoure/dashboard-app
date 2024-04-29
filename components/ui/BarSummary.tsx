import React from "react";
import { FaArrowTrendUp, FaArrowTrendDown } from "react-icons/fa6";
import SelectPeriod from "../SelectPeriod";

type Props = {};

const BarSummary = (props: Props) => {
	return (
		<section className="mb-2">
			<div className="flex items-center justify-between">
				<p className="font-semibold">Total Tips</p>
				<SelectPeriod />
			</div>

			<p className="flex flex-row items-end mt-2">
				<span className="font-bold text-2xl">$326,32</span>
				<span className="ml-3 text-green-500 flex items-center">
					+8%
					<FaArrowTrendUp className="ml-1" />
				</span>
				<span className="ml-2 text-slate-500">compared to last week</span>
			</p>
		</section>
	);
};

export default BarSummary;
