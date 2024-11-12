"use client";
import React, { ChangeEvent } from "react";
import HeadingText from "../HeadingText/HeadingText";
import CustomTextField from "../TextField";
import Button from "../Button/Button";

type DropType = {
	customBackground: boolean;
};

const DropMessageForm = ({ customBackground }: DropType) => {
	const [messageDetails, setMessageDetails] = React.useState({
		fullname: "",
		companyname: "",
		workEmail: "",
		subject: "",
		message: "",
	});

	const handleChange = (
		event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setMessageDetails({
			...messageDetails,
			[event?.target?.name]: event?.target?.value,
		});
	};

	const handleSubmit = (event: any) => {
		event.preventDefault();

		// you can post details to the server below

		// for demo stroing to local storage can remove it

		if (window !== undefined) {
			localStorage.setItem("User-Details", JSON.stringify(messageDetails));
		}
	};
	return (
		<div>
			<div className="pb-4">
				<HeadingText
					placeLeft
					customBackground={customBackground ? customBackground : false}
					title="Drop us a message"
					description="We will get back to you as soon as possible."
				/>
			</div>
			<form onSubmit={handleSubmit}>
				<div className="flex flex-col md:flex-row gap-4 pb-4">
					<CustomTextField
						customBackground={true}
						placeholder="Full name"
						title="Full Name"
						value={messageDetails.fullname}
						name="fullname"
						onChange={handleChange}
					/>
					<CustomTextField
						customBackground={true}
						placeholder="Company Name"
						title="Company Name"
						value={messageDetails.companyname}
						name="companyname"
						onChange={handleChange}
					/>
				</div>
				<div className="pb-4">
					<CustomTextField
						customBackground={true}
						placeholder="Work email"
						title="Work email"
						value={messageDetails.workEmail}
						name="workEmail"
						onChange={handleChange}
					/>
				</div>
				<div className="pb-4">
					<CustomTextField
						customBackground={true}
						placeholder="Subject"
						title="Subject"
						value={messageDetails.subject}
						name="subject"
						onChange={handleChange}
					/>
				</div>
				<div className="pb-4">
					<textarea
						className={`bg-white ${
							customBackground && "text-primary"
						} outline-none rounded-lg py-5 px-6 w-full`}
						placeholder="Message"
						title="Message"
						value={messageDetails.message}
						name="message"
						onChange={handleChange}	
					/>
				</div>
				<div className="w-full">
					<Button>Send</Button>
				</div>
			</form>
		</div>
	);
};

export default DropMessageForm;
