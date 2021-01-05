import { CounterInfo } from "../components/CounterList";

const CREATE = 'counterList/CREATE' as const;
const REMOVE = 'counterList/REMOVE' as const;
const INCREASE = 'counterList/INCREASE' as const;
const DECREASE = 'counterList/DECREASE' as const;

let id: number = 0;
export const onCreate = () => ({
    type: CREATE
});
export const onRemove = () => ({
    type: REMOVE,
});
export const onIncrease = (id: number) => ({
    type: INCREASE,
    id: id
});
export const onDecrease = (id: number) => ({
    type: DECREASE,
    id: id
});

type CounterListAction =
    | ReturnType<typeof onCreate>
    | ReturnType<typeof onRemove>
    | ReturnType<typeof onIncrease>
    | ReturnType<typeof onDecrease>

type CounterListState = {
    counters: CounterInfo[];
}

const initalState: CounterListState = {
    counters: new Array<CounterInfo>(0)
}

const counterListReducer = (state: CounterListState = initalState, action: CounterListAction) => {
    let newState: CounterListState;
    switch (action.type) {
        case CREATE:
            newState = {
                ...state,
                counters: [

                    ...state.counters,
                    {
                        count: 0,
                        id: id++
                    },
                ]
            }
            return newState;
        case REMOVE:
            newState = {
                ...state,
                counters: state.counters.slice(0, state.counters.length - 1)
            }
            return newState;
        case INCREASE:
            newState = {
                ...state,
                counters: state.counters.map((counter) => (counter.id === action.id) ? { ...counter, count: counter.count + 1 } : counter)
            }
            return newState;
        case DECREASE:
            newState = {
                ...state,
                counters: state.counters.map((counter) => (counter.id === action.id) ? { ...counter, count: counter.count - 1 } : counter)
            }
            return newState;

        default:
            return state
    }

};

export default counterListReducer;