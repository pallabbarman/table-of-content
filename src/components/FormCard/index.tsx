import Spinner from 'components/Spinner';
import { ReactNode } from 'react';

export interface FormCardProps {
    title?: ReactNode;
    children: ReactNode;
    confirmBtnLabel?: ReactNode;
    disabled?: boolean;
}

const FormCard = ({
    title = null,
    children,
    confirmBtnLabel,
    disabled = false,
}: FormCardProps) => {
    return (
        <div className="w-full rounded-md bg-white p-6 shadow-md">
            {title && (
                <h3 className="pb-4 text-lg font-bold text-black">{title}</h3>
            )}
            <div className="py-4">{children}</div>
            <div className="flex items-center gap-3">
                <button
                    className={`rounded-3xl px-5 py-3 text-white ${disabled ? 'bg-gray' : 'bg-sky'}`}
                    disabled={disabled}
                    type="submit"
                >
                    {confirmBtnLabel || 'Save'}
                </button>
                <Spinner size="small" />
            </div>
        </div>
    );
};

export default FormCard;
