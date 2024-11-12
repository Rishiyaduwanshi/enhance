const fadeInOut = {
	initial: { opacity: 0 },
	animate: { opacity: 1 },
	transition: { duration: 1 },
	once: { once: true },
};
export const animatingFadeInout = {
	initial: fadeInOut.initial,
	animate: fadeInOut.animate,
	transition: fadeInOut.transition,
};
export const whileInviewFadeInout = {
	initial: fadeInOut.initial,
	whileInView: fadeInOut.animate,
	transition: fadeInOut.transition,
	viewport: fadeInOut.once,
};

const scaleInOut = {
	initial: { scale: 0.9 },
	animate: { scale: 1 },
	transition: { duration: 0.8 },
	once: { once: true },
};

export const animatingScaleInOut = {
	initial: scaleInOut.initial,
	animate: scaleInOut.animate,
	transition: scaleInOut.transition,
	viewport: scaleInOut.once,
};
export const whileInviewScaleInOut = {
	initial: scaleInOut.initial,
	whileInView: scaleInOut.animate,
	transition: scaleInOut.transition,
	viewport: scaleInOut.once,
};

const slideInOut = {
	initial: { x: -100, opacity: 0 },
	animate: { x: 0, opacity: 1 },
	transition: { duration: 0.8 },
	once: { once: true },
};

export const animatingSlideInOut = {
	initial: slideInOut.initial,
	animate: slideInOut.animate,
	transition: slideInOut.transition,
};
export const whileInviewSlideInOut = {
	initial: slideInOut.initial,
	whileInView: slideInOut.animate,
	transition: slideInOut.transition,
	viewport: slideInOut.once,
};

const rotate = {
	initial: { rotate: 0 },
	animate: { rotate: 360 },
	transition: { duration: 0.6 },
	once: { once: true },
};

export const animatingrotate = {
	initial: rotate.initial,
	animate: rotate.animate,
	transition: rotate.transition,
};
export const whileInviewrotate = {
	initial: rotate.initial,
	whileInView: rotate.animate,
	transition: rotate.transition,
	viewport: rotate.once,
};

const shake = {
	initial: { x: 0 },
	animate: { x: [-10, 10, -10, 10, 0], transition: { duration: 0.5 } },
	once: { once: true },
};

export const animatingshake = {
	initial: shake.initial,
	animate: shake.animate,
};
export const whileInviewshake = {
	initial: shake.initial,
	whileInView: shake.animate,
	viewport: shake.once,
};

const flip = {
	initial: { scaleX: 0 },
	animate: { scaleX: 1 },
	transition: { duration: 0.6 },
	once: { once: true },
};

export const animatingFlip = {
	initial: flip.initial,
	animate: flip.animate,
	transition: flip.transition,
};
export const whileInviewFlip = {
	initial: flip.initial,
	whileInView: flip.animate,
	transition: flip.transition,
	viewport: flip.once,
};

const colorChange = {
	initial: { backgroundColor: "#ffffff" },
	animate: { backgroundColor: "#ffcc00" },
	transition: { duration: 0.6 },
	once: { once: true },
};

export const animatingColorChange = {
	initial: colorChange.initial,
	animate: colorChange.animate,
	transition: colorChange.transition,
};
export const whileInviewColorChange = {
	initial: colorChange.initial,
	whileInView: colorChange.animate,
	transition: colorChange.transition,
	viewport: colorChange.once,
};

const stagger = {
	initial: { opacity: 0, x: -50 },
	animate: {
		opacity: 1,
		x: 0,
		transition: {
			staggerChildren: 0.1,
		},
	},
	once: { once: true },
};

export const animatingStagger = {
	initial: stagger.initial,
	animate: stagger.animate,
};
export const whileInviewStagger = {
	initial: stagger.initial,
	whileInView: stagger.animate,
	viewport: stagger.once,
};

const bounce = {
	initial: { y: -200 },
	animate: { y: 0, transition: { type: "spring", stiffness: 100 } },
	once: { once: true },
};

export const animatingBounce = {
	initial: bounce.initial,
	animate: bounce.animate,
};
export const whileInviewBounce = {
	initial: bounce.initial,
	whileInView: bounce.animate,
	viewport: bounce.once,
};

const fadeSlide = {
	initial: { opacity: 0, y: 50 },
	animate: { opacity: 1, y: 0 },
	transition: { duration: 0.8 },
	once: { once: true },
};

export const animatingFadeSlide = {
	initial: fadeSlide.initial,
	animate: fadeSlide.animate,
	transition: fadeSlide.transition,
};
export const whileInviewFadeSlide = {
	initial: fadeSlide.initial,
	whileInView: fadeSlide.animate,
	transition: fadeSlide.transition,
	viewport: fadeSlide.once,
};
