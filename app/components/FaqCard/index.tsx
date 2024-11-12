"use client";
import React, { useState, useRef } from "react";
import { GrFormSubtract } from "react-icons/gr";
import { IoIosAdd } from "react-icons/io";

type Props = {
	question: string;
	answer: string;
	customBackground: boolean;
};

const FaqCard = (props: Props) => {
	const { question, answer, customBackground } = props;
	const [openAnswer, setOpenAnswer] = useState(false);
	const answerRef = useRef<HTMLDivElement>(null);

	const toggleAnswer = () => {
		setOpenAnswer(!openAnswer);
	};

	return (
		<div
			className={
				openAnswer
					? `cursor-pointer bg-white rounded-3xl p-6 sm:p-10 w-full h-auto`
					: `cursor-pointer bg-white rounded-3xl p-6 sm:p-10 w-full h-auto sm:h-32`
			}
			onClick={toggleAnswer}>
			<div className=" mb-6">
				<div className="flex justify-between items-center">
					<div className="text-paragraphLarge leading-paragraphLarge font-bold">
						<p className={`${customBackground && "text-primary"}`}>
							{question}
						</p>
					</div>
					<div className="transform 0.3s ease-in-out">
						{openAnswer ? (
							<GrFormSubtract
								size="20px"
								className={`${customBackground && "text-primary"}`}
							/>
						) : (
							<IoIosAdd
								size="20px"
								className={`${customBackground && "text-primary"}`}
							/>
						)}
					</div>
				</div>
				{openAnswer && (
					<div
						className="trasnfrom transition-all ease-in-out delay-75"
						ref={answerRef}>
						<div className="pt-6">
							<p className={`${customBackground && "text-primary text-lg"}`}>
								{answer}
							</p>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default FaqCard;
