import PropTypes from 'prop-types';

const Hanger = ({ className, ...rest }) => {
    return (
        <svg
            width="130"
            height="71"
            viewBox="0 0 130 71"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            {...rest}
        >
            <path
                d="M67.9999 5.00404C72.5286 -1.29675 67.4833 1.39979 65.2221 4.22626C63.0232 6.97494 69.5749 10.004 71.4999 10.004C74.5497 10.004 77.6626 6.73619 76.9443 3.50404C76.1615 -0.0185359 68.9999 1.30852 68.9999 1.00404"
                stroke="black"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M69.0001 9.00403C60.5821 14.1696 52.5744 20.2306 44.5557 26.004C40.5566 28.8833 34.5892 32.1432 31.5557 36.004C29.4262 38.7143 26.9397 41.0644 24.5001 43.504C23.191 44.8131 21.9589 47.1387 20.4446 48.004C16.5989 50.2016 13.7238 54.0358 10.0001 56.2262C7.9217 57.4488 5.70116 59.303 4.00012 61.004C0.904109 64.1 0.62924 66.173 2.00012 60.004"
                stroke="black"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M76 10.004C90.793 25.0054 103.558 44.0829 120.778 56.004C122.096 56.9167 124.58 58.8631 124.944 60.504C125.203 61.6686 124.45 63.8163 125.222 64.7818C126.752 66.6938 127.94 67.8845 129 70.004"
                stroke="black"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

Hanger.propTypes = {
    className: PropTypes.string,
};

export default Hanger;
