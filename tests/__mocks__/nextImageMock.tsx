import * as React from "react";

type ImageProps = {
	src?: string;
	alt?: string;
	className?: string;
	"data-testid"?: string;
};

const NextImageMock = React.forwardRef<HTMLImageElement, ImageProps>(
	(props, ref) => {
		const { src, alt, className } = props;

		return (
			// eslint-disable-next-line @next/next/no-img-element
			<img
				ref={ref}
				src={src}
				alt={alt}
				className={className}
				data-testid="logo"
			/>
		);
	},
);

NextImageMock.displayName = "NextImageMock";

export default NextImageMock;
