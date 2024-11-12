"use client";
import React from "react";

type Props = {
	className?: string;
	children: any;
	type?: "button" | "reset" | "submit" | undefined;
	outline?: Boolean;
	onClick?: () => void;
};

const Button = (props: Props) => {
	const { className, children, type, outline, onClick } = props;

	return (
		<>
			{outline ? (
				<button
					role="button"
					type={type ? type : "button"}
					onClick={onClick}
					className={`${
						className ? className : "w-[128px]"
					} bg-none border-[2px] border-tertiary dark:border-tertiary hover:bg-primary hover:text-white font-medium text-base p-2 rounded-xl outline-none cursor-pointer`}>
					{children}
				</button>
			) : (
				<button
					role="button"
					type={type ? type : "button"}
					onClick={onClick}
					className={`${
						className ? className : "w-[128px]"
					} bg-primary dark:bg-tertiary text-white dark:text-primary border-none dark:hover:bg-tertiary/60  hover:bg-[#313852] font-medium text-base p-2 rounded-xl outline-none cursor-pointer`}>
					{children}
				</button>
			)}
		</>
	);
};

export default Button;
