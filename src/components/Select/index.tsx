'use client';
import classNames from 'classnames';
import ChevronDownIcon from 'icons/ChevronDownIcon';
import { ReactNode } from 'react';

export interface SelectProps {
    label?: ReactNode;
    fullWidth?: boolean;
    value?: string;
    onChange?: (value: string) => void;
    children: ReactNode;
    endAdornment?: ReactNode;
    className?: string;
}

const Select = ({
    label,
    fullWidth = false,
    value,
    onChange,
    children,
    endAdornment,
    className,
}: SelectProps) => {
    return (
        <div
            className={classNames(
                `group relative ${fullWidth ? 'max-w-full' : 'max-w-fit'}`,
                className
            )}
        >
            <div className="relative flex items-center">
                <select
                    value={value}
                    onChange={(e) => onChange?.(e.target.value)}
                    className={`bg-transparent peer w-full appearance-none px-3 py-3 pr-6 outline-none`}
                >
                    <option value="" disabled hidden></option>
                    {children}
                </select>
                <div className="text-gray-500 group-focus-within:text-sky-500 absolute right-3 flex items-center">
                    {endAdornment || <ChevronDownIcon size={20} />}
                </div>
            </div>
            {label && (
                <>
                    <label className="pointer-events-none absolute left-[9px] top-px -translate-y-1/2 transform px-1 text-sm text-gray transition-all duration-300 group-focus-within:!top-px group-focus-within:!text-sm group-focus-within:!text-sky peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-xl peer-placeholder-shown:text-gray">
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
                </>
            )}
        </div>
    );
};

export default Select;
