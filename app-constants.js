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
        900: '#96826E',
        800: '#97714D',
        700: '#98602B',
        600: '#A15B1C',
        500: '#B25F16',
        400: '#C86A14',
        300: '#E07614',
        200: '#F28114',
        100: '#FF8F44',
        50: '#FFB550',
    },
    green: {
        500: '#009A74',
    },
    darksurfaces: {
        0: 'hsl(240,25%,8%)',
        1: 'hsl(240,25%,10%)',
        2: 'hsl(240,25%,12%)',
        3: 'hsl(240,25%,13%)',
        4: 'hsl(240,25%,14%)',
        5: 'hsl(240,25%,16%)',
        6: 'hsl(240,25%,17%)',
        7: 'hsl(240,25%,19%)',
        8: 'hsl(240,25%,20%)',
        9: 'hsl(240,25%,21%)',
    },
    white: 'hsl(0,0%,100%)',
    black: 'hsl(0,0%,0%)',
    textgrey: {
        100: 'hsl(240,2%,43%)',
        200: 'hsl(240,2%,63%)',
        300: 'hsl(240,2%,88%)',
    },
};

export const THEME_MODE_KEY = 'theme-mode';
export const INITIAL_THEME_MODE_CSS_PROP = '--initial-theme-mode';

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
        title: 'Unified Actions Platform Development - SentinelOne',
        techTags: ['React', 'API Design', 'Typescript', 'CSS'],
        image: {
            url: require('public/processed-images/work/480/unified-actions.png'),
            alt: 'Screenshot of the Unified Inventory with the Unified Actions dropdown',
            width: 480,
            height: 300,
        },
        intro: [
            'Independently architected and developed the UnifiedActionsDropdown React component for the Unified Inventory, enabling customers to perform actions on 100k+ assets: endpoints,identity,cloud resources from all surface teams in a single interface.',
            'The dropdown options are driven by the backend api and are based on the table selection of assets',
            'Extended the Databridge plugin and developed a communication layer to open legacy Angular action modals running in iframe from the React app and extend it for newer actions with react modals.',
        ],
        storyLink: 'https://www.sentinelone.com/platform/how-singularity-xdr-works',
    },
    {
        title: 'Migrating to Singularity Shell Architecture - SentinelOne',
        techTags: ['React', 'Typescript', 'Angular'],
        image: {
            url: require('public/processed-images/work/480/SingularityShellArchitecture.png'),
            alt: 'Screenshot of the Singularity Shell Architecture',
            width: 480,
            height: 300,
        },
        intro: [
            'This was a huge project requiring developers from all teams to contribute. I worked on the Shell Iframe Architecture, where I helped unify multiple apps into a single console using iframes. This project aimed to provide a consistent user experience across apps like the MGMT console, Attivo, and Skylight, which are built with different frontend frameworks.',
        ],
        storyLink: 'work/sentinelone/migrating-to-singularity-shell',
    },
    {
        title: 'Cloud Scanner Policies - SentinelOne',
        techTags: ['React', 'Typescript', 'GraphQL', 'Recoil', 'React-hook-form', 'API Design'],
        image: {
            url: require('public/processed-images/work/480/CloudScannerPolicy.png'),
            alt: 'Screenshot of the Cloud Scanner Policy Wizard',
            width: 480,
            height: 300,
        },
        intro: [
            'Designed a dynamic JSON schema for the policy configuration API, enabling the development of a multi-step dynamic form wizard with advanced filters for cloud infrastructure resources, including VMs, organizations, and accounts.',
            'Enabled policy creation for vulnerability scanning of 2 billion VM images daily (Cloud Native Security) and storage bucket scanning for threat detection with remediation (Cloud Data Security) across multiple cloud providers (AWS, GCP, Azure, OCI, Alibaba)',
        ],
        storyLink: 'https://www.sentinelone.com/platform/cloud-security/',
    },
    {
        title: 'Unified Tagging Platform UI - SentinelOne',
        techTags: ['React', 'Typescript', 'GraphQL', 'Playwright', 'CSS', 'API Design'],
        image: {
            url: require('public/processed-images/work/480/UnifiedTagging.png'),
            alt: 'Unified Tagging table',
            width: 480,
            height: 300,
        },
        intro: [
            'Created a shared, scalable UnifiedTagging UI React modal library for various tag operations on objects, handling permission cases for objects in various scopes in multi-tenancy with localization support, used by over 16 product lines.',
            'Developed a centralized tag management platform enabling customers to perform CRUD operations on tags and tag diverse assets and objects, such as incidents, alerts, attack paths, Purple AI notebooks leading to effective organization.',
            'Collaborated with the UI Platform team to design solutions for edge cases in the ”Select All” count feature of the InfraTable React component, (AG-Grid wrapper) supporting advanced grouping, filtering, sorting etc, used on more than 20 pages.',
        ],
    },
    {
        title: 'Web Extension - A11y Gradient',
        techTags: ['Chrome Extension', 'Accessibility', 'Developer Tools', 'Javascript'],
        image: {
            url: require('public/processed-images/work/480/ally-gradient.png'),
            alt: "Screenshot of the extension's panel opened and in use in devtools",
            width: 480,
            height: 300,
        },
        intro: [
            'It gives you contrast ratio (accessibility standards) for text against each pixel of multi-colored backgrounds.',
            'Chrome developer tools gives you contrast ratio of text against only monochromatic backgrounds.',
            'There are so many sites using gradients or images as backgrounds. The texts are not accessible because there is no tool to assess them.',
            'This tool will help you fix those issues. You can compare background against text color, text border and even element border. There is no specification for element borders but I think it might help in making better visually appealing UIs.',
        ],
        storyLink:
            'https://chromewebstore.google.com/detail/a11y-gradient/kokihagjmdkofdmahbcofpnkccigjmnm',
    },
    {
        title: 'Open Source Saga @Mozilla',
        techTags: ['React', 'NodeJS', 'GraphQL', 'Go', 'Python', 'Testing', 'Documenting'],
        image: {
            url: require('public/processed-images/work/480/tc-flow.webm'),
            url2: require('public/processed-images/work/480/tc-flow.mp4'),
            alt: 'A gif show the taskcluster workflow',
            width: 600,
            height: 582,
            isVideo: true,
        },
        intro: [
            'Contributed to multiple projects at Taskcluster a task execution framework that supports Mozilla’s CI and release process.',
            'Wrote taskcluster-lib-pulse v2',
            'Improved experience of Firefox Profiler  and added inactive css feature in Inspector Tools, FixMe Project etc',
        ],
        storyLink: 'work/mozilla',
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
        image: {
            url: require('public/processed-images/work/480/studioyou.png'),
            alt: 'Landing page of studioyou website',
            width: 480,
            height: 300,
        },
        intro: [
            'Webstore is my baby because I build it from scratch. Apart from this, I contributed slightly to their CRM and main site which actually helped me in many ways.',
        ],
        storyLink: 'work/studioyou',
    },
];

