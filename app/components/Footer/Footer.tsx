"use client";
import { footerLists } from "@/app/constants";
import React from "react";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { CiLinkedin } from "react-icons/ci";
import { motion } from "framer-motion";
import {
	whileInviewFadeInout,
	whileInviewFadeSlide,
} from "@/app/constants/FramerAnimations";
import Link from "next/link";

type Props = {};

const Footer = (props: Props) => {
	return (
		<motion.footer
			className="bg-primary p-20 px-16 md:px-32 lg:px-40 md:py-32 z-10"
			{...whileInviewFadeInout}>
			<motion.div
				className="grid xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center sm:place-items-baseline gap-6"
				{...whileInviewFadeSlide}>
				{footerLists.map((data, index) => {
					return (
						<div
							key={index}
							className="flex flex-col gap-y-4 text-center sm:text-left">
							<p className="text-paragraphLarge text-white">{data?.title}</p>
							<p className="text-white/60 flex flex-col gap-y-4">
								{data?.list.map((text, i) => {
									return <span key={i}>{text}</span>;
								})}
							</p>
						</div>
					);
				})}
				<div className="text-center sm:text-left">
					<Link href="/">
						<h2 className={`text-h4 leading-h4 text-white pb-9`}>Enhance</h2>
					</Link>
					<p className="text-white text-paragraphLarge leading-paragraphLarge pb-4">
						Subscribe to our Newsletter
					</p>
				</div>
			</motion.div>
			<motion.div
				className="grid lg:grid-cols-3 gap-4 pt-14 place-items-center"
				{...whileInviewFadeSlide}>
				<div className="h-[1px] bg-white/40 w-full"></div>
				<div className="flex flex-col sm:flex-row gap-4">
					<p className="text-white/40 text-xs">© Copyright Finsweet 2022</p>
					<div className="flex  sm:flex-row gap-4">
						<BiLogoFacebookCircle className="text-xl text-white/40" />
						<AiFillTwitterCircle className="text-xl text-white/40" />
						<AiOutlineInstagram className="text-xl text-white/40" />
						<CiLinkedin className="text-xl text-white/40" />
					</div>
				</div>
				<div className="h-[1px] bg-white/40 w-full"></div>
			</motion.div>
		</motion.footer>
	);
};

export default Footer;
