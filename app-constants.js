// minor third
export const FONT_SCALE = 1.2;
export const BASE_SPACING = 4;
export const FONT_WEIGHT = {
    elight: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    ebold: 800,
    heavy: 900,
};

export const BREAKPOINTS = {
    xs: 480,
    sm: 768,
    md: 992,
    lg: 1440,
};

export const SPACING = {
    pageside: {
        sm: 16,
        md: 32,
        lg: 64,
    },
};
/**
 * Green
 * 009A74
 * 009A74, 5%
 * 87C6CA
 */
//87C6CA
//160 36 36
//184 39 66 //67, 70, 241, 0.9 -> 4346F1
export const COLOR = {
    blue: {
        900: '#1a00bc',
        800: '#2c22cd',
        700: '#3530d8',
        600: '#3e3de5',
        500: '#4346F1',
        400: '#6165f6',
        300: '#7e83f9',
        200: '#a5a7fa',
        100: '#B3B6E5',
        50: '#eaeafe',
    },
    orange: {
        900: '#FF8F44',
        800: '#ffb550',
        700: '#ffcc57',
        600: '#ffdc56',
        500: '#ffe552',
        400: '#ffeb6a',
        300: '#fff084',
        200: '#fff5a6',
        100: '#fffaca',
        50: '#fffeeb',
    },
    green: {
        500: '#009A74',
    },
    white: 'hsl(0,0%,100%)',
    black: 'hsl(0,0%,0%)',
};

export const FONT_FAMILY = {
    one: 'Grandstander, cursive',
    two:
        'Mulish, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell,"Helvetica Neue",sans-serif',
};

export const NAVLINKS = [
    { label: 'Events', url: '/events' },
    { label: 'Work', url: '/work' },
    { label: 'Blog', url: '/blog' },
];

export const Projects = [
    {
        title: 'Open Source Saga @Mozilla',
        techTags: ['React', 'NodeJS', 'GraphQL', 'Go', 'Python', 'Testing', 'Documenting'],
        image: { url: require('public/processed-images/work/480/tc-flow.gif'), alt: '' },
        intro: [
            'Contributed to multiple projects at Taskcluster a task execution framework that supports Mozilla’s CI and release process.',
            'Wrote taskcluster-lib-pulse v2',
            'Improved experience of Firefox Profiler  and added inactive css feature in Inspector Tools, FixMe Project etc',
        ],
        storyLink: '',
    },
    {
        title: 'StudioYou Webstore',
        techTags: [
            'React Hooks',
            'Styled-Components',
            'Design Systems',
            'Iframe',
            'Amazon Lightsail',
        ],
        image: { url: require('public/processed-images/work/480/studioyou.png'), alt: '' },
        intro: [
            'Webstore is my baby because I build it from scratch. Apart from this, I contributed slightly to their CRM and main site which actually helped me in many ways.',
        ],
        storyLink: '',
    },
    {
        title: 'Restaurant Reviews App',
        intro: [
            'Works offline to the extend that you can add reviews offline and automatically send to server when connectivity restores, made during the Google India Scholarship program',
        ],
        image: { url: require('public/processed-images/work/480/RestReviewshp.png'), alt: '' },
        techTags: [
            'Vanilla JS',
            'PWA',
            'Accessibility',
            'Lazy-loading',
            'Background Sync',
            'Gulp',
            'CSS',
            'Image-Optimisation',
        ],
    },
    {
        title: 'Restaurant Ecommerce',
        intro: [
            'Features include add to card, payment, oauth. Took flow inspiration from Swiggy,Zomato,Flipkart.',
        ],
        image: {
            url: require('public/processed-images/work/480/RestaurantE1.png'),
            alt: '',
        },
        techTags: ['MERN ', 'Material UI', 'Redux'],
        storyLink: '',
    },
];

export const CERTS = [
    'Computer architecture and organization by IIT Kharagpur and NPTEL (Top 5%)',
    'Mobile Web Specialist Nanodegree by Udacity and Google',
    'Problem Solving(Advanced) Hackerrank',
    'Programming, data structures and algorithms by IIT Madras and NPTEL (top 5%)',
];

export const Testimonials = [
    {
        words: (
            <>
                <span>I am happy to recommend Biboswan Roy on LinkedIn</span>
                <span>
                    He has successfully completed a remote internship in DATA SCIENCE AND ANALYTICS
                    under my guidance.The duration of the internship was 4 weeks.During this time,
                    the following topics/issues were covered:
                </span>{' '}
                <span>R Programming</span>
                <span>Basic concepts of Data Analytics</span>
                <span>Basic Statistics and Econometrics</span>
                <span>
                    Applying these basic concepts to solve business cases published by Harvard
                    Business School
                </span>
                <span>A capstone project on Data Analytics using R programming</span>
            </>
        ),
        by: [
            'Prof. Sameer Mathur',
            'Ph.D. (Carnegie Mellon University, USA)',
            'Associate Professor, Marketing (IIM Lucknow)',
        ],
    },
    {
        words:
            'broy27 have been contributing to taskcluster and involved in discussions around the upcoming taskcluster-events refactoring.',
        by: ['Jonas Finnemann Jensen', 'Ex-Mozilla, Software Engineer at Google'],
    },
    {
        words: `As part of the responsibilities of the Student Ambassador, Biboswan Roy was the formal
representative of IMAD to various educational institutes in the region. Student ambassadors
visited colleges and interacted with both professors and students, actively promoted the
course on social media and helped to spread awareness about the course. With their help and
significant contribution, IMAD became the largest MOOC in India, with 127,000+
registrations.`,
        by: ['Dr. Gaurav Raina', 'Department of Electrical Engineering, IIT Madras'],
    },
];

export const GA_TRACKING_ID = 'UA-164047951-2';

export const zIndex = {
    header: 10,
};
