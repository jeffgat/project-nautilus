'use client';
import { useCalculatorStore } from '../stores/calculator';
import { Button } from './components';

export default function Home() {
    const [value, updateValue] = useCalculatorStore((state) => [
        state.value,
        state.updateValue,
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

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-neutral-850 py-8 px-4 shadow sm:rounded-lg sm:px-10">
                    <div className="grid p-2">
                        <div className="grid grid-cols-4 gap-2">
                            <div className="flex items-center justify-end rounded-md col-span-4 h-16 px-4 mb-4 bg-neutral-700 text-white text-xl">
                                {value}
                            </div>
                            <Button symbol="." />
                            <Button symbol="0" />
                            <Button symbol="1" />
                            <Button symbol="2" />
                            <Button symbol="3" />
                            <Button symbol="4" />
                            <Button symbol="5" />
                            <Button symbol="6" />
                            <Button symbol="7" />
                            <Button symbol="8" />
                            <Button symbol="9" />
                            <Button symbol="+" />
                            <Button symbol="-" />
                            <Button symbol="*" />
                            <Button symbol="/" />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
