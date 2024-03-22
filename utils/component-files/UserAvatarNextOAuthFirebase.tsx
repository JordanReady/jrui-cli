'use client';
import React from 'react';
import Image from 'next/image';
import { useSession } from 'next-auth/react';

interface UserAvatarProps {
	size?: number;
	className?: string;
	alt?: string;
}

function UserAvatar({
	size = 50,
	className,
	alt = 'User profile image'
}: UserAvatarProps) {
	const { data: session } = useSession();
	const imgUrl = session?.user?.image;

	return (
		<>
			{imgUrl && (
				<Image
					alt={alt}
					src={imgUrl}
					width={size}
					height={size}
					className={`${className} shadow-sm border rounded-full`}
					loading="lazy"
				/>
			)}
		</>
	);
}

export default UserAvatar;
