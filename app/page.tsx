'use client';
import { useCalculatorStore } from '../stores/calculator';
import { CalculatorButtons, CalculatorLayout } from './components';

const MAX_DIGITS_TO_DISPLAY = 19;

export default function Home() {
    const value = useCalculatorStore((state) => state.value);

    const convertToScientificNotation = (value: string) => {
        if (value.length > MAX_DIGITS_TO_DISPLAY) {
            return parseFloat(value).toExponential().toString();
        } else {
            return value;
        }
    };

    return (
        <main className="flex flex-1 flex-col justify-center min-h-screen">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <h2 className="mt-2 text-center text-3xl font-bold tracking-tight text-neutral-50">
                    Project Nautilus
                </h2>
                <p className="mt-2 text-center text-base text-neutral-200">
                    A simple react calculator for your everyday needs.
                </p>
            </div>

            <CalculatorLayout>
                <div className="flex items-center justify-end rounded-md col-span-4 h-16 px-4 mb-4 bg-neutral-700 text-white text-xl">
                    {convertToScientificNotation(value)}
                </div>
                <CalculatorButtons />
            </CalculatorLayout>
        </main>
    );
}
