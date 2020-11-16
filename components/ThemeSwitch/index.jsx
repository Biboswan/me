import styled, { ThemeContext } from 'styled-components';
import PropTypes from 'prop-types';
import Sun from 'components/Svgs/Sun';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { useContext, useCallback } from 'react';
import { useSpring, animated } from 'react-spring';
import useToggle from 'custom-hooks/useToggle';
import { INITIAL_THEME_MODE_CSS_PROP } from 'app-constants';

const Container = styled.button`
    width: 54px;
    height: 54px;
    padding: 0;
    cursor: ${({ theme }) => (theme.themeMode === undefined ? 'auto' : 'pointer')};
    background: transparent;
    border-radius: 25px;
    border-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
    perspective: 800px;
    transform-style: preserve-3d;

    &:focus {
        outline: none;
        div {
            border: 2px solid
                ${({ theme }) =>
                    theme.themeMode == 'light' ? 'var(--color-brand)' : 'var(--color-primaryText)'};
        }
    }
`;

const Switch = styled(animated.div)`
    width: 54px;
    height: 54px;
    cursor: pointer;
    border-radius: 25px;
    border-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--color-themeSwitchBg);
    will-change: transform, opacity;
    position: absolute;
    backface-visibility: hidden;

    svg {
        width: 36px !important;
        height: auto;
    }
`;
let initialMode;

const ThemeSwitch = props => {
    const { className } = props;
    const [isFlip, toggleFlip] = useToggle(false);
    const { themeMode, setColorMode, prefersReducedMotion } = useContext(ThemeContext);
    const { transform, opacity } = useSpring({
        opacity: isFlip ? 1 : 0,
        transform: `rotateY(${isFlip ? 180 : 0}deg)`,
        config: { mass: 5, tension: 300, friction: 80 },
        immediate: prefersReducedMotion,
    });

    const handleClick = useCallback(() => {
        setColorMode();
        toggleFlip();
    }, [setColorMode, toggleFlip]);

    if (themeMode === null) {
        return <Container className={className} />;
    }

    const LightView = __props => {
        return (
            <Switch aria-label="theme-toggle" {...__props}>
                <FontAwesomeIcon role="img" aria-label="moon" icon={faMoon} color="#4346F1" />
            </Switch>
        );
    };

    const DarkView = __props => {
        return (
            <Switch aria-label="theme-toggle" {...__props}>
                <Sun role="img" aria-label="sun" />
            </Switch>
        );
    };

    if (initialMode === undefined) {
        initialMode = getComputedStyle(document.documentElement).getPropertyValue(
            INITIAL_THEME_MODE_CSS_PROP
        );
    }

    return (
        <Container onClick={handleClick} className={className}>
            {initialMode === 'dark' ? (
                <>
                    <DarkView style={{ opacity: opacity.to(o => 1 - o), transform }} />
                    <LightView
                        style={{ opacity, transform: transform.to(t => `${t} rotateY(180deg)`) }}
                    />
                </>
            ) : (
                <>
                    <LightView style={{ opacity: opacity.to(o => 1 - o), transform }} />
                    <DarkView
                        style={{ opacity, transform: transform.to(t => `${t} rotateY(180deg)`) }}
                    />
                </>
            )}
        </Container>
    );
};

ThemeSwitch.propTypes = {
    className: PropTypes.string,
};

export default ThemeSwitch;
