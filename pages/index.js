import Head from 'next/head';
import { useEffect, useMemo, useContext } from 'react';
import useToggle from 'custom-hooks/useToggle';
import styled, { keyframes, ThemeContext } from 'styled-components';
import { Fragment } from 'react';
import { H1, H2, Body1 } from 'components/Font';
import MainContainer from 'components/MainContainer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-regular-svg-icons';
import ProfilePic from 'components/ProfilePic';
import BlobOrangeBlue from 'components/Svgs/BlobOrangeBlue';
import dynamic from 'next/dynamic';
import { useTrail, animated } from 'react-spring';

const WebBall = dynamic(() => import('components/WebBall'));
const config = { mass: 5, tension: 2000, friction: 400 };

const Container = styled(MainContainer)`
    min-height: 100vh;
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

    .playwavy-icon {
        width: 24px !important;
        margin-top: -40px;
        position: absolute;
        margin-left: 50%;
        cursor: pointer;
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
    color: ${props => props.theme.color.brand};
    margin-bottom: ${props => props.theme.base_spacing * 3}px;
    span {
        color: ${props => props.theme.color.secondary};
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
    color: ${props => props.theme.color.brand};
`;

const ProfilePicContainer = styled.div`
    width: min(max(92px, 16vw), 200px);
    margin-bottom: ${props => props.theme.base_spacing * 8}px;
`;

const FIRSTNAME = ['B', 'i', 'b', 'o', 's', 'w', 'a', 'n'];

let audio;

const Home = () => {
    const [isWavyAnimate, toggleIsWavyAnimate] = useToggle(false);
    const themeContext = useContext(ThemeContext);
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
                <meta property="og:image" content={require('public/images/seo/halfbodypp.jpg')} />
                <meta name="twitter:title" content="Biboswan Roy" />
                <meta
                    name="twitter:description"
                    content="Frontend and full stackish engineer,passionate about open source and public speaking"
                />
                <meta name="twitter:image" content={require('public/images/seo/halfbodypp.jpg')} />
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
                            <FontAwesomeIcon
                                className="playwavy-icon"
                                role="button image"
                                onClick={toggleIsWavyAnimate}
                                icon={faPlayCircle}
                            />
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
                            physically based in India, inclined towards the web. Loves open source,
                            tech communities, green tea (not coffee) and dancing too. Google Udacity
                            Scholar 2k18 and a Mozillian
                        </p>
                        <p>
                            Building interfaces got me interested lately into Human Computer
                            Interaction because I had always tried to understand why humans behave
                            the way they do. Still I like to kinda meddle in both frontend and
                            backend aspects of software and beyond if possible. Open to write code
                            in any programming language but if it can be done with Javascript, would
                            certainly do so.
                        </p>
                        <p>
                            Despite securing a seat in IIIT, I had to continue my computer science
                            engineering degree from a tier-3 college because i wasn’t allowed to
                            leave my hometown and study in a different city. Things have changed now
                            though. Kudos to free online education, I think I have made up abit for
                            that, to the point where college tag may not matter that much.
                        </p>
                    </AnimatedBanner>
                </animated.div>
                <audio preload="auto" src="/audio/BiboswanAudio.m4a"></audio>
                <WebBall color={themeContext.color.orange[800]} />
            </Container>
        </Fragment>
    );
};

export default Home;
