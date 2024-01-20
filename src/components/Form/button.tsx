import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLElement> {
	children: React.ReactNode;
}

export const Button = ({ children, ...props }: ButtonProps) => {
	return (
		<button
			className="bg-rose-400 p-2 rounded-md font-bold text-white hover:bg-rose-500 transition-all"
			{...props}
		>
			{children}
		</button>
	);
};
