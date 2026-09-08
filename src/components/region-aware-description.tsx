"use client";

import { useRegionVariant } from "@/components/region-provider";
import { cn } from "@/lib/utils";

interface RegionAwareDescriptionProps {
	className?: string;
	europeDescription: string;
	americasDescription: string;
}

export default function RegionAwareDescription({
	className,
	europeDescription,
	americasDescription,
}: RegionAwareDescriptionProps) {
	const { region } = useRegionVariant();
	const description = region === "americas" ? americasDescription : europeDescription;
	const descriptionParts = description.split(/(FedNow)/g);

	return (
		<p className={cn(className)}>
			{descriptionParts.map((part, index) =>
				part === "FedNow" ? (
					<strong key={index} className="text-black dark:text-white">
						{part}
					</strong>
				) : (
					part
				),
			)}
		</p>
	);
}
