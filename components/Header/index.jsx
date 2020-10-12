import styled from 'styled-components';
import Link from 'next/link';
import { NAVLINKS } from 'app-constants';
import { Body2 } from 'components/Font';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faPen, faBriefcase } from '@fortawesome/free-solid-svg-icons';

const Container = styled.header`
    padding: ${props => props.theme.spacing.pageside.sm}px;
    box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.08);
    background: ${props => props.theme.color.white};
    width: 100vw;
    box-sizing: border-box;

    @media only screen and (min-width: ${props => props.theme.breakpoint.sm}px) {
        padding-left: ${props => props.theme.spacing.pageside.md}px;
        padding-right: ${props => props.theme.spacing.pageside.md}px;
    }

    @media only screen and (min-width: ${props => props.theme.breakpoint.md}px) {
        padding-left: ${props => props.theme.spacing.pageside.lg}px;
        padding-right: ${props => props.theme.spacing.pageside.lg}px;
    }
`;

const Nav = styled.nav`
    ul {
        display: grid;
        grid-template-columns: 1fr 3fr;
        align-items: center;
        list-style: none;
        @media only screen and (min-width: ${props => props.theme.breakpoint.sm}px) {
            grid-template-columns: 1fr 1fr;
        }
    }
`;

const BrandLogo = styled.img`
    width: max(40px, 5.6vw);
`;

const PageLinkContainer = styled.div`
    display: flex;
    justify-content: space-between;

    @media only screen and (min-width: ${props => props.theme.breakpoint.md}px) {
        display: inline-grid;
        grid-template-columns: max-content max-content max-content;
        column-gap: ${props => props.theme.base_spacing * 18}px;
        justify-self: end;
    }
`;

const PageLinkItem = styled.a`
    text-decoration: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 1rem;
    color: ${props => props.theme.color.brand};
    ${Body2} {
        margin-top: ${props => props.theme.base_spacing * 3}px;
    }

    &:focus,
    &:hover,
    &:active {
        color: ${props => props.theme.color.secondary} !important;
        border: none;
        outline: none;
    }
`;

const PagedLinkIcons = [faUsers, faBriefcase, faPen];

const Header = () => {
    const renderNavLinks = ({ label, url }, ind) => {
        return (
            <li key={label}>
                <Link href={url} passHref>
                    <PageLinkItem>
                        <FontAwesomeIcon className="navIcon" icon={PagedLinkIcons[ind]} />
                        <Body2 color="brand" weight="ebold">
                            {label}
                        </Body2>
                    </PageLinkItem>
                </Link>
            </li>
        );
    };

    return (
        <>
            <Container>
                <Nav>
                    <ul>
                        <li>
                            <Link href="/">
                                <a>
                                    <BrandLogo src="/icons/favicon.svg/" alt="logo in white" />
                                </a>
                            </Link>
                        </li>
                        <PageLinkContainer>{NAVLINKS.map(renderNavLinks)}</PageLinkContainer>
                    </ul>
                </Nav>
            </Container>
            <style global jsx>{`
                .navIcon {
                    width: 20px;
                }
            `}</style>
        </>
    );
};

export default Header;
