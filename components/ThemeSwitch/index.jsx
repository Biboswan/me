import styled, { ThemeContext } from 'styled-components';
import PropTypes from 'prop-types';
import Sun from 'components/Svgs/Sun';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';

const Container = styled.button`
    width: 54px;
    height: 54px;
    border-radius: 25px;
    border-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--color-themeSwitchBg);
    cursor: pointer;

    &:focus {
        outline: none;
        border: 2px solid
            ${({ theme }) =>
                theme.themeMode == 'light' ? 'var(--color-brand)' : 'var(--color-primaryText)'};
    }

    svg {
        width: 36px !important;
        height: auto;
    }
`;

const ThemeSwitch = props => {
    const { className } = props;
    const { themeMode, setColorMode } = useContext(ThemeContext);

    if (themeMode === null) {
        return <div className={className} />;
    }

    return (
        <Container aria-label="theme-toggle" onClick={setColorMode} className={className}>
            {themeMode == 'light' ? (
                <FontAwesomeIcon role="img" aria-label="moon" icon={faMoon} color="#4346F1" />
            ) : (
                <Sun role="img" aria-label="sun" />
            )}
        </Container>
    );
};

ThemeSwitch.propTypes = {
    className: PropTypes.string,
};

export default ThemeSwitch;
