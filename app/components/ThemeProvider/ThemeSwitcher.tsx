"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { FiMoon } from "react-icons/fi";
import { BsSun } from "react-icons/bs";

export const ThemeSwitcher = () => {
	const [mounted, setMounted] = useState(false);
	const { theme, setTheme } = useTheme();

	useEffect(() => {
		setMounted(true);
		setTheme("light");
	}, []);

	if (!mounted) {
		return null;
	}

	return (
		<div>
			{theme === "dark" ? (
				<BsSun size={25} cursor="pointer" onClick={() => setTheme("light")} />
			) : (
				<FiMoon
					size={25}
					color="black"
					cursor="pointer"
					onClick={() => setTheme("dark")}
				/>
			)}
		</div>
	);
};
