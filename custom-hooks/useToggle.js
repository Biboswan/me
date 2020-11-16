import { useState } from 'react';

const useToggle = (intialState = false) => {
    const [value, setValue] = useState(intialState);

    const toggleValue = e => {
        if (e) {
            e.preventDefault();
        }
        setValue(value => !value);
    };

    return [value, toggleValue];
};

export default useToggle;
