import React from "react";
import Image, { StaticImageData } from "next/image";
import styles from '@/lib/styles/backgroundImage.module.scss'


interface BackgroundImage {
	backgroundImageSrc: StaticImageData
}

export const BackgroundImage: React.FC<BackgroundImage> = (props) => {
	const { backgroundImageSrc } = props;

	return (
		<div className={styles.root}>
			<div className={styles.root__cover} />
			<Image
				src={backgroundImageSrc}
				priority={true}
				alt="3"
				className={styles.root__image}
			/>
		</div>
	)
}