import PropTypes from 'prop-types';

const LShapped = ({ bgColor, ...rest }) => {
    return (
        <svg viewBox="0 0 337 163" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
            <path
                d="M336.086 163H-2V136.437C75.5344 140.462 240.34 144.889 279.288 130.4C318.235 115.911 333.382 37.4296 336.086 0V163Z"
                fill={bgColor}
                fillOpacity="0.1"
            />
        </svg>
    );
};

LShapped.propTypes = {
    bgColor: PropTypes.string.isRequired,
};

export default LShapped;
