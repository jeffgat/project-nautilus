type BaseOperationType = (x: string, y: string) => string;

export const add: BaseOperationType = (x, y) => {
    return (parseFloat(x) + parseFloat(y)).toString();
};

export const subtract: BaseOperationType = (x, y) => {
    return (parseFloat(x) - parseFloat(y)).toString();
};

export const multiply: BaseOperationType = (x, y) => {
    return (parseFloat(x) * parseFloat(y)).toString();
};

export const divide: BaseOperationType = (x, y) => {
    return (parseFloat(x) / parseFloat(y)).toString();
};
