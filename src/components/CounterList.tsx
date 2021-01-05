import React from 'react';
import styled from 'styled-components';

const CounterItem = styled.button`
	width: 100px;
	height: 100px;
	border-radius: 60px;
	border-style: none;
	margin: 2rem;
	background-color: ${(props) => props.color};
	cursor: pointer;
	&:focus {
		outline: 0;
	}
	&:active {
		color: white;
	}
`;
const ListDiv = styled.div`
	display: flex;
	justify-content: space-around;
	flex-flow: row wrap;
`;

export type CounterInfo = {
	count: number;
	id: number;
};
export type CounterListProps = {
	counters: CounterInfo[];
	onIncrease: (id: number) => void;
	onDecrease: (id: number) => void;
};

export default function CounterList({
	counters,
	onIncrease,
	onDecrease,
}: CounterListProps) {
	return (
		<ListDiv>
			{counters &&
				counters.map((counter) => {
					return (
						<CounterItem
							key={counter.id + ':counter'}
							onClick={() => onIncrease(counter.id)}
							onContextMenu={() => onDecrease(counter.id)}
							color={`rgba(
								${counter.count * 10},
								${counter.count * 20},
								${counter.count * 30},
								1)`}
						>
							{counter.count}
						</CounterItem>
					);
				})}
		</ListDiv>
	);
}
