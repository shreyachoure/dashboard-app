import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { FaRegCopy } from "react-icons/fa";

type Props = {}

const QRInvite = (props: Props) => {

    const [link, setLink] = useState("test@gmail.com");
	const [copied, setCopied] = useState(false);

	const handleCopy = () => {
		setCopied(true);
		setTimeout(() => setCopied(false), 1500);
	};

  return (
		<div className="pt-5">
			<div className="link">
				<div className="flex items-center gap-3 pb-3">
					<Input
						className="rounded-full"
						value={link}
						disabled
						onChange={({ target: { value } }) => setLink(value)}
					/>
					<CopyToClipboard text={link} onCopy={handleCopy}>
						<Button
							className="rounded-full"
							variant="outline"
							title="Copy to Clipboard"
						>
							<FaRegCopy />
						</Button>
					</CopyToClipboard>
				</div>
				{copied && <span className="text-sm text-green-500">Copied!</span>}
			</div>
			<div className="invite">
				<p className="text-md">Invite Users</p>
				<div className="flex items-center gap-3">
					<Input type="email" className="rounded-md" placeholder="test@gmail.com" />
					<Button className="rounded-md">Invite</Button>
				</div>
			</div>
		</div>
	);
}

export default QRInvite