const events = [
    {
        title: "Registration Phase",
        date: "March 28, 2025",
        completed: true
    },
    {
        title: "Workshop Session",
        date: "April 12, 2025",
        completed: false
    },
    {
        title: "Code It Out",
        date: "April 13, 2025",
        completed: true
    },
    {
        title: "Submission",
        date: "April 13, 2025",
        completed: false
    }
];

const tabContent = {
    about: {
        title: "About the Event",
        content: [
            "Join us for an exciting hackathon that brings together innovative minds!",
            "48 hours of coding, creating, and collaborating",
            "Network with industry professionals and like-minded developers",
            "Win amazing prizes and get a chance to showcase your skills"
        ]
    },
    themes: {
        title: "Hackathon Themes",
        content: [
            "Artificial Intelligence & Machine Learning",
            "Sustainable Technology Solutions",
            "Healthcare Innovation",
            "Financial Technology"
        ]
    },
    resources: {
        title: "Available Resources",
        content: [
            {
                title: "APIs and Development Tools",
                description: "Access a wide range of APIs and development tools to build your project",
                url: "https://api-docs.example.com"
            },
            {
                title: "Industry Expert Mentorship",
                description: "Get guidance from experienced mentors in various tech domains",
                url: "https://mentorship.example.com"
            },
            {
                title: "Technical Documentation",
                description: "Comprehensive documentation to help you with technical implementation",
                url: "https://docs.example.com"
            },
            {
                title: "Workshop Materials",
                description: "Access workshop materials and guides for reference",
                url: "https://workshops.example.com"
            }
        ]
    }
};

const teamDetails = {
    name: "Team Lorem Ipsum",
    logo: null,
    members: [
        { id: 1, label: "Team Member 1", name: "John Doe" },
        { id: 2, label: "Team Member 2", name: "Jane Smith" },
        { id: 3, label: "Team Member 3", name: "Mike Johnson" }
    ]
};

export { events, tabContent, teamDetails };