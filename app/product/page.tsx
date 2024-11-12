"use client";
import React from "react";
import HeadingText from "../components/HeadingText/HeadingText";
import Image from "next/image";
import Button from "../components/Button/Button";
import { featuresCardData, logoImages, productServiceData } from "../constants";
import FeaturesCard from "../components/FeaturesCard";
import Images from "../constants/Images";
import ReadyToGrow from "../components/ReadyToGrow";
import { motion } from "framer-motion";
import {
	animatingFadeInout,
	whileInviewFadeSlide,
} from "../constants/FramerAnimations";
import Link from "next/link";

type Props = {};

const Product = (props: Props) => {
	return (
		<motion.main
			className={`flex min-h-screen flex-col gap-y-32 items-center justify-between p-8 sm:p-14 md:p-24`}
			{...animatingFadeInout}>
			<motion.section
				className="grid lg:grid-cols-2 gap-12"
				{...whileInviewFadeSlide}>
				<HeadingText
					placeLeft
					mainHeading="Grow your Sales and Services"
					description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.">
					<div className="flex gap-4">
						<Link href="/pricing">
							<Button>Get Started</Button>
						</Link>
						<Link href="/contact">
							<Button outline={true}>Contact us</Button>
						</Link>
					</div>
				</HeadingText>
				<Image
					src="/home-dashboard.svg"
					width={1024}
					height={666}
					alt="dashboard"
					className="rounded-2xl"
				/>
			</motion.section>
			<motion.section
				className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-20"
				{...whileInviewFadeSlide}>
				{logoImages.map((list, index) => {
					return (
						<div key={index} className="relative w-[196px] h-32">
							<Image src={list.logo} alt={`company-logos-${index}`} fill />
						</div>
					);
				})}
			</motion.section>
			<motion.section
				className="flex flex-col gap-12 p-6 sm:p-8 lg:p-20 rounded-2xl bg-tertiary"
				{...whileInviewFadeSlide}>
				<HeadingText
					customBackground={true}
					title="Get the best out of your company with our service"
				/>
				<div className="bg-white p-9 lg:p-16 rounded-3xl grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
					{productServiceData.map((service, index) => {
						return (
							<FeaturesCard
								customBackground={true}
								key={index}
								logoUrl={service.logo}
								title={service.title}
								description={service.text}
								altText={`product-services-log-${index}`}
							/>
						);
					})}
				</div>
			</motion.section>
			<motion.section
				className="grid gap-9 lg:grid-cols-2 lg:gap-20 rounded-2xl"
				{...whileInviewFadeSlide}>
				<HeadingText
					placeLeft={true}
					caption="Marketing insights"
					title="Data-driven client feedback"
					description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren."
				/>
				<Image
					src={Images.productservicelg}
					width={1024}
					height={666}
					alt="dashboard"
					className="rounded-2xl"
				/>
			</motion.section>
			<motion.section
				className="grid gap-9 lg:grid-cols-2 lg:gap-20 rounded-2xl"
				{...whileInviewFadeSlide}>
				<Image
					src={Images.productservicelg2}
					width={1024}
					height={666}
					alt="dashboard"
					className="rounded-2xl"
				/>
				<HeadingText
					placeLeft={true}
					caption="Time tracker"
					title="Track your project performance"
					description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren."
				/>
			</motion.section>
			<motion.section
				className="grid gap-9 lg:grid-cols-2 lg:gap-20 rounded-2xl"
				{...whileInviewFadeSlide}>
				<HeadingText
					placeLeft={true}
					caption="Lead Generation"
					title="More leads that convert"
					description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren."
				/>
				<Image
					src={Images.productservicelg}
					width={1024}
					height={666}
					alt="dashboard"
					className="rounded-2xl"
				/>
			</motion.section>
			<motion.section
				className="grid gap-9 lg:grid-cols-2 lg:gap-20 rounded-2xl"
				{...whileInviewFadeSlide}>
				<Image
					src={Images.productservicelg2}
					width={1024}
					height={666}
					alt="dashboard"
					className="rounded-2xl"
				/>
				<HeadingText
					placeLeft={true}
					caption="Remote teams"
					title="Real-time collaboration"
					description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren."
				/>
			</motion.section>
			<motion.section className="flex flex-col" {...whileInviewFadeSlide}>
				<HeadingText title="Features" />
				<div className="bg-tertiary rounded-3xl p-8 sm:p-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12">
					{featuresCardData.map((feature, index) => {
						return (
							<FeaturesCard
								customBackground={true}
								key={index}
								logoUrl={feature.logo}
								title={feature.title}
								description={feature.text}
								altText={`fetures-card-logo-${index}`}
							/>
						);
					})}
				</div>
			</motion.section>
			<ReadyToGrow />
		</motion.main>
	);
};

export default Product;
