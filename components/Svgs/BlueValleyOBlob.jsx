import PropTypes from 'prop-types';

const BlueValleyOBlob = ({ className, blobClassName, ...rest }) => {
    return (
        <svg
            viewBox="0 0 354 156"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            {...rest}
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 138.401L15.0833 123.667C30.1667 108.933 60.3333 79.4649 90.5 79.4649C120.667 79.4649 150.833 108.933 181 97.0639C211.167 85.1948 241.333 32.3978 271.5 11.5246C301.667 -8.93931 331.833 2.92978 346.917 8.65968L362 14.3896V156H346.917C331.833 156 301.667 156 271.5 156C241.333 156 211.167 156 181 156C150.833 156 120.667 156 90.5 156C60.3333 156 30.1667 156 15.0833 156H0V138.401Z"
                fill="var(--color-brand)"
                fillOpacity="0.9"
            />
            <path
                className={blobClassName}
                fillRule="evenodd"
                clipRule="evenodd"
                d="M320.555 86.2072C324.865 86.9788 327.834 91.6952 331.439 94.9011C335.216 98.2602 340.311 99.8965 342.133 105.398C344.001 111.036 342.512 117.571 340.853 123.32C339.26 128.842 336.528 133.545 332.973 137.146C329.335 140.831 325.098 144.733 320.555 143.882C316.131 143.052 314.08 136.385 310.465 132.926C306.85 129.467 301.549 128.858 299.435 123.672C297.21 118.212 297.899 111.452 299.302 105.538C300.717 99.5733 303.382 94.1271 307.285 90.5766C311.131 87.0786 315.924 85.378 320.555 86.2072Z"
                fill="url(#paint0_linear)"
            />
            <defs>
                <linearGradient
                    id="paint0_linear"
                    x1="320.5"
                    y1="86"
                    x2="320.5"
                    y2="144"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="var(--color-secondary)" />
                    <stop offset="1" stopColor="var(--color-secondary)" stopOpacity="0" />
                </linearGradient>
            </defs>
        </svg>
    );
};

BlueValleyOBlob.propTypes = {
    className: PropTypes.string,
    blobClassName: PropTypes.string,
};

export default BlueValleyOBlob;
