import { useCallback, useState } from 'react';
import { Button } from '@chakra-ui/button';
import { HStack } from '@chakra-ui/layout';
import {
	NumberDecrementStepper,
	NumberIncrementStepper,
	NumberInput,
	NumberInputField,
	NumberInputStepper
} from '@chakra-ui/number-input';

import useStore from '../store/index';

export default function Counter() {
	const { counter, inc, dec } = useStore();

	const [counterValue, setCounterValue] = useState(0);
	const handleChange = (value) => setCounterValue(parseFloat(value));

	return (
		<div className="p-4 text-lg bg-green-50 text-blue-900">
			<HStack>
				<p className="block min-w-[30%] flex-1">Counter: {counter}</p>
				<Button onClick={() => inc(counterValue)}>+</Button>
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
				<Button onClick={() => dec(counterValue)}>-</Button>
			</HStack>
		</div>
	);
}
