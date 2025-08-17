export interface SpinnerProps {
    size?: 'small' | 'large';
}

const Spinner = ({ size = 'large' }: SpinnerProps) => {
    let spinnerSize;
    switch (size) {
        case 'small':
            spinnerSize = 'w-8 h-8 border-4';
            break;
        case 'large':
        default:
            spinnerSize = 'w-20 h-20 border-8';
            break;
    }

    return (
        <div
            className={`animate-spin rounded-full border-gray border-t-sky ${spinnerSize}`}
        />
    );
};

export default Spinner;
