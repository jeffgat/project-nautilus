import { create } from 'zustand';

type BaseOperationType = (input: string) => void;

interface CalculatorState {
    value: string;
    updateValue: (value: string) => void;
    add: BaseOperationType;
    subtract: BaseOperationType;
    multiply: BaseOperationType;
    divide: BaseOperationType;
    clear: () => void;
}

export const useCalculatorStore = create<CalculatorState>((set) => ({
    value: '0',
    updateValue: (value) => set({ value: value }),
    add: (input) =>
        set((state) => ({
            value: (parseFloat(state.value) + parseFloat(input)).toString()
        })),
    subtract: (input) =>
        set((state) => ({
            value: (parseFloat(state.value) - parseFloat(input)).toString()
        })),
    multiply: (input) =>
        set((state) => ({
            value: (parseFloat(state.value) * parseFloat(input)).toString()
        })),
    divide: (input) =>
        set((state) => ({
            value: (parseFloat(state.value) / parseFloat(input)).toString()
        })),
    clear: () => set({ value: '0' })
}));
