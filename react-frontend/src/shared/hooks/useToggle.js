import { useState } from 'react';

function useToggle(input) {
    const [value, setValue] = useState(!!input);

    function toggle(value) {
        if (typeof value === 'boolean') {
            setValue(value);
        }
        else {
            setValue((prev) => !prev)
        }
    }

    return [value, toggle]
}

export default useToggle;