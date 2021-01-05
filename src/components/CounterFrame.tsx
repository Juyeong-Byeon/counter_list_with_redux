import React from 'react';
import CounterList, { CounterInfo } from './CounterList';
import CounterHeader from './CounterHeader';

export type CounterProps = {
	counters: CounterInfo[];
	onCreate: () => void;
	onRemove: () => void;
	onIncrease: (id: number) => void;
	onDecrease: (id: number) => void;
};

export default function CounterFrame({
	counters,
	onCreate,
	onRemove,
	onIncrease,
	onDecrease,
}: CounterProps) {
	return (
		<div>
			<CounterHeader onCreate={onCreate} onRemove={onRemove} />
			<CounterList
				counters={counters}
				onIncrease={onIncrease}
				onDecrease={onDecrease}
			/>
		</div>
	);
}
