'use client';
import { useCalculatorStore } from '../stores/calculator';
import { buttons } from './_buttons';
import { Button } from './components';

export default function Home() {
    const [value, updateValue] = useCalculatorStore((state) => [
        state.value,
        state.updateValue
    ]);

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

            <div className="mt-8 mx-auto w-full max-w-md">
                <div className="bg-neutral-850 p-8 shadow rounded-lg">
                    <div className="grid grid-cols-4 gap-2">
                        <div className="flex items-center justify-end rounded-md col-span-4 h-16 px-4 mb-4 bg-neutral-700 text-white text-xl">
                            {value}
                        </div>
                        {buttons.map((button) => (
                            <Button value={button.value} key={button.value} />
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}
