"use client";
import { FaUsers } from "react-icons/fa";
import { PiSquaresFour, PiQrCode, PiDevices, PiBell } from "react-icons/pi";
import { SiTheconversation } from "react-icons/si";
import { CiSettings } from "react-icons/ci";
import { MdOutlineHelpCenter } from "react-icons/md";

const generalSidebarItems = [
	{ icon: PiSquaresFour, label: "Home" },
	{ icon: FaUsers, label: "Users" },
	{ icon: SiTheconversation, label: "Reviews" },
	{ icon: PiQrCode, label: "QR" },
	{ icon: PiDevices, label: "Devices" },
];

const lowerSidebarItems = [
	{ icon: PiBell, label: "Notifications" },
	{ icon: MdOutlineHelpCenter, label: "Help Center" },
	{ icon: CiSettings, label: "Settings" },
];

export default function Sidebar() {
	return (
		<div className="flex flex-col w-[300px] border-r min-h-screen p-4 bg-gray-50 cursor-pointer text-sm text-slate-500">
			<div className="text-black mb-5 p-3">SIMA</div>
			<div className="grow">
				GENERAL
				{generalSidebarItems.map((item) => (
					<div
						key={item.label}
						className="flex flex-row items-center m-2 hover:bg-white hover:text-md hover:text-black hover:p-2 hover:rounded-lg hover:shadow-md"
					>
						<item.icon />
						<span className="mx-2">{item.label}</span>
					</div>
				))}
			</div>
			{lowerSidebarItems.map((item) => (
				<div
					key={item.label}
					className="flex flex-row items-center m-2 hover:bg-white hover:text-md hover:text-black hover:p-2 hover:rounded-lg hover:shadow-md"
				>
					<item.icon />
					<span className="mx-2">{item.label}</span>
				</div>
			))}
		</div>
	);
}
