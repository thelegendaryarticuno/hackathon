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
            "Welcome to the AI Web Hackathon – where creativity meets cutting-edge technology!\n\nThis exciting online competition challenges students to design and develop innovative Single Page Applications (SPAs) using only frontend technologies. Whether you're passionate about UI/UX, intrigued by artificial intelligence, or simply love to code, this is your chance to shine.\n\nParticipants will create a unique web-based solution or experience that integrates or showcases AI in some way – from smart interfaces to data-driven designs. The focus is entirely on the frontend: think aesthetics, interactivity, and user engagement. No backend, no limits on imagination.\n\nWhether you're competing solo or with a team, this hackathon is designed to push your boundaries, ignite new ideas, and give you a platform to showcase your talent to peers, mentors, and industry professionals.\n\nSo get ready to code, design, and build the future — one page at a time!"
        ]
    },
    themes: {
        title: "Hackathon Themes",
        content: [
            {
                title: "Match Making",
                description: "No, not Hinge or Tinder. (Okay maybe a little like it). Design something that brings people together beautifully."
            },
            {
                title: "Game Environment", 
                description: "Adventure, strategy, puzzles? Create a landing page that takes us into a world that doesn't exist yet. Build the vibe, the story and make us want to click \"Start Game\"."
            },
            {
                title: "Food Brand",
                description: "Is it a quirky snack label? A cute coffee shop logo? A healthy meal plan? Choose what you want, but make us hungry, curious and convinced, all from one scroll."
            }
        ]
    },
    resources: {
        title: "Available Resources",
        content: [
            {
                title: "Build a Killer Frontend with AI in Just 10 Minutes!",
                description: "Learn how to leverage AI tools to rapidly prototype and build professional frontend interfaces. This comprehensive tutorial demonstrates workflows and techniques to create responsive, modern UIs using AI assistance. Perfect for hackathon participants looking to quickly iterate on their designs.",
                url: "https://youtu.be/Pmk91PWWc9g?si=vV06_Q5y_76GhzHx"
            },
            {
                title: "Cursor AI Tutorial For Beginners (AI Code Editor)",
                description: "A complete beginner's guide to using Cursor AI - a powerful AI-powered code editor. Learn how to leverage AI to build web apps, mobile apps and more through simple prompts. The tutorial covers everything from basic setup to creating complex applications, making it perfect for participants new to AI-assisted development.",
                url: "https://youtu.be/kbfdFlqzjcs?si=xksF87Jd1H0ME9Gl"
            },
            {
                title: "The Easy Way to Design Top Tier Websites",
                description: "Master the fundamentals of professional web design with this comprehensive guide. Learn essential principles like visual hierarchy, color theory, typography, and responsive design patterns. The tutorial provides practical examples and best practices to help you create polished, user-friendly interfaces.",
                url: "https://youtu.be/qyomWr_C_jA?si=IRB2LvHzY_r6soKQ"
            },
            {
                title: "Create Repository, Commit and Push using GitHub Desktop",
                description: "A step-by-step guide to version control using GitHub Desktop. Learn how to create repositories, make commits, and push changes to GitHub. Perfect for teams collaborating on hackathon projects, this tutorial covers best practices for code management and collaboration using Git's visual interface.",
                url: "https://youtu.be/2N1l5HoQAHQ?si=VP_Ev9UY3nSfc9YM"
            },
            {
                title: "How to Deploy a Website on Vercel",
                description: "Master website deployment with this comprehensive Vercel tutorial. Learn multiple deployment methods including Git integration and CLI deployment. The guide covers everything from basic deployment to advanced configurations, ensuring your hackathon project can go live smoothly. Also includes information about alternative hosting options like tiiny.host for different deployment needs.",
                url: "https://youtu.be/nbNY3cT0dU0?si=5IV5OOVJy3oY6noM"
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