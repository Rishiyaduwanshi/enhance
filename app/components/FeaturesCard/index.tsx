import Images from "@/app/constants/Images";
import Image from "next/image";
import React from "react";

type Props = {
	altText: string;
	title: string;
	description: string;
	logoUrl: string;
	customBackground: boolean;
};

const FeaturesCard = (props: Props) => {
	const { altText, title, description, logoUrl, customBackground } = props;
	return (
		<div className="w-full flex flex-col gap-5">
			<Image
				src={logoUrl}
				width={48}
				height={48}
				alt={altText}
				className="cursor-pointer m-auto sm:m-0"
			/>
			<p
				className={`text-xl sm:text-3xl font-bold text-center sm:text-left ${
					customBackground && "dark:text-primary"
				}`}>
				{title}
			</p>
			<p
				className={`${
					customBackground && "dark:text-primary"
				} text-paragraph leading-paragraph text-center sm:text-left`}>
				{description}
			</p>
		</div>
	);
};

export default FeaturesCard;
