interface ButtonProps {
    value: string;
    action?: any;
    // onClick?: (x: number, y: number) => number;
}

const Button = ({ value, action }: ButtonProps) => {
    return (
        <button
            className="flex items-center justify-center h-12 rounded-md bg-blue-600 font-medium text-lg text-neutral-50 shadow-sm outline-none hover:bg-blue-700"
            onClick={action}
        >
            {value}
        </button>
    );
};

export default Button;
