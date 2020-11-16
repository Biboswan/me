import styled from 'styled-components';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {
    faTwitter,
    faGithub,
    faLinkedin,
    faStackOverflow,
    faMedium,
} from '@fortawesome/free-brands-svg-icons';
import { Body2, Small } from 'components/Font';
import WhiteLogo from 'components/Icons/WhiteLogo';
import { NAVLINKS } from 'app-constants';
import dynamic from 'next/dynamic';

const Container = styled.footer`
    width: 100%;
    box-sizing: border-box;
    position: absolute;
    padding: ${props => props.theme.base_spacing * 12}px 0
        ${props => props.theme.base_spacing * 12}px;
    background: var(--color-footerBg);
    display: flex;
    justify-content: center;
    align-items: center;

    .webball {
        margin-top: ${props => props.theme.base_spacing * 12}px;
    }
`;

const SocialLinkContainer = styled.section`
    display: grid;
    grid-template-columns: 48px 48px 48px;
    grid-template-rows: 48px 48px;
    column-gap: ${props => props.theme.base_spacing * 12}px;
    row-gap: ${props => props.theme.base_spacing * 10}px;
    justify-content: center;

    @media only screen and (min-width: ${props => props.theme.breakpoint.md}px) {
        grid-template-columns: 48px 48px 48px 48px 48px 48px;
        grid-template-rows: 48px;
    }
`;

const SocialLink = styled.a`
    color: var(--color-footerText);
    font-size: 24px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const NavContainer = styled.ul`
    margin: ${props => props.theme.base_spacing * 16}px auto
        ${props => props.theme.base_spacing * 12}px;
    list-style: none;
    text-align: center;
    display: grid;
    row-gap: ${props => props.theme.base_spacing * 7}px;
    width: max-content;
    .navLink {
        text-decoration-color: ${props => props.theme.color.white};
    }
`;

const socialIcons = [
    { icon: faEnvelope, link: 'mailto:bibo@biboswanroy.com', label: 'email' },
    { icon: faTwitter, link: 'https://twitter.com/Biboswan98', label: 'twiiter' },
    { icon: faGithub, link: 'https://github.com/Biboswan', label: 'github' },
    { icon: faLinkedin, link: 'https://www.linkedin.com/in/biboswanroy/', label: 'linkedin' },
    {
        icon: faStackOverflow,
        link: 'https://stackoverflow.com/users/7146337/biboswan',
        label: 'stackoverflow',
    },
    { icon: faMedium, link: 'https://medium.com/@Biboswan98', label: 'medium' },
];

const WhiteLogoLink = styled.div`
    margin: 0 auto ${props => props.theme.base_spacing * 16}px;
    display: flex;
    justify-content: center;
    .white-logo {
        width: max(40px, 5vw);
    }
`;

const Copyright = styled(Small)`
    text-align: center;
`;

const WebBall = dynamic(() => import('components/WebBall'));

const Footer = () => {
    const renderSocialIcons = ({ icon, link, label }) => {
        return (
            <SocialLink role="link" aria-label={label} key={label} href={link}>
                <FontAwesomeIcon icon={icon} />
            </SocialLink>
        );
    };

    const renderNavLinks = ({ label, url }) => {
        return (
            <li key={label}>
                <Link href={url}>
                    <a className="navLink">
                        <Body2 color="footerText" weight="ebold">
                            {label}
                        </Body2>
                    </a>
                </Link>
            </li>
        );
    };

    return (
        <Container>
            <div>
                <SocialLinkContainer>{socialIcons.map(renderSocialIcons)}</SocialLinkContainer>
                <WebBall className="webball" />
                <NavContainer>{NAVLINKS.map(renderNavLinks)}</NavContainer>
                <WhiteLogoLink>
                    <Link href="/">
                        <a aria-label="Br">
                            <WhiteLogo className="white-logo" />
                        </a>
                    </Link>
                </WhiteLogoLink>
                <Copyright color="footerText" weight="medium">
                    All rights reserved © Biboswan Roy 2020
                </Copyright>
            </div>
        </Container>
    );
};

export default Footer;
