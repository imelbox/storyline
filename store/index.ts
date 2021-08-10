import create from "zustand";


const initialState = {
	counter: 0,

};


export type StoreState = typeof initialState & {
	inc(n: number): void;
	dec(n: number): void;
};

const useStore = create<StoreState>((setState) => {
	return {
		...initialState,
		inc: (n = 1) => setState(state => ({
			counter: state.counter + n,
		})),
		dec: (n = 1) => setState(state => ({
			counter: state.counter - n,
		})),
	}
});


export default useStore;
