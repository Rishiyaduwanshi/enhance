import Images from "@/app/constants/Images";
import Image from "next/image";
import React from "react";

type Props = {
	isImageOnly?: boolean;
	team?: boolean;
	priority?: boolean;
	imageUrl: string;
	author?: string;
	title?: string;
	text?: string;
	altText?: string;
	customBackground?: boolean;
};

const ImageCard = (props: Props) => {
	const {
		isImageOnly = false,
		team = false,
		imageUrl,
		author,
		title,
		text,
		altText,
		priority = false,
		customBackground,
	} = props;
	return (
		<div
			className={`${
				team && "bg-tertiary rounded-xl"
			} flex flex-col gap-4 w-full`}>
			<div
				className={`${
					isImageOnly ? "h-[288px]" : team ? "h-[224px]" : "h-[256px]"
				}  relative`}>
				<Image
					src={imageUrl}
					fill
					className={`${
						isImageOnly ? "rounded-3xl" : team ? "rounded-xl" : "rounded-2xl"
					}  left-0 object-cover`}
					alt={altText ? altText : "card-reference-pic"}
					priority={priority}
				/>
			</div>

			{!isImageOnly && (
				<div className={`${team && "px-8 pb-4"}`}>
					<h4
						className={`text-h4 leading-h4 font-bold ${
							customBackground && "dark:text-primary"
						}`}>
						{title}
					</h4>
					<p
						className={`text-paragraph leading-paragraph ${
							customBackground && "dark:text-primary"
						}`}>
						{text}
					</p>
					{!team && (
						<p
							className={`text-paragraph leading-paragraph font-medium pt-2 ${
								customBackground && "dark:text-primary"
							}`}>
							{author}
						</p>
					)}
				</div>
			)}
		</div>
	);
};

export default ImageCard;