export const CERTS = [
    <>
        Computer architecture and organization by <strong>IIT Kharagpur</strong> and NPTEL (Top 5%)
    </>,
    <>
        Mobile Web Specialist Nanodegree by <strong>Udacity</strong> and <strong>Google</strong>
    </>,
    <>Problem Solving (Advanced) Hackerrank</>,
    <>
        Programming, data structures and algorithms by <strong>IIT Madras</strong> and NPTEL (top
        5%)
    </>,
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

export const WorkStories = {
    studioyou: {
        title: 'Journey At StudioYou',
        intro: [
            'StudioYou is the modern complete business management software for boutique fitness studios, yoga studios, boxes and gyms. Initially I made my hands dirty on all the existing products by adding features on https://getstudioyou.com (pricing page done by me), crm and pwa webstore.',
            'Then I began solely building the new frontend webstore B2B (having customizable themes lignt and dark themes matching the business brands) from scratch which would be embeddedable on our customers own websites.',
            'Involved lot of research about competitors. Taking independently tech decisions and architecture etc.',
        ],
        bannerImage: { url: '/images/work/studioyou.png', alt: '' },
        techTags: [
            'React Hooks',
            'Styled-Components',
            'Design Systems',
            'Iframe',
            'Amazon Lightsail',
        ],
        subtopics: [
            {
                title: 'Move Fast vs Building Foundation for Tomorrow',
                desc: [
                    'Being a new startup we needed to move fast. But I believe slight extra thought in the beginning can save hours later. I motivated the product designer to make a well documeted design system. Observing all the screens and design system I first made <strong>Modular</strong>, <strong>Reusable</strong>, <strong>Extendable</strong> (making room for newer options without much overwriting) components which I could later plug into screens and gotta I’m done.',
                    'Way later wrote an article which got approached by <strong>The Startup</strong>, <strong>The UX Collective</strong> and other.',
                ],
            },
            {
                title: 'Seamless integration of entire webstore as an iframe',
                desc: [
                    'Iframe window shall be able to change the outer window’s URL and vice vera. Security aspects also needed to be seen. Researched and came across interesting cross-domain javascript libraries of paypal - <strong>zoid</strong> etc , read frontend bundled code of studioyou competitor’s products 🙈 having similar implementations and Content Security Header. Utimately developed cross window communication protocol successfully.',
                    'Dealt with the common challenge of setting iframe dimensions dynamically with <strong>mutation observers</strong>.',
                ],
                image: { url: '/images/work/studioyou/class_schedule.png', alt: '' },
            },
        ],
    },
    mozilla: {
        title: 'Open Source Saga at Mozilla',
        techTags: ['React', 'NodeJS', 'GraphQL', 'Go', 'Python', 'Testing', 'Documenting'],
        image: {
            url: require('public/processed-images/work/480/tc-flow.webm'),
            url2: require('public/processed-images/work/480/tc-flow.mp4'),
            alt: 'A gif show the taskcluster workflow',
            width: 600,
            height: 582,
        },
    },
};
//images/work/studioyou/class_schedule.png
///images/conf/abcofreact.png

export const BASE_URL = 'https://biboswanroy.com';
