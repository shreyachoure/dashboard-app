"use client";

import React from "react";
import qrcode from "../public/qrcode.png";
import QRInvite from "./QRInvite";

type Props = {};

const QR = (props: Props) => {
	return (
		<section>
			<div>
				<p className="font-semibold">Group Code</p>
				<p className="text-slate-500 mt-2">
					With this QR code, you can invite your employees to SIMA
				</p>
			</div>
			<div className="flex flex-col justify-end h-full">
				<img
					className="m-auto py-5"
					src={qrcode.src}
					width={300}
					height={300}
					alt="QRCode"
				/>

				<QRInvite />
			</div>
		</section>
	);
};

export default QR;
