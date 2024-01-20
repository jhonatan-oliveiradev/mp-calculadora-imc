import { LabelHTMLAttributes } from "react";

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
	children: React.ReactNode;
}

export const Label = ({ children, ...props }: LabelProps) => {
	return (
		<label className="block text-neutral-600 font-light text-sm" {...props}>
			{children}
		</label>
	);
};
