import { useState, useCallback } from 'react';

const useToggle = (intialState = false) => {
    const [value, setValue] = useState(intialState);
    const toggleValue = useCallback(
        e => {
            if (e) {
                e.preventDefault();
            }
            setValue(value => !value);
        },
        [setValue]
    );

    return [value, toggleValue];
};

export default useToggle;
