import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.main`
    width: 100%;
    padding: ${props => props.theme.base_spacing * 5}px
        ${props => props.theme.spacing.pageside.sm}px ${props => props.theme.base_spacing * 12}px;
    position: relative;
    box-sizing: border-box;

    @media only screen and (min-width: ${props => props.theme.breakpoint.sm}px) {
        padding-left: ${props => props.theme.spacing.pageside.md}px;
        padding-right: ${props => props.theme.spacing.pageside.md}px;
    }

    @media only screen and (min-width: ${props => props.theme.breakpoint.md}px) {
        padding-left: ${props => props.theme.spacing.pageside.lg}px;
        padding-right: ${props => props.theme.spacing.pageside.lg}px;
    }

    max-width: ${props => props.theme.breakpoint.lg}px;
    margin: auto;
`;

const MainContainer = props => {
    const { children, className, ...rest } = props;
    return (
        <Container className={className || ''} {...rest}>
            {children}
        </Container>
    );
};

MainContainer.propTypes = {
    children: PropTypes.any.isRequired,
    className: PropTypes.string,
};

export default MainContainer;
