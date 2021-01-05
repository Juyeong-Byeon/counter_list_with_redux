import React from 'react';
import CounterFrame, { CounterProps } from '../components/CounterFrame';
import { connect } from 'react-redux';
import {
	onCreate,
	onRemove,
	onIncrease,
	onDecrease,
} from '../modules/counterList';
import { GlobalStates } from '../modules';
function CounterContainer({
	counters,
	onCreate,
	onRemove,
	onIncrease,
	onDecrease,
}: CounterProps) {
	console.log(counters);
	return (
		<CounterFrame
			counters={counters}
			onCreate={onCreate}
			onRemove={onRemove}
			onIncrease={onIncrease}
			onDecrease={onDecrease}
		/>
	);
}

const mapStateToProps = (state: GlobalStates) => ({
	counters: state.counterListReducer.counters,
});

export default connect(mapStateToProps, {
	onCreate,
	onRemove,
	onIncrease,
	onDecrease,
})(CounterContainer);
