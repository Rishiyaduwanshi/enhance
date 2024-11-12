"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type Props = {};

const Intro = (props: Props) => {
	return (
		<motion.div
			id="loading"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ type: "spring", stiffness: 10, delay: 0.2 }}
			className="grid place-items-center h-screen relative">
			<div className="relative flex items-center flex-col">
				<h1 className="text-h1 leading-h1 font-semibold tracking-widest">
					Enhance
				</h1>
			</div>
		</motion.div>
	);
};

export default Intro;
