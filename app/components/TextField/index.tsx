"use client";
import Image from "next/image";
import React from "react";
import Button from "../Button/Button";
import Link from "next/link";

type Props = {
	onChange: (event: any) => void;
	title: string;
	labelClass?: string;
	inputClass?: string;
	name: string;
	value: any;
	errorBorder?: boolean;
	errorMessage?: string;
	required?: boolean;
	placeholder: string;
	overlayButton?: boolean;
	customBackground?: boolean;
};

const CustomTextField = (props: Props) => {
	const {
		onChange,
		title,
		name,
		inputClass,
		value,
		errorBorder,
		errorMessage,
		required = false,
		placeholder,
		overlayButton,
		customBackground,
	} = props;

	return (
		<div className="w-full">
			<div className="relative flex justify-center">
				<input
					onChange={onChange}
					title={title}
					type="text"
					placeholder={placeholder}
					value={value}
					name={name}
					required={required}
					className={`${inputClass} ${
						customBackground && "text-primary"
					}  bg-white outline-none rounded-lg py-5 px-6 w-full shadow-sm ${
						errorBorder ? "border-red-500" : ""
					}`}
				/>
				{overlayButton && (
					<Link href="/pricing">
						<Button className="absolute top-3 right-2 lg:right-40 w-32">
							Get Free trail
						</Button>
					</Link>
				)}
			</div>
			{errorMessage && errorMessage !== "" && (
				<Image
					className="absolute right-4 top-4"
					src="/Warning-icon.svg"
					width={20}
					height={20}
					alt="warning-icon"
				/>
			)}
			{errorMessage && errorMessage !== "" && (
				<p className="text-red-500 text-sm ml-2 mb-2 text-start w-full">
					{errorMessage}
				</p>
			)}
		</div>
	);
};

export default CustomTextField;
