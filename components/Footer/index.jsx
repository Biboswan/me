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
import { Body1, Small } from 'components/Font';
import WhiteLogo from 'components/Icons/WhiteLogo';
import { NAVLINKS } from 'app-constants';

const Container = styled.footer`
    width: 100vw;
    position: absolute;
    padding: ${props => props.theme.base_spacing * 12}px 0
        ${props => props.theme.base_spacing * 12}px;
    background: linear-gradient(
        233.58deg,
        rgba(67, 70, 241, 0.9) 47.99%,
        rgba(0, 154, 116, 0) 105.57%
    );
    display: flex;
    justify-content: center;
    align-items: center;
`;

const SocialLinkContainer = styled.section`
    display: grid;
    grid-template-columns: 48px 48px 48px;
    grid-template-rows: 48px 48px;
    column-gap: ${props => props.theme.base_spacing * 12}px;
    row-gap: ${props => props.theme.base_spacing * 10}px;
`;

const SocialLink = styled.a`
    color: ${props => props.theme.color.white};
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
`;

const socialIcons = [
    { icon: faEnvelope, link: 'mailto:biboswan98@gmail', label: 'email' },
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
        width: 40px;
    }
`;

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
                    <a>
                        <Body1 color="white" weight="ebold">
                            {label}
                        </Body1>
                    </a>
                </Link>
            </li>
        );
    };

    return (
        <Container>
            <div>
                <SocialLinkContainer>{socialIcons.map(renderSocialIcons)}</SocialLinkContainer>
                <NavContainer>{NAVLINKS.map(renderNavLinks)}</NavContainer>
                <WhiteLogoLink>
                    <Link href="/">
                        <a aria-label="Br">
                            <WhiteLogo className="white-logo" />
                        </a>
                    </Link>
                </WhiteLogoLink>
                <Small color="white" weight="medium">
                    All rights reserved © Biboswan Roy 2020
                </Small>
            </div>
        </Container>
    );
};

export default Footer;