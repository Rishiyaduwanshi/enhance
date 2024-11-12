"use client";
import React from "react";
import HeadingText from "../components/HeadingText/HeadingText";
import DropMessageForm from "../components/DropMessageForm";
import { contactData } from "../constants";
import IconText from "../components/IconText/IconText";
import ReadyToGrow from "../components/ReadyToGrow";
import { motion } from "framer-motion";
import {
	animatingFadeInout,
	whileInviewFadeSlide,
} from "../constants/FramerAnimations";

type Props = {};

const page = (props: Props) => {
	return (
		<motion.main
			className={`flex min-h-screen flex-col gap-y-32 items-center justify-center p-8 sm:p-14 lg:p-24`}
			{...animatingFadeInout}>
			<motion.section
				className="w-full lg:min-h-screen flex flex-col gap-2 relative"
				{...whileInviewFadeSlide}>
				<HeadingText mainHeading="Get in touch with us" />
				<div className="grid lg:grid-cols-2 gap-16 bg-[#F0F2FE] rounded-3xl p-8 lg:p-16">
					<DropMessageForm customBackground={true} />
					<div className="flex flex-col gap-7 justify-center items-center place-self-center">
						{contactData.map((contact, index) => {
							return (
								<IconText
									customBackground={true	}
									key={index}
									iconSrc={contact.logo}
									title={contact.title}
									description={contact.text}
									iconAltText={`contact-reference-logo-${index}`}
								/>
							);
						})}
					</div>
				</div>
			</motion.section>
			<ReadyToGrow />
		</motion.main>
	);
};

export default page;
