'use client';
import Select, { SelectProps } from 'components/Select';
import TextField from 'components/TextField';
import { ReactNode } from 'react';

export interface TextSelectFieldProps extends SelectProps {
    label: ReactNode;
    fullWidth?: boolean;
    children: ReactNode;
}

const TextSelectField = ({
    label,
    fullWidth = false,
    children,
    ...props
}: TextSelectFieldProps) => {
    return (
        <TextField label={label} fullWidth={fullWidth}>
            <Select fullWidth={fullWidth} {...props}>
                {children}
            </Select>
        </TextField>
    );
};

export default TextSelectField;
