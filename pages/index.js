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

const WebBall = dynamic(() => import('components/WebBall'));

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
`;
const WavyChar = styled.span`
    position: relative;
    display: inline-block;
`;

const AnimatedBanner = styled(Body1)`
    max-width: 65ch;
    margin-top: ${props => props.theme.base_spacing * 8}px;
`;
const HI = styled(H1)`
    color: ${props => props.theme.color.brand};
    margin-bottom: ${props => props.theme.base_spacing * 3}px;
    span {
        color: ${props => props.theme.color.secondary};
    }
`;

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

const BANNER_TEXT = `physically based in India, inclined towards the web. Loves open source, tech communities, green tea (not coffee) and dancing too. 
Building interfaces got me interested lately into Human Computer Interaction because I had always tried to understand why humans behave the way they do.
Open to write code in any programming language but if it can be done with Javascript, would certainly do so.
Open Source contribution has played a huge role in learning about software best practices and pushing high quality code.`;

const FIRSTNAME = ['B', 'i', 'b', 'o', 's', 'w', 'a', 'n'];

let audio;

const Home = () => {
    const [isWavyAnimate, toggleIsWavyAnimate] = useToggle(false);
    const themeContext = useContext(ThemeContext);

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
                {/**
                <script async type="module"
                    src="https://unpkg.com/@google/model-viewer/dist/model-viewer.js">
                </script>
                **/}
                <title>Home Page - Biboswan Roy</title>
            </Head>
            <MainContainer>
                <BlobContainer>
                    <BlobOrangeBlue className="bloborangeblue" />
                </BlobContainer>
                <br />
                <ProfilePicContainer>
                    <ProfilePic />
                </ProfilePicContainer>
                <HI as="h3">
                    HI<span>!</span>
                </HI>
                <H2 as="h1">
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
                </H2>
                <H2 as="h2">
                    A <BrandColoredHeading>Software</BrandColoredHeading> Engineer
                </H2>
                <AnimatedBanner as="p" weight="light">
                    {BANNER_TEXT}
                </AnimatedBanner>
                <WebBall color={themeContext.color.orange[800]} />
            </MainContainer>
            <style global jsx>{`
                .playwavy-icon {
                    width: 24px !important;
                    margin-top: -36px;
                    position: absolute;
                    margin-left: 50%;
                    cursor: pointer;
                }
            `}</style>
        </Fragment>
    );
};

export default Home;
