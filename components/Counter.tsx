import { useState } from 'react';
import { IconButton } from '@chakra-ui/button';
import { HStack } from '@chakra-ui/layout';
import {
	NumberDecrementStepper,
	NumberIncrementStepper,
	NumberInput,
	NumberInputField,
	NumberInputStepper
} from '@chakra-ui/number-input';
import { useTranslation } from 'next-i18next';

import useStore from '../store/index';
import { mdiMinus, mdiPlus } from '@mdi/js';
import Icon from './Icon';

export default function Counter() {
	const { t } = useTranslation();

	const { counter, inc, dec } = useStore();

	const [counterValue, setCounterValue] = useState(0);
	const handleChange = (value) => setCounterValue(parseFloat(value));

	return (
		<div className="p-4 text-lg bg-green-50 text-blue-900">
			<HStack rtl="true">
				<p className="block min-w-[30%] flex-1">
					{t('counter')}: {counter}
				</p>
				<IconButton
					variant="outline"
					colorScheme="blue"
					aria-label="Increment the counter"
					icon={<Icon path={mdiPlus} />}
					onClick={() => inc(counterValue)}
				/>

				<NumberInput
					maxW="84px"
					mr="2rem"
					value={counterValue}
					onChange={handleChange}
				>
					<NumberInputField />
					<NumberInputStepper>
						<NumberIncrementStepper />
						<NumberDecrementStepper />
					</NumberInputStepper>
				</NumberInput>
				<IconButton
					variant="outline"
					colorScheme="orange"
					aria-label="Increment the counter"
					icon={<Icon path={mdiMinus} />}
					onClick={() => dec(counterValue)}
				/>
			</HStack>
		</div>
	);
}
