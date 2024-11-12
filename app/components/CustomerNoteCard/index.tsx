import Images from "@/app/constants/Images";
import Image from "next/image";
import React from "react";

type Props = {
	altText: string;
	profileUrl: string;
	name: string;
	designation: string;
	note: string;
};

const CustomerNoteCard = (props: Props) => {
	const { profileUrl, name, designation, note, altText } = props;
	return (
		<div className="flex flex-col p-6 sm:p-16 gap-6 border-2 border-[rgba(97, 153, 237, 0.26)] bg-none rounded-3xl w-full justify-center items-center">
			<p className="text-paragraphLarge leading-paragraphLarge font-semibold text-center">
				{note}
			</p>
			<div className="flex flex-col gap-2 justify-center items-center">
				<div className="w-14 h-14 rounded-full relative">
					<Image
						src={profileUrl}
						fill
						alt={altText}
						className="rounded-full object-cover"
					/>
				</div>
				<p className="text-xl font-semibold">{name}</p>
				<p className="text-sm">{designation}</p>
			</div>
		</div>
	);
};

export default CustomerNoteCard;
