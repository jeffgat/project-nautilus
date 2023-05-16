interface ButtonProps {
    value: string;
    className?: string;
    action?: () => void;
}

const Button = ({ value, action, className, ...props }: ButtonProps) => {
    return (
        <button
            className={
                className ??
                `flex items-center justify-center rounded-md h-12 bg-blue-600 text-neutral-50 text-lg font-medium shadow-sm hover:bg-blue-700`
            }
            onClick={action}
            {...props}
        >
            {value}
        </button>
    );
};

export default Button;
