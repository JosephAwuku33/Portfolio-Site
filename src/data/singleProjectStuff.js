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
            title: "A basic Todo App",
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
            ClientHeading: 'About Client',
            CompanyInfo: [
                // ... Company Info details
            ],
            ObjectivesHeading: 'Objective',
            ObjectivesDetails: '',
            Technologies: [
                {
                    title: 'Tools and Technologies',
                    techs: ['HTML', 'CSS', 'React'],

                },
            ],
            ProjectDetails: [""],
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
        id: 2,
        ProjectHeader: {
            title: "Music Player",
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
            ClientHeading: 'About Client',
            CompanyInfo: [
                // ... Company Info details
            ],
            ObjectivesHeading: 'Objective',
            ObjectivesDetails: '',
            Technologies: [
                {
                    title: 'Tools and Technologies',
                    techs: ['HTML', 'CSS', 'React'],

                },
            ],
            ProjectDetails: [""],
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
