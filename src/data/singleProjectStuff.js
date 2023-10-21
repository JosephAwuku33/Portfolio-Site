// Import images
import Image1 from '../images/ui-project-1.jpg';
import Image2 from '../images/web-project-2.jpg';
// Import icons
import {
    FiFacebook,
    FiInstagram,
    FiLinkedin,
    FiTwitter,
    FiYoutube,
} from 'react-icons/fi';

export const singleProjectStuff = [
    {
        id: 1,
        ProjectHeader: {
            title: "Personally",
            publishDate: 'Jul 26, 2022',
            tags: 'Mobile App',
        },
        ProjectImages: [
            {
                id: 1,
                title: 'Kabul Project Management UI',
                img: Image1,
            },
            // ... Add more images if needed
        ],
        ProjectInfo: {
            ClientHeading: 'Personal Project',
            CompanyInfo: [
                // ... Company Info details
            ],
            ObjectivesHeading: 'Objective',
            ObjectivesDetails: 'Just a short journal of my tech journey and space',
            Technologies: [
                {
                    title: 'Tools and Technologies',
                    techs: ['Firebase', 'Tailwind CSS', 'React'],

                },
            ],
            ProjectDetails: [{
                id: 1,
                details:
                    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.',
            },
            {
                id: 2,
                details:
                    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?',
            },
            {
                id: 3,
                details:
                    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?',
            },
            {
                id: 4,
                details:
                    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.',
            },],
            SocialSharing: [
                {
                    id: 1,
                    name: 'Twitter',
                    icon: <FiTwitter />,
                    url: 'https://twitter.com/JosephAwuku11',
                },
                {
                    id: 2,
                    name: 'Instagram',
                    icon: <FiInstagram />,
                    url: 'https://instagram.com/jay_k_33',
                },
                {
                    id: 4,
                    name: 'LinkedIn',
                    icon: <FiLinkedin />,
                    url: 'https://linkedin.com/in/joseph-awuku-346959223/',
                },
            ]
            // ... Other project information
        },
    },

    {
        id: 2,
        ProjectHeader: {
            title: "Event Ticketing App",
            publishDate: 'Jul 23, 2022',
            tags: 'Mobile App',
        },
        ProjectImages: [
            {
                id: 1,
                title: 'Kabul Project Management UI',
                img: Image2,
            },
            // ... Add more images if needed
        ],
        ProjectInfo: {
            ClientHeading: 'PayBox Global',
            CompanyInfo: [
                // ... Company Info details
            ],
            ObjectivesHeading: 'Objective',
            ObjectivesDetails: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.',
            Technologies: [
                {
                    title: 'Tools and Technologies',
                    techs: ['React Native', 'Nativewind', 'PayBox API'],

                },
            ],
            ProjectDetails: [{
                id: 1,
                details:
                    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.',
            },
            {
                id: 2,
                details:
                    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?',
            },
            {
                id: 3,
                details:
                    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?',
            },
            {
                id: 4,
                details:
                    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.',
            },],
            SocialSharing: [
                {
                    id: 1,
                    name: 'Twitter',
                    icon: <FiTwitter />,
                    url: 'https://twitter.com/realstoman',
                },
                {
                    id: 2,
                    name: 'Instagram',
                    icon: <FiInstagram />,
                    url: 'https://instagram.com/realstoman',
                },
                {
                    id: 3,
                    name: 'Facebook',
                    icon: <FiFacebook />,
                    url: 'https://facebook.com/',
                },
                {
                    id: 4,
                    name: 'LinkedIn',
                    icon: <FiLinkedin />,
                    url: 'https://linkedin.com/',
                },
                {
                    id: 5,
                    name: 'Youtube',
                    icon: <FiYoutube />,
                    url: 'https://www.youtube.com/c/StomanStudio',
                },
            ]
            // ... Other project information
        },
    },

    {
        id: 3,
        ProjectHeader: {
            title: "Inventory Management System",
            publishDate: 'August 28, 2023',
            tags: 'Mobile App',
        },
        ProjectImages: [
            {
                id: 1,
                title: 'Kabul Project Management UI',
                img: Image1,
            },
            // ... Add more images if needed
        ],
        ProjectInfo: {
            ClientHeading: 'J.A.Awuku Enterprise',
            CompanyInfo: [
                // ... Company Info details
            ],
            ObjectivesHeading: 'Objective',
            ObjectivesDetails: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.',
            Technologies: [
                {
                    title: 'Tools and Technologies',
                    techs: ['React Native', 'Nativewind', 'PayBox API'],

                },
            ],
            ProjectDetails: [{
                id: 1,
                details:
                    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.',
            },
            {
                id: 2,
                details:
                    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?',
            },
            {
                id: 3,
                details:
                    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?',
            },
            {
                id: 4,
                details:
                    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.',
            },],
            SocialSharing: [
                {
                    id: 1,
                    name: 'Twitter',
                    icon: <FiTwitter />,
                    url: 'https://twitter.com/realstoman',
                },
                {
                    id: 2,
                    name: 'Instagram',
                    icon: <FiInstagram />,
                    url: 'https://instagram.com/realstoman',
                },
                {
                    id: 3,
                    name: 'Facebook',
                    icon: <FiFacebook />,
                    url: 'https://facebook.com/',
                },
                {
                    id: 4,
                    name: 'LinkedIn',
                    icon: <FiLinkedin />,
                    url: 'https://linkedin.com/',
                },
                {
                    id: 5,
                    name: 'Youtube',
                    icon: <FiYoutube />,
                    url: 'https://www.youtube.com/c/StomanStudio',
                },
            ]
            // ... Other project information
        },
    },

    {
        id: 4,
        ProjectHeader: {
            title: "MathGPT",
            publishDate: 'May 21, 2023',
            tags: 'Mobile App',
        },
        ProjectImages: [
            {
                id: 1,
                title: 'Kabul Project Management UI',
                img: Image2,
            },
            // ... Add more images if needed
        ],
        ProjectInfo: {
            ClientHeading: 'Personal',
            CompanyInfo: [
                // ... Company Info details
            ],
            ObjectivesHeading: 'Objective',
            ObjectivesDetails: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.',
            Technologies: [
                {
                    title: 'Tools and Technologies',
                    techs: ['React Native', 'Nativewind', 'ChatGPT API', 'LaTex/MathJax'],

                },
            ],
            ProjectDetails: [{
                id: 1,
                details:
                    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.',
            },
            {
                id: 2,
                details:
                    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?',
            },
            {
                id: 3,
                details:
                    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?',
            },
            {
                id: 4,
                details:
                    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.',
            },],
            SocialSharing: [
                {
                    id: 1,
                    name: 'Twitter',
                    icon: <FiTwitter />,
                    url: 'https://twitter.com/realstoman',
                },
                {
                    id: 2,
                    name: 'Instagram',
                    icon: <FiInstagram />,
                    url: 'https://instagram.com/realstoman',
                },
                {
                    id: 3,
                    name: 'Facebook',
                    icon: <FiFacebook />,
                    url: 'https://facebook.com/',
                },
                {
                    id: 4,
                    name: 'LinkedIn',
                    icon: <FiLinkedin />,
                    url: 'https://linkedin.com/',
                },
                {
                    id: 5,
                    name: 'Youtube',
                    icon: <FiYoutube />,
                    url: 'https://www.youtube.com/c/StomanStudio',
                },
            ]
            // ... Other project information
        },
    },
    // Add more projects as needed

    {

    }
];
