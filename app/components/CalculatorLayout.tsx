import React from 'react';

type CalculatorLayoutProps = {
    children: React.ReactNode;
};

const CalculatorLayout = ({ children }: CalculatorLayoutProps) => {
    return (
        <div className="mt-8 mx-auto w-full max-w-md">
            <div className="bg-neutral-850 p-8 shadow rounded-lg">
                <div className="grid grid-cols-4 gap-2">{children}</div>
            </div>
        </div>
    );
};

export default CalculatorLayout;
