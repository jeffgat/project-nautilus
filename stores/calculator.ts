import { create } from 'zustand';

type BaseOperationType = (input: number) => void;

interface CalculatorState {
    value: number;
    updateValue: (value: number) => void;
    add: BaseOperationType;
    subtract: BaseOperationType;
    multiply: BaseOperationType;
    divide: BaseOperationType;
    clear: () => void;
}

export const useCalculatorStore = create<CalculatorState>((set) => ({
    value: 0,
    updateValue: (value) => set(() => ({ value })),
    add: (input) => set((state) => ({ value: state.value + input })),
    subtract: (input) => set((state) => ({ value: state.value - input })),
    multiply: (input) => set((state) => ({ value: state.value * input })),
    divide: (input) => set((state) => ({ value: state.value / input })),
    clear: () => set({ value: 0 }),
}));
