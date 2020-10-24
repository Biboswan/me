const { useEffect, useState } = require('react');

import { isMobile } from 'utils/helper';

const useIsMobileDevice = () => {
    const [isMobileDevice, setIsMobileDevice] = useState(null);

    useEffect(() => {
        setIsMobileDevice(isMobile());
    }, []);

    return isMobileDevice;
};

export default useIsMobileDevice;
