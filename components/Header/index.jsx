import styled from 'styled-components';
import Link from 'next/link';
import { NAVLINKS } from 'app-constants';
import { Body1 } from 'components/Font';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faPen, faBriefcase } from '@fortawesome/free-solid-svg-icons';

const Container = styled.header`
    padding: ${props => props.theme.spacing.pageside.sm}px;
    box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.08);
    background: ${props => props.theme.color.white};
    width: 100vw;
`;

const Nav = styled.nav`
    ul {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        align-items: center;
        list-style: none;

        li {
            text-align: center;
            justify-self: center;
        }

        li:first-child {
            justify-self: start;
        }
    }
`;

const BrandLogo = styled.img`
    width: 40px;
`;

const PageLinkItem = styled.a`
    text-decoration: none;
    color: ${props => props.theme.color.brand};
    ${Body1} {
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
                        <FontAwesomeIcon icon={PagedLinkIcons[ind]} />
                        <Body1 color="brand" href={url} weight="ebold">
                            {label}
                        </Body1>
                    </PageLinkItem>
                </Link>
            </li>
        );
    };

    return (
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
                    {NAVLINKS.map(renderNavLinks)}
                </ul>
            </Nav>
        </Container>
    );
};

export default Header;
