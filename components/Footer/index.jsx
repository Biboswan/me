import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {
    faTwitter,
    faGithub,
    faLinkedin,
    faStackOverflow,
    faMedium,
} from '@fortawesome/free-brands-svg-icons';
import { Body1 } from 'components/Font';

const Container = styled.footer`
    width: 100vw;
    position: absolute;
    padding: ${props => props.theme.base_spacing * 4}px;
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
    grid-gap: ;
`;

const SocialLink = styled.a`
    color: ${props => props.theme.color.white};
    font-size: 24px;
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

const Footer = () => {
    return (
        <Container>
            <div>
                <SocialLinkContainer>
                    {socialIcons.map(({ icon, link, label }) => (
                        <SocialLink role="link" aria-label={label} key={label} href={link}>
                            <FontAwesomeIcon icon={icon} />
                        </SocialLink>
                    ))}
                </SocialLinkContainer>
                <div>
                    <Body1 as="a" href="/" color="white" weight="ebold">
                        Home
                    </Body1>
                    <Body1 as="a" href="/events" color="white" weight="ebold">
                        Events
                    </Body1>
                    <Body1 as="a" href="/work" color="white" weight="ebold">
                        Work
                    </Body1>
                    <Body1 as="a" href="/blog" color="white" weight="ebold">
                        Blog
                    </Body1>
                </div>
            </div>
        </Container>
    );
};

export default Footer;
