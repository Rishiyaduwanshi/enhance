"use client";
import React from "react";
import HeadingText from "../components/HeadingText/HeadingText";
import ImageCard from "../components/ImageCard";
import Images from "../constants/Images";
import Image from "next/image";
import { blogPostsData } from "../constants";
import ReadyToGrow from "../components/ReadyToGrow";
import Link from "next/link";
import { motion } from "framer-motion";
import {
	animatingFadeInout,
	whileInviewFadeSlide,
} from "../constants/FramerAnimations";

type Props = {};

const Blog = (props: Props) => {
	return (
		<motion.main
			className={`flex min-h-screen flex-col gap-y-32 items-center justify-center p-8 sm:p-14 lg:p-24`}
			{...animatingFadeInout}>
			<motion.section
				className="flex flex-col gap-6 lg:gap-12"
				{...whileInviewFadeSlide}>
				<HeadingText
					mainHeading="Read our latest blogs"
					description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor."
				/>
				<Link href="/blog/0">
					<div className="grid lg:grid-cols-2 gap-8 lg:gap-12 rounded-3xl border-[1px] border-tertiary p-6 sm:p-8 lg:p-16">
						<HeadingText
							placeLeft={true}
							caption="Trending Post"
							title={blogPostsData[0].title}
							description={blogPostsData[0].text}>
							<p className="font-medium text-paragraph leading-paragraph flex gap-4">
								{blogPostsData[0].author}
							</p>
						</HeadingText>
						<div className="relative lg:mt-auto">
							<Image
								src={blogPostsData[0].logo}
								alt="latest-blog-pic"
								width={600}
								height={600}
								className="rounded-xl"
							/>
						</div>
					</div>
				</Link>
			</motion.section>
			<motion.section className="flex flex-col gap-8" {...whileInviewFadeSlide}>
				<HeadingText title="All posts" />
				<div className="grid grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-6 md:gap-y-16">
					{blogPostsData.map((card, index) => {
						return (
							<Link key={index} href={`blog/${index}`}>
								<ImageCard
									imageUrl={card.logo}
									title={card.title}
									text={card.text}
									author={card.author}
									altText={`blog-posts-card-pic-${index}`}
								/>
							</Link>
						);
					})}
				</div>
			</motion.section>
			<ReadyToGrow />
		</motion.main>
	);
};

export default Blog;
