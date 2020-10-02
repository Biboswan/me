import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.main`
    padding: ${props => props.theme.base_spacing * 5}px
        ${props => props.theme.spacing.pageside.sm}px ${props => props.theme.base_spacing * 12}px;
    position: relative;
`;

const MainContainer = props => {
    const { children, className } = props;
    return <Container className={className || ''}>{children}</Container>;
};

MainContainer.propTypes = {
    children: PropTypes.any.isRequired,
    className: PropTypes.string,
};

export default MainContainer;
