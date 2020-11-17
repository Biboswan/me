import Head from 'next/head';
import { useEffect, useMemo } from 'react';
import useToggle from 'custom-hooks/useToggle';
import styled, { keyframes } from 'styled-components';
import { Fragment } from 'react';
import { H1, H2, Body1, Strong } from 'components/Font';
import MainContainer from 'components/MainContainer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-regular-svg-icons';
import ProfilePic from 'components/ProfilePic';
import BlobOrangeBlue from 'components/Svgs/BlobOrangeBlue';
import { useTrail, animated } from 'react-spring';
import { BASE_URL } from 'app-constants';

const config = { mass: 5, tension: 2000, friction: 400 };

const Container = styled(MainContainer)`
    min-height: 100vh;
    padding-top: 0;

    @media only screen and (min-width: ${props => props.theme.breakpoint.sm}px) {
        padding-top: ${props => props.theme.base_spacing * 5}px;
    }
`;

const wavyTextAnim = keyframes`
    0% {
        transform: translateY(0px);
    }
    20% {
        transform: translateY(-25px);
    }
    40%, 100% {
        transform: translateY(0px);
    }
`;

const WavyTextContainer = styled.div`
    display: inline-block;
    position: relative;

    .playwavy {
        animation: ${wavyTextAnim} 1s ease-in-out;
        animation-delay: calc(0.1s * var(--i));
    }

    .playwavy-btn {
        background: transparent;
        margin-top: -35px;
        position: absolute;
        margin-left: 50%;
        cursor: pointer;
        z-index: 10;
        border: none;
        padding: 0;
        width: 50px;
        height: 50px;
        color: var(--color-primaryText);

        span {
            width: inherit;
            height: inherit;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }

    .playwavy-btn:focus,
    .playwavy-btn > span :focus {
        outline: none;
    }

    .playwavy-btn:focus > span {
        box-shadow: 0 0 2px 2px ${props => props.theme.color.blue[400]};
    }

    .playwavy-btn__icon {
        width: 24px !important;
        height: auto;
    }
`;

const WavyChar = styled.span`
    position: relative;
    display: inline-block;
`;

const AnimatedBanner = animated(styled(Body1)`
    max-width: 65ch;
    margin-top: ${props => props.theme.base_spacing * 8}px;
    display: grid;
    row-gap: ${props => props.theme.base_spacing * 3}px;
`);

const HI = animated(styled(H1)`
    color: var(--color-brand);
    margin-bottom: ${props => props.theme.base_spacing * 3}px;
    span {
        color: var(--color-secondary);
    }
`);

const AnimatedH2 = animated(H2);

const BlobContainer = styled.div`
    display: flex;
    justify-content: flex-end;

    .bloborangeblue {
        width: max(16vw, 100px);
    }
`;

const BrandColoredHeading = styled.span`
    color: var(--color-brand);
`;

const ProfilePicContainer = styled.div`
    width: min(max(92px, 16vw), 200px);
    margin-bottom: ${props => props.theme.base_spacing * 8}px;
`;

const FIRSTNAME = ['B', 'i', 'b', 'o', 's', 'w', 'a', 'n'];

const SemiStrong = styled.strong`
    font-weight: 500;
`;

let audio;

