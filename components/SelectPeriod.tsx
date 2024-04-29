import React from 'react'
import {
	Select,
	SelectTrigger,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectValue,
} from "./ui/select";

type Props = {}

const SelectPeriod = (props: Props) => {
  return (
		<Select>
			<SelectTrigger className="w-[180px]">
				<SelectValue className='text-slate-500' placeholder="Weekly" />
			</SelectTrigger>
			<SelectContent>
				<SelectGroup>
					<SelectItem value="monthly">Monthly</SelectItem>
					<SelectItem value="yearly">Yearly</SelectItem>
				</SelectGroup>
			</SelectContent>
		</Select>
	);
}

export default SelectPeriod