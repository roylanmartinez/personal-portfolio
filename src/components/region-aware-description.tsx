"use client";

import BlurFade from "@/components/magicui/blur-fade";
import { useRegionVariant } from "@/components/region-provider";
import { cn } from "@/lib/utils";

interface RegionAwareDescriptionProps {
	className?: string;
	delay?: number;
	europeDescription: string;
	americasDescription: string;
}

export default function RegionAwareDescription({
	className,
	delay,
	europeDescription,
	americasDescription,
}: RegionAwareDescriptionProps) {
	const { region } = useRegionVariant();
	const description = region === "americas" ? americasDescription : europeDescription;

	return (
		<BlurFade delay={delay}>
			<p className={cn(className)}>{description}</p>
		</BlurFade>
	);
}
