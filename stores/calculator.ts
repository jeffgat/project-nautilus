import { create } from 'zustand';

type BaseOperationType = (input: number) => void;

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
    updateValue: (value) => set(() => ({ value })),
    add: (input) =>
        set((state) => ({
            value: (parseFloat(state.value) + input).toString()
        })),
    subtract: (input) =>
        set((state) => ({
            value: (parseFloat(state.value) - input).toString()
        })),
    multiply: (input) =>
        set((state) => ({
            value: (parseFloat(state.value) * input).toString()
        })),
    divide: (input) =>
        set((state) => ({
            value: (parseFloat(state.value) / input).toString()
        })),
    clear: () => set({ value: '0' })
}));
