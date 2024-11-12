"use client";
import React from "react";
import HeadingText from "../components/HeadingText/HeadingText";
import Button from "../components/Button/Button";
import { faqCardData, pricingCardList } from "../constants";
import PricingCard from "../components/PricingCard";
import FaqCard from "../components/FaqCard";
import ReadyToGrow from "../components/ReadyToGrow";
import { motion } from "framer-motion";
import {
	animatingFadeInout,
	whileInviewFadeSlide,
} from "../constants/FramerAnimations";
import { useTheme } from "next-themes";

type Props = {};

const Pricing = (props: Props) => {
	const [selectedMonthly, setSelectedMonthly] = React.useState(true);
	const [selectedYearly, setSelectedYearly] = React.useState(false);
	const [cardSelected, setCardSelected] = React.useState(1);
	const { theme } = useTheme();
	function handlePriceCardClick(index: number) {
		setCardSelected(index);
	}
	return (
		<motion.main
			className={`flex min-h-screen flex-col gap-y-32 items-center justify-between p-8 sm:p-14 lg:p-24`}
			{...animatingFadeInout}>
			<motion.section
				className="flex flex-col gap-12"
				{...whileInviewFadeSlide}>
				<div className="justify-items-start">
					<HeadingText
						title="Pricing plans that suit you"
						description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.">
						<div
							className={`${
								theme === "dark" ? "bg-secondary" : "bg-tertiary"
							} rounded-3xl p-2 flex justify-around w-1/2 m-auto`}>
							<Button
								onClick={() => {
									setSelectedMonthly(true);
									setSelectedYearly(false);
								}}
								outline={selectedYearly ? true : false}>
								<span className="font-semibold">Monthly</span>
							</Button>
							<Button
								onClick={() => {
									setSelectedYearly(true);
									setSelectedMonthly(false);
								}}
								outline={
									selectedYearly ? false : selectedMonthly ? true : true
								}>
								<span className="font-semibold">Yearly</span>
							</Button>
						</div>
					</HeadingText>
				</div>
				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
					{pricingCardList.map((price, index) => {
						return (
							<PricingCard
								key={index}
								iconSrc={price.logo}
								iconAltText={`pricing-reference-logo-${index}`}
								title={price.title}
								subTitle={price.subHeading}
								pricingCardList={price.fetures}
								description={price.text}
								price={selectedYearly ? price.yearlyPrice : price.price}
								billing={price.offerDuration}
								navigateToGetStarted="/"
								cardSelected={index === cardSelected ? true : false}
								handleCardClick={() => handlePriceCardClick(index)}
							/>
						);
					})}
				</div>
			</motion.section>
			<motion.section
				className="grid lg:grid-cols-2 gap-12 bg-tertiary rounded-2xl p-8 md:p-16"
				{...whileInviewFadeSlide}>
				<div>
					<HeadingText
						customBackground={true}
						placeLeft={true}
						title="Frequestly Asked Questions"
						description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt."
					/>
				</div>
				<div className="flex flex-col gap-4">
					{faqCardData.map((faq, index) => {
						return (
							<FaqCard
								customBackground={true}
								key={index}
								question={faq.question}
								answer={faq.answer}
							/>
						);
					})}
				</div>
			</motion.section>
			<ReadyToGrow />
		</motion.main>
	);
};

export default Pricing;
