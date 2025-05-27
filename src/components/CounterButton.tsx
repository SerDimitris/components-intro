type ButtonProps = {
    onClick: () => void;
    disabled?: boolean;
    label: string;
}
const CounterButton = ({onClick, disabled = false, label} : ButtonProps) => {
    return (
        <>
            <button
                className="bg-blue-400 disabled:bg-gray-600 text-white py-2 px-4"
                onClick={onClick}
                disabled={disabled}
            >
                {label}
            </button>
        </>
    )
}

export default CounterButton;