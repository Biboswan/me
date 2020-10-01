import styled from 'styled-components';

const Logo = styled.img`
    filter: brightness(0) invert(1);
`;

const WhiteLogo = props => {
    return <Logo src="/icons/favicon.svg/" alt="logo in white" {...props} />;
};

export default WhiteLogo;
