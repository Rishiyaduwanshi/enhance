import Images from "@/app/constants/Images";
import Image from "next/image";
import React from "react";
import HeadingText from "../HeadingText/HeadingText";
import Button from "../Button/Button";
import { motion } from "framer-motion";
import { whileInviewFadeSlide } from "@/app/constants/FramerAnimations";
import Link from "next/link";

const ReadyToGrow = () => {
	return (
		<motion.section className="w-full relative pb-20" {...whileInviewFadeSlide}>
			<Image
				src={Images.gradientBg}
				className="absolute inset-0 tranform -z-10 m-auto"
				width={800}
				height={800}
				alt="gradient-background"
			/>
			<HeadingText
				title="Are you ready to grow your business with us?"
				description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.">
				<div>
					<Link href="/pricing">
						<Button>View Pricing</Button>
					</Link>
				</div>
			</HeadingText>
		</motion.section>
	);
};

export default ReadyToGrow;
