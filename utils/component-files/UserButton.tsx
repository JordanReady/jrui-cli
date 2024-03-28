'use client';
import React from 'react';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuSeparator,
	DropdownMenuItem,
	DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import Link from 'next/link';
import { signIn, useSession, signOut } from 'next-auth/react';
import UserAvatar from './UserAvatar';
import { CircleUserRound } from 'lucide-react';

interface UserButtonProps {
	size?: number;
	className?: string;
}

function UserButton({ size = 50, className }: UserButtonProps) {
	const { data: session } = useSession();
	const userName = session?.user.name;

	return (
		<DropdownMenu>
			{session ? (
				<DropdownMenuTrigger>
					<UserAvatar size={size} className={className} />
				</DropdownMenuTrigger>
			) : (
				// User is not signed in, render the Open button
				<button onClick={() => signIn()}>
					<CircleUserRound
						size={size}
						className={`${className} rounded-full`}
						strokeWidth={1}
					/>
				</button>
			)}

			{session && (
				<DropdownMenuContent>
					<DropdownMenuItem className="text-primary font-semibold">
						{userName}
					</DropdownMenuItem>
					<DropdownMenuSeparator />
					<Link href="#">
						<DropdownMenuItem>Profile</DropdownMenuItem>
					</Link>
					<Link href={'#'}>
						<DropdownMenuItem>Billing</DropdownMenuItem>
					</Link>
					<Link href={'#'}>
						<DropdownMenuItem>Settings</DropdownMenuItem>
					</Link>
					<DropdownMenuSeparator />
					<DropdownMenuItem
						className={'text-primary hover:cursor-pointer'}
						onClick={() => signOut()}
					>
						Log out
					</DropdownMenuItem>
				</DropdownMenuContent>
			)}
		</DropdownMenu>
	);
}

export default UserButton;
