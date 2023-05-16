import React from 'react';
import { buttons } from '../_buttons';
import Button from '../common/Button';
import { useCalculatorStore } from '../../stores/calculator';

const CalculatorButtons = () => {
    const [value, updateValue, clear] = useCalculatorStore((state) => [
        state.value,
        state.updateValue,
        state.clear
    ]);

    console.log('value', value);
    const handleUpdateValue = (newValue: string) => {
        const IS_DECIMAL = newValue === '.';

        if (IS_DECIMAL && value.includes('.')) {
            return;
        }

        if (value === '0') {
            IS_DECIMAL && updateValue(value.concat(newValue));
            updateValue(newValue);
        } else {
            updateValue(value.concat(newValue));
        }

        return;
    };

    return (
        <>
            {buttons.map((button) => {
                switch (button.type) {
                    case 'number':
                        return (
                            <Button
                                value={button.value}
                                key={button.value}
                                action={() => handleUpdateValue(button.value)}
                            />
                        );
                    case 'operator':
                        return (
                            <Button
                                value={button.value}
                                key={button.value}
                                className="flex items-center justify-center rounded-md h-12 bg-gold-600 text-neutral-50 text-lg font-medium shadow-sm hover:bg-gold-700"
                            />
                        );
                    case 'decimal':
                        return (
                            <Button
                                value={button.value}
                                key={button.value}
                                action={() => handleUpdateValue(button.value)}
                            />
                        );
                    case 'equal':
                        return (
                            <Button
                                value={button.value}
                                key={button.value}
                                className="flex items-center justify-center rounded-md h-12 bg-gold-600 text-neutral-50 text-lg font-medium shadow-sm hover:bg-gold-700"
                            />
                        );

                    case 'clear':
                        return (
                            <Button
                                value={button.value}
                                key={button.value}
                                className="flex items-center col-start-3 col-end-5 justify-center rounded-md h-12 bg-red-500 text-neutral-50 text-sm uppercase font-bold shadow-sm hover:bg-red-600"
                                action={() => clear()}
                            />
                        );
                    default:
                        break;
                }
            })}
        </>
    );
};

export default CalculatorButtons;