const Home = () => {
    const [isWavyAnimate, toggleIsWavyAnimate] = useToggle(false);

    const trail = useTrail(4, {
        config,
        opacity: 1,
        height: 'auto',
        x: 0,
        from: { opacity: 0, height: 0, x: 20 },
    });

    useEffect(() => {
        const play = () => {
            if (audio === undefined) {
                audio = new Audio('/audio/BiboswanAudio.m4a');
                audio.onended = toggleIsWavyAnimate;
            }
            audio.play();
        };

        if (isWavyAnimate) {
            play();
        }
    }, [isWavyAnimate]);

    const renderFirstNameLetter = (letter, index) => {
        return (
            <WavyChar
                key={index}
                className={isWavyAnimate ? 'playwavy' : ''}
                style={{ '--i': index + 1 }}
            >
                {letter}
            </WavyChar>
        );
    };

    const renderFirstNameLetters = useMemo(() => {
        return FIRSTNAME.map(renderFirstNameLetter);
    }, [isWavyAnimate]);

    return (
        <Fragment>
            <Head>
                <title>Home Page - Biboswan Roy</title>
                <meta
                    name="description"
                    content="Frontend and full stackish engineer, passionate about open source and public speaking"
                />
                <meta
                    name="keywords"
                    content="portfolio, full-stack, javascript, react, software engineer"
                />
                <meta property="og:title" content="Biboswan Roy" />
                <meta property="og:url" content="https://biboswanroy.com/" />
                <meta
                    property="og:description"
                    content="Frontend and full stackish engineer,passionate about open source and public speaking"
                />
                <meta
                    property="og:image"
                    content={`${BASE_URL}${require('public/images/seo/home-banner.png')}`}
                />
                <meta property="og:type" content="website" />
                <meta name="twitter:title" content="Biboswan Roy" />
                <meta
                    name="twitter:description"
                    content="Frontend and full stackish engineer,passionate about open source and public speaking"
                />
                <meta
                    name="twitter:image"
                    content={`${BASE_URL}${require('public/images/seo/home-banner.png')}`}
                />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:creator" content="@Biboswan98" />
            </Head>
            <Container>
                <BlobContainer>
                    <BlobOrangeBlue className="bloborangeblue" />
                </BlobContainer>
                <br />
                <ProfilePicContainer>
                    <ProfilePic />
                </ProfilePicContainer>
                <animated.div
                    style={{
                        opacity: trail[0].opacity,
                        transform: trail[0].x.to(x => `translate3d(0,${x}px,0)`),
                    }}
                >
                    <HI as="h3" style={{ height: trail[0].height }}>
                        HI<span>!</span>
                    </HI>
                </animated.div>
                <animated.div
                    style={{
                        opacity: trail[1].opacity,
                        transform: trail[1].x.to(x => `translate3d(0,${x}px,0)`),
                    }}
                >
                    <AnimatedH2 as="h1" style={{ height: trail[1].height }}>
                        I’m{' '}
                        <WavyTextContainer>
                            {' '}
                            <button
                                aria-label="play"
                                className="playwavy-btn"
                                onClick={toggleIsWavyAnimate}
                            >
                                <span tabIndex={-1}>
                                    <FontAwesomeIcon
                                        className="playwavy-btn__icon"
                                        icon={faPlayCircle}
                                    />
                                </span>
                            </button>
                            <div>{renderFirstNameLetters}</div>
                        </WavyTextContainer>{' '}
                        Roy
                    </AnimatedH2>
                </animated.div>
                <animated.div
                    style={{
                        opacity: trail[2].opacity,
                        transform: trail[2].x.to(x => `translate3d(0,${x}px,0)`),
                    }}
                >
                    <AnimatedH2 as="h2" style={{ height: trail[2].height }}>
                        A <BrandColoredHeading>Software</BrandColoredHeading> Engineer
                    </AnimatedH2>
                </animated.div>
                <animated.div
                    style={{
                        opacity: trail[3].opacity,
                        transform: trail[3].x.to(x => `translate3d(0,${x}px,0)`),
                    }}
                >
                    <AnimatedBanner weight="light" style={{ height: trail[3].height }}>
                        <p>
                            physically based in India, inclined towards the web{' '}
                            <SemiStrong>(frontend but fullstackish)</SemiStrong>. Loves open source,
                            tech communities, green tea (not coffee) and dancing too.{' '}
                            <Strong isItalic>Google Udacity Scholar</Strong> 2k18 and a{' '}
                            <Strong isItalic>Mozillian</Strong>.
                        </p>
                        <p>
                            Building interfaces got me interested lately into{' '}
                            <Strong isItalic>Human Computer Interaction</Strong> because I had
                            always tried to understand why humans behave the way they do. Still I
                            like to kinda meddle in both frontend and backend aspects of software
                            and beyond if possible.
                        </p>
                        <p>
                            Open to write code in any programming language but if it can be done
                            with <SemiStrong>Javascript</SemiStrong>, would certainly do so.
                        </p>
                        <p>
                            Despite securing a seat in <Strong isItalic>IIIT</Strong>, I had to
                            continue my computer science engineering degree from a tier-3 college
                            because I wasn’t allowed to leave my hometown and study in a different
                            city. Things have changed now though. Kudos to free online education, I
                            think I have made up abit for that, to the point where college tag may
                            not matter that much.
                        </p>
                    </AnimatedBanner>
                </animated.div>
                <audio preload="auto" src="/audio/BiboswanAudio.m4a"></audio>
            </Container>
        </Fragment>
    );
};

export default Home;
