import styled from 'styled-components';
import PropTypes from 'prop-types';
import Sun from 'Svgs/Sun';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';

const Container = styled.button`
    width: 54px;
    height: 54px;
    border-radius: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ThemeSwitch = props => {
    const { className, onClick } = props;

    return (
        <Container onClick={onClick} className={className}>
            <FontAwesomeIcon icon={faMoon} />
            <Sun />
        </Container>
    );
};

ThemeSwitch.propTypes = {
    className: PropTypes.string,
    onClick: PropTypes.func.isRequired,
};

export default ThemeSwitch;
