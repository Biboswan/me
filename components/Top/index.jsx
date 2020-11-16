import styled from 'styled-components';
import ThemeSwitch from 'components/ThemeSwitch';
import MainContainer from 'components/MainContainer';
import Header from 'components/Header';

const Container = styled.div`
    width: 100%;

    .mobileThemeSwitchWrapper {
        padding-top: ${props => props.theme.base_spacing * 7}px;
        padding-bottom: ${props => props.theme.base_spacing * 3}px;

        @media only screen and (min-width: ${props => props.theme.breakpoint.sm}px) {
            display: none;
        }
    }
`;

const Top = () => {
    return (
        <Container>
            <Header />
            <MainContainer as="div" className="mobileThemeSwitchWrapper">
                <ThemeSwitch />
            </MainContainer>
        </Container>
    );
};

export default Top;
