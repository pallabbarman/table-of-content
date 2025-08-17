import { ReactNode } from 'react';

export interface TextFieldProps {
    label: ReactNode;
    fullWidth?: boolean;
    children?: ReactNode;
}

const TextField = ({
    label,
    fullWidth = false,
    children = null,
}: TextFieldProps) => {
    return (
        <div
            className={`group relative m-4 ${fullWidth ? 'max-w-full' : 'max-w-fit'}`}
        >
            <div className="relative flex items-center">
                <input
                    type="text"
                    className="peer w-full px-3 py-3 pr-10 outline-none"
                    placeholder=" "
                />
                {children && (
                    <div className="absolute right-0 flex h-full items-center">
                        {children}
                    </div>
                )}
            </div>
            <label className="pointer-events-none absolute left-[9px] top-px -translate-y-1/2 transform px-1 text-sm text-gray transition-all duration-300 group-focus-within:!top-px group-focus-within:!text-sm group-focus-within:!text-sky peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-xl">
                {label}
            </label>
            <fieldset className="pointer-events-none invisible absolute inset-0 mt-[-9px] rounded-md border border-gray group-focus-within:border-2 group-focus-within:!border-sky group-hover:border-black peer-placeholder-shown:visible">
                <legend className="invisible ml-2 max-w-[0.01px] whitespace-nowrap px-0 text-sm transition-all duration-300 group-focus-within:max-w-full group-focus-within:px-1">
                    {label}
                </legend>
            </fieldset>
            <fieldset className="pointer-events-none visible absolute inset-0 mt-[-9px] rounded border border-gray group-focus-within:border-2 group-focus-within:!border-sky group-hover:border-gray peer-placeholder-shown:invisible">
                <legend className="invisible ml-2 max-w-full whitespace-nowrap px-1 text-sm">
                    {label}
                </legend>
            </fieldset>
        </div>
    );
};

export default TextField;
