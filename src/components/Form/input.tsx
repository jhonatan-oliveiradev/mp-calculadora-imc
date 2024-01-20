import { InputHTMLAttributes } from "react";
import { cn } from "../../lib/utils";

interface InputProps extends InputHTMLAttributes<HTMLElement> {}

export const Input = ({
	className,
	...props
}: InputProps & { className?: string }) => {
	return (
		<input
			className={cn(
				"block w-full border border-rose-400 rounded-md p-2",
				className
			)}
			{...props}
		/>
	);
};
