import React from 'react';
import styled from 'styled-components';
import Button from './Button';

const Header = styled.header`
	width: 100%;
	display: flex;
	justify-content: center;
`;

type CounterHeaderProps = {
	onCreate: () => void;
	onRemove: () => void;
};
export default function CounterHeader({
	onCreate,
	onRemove,
}: CounterHeaderProps) {
	return (
		<Header>
			<Button color="green" onClick={onCreate}>
				생성
			</Button>
			<Button color="red" onClick={onRemove}>
				삭제
			</Button>
		</Header>
	);
}
