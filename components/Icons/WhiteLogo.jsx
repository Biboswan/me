import styled from 'styled-components';

const Logo = styled.img`
    filter: brightness(0) invert(1);
    height: auto;
`;

const WhiteLogo = props => {
    return (
        <Logo src="/icons/favicon.svg/" alt="logo in white" width="200" height="200" {...props} />
    );
};

export default WhiteLogo;
