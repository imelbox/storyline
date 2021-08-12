import React from 'react';
import { useRouter } from 'next/router';
import { Select } from '@chakra-ui/select';

export default function ChangeLanguage() {
	// router hook
	const router = useRouter();

	const changeLanguageHandler = React.useCallback(
		(event) => {
			router.push(`/`, '/', { locale: event.target.value });
		},
		[router]
	);

	return (
		<div>
			<h1>Change Language: </h1>
			<Select value={router.locale} onChange={changeLanguageHandler}>
				<option value="en">English</option>
				<option value="ar">العربية</option>
			</Select>
		</div>
	);
}
