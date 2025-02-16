import { RenderOptions, render } from '@testing-library/react';
import { ReactElement } from 'react';

export const renderAppToSnapshot = (
    ui: ReactElement,
    options?: Omit<RenderOptions, 'wrapper'>
) => {
    const result = render(ui, options);

    expect(result.baseElement).toMatchSnapshot();

    return result;
};
