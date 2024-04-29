import BarChart from "@/components/BarChart";
import Header from "@/components/Header";
import QR from "@/components/QR";
import TotalSummary from "@/components/TotalSummary";
import { CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/button";

export default function Home() {
	return (
		<main className="w-full h-screen overflow-auto pl-72">
			<Header />
			<TotalSummary />

			<section className="flex flex-col md:flex-row gap-3 p-5">
				<CardContent className="basis-full md:basis-2/4">
					<BarChart />
				</CardContent>
				<CardContent className="basis-full md:basis-2/4">
					<QR />
				</CardContent>
			</section>
		</main>
	);
}
