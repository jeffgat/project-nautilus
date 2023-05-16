import React, { useState } from 'react';
import { buttons } from '../_buttons';
import Button from '../common/Button';
import { useCalculatorStore } from '../../stores/calculator';

const CalculatorButtons = () => {
    const [operation, setOperation] = useState('');
    const [value, updateValue, clear, add, subtract, multiply, divide] = useCalculatorStore(
        (state) => [
            state.value,
            state.updateValue,
            state.clear,
            state.add,
            state.subtract,
            state.multiply,
            state.divide
        ]
    );

    const resolveOperation = (operation: string, input: string) => {
        switch (operation) {
            case '+':
                add(input);
                return setOperation('');
            case '-':
                subtract(input);
                return setOperation('');
            case '*':
                multiply(input);
                return setOperation('');
            case '/':
                divide(input);
                return setOperation('');
            default:
                break;
        }
    };

    const handleUpdateValue = (newValue: string) => {
        const IS_DECIMAL = newValue === '.';
        if (IS_DECIMAL && value.includes('.')) {
            return;
        }
        if (operation) {
            if (IS_DECIMAL) {
                return;
            }
            resolveOperation(operation, newValue);
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
                                action={() => setOperation(button.value)}
                                className="flex items-center justify-center rounded-md h-12 bg-gold-600 text-neutral-50 text-lg font-medium shadow-sm hover:bg-gold-700 active:bg-gold-800"
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
                    case 'clear':
                        return (
                            <Button
                                value={button.value}
                                key={button.value}
                                action={() => clear()}
                                className="flex items-center justify-center rounded-md h-12 bg-red-500 text-neutral-50 text-sm uppercase font-bold shadow-sm hover:bg-red-600 active:bg-red-700"
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
