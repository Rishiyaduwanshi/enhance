import React from "react";
import IconText from "../IconText/IconText";
import Images from "@/app/constants/Images";
import Image from "next/image";
import Button from "../Button/Button";
import Link from "next/link";

type Props = {
	title: string;
	subTitle: string;
	pricingCardList: any[];
	description: string;
	price: string;
	billing: string;
	iconSrc: string;
	iconAltText: string;
	navigateToGetStarted: string;
	cardSelected?: boolean;
	handleCardClick?: () => void;
};

const PricingCard = (props: Props) => {
	const {
		title,
		subTitle,
		pricingCardList,
		description,
		price,
		billing,
		iconSrc,
		iconAltText,
		navigateToGetStarted,
		cardSelected,
		handleCardClick,
	} = props;
	return (
		<div
			onClick={handleCardClick}
			className={`p-6 sm:p-12 bg-white border-[1px] ${
				cardSelected ? "bg-gradient-blue" : "border-primary/10"
			} w-full min-h-[714px] rounded-3xl cursor-pointer`}>
			<div className="flex flex-col gap-8">
				<div className="">
					<IconText
						customBackground={true}
						iconAltText={iconAltText}
						title={title}
						description={subTitle}
						iconSrc={iconSrc}
					/>
				</div>
				<div className="h-[1px] bg-[#D8D8D8] w-full"></div>
				{pricingCardList?.map((price, index) => {
					return (
						<>
							<p className="flex gap-2 items-center font-bold">
								<Image
									src={Images?.done}
									width={24}
									height={24}
									alt="done-icon"
									className="cursor-pointer"
								/>
								<span className="dark:text-primary">{price?.feature}</span>
							</p>
						</>
					);
				})}

				<p className="text-center dark:text-primary">{description}</p>
				<div className="pt-6 flex flex-col gap-6 w-full max-w-[140px] m-auto">
					<div className="text-center">
						<h3 className="text-h3 leading-h3 font-bold dark:text-primary">
							{price}
						</h3>
						<p className="dark:text-primary">{billing}</p>
					</div>
					<Link href={navigateToGetStarted}>
						<Button>Get Started</Button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default PricingCard;
