"use client";

import BlurFade from "@/components/magicui/blur-fade";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

interface RegionAwareDescriptionProps {
	className?: string;
	delay?: number;
	europeDescription: string;
	americasDescription: string;
}

function isLikelyAmericasUser(): boolean {
	const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
	if (timeZone?.startsWith("America/")) {
		return true;
	}

	const locale = typeof navigator !== "undefined" ? navigator.language : "";
	return /-(US|CA|MX|BR|AR|CL|CO|PE|UY|PA|CR|GT|HN|NI|SV|DO|PR)\b/i.test(locale);
}

export default function RegionAwareDescription({
	className,
	delay,
	europeDescription,
	americasDescription,
}: RegionAwareDescriptionProps) {
	const [description, setDescription] = useState(europeDescription);

	useEffect(() => {
		if (isLikelyAmericasUser()) {
			setDescription(americasDescription);
		}
	}, [americasDescription]);

	return (
		<BlurFade delay={delay}>
			<p className={cn(className)}>{description}</p>
		</BlurFade>
	);
}
