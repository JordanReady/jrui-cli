import React from 'react';
import Image, { StaticImageData } from 'next/image';

interface UserAvatarProps {
	size?: number;
	className?: string;
	alt?: string;
	img: string | StaticImageData;
}

function UserAvatar({
	size = 50,
	className,
	alt = 'User profile image',
	img
}: UserAvatarProps) {
	return (
		<Image
			alt={alt}
			src={img}
			width={size}
			height={size}
			className={`${className} shadow-sm border rounded-full`}
			loading="lazy"
		/>
	);
}

export default UserAvatar;
