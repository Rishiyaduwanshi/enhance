"use client";
import React, { ChangeEvent } from "react";
import Button from "./components/Button/Button";
import HeadingText from "./components/HeadingText/HeadingText";
import IconText from "./components/IconText/IconText";
import FeaturesCard from "./components/FeaturesCard";
import CustomerNoteCard from "./components/CustomerNoteCard";
import CustomTextField from "./components/TextField";
import Image from "next/image";
import {
	bestSolutionData,
	discoverMoreCardData,
	featuresCardData,
	feedbackCardData,
	logoImages,
} from "./constants";
import Images from "./constants/Images";
import ReadyToGrow from "./components/ReadyToGrow";
import Intro from "./components/Intro";
import { motion } from "framer-motion";
import {
	animatingFadeInout,
	whileInviewFadeSlide,
} from "./constants/FramerAnimations";
import Link from "next/link";

export default function Home() {
	const [email, setEmail] = React.useState("");
	const [isLoading, setIsLoading] = React.useState(true);
	const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
		setEmail(event.target.value);
	};

	React.useEffect(() => {
		if (window !== undefined && isLoading) {
			const headerRef = document.getElementById("headerReference");
			headerRef?.classList.add("hidden");
			headerRef?.classList.remove("flex");
			setTimeout(() => {
				headerRef?.classList.remove("hidden");
				headerRef?.classList.add("flex");
				setIsLoading(false);
			}, 3000);
		}
	}, []);

	return (
		<>
			{isLoading &&  <Intro />}
			{!isLoading && (
				<motion.main
					className={`flex min-h-screen flex-col gap-y-32 items-center justify-center p-8 sm:p-14 md:p-24`}>
					<motion.section className="w-full lg:min-h-screen place-items-center flex flex-col gap-16 relative">
						<Image
							src={Images.gradientBg}
									className="absolute inset-0 tranform -z-10 m-auto"
							width={800}
							height={800}
							alt="gradient-background"
						/>
						<motion.div {...animatingFadeInout}>
							<HeadingText
								mainHeading="The Best Software to Grow your Sales and Services"
								description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.">
								<CustomTextField
									overlayButton={true}
									inputClass="lg:max-w-[500px]"
									placeholder="enter Your Email"
									title="Email Input"
									value={email}
									name="email"
									onChange={handleEmailChange}
								/>
							</HeadingText>
						</motion.div>
						<Image
							priority={true}
							src={Images.homedashboard}
							width={1024}
							height={666}
							alt="dashboard"
							className="rounded-2xl"
						/>
					</motion.section>
					<motion.section
						className="flex flex-col gap-6"
						{...whileInviewFadeSlide}>
						<HeadingText
							caption="High-quality"
							title="We have the Best Solution for your Business"
						/>

						<motion.div
							className="bg-tertiary rounded-3xl p-8 sm:p-12 md:p-16 gap-8 grid sm:grid-cols-2 lg:grid-cols-3"
							{...whileInviewFadeSlide}>
							{bestSolutionData.map((list, index) => {
								return (
									<FeaturesCard
										customBackground={true}
										key={index}
										logoUrl={list.logo}
										title={list.title}
										description={list.text}
										altText={`best-solution-logo-${index}`}
									/>
								);
							})}
						</motion.div>
					</motion.section>
					<motion.section
						className="grid lg:grid-cols-2 gap-6"
						{...whileInviewFadeSlide}>
						<HeadingText
							placeLeft
							caption="Why should you work with us?"
							title="To upscale your business to the next level"
							description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua invidunt ut labore."
						/>
						<div className="flex flex-col gap-20">
							<IconText
								iconAltText="arrow-Icon"
								iconSrc={Images?.circleArrow}
								description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy"
							/>
							<IconText
								iconAltText="arrow-Icon"
								iconSrc={Images?.circleArrow}
								description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy"
							/>
							<IconText
								iconAltText="arrow-Icon"
								iconSrc={Images?.circleArrow}
								description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy"
							/>
						</div>
					</motion.section>
					<motion.section
						className="grid gap-20 lg:grid-cols-2 w-full rounded-3xl bg-tertiary z-0 p-8 sm:p-14 md:p-24"
						{...whileInviewFadeSlide}>
						<div className="">
							<HeadingText
								customBackground={true}
								placeLeft
								title="To upscale your business to the next level"
								description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua invidunt ut labore.">
								<div>
									<Link href="/pricing">
										<Button>Get Free trail</Button>
									</Link>
								</div>
							</HeadingText>
						</div>
						<Image
							src={Images.conversion}
							height={680}
							width={576}
							alt="coversions-reference"
						/>
					</motion.section>
					<motion.section
						className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-20"
						{...whileInviewFadeSlide}>
						{logoImages.map((list, index) => {
							return (
								<Image
									key={index}
									src={list.logo}
									alt={`company-logos-${index}`}
									width={196}
									height={196}
								/>
							);
						})}
					</motion.section>
					<motion.section
						className="grid lg:grid-cols-2 gap-6 sm:gap-12"
						{...whileInviewFadeSlide}>
						<HeadingText
							placeLeft
							caption="Discover More"
							title="Analyze your sales and marketing leads"
							description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua invidunt ut labore."
						/>
						<div className="flex flex-col gap-10">
							{discoverMoreCardData.map((card, index) => {
								return (
									<IconText
										key={index}
										iconSrc={card.logo}
										title={card.title}
										description={card.text}
										iconAltText="discover-card-${index}"
									/>
								);
							})}
						</div>
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
					<motion.section
						className="flex flex-col gap-6"
						{...whileInviewFadeSlide}>
						<HeadingText title="The stunning results our customers have experienced" />
						<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
							{feedbackCardData.map((feedback, index) => {
								return (
									<CustomerNoteCard
										key={index}
										profileUrl={feedback.logo}
										name={feedback.name}
										designation={feedback.designation}
										note={feedback.text}
										altText={`customer-profile-${index}`}
									/>
								);
							})}
						</div>
					</motion.section>

					<ReadyToGrow />
				</motion.main>
			)}
		</>
	);
}
