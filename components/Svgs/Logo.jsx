import styled, { keyframes } from 'styled-components';

const animateRay1 = keyframes`
	from {
   transform: translate(-40px);
	}
`;

const animateRay2 = keyframes`
	from {
		transform: translate(-40px, -40px);
	}
`;

const animateRay3 = keyframes`
	from {
		transform: translateY(-40px);
	}
`;

const animateRay4 = keyframes`
	from {
		transform: translate(40px,-40px);
	}
`;

const animateRay5 = keyframes`
	from {
		transform: translate(40px);
	}
`;

const Ray1 = styled.path`
    animation: ${animateRay1} 1.5s linear;
`;

const Ray2 = styled.path`
    animation: ${animateRay2} 1.5s linear;
`;

const Ray3 = styled.path`
    animation: ${animateRay3} 1.5s linear;
`;

const Ray4 = styled.path`
    animation: ${animateRay4} 1.5s linear;
`;

const Ray5 = styled.path`
    animation: ${animateRay5} 1.5s linear;
`;

function Logo(props) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="-40 -40 240 240"
            {...props}
        >
            <defs>
                <linearGradient id="linearGradient2218">
                    <stop offset="0" stopColor="#ff8f44" stopOpacity="0.843"></stop>
                    <stop offset="1" stopColor="#242cf6" stopOpacity="0.898"></stop>
                </linearGradient>
                <linearGradient
                    id="linearGradient2212"
                    x1="56.924"
                    x2="81.626"
                    y1="208.01"
                    y2="209.31"
                    gradientUnits="userSpaceOnUse"
                    xlinkHref="#linearGradient2218"
                ></linearGradient>
                <linearGradient
                    id="linearGradient2226"
                    x1="-2.215"
                    x2="9.506"
                    y1="89.87"
                    y2="90.485"
                    gradientTransform="matrix(2.4141 0 0 3.0401 15.047 -242.47)"
                    gradientUnits="userSpaceOnUse"
                    xlinkHref="#linearGradient2218"
                ></linearGradient>
                <linearGradient
                    id="linearGradient2234"
                    x1="15.875"
                    x2="18.521"
                    y1="87.146"
                    y2="87.285"
                    gradientTransform="matrix(2.4141 0 0 3.0401 15.047 -242.47)"
                    gradientUnits="userSpaceOnUse"
                    xlinkHref="#linearGradient2218"
                ></linearGradient>
                <linearGradient
                    id="linearGradient2242"
                    x1="24.927"
                    x2="36.638"
                    y1="89.849"
                    y2="90.463"
                    gradientTransform="matrix(2.4141 0 0 3.0401 15.047 -242.47)"
                    gradientUnits="userSpaceOnUse"
                    xlinkHref="#linearGradient2218"
                ></linearGradient>
                <linearGradient
                    id="linearGradient2250"
                    x1="50.696"
                    x2="65.614"
                    y1="13.61"
                    y2="14.391"
                    gradientTransform="matrix(2.4141 0 0 3.0401 -44.712 8.044)"
                    gradientUnits="userSpaceOnUse"
                    xlinkHref="#linearGradient2218"
                ></linearGradient>
                <linearGradient
                    id="linearGradient2258"
                    x1="-6.461"
                    x2="8.457"
                    y1="73.367"
                    y2="74.148"
                    gradientTransform="matrix(2.4141 0 0 3.0401 15.597 -173.11)"
                    gradientUnits="userSpaceOnUse"
                    xlinkHref="#linearGradient2218"
                ></linearGradient>
            </defs>
            <Ray1
                fill="url(#linearGradient2258)"
                d="M34.996 54.454l-1.017.692H2.272l-2.273-1.381v-5.282l2.273-1.381h15.496c16.534 0 16.989.03 17.887 1.17.197.25.358 1.588.358 2.973 0 2.467-.02 2.531-1.017 3.21z"
                style={{ mixBlendMode: 'normal' }}
            ></Ray1>
            <Ray2
                fill="url(#linearGradient2226)"
                d="M34.058 49.265l-1.107-.417-22.42-28.234-.416-1.5-.416-1.5 1.483-1.867 1.483-1.868 2.382 1.048 10.957 13.798C37.695 43.448 38.001 43.874 37.995 45.48c-.001.352-.638 1.442-1.416 2.42-1.385 1.746-1.436 1.773-2.521 1.364z"
                style={{ mixBlendMode: 'normal' }}
            ></Ray2>
            <Ray3
                fill="url(#linearGradient2234)"
                d="M53.921 44.071l-.55-1.28V2.861l.549-1.43L54.468 0h4.195l1.096 2.862v19.514c0 20.821-.023 21.395-.929 22.525-.198.248-1.26.451-2.36.451-1.96 0-2.01-.025-2.549-1.28z"
                style={{ mixBlendMode: 'normal' }}
            ></Ray3>
            <Ray4
                fill="url(#linearGradient2242)"
                d="M75.397 44.475l.33-1.395 22.42-28.234 2.383-1.047 2.966 3.735-.832 3-10.957 13.798c-11.69 14.723-12.03 15.107-13.305 15.1-.28-.001-1.145-.804-1.922-1.783-1.386-1.745-1.407-1.809-1.083-3.175z"
                style={{ mixBlendMode: 'normal' }}
            ></Ray4>
            <Ray5
                fill="url(#linearGradient2250)"
                d="M78.693 53.937l1.017.692h31.707l2.273-1.381v-5.282l-2.273-1.381H95.921c-16.534 0-16.989.03-17.887 1.17-.197.25-.358 1.588-.358 2.973 0 2.467.02 2.531 1.017 3.21z"
                style={{ mixBlendMode: 'normal' }}
            ></Ray5>
            <text
                fill="url(#linearGradient2212)"
                fontFamily="Chalkboard"
                fontSize="25.4"
                transform="matrix(7.493 0 0 8.8892 -411.62 -1734.9)"
                style={{
                    fontVariantCaps: 'normal',
                    fontVariantEastAsian: 'normal',
                    fontVariantLigatures: 'normal',
                    fontVariantNumeric: 'normal',
                    lineHeight: '1.25',
                    mixBlendMode: 'normal',
                    shapeInside: 'url(#rect1455-7-4)',
                    whiteSpace: 'pre',
                }}
            >
                <tspan x="55.941" y="217.165">
                    <tspan
                        style={{
                            fontVariantCaps: 'normal',
                            fontVariantEastAsian: 'normal',
                            fontVariantLigatures: 'normal',
                            fontVariantNumeric: 'normal',
                        }}
                    >
                        Br
                    </tspan>
                </tspan>
            </text>
        </svg>
    );
}

export default Logo;
