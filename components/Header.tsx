"use client";

import { Button } from "./ui/button";
import { CiSearch, CiBellOn } from "react-icons/ci";
const Header = () => {
	return (
		<div className="flex flex-row items-center p-5 border-y">
			<div className="grow">
				Hello, John <br />{" "}
				<span className="text-sm text-slate-500">It's nice to see you!</span>
			</div>

			<CiBellOn className="text-2xl mx-3 cursor-pointer" />
			<CiSearch className="text-2xl mx-3 cursor-pointer" />
			<div>
				<Button>New Action</Button>
			</div>
		</div>
	);
};

export default Header;
