import Head from 'next/head';
import { useEffect, useState, useMemo } from 'react';
import useToggle from 'custom-hooks/useToggle';
import styled, { keyframes } from 'styled-components';
import { Fragment } from 'react';
import { H1, H2, Body1 } from 'components/Font';
import MainContainer from 'components/MainContainer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-regular-svg-icons';
import ProfilePic from 'components/ProfilePic';
import BlobOrangeBlue from 'public/images/blob_OrangeBlue.svg';

const blink = keyframes`
    0% {
        opacity:1;
    }
    49% {
        opacity:1;
    }
    50% {
        opacity:0;
    }
    100% {
        opacity:0;
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
    .playwavy-icon {
        font-size: 24px;
        margin-top: -36px;
        position: absolute;
        margin-left: 50%;
        cursor: pointer;
    }
    .playwavy {
        animation: ${wavyTextAnim} 1s ease-in-out;
        animation-delay: calc(0.1s * var(--i));
    }
`;
const WavyChar = styled.span`
    position: relative;
    display: inline-block;
`;

const Cursor = styled.span`
    &: after {
        margin-left: 5px;
        display: inline-block;
        content: '|';
        color: transparent;
        width: 10px;
        background-color: green;
        animation-name: ${blink};
        animation-duration: 0.5s;
        animation-iteration-count: infinite;
    }
`;

const AnimatedBanner = styled(Body1)`
    max-width: 45ch;
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
`;

const Blob = styled.img`
    position: relative;
`;

const BrandColoredHeading = styled.span`
    color: ${props => props.theme.color.brand};
`;

const ProfilePicContainer = styled.div`
    width: 92px;
    margin-bottom: ${props => props.theme.base_spacing * 8}px;
`;

const BANNER_TEXT = `physically based in India, inclined towards the web. Loves open source, tech communities, green tea (not coffee) and dancing too. 
Building interfaces got me interested lately into Human Computer Interaction because I had always tried to understand why humans behave the way they do.
Open to write code in any programming language but if it can be done with Javascript, would certainly do so.
Open Source contribution has played a huge role in learning about software best practices and pushing high quality code.`;

const FIRSTNAME = ['B', 'i', 'b', 'o', 's', 'w', 'a', 'n'];

let audio;

const Home = () => {
    const [bannerLength, setBannerLength] = useState(0);
    const [isWavyAnimate, toggleIsWavyAnimate] = useToggle(false);
    useEffect(() => {
        const progressType = () => {
            setBannerLength(bannerLength => {
                if (bannerLength + 1 < BANNER_TEXT.length) {
                    setTimeout(progressType, 60);
                }
                return bannerLength + 1;
            });
        };

        progressType();
    }, []);

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
            </Head>
            <MainContainer>
                <BlobContainer>
                    <Blob src={BlobOrangeBlue} />
                </BlobContainer>
                <br />
                <ProfilePicContainer>
                    <ProfilePic />
                </ProfilePicContainer>
                <HI>
                    HI<span>!</span>
                </HI>
                <H2>
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
                <H2 as="h3">
                    A <BrandColoredHeading>Software</BrandColoredHeading> Engineer
                </H2>
                <AnimatedBanner as="p" weight="light">
                    {BANNER_TEXT.substr(0, bannerLength)}
                    {bannerLength < BANNER_TEXT.length && <Cursor />}
                </AnimatedBanner>
            </MainContainer>
        </Fragment>
    );
};

export default Home;
