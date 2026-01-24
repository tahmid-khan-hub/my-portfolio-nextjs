
export type Project = {
  id: number;
  title: string;
  image: string;
  description: string;
  features: string[];
  technologies: string[];
  challenges: string;
  whatILearned: string;
  futurePlans: string;
};

export const ProjectData: Project[] = [
  {
    id: 1,
    title: "KitStruck",
    image: "https://res.cloudinary.com/ddsy9qaaj/image/upload/v1769265964/Screenshot_2026-01-24_144003_lmwdfl.png",
    description:
      "KitStruck is a full-stack e-commerce platform that allows users to browse and purchase authentic football jerseys, with secure payments and a personalized dashboard. It provides clear admin control for managing products, orders and users while delivering a smooth and reliable shopping experience.",
    features: [
      "Secure jersey purchases using Stripe payments or Cash on Delivery (COD)",
      "Users can submit reviews and feedback",
      "Built-in support & issue reporting system for users",
      "Personalized user dashboard to view and manage orders",
      "Admin dashboard with visual analytics showing total jerseys, revenue, users and reviews",
      "Visibility into the latest registered users",
      "Order management system for handling customer orders",
      "Admin can respond to support requests",
      "Full product management: add, edit or delete jerseys",
    ],
    technologies: [
      "Next js",
      "Tailwind CSS",
      "CSS",
      "TypeScript",
      "PostgreSQL",
      "NextAuth",
      "Tan Stack Query",
      "Stripe",
      "Axios",
    ],
    challenges:
      "Designing a complete e-commerce flow, from product listing to checkout and order management. Integrating PostgreSQL with Next.js for the first time and handling database operations reliably.",
    whatILearned:
      "I learned how e-commerce web applications work, including payments and orders. Hands-on experience connecting Next.js with PostgreSQL to build a full-stack, database-driven application.",
    futurePlans:
      "Future plan for this project is to add order tracking  (Processing → Shipped → Delivered), Pin delivery location during checkout using maps and Live chat system for instant customer support.",
  },
  {
    id: 2,
    title: "ThreadQube",
    image: "https://i.ibb.co/rKWWk7Fr/thread-banner.png",
    description:
      "ThreadQube is a modern MERN-stack forum platform that fosters community interaction through posts, comments, reactions and announcements. It balances user engagement with strong admin controls, creating a safe and dynamic space for meaningful discussions.",
    features: [
      "User can create and delete posts",
      "Like, dislike and comment on discussions",
      "Update personal details and change passwords",
      "Unlock premium benefits with secure Stripe integration",
      "Admin Announcements – Platform-wide updates & notifications",
      "User Management – Role assignment, promotions and moderation",
      "User can Report on inappropriate content & send feedback",
      "Admin can manage terms & policies, social links and profile settings",
    ],
    technologies: [
      "React.js",
      "Tailwind",
      "CSS",
      "JavaScript",
      "MongoDB",
      "Firebase",
      "JWT Token",
      "Node.js",
      "Express.js",
      "Tan Stack Query",
      "React hook form",
    ],
    challenges:
      "Handling complex MongoDB Aggregation Pipelines for advanced queries was challenging, especially in filtering and managing large datasets.",
    whatILearned:
      "Improved skills in MongoDB aggregation for data analysis. Learned to integrate Stripe payment securely for subscriptions. Enhanced understanding of scalable admin dashboards & user moderation systems.",
    futurePlans:
      "Track revenue from membership subscriptions in the admin dashboard. Premium users gain extended privileges such as editing posts. Real-time notifications for comments and likes",
  },
  {
    id: 3,
    title: "NexUScore",
    image: "https://i.ibb.co/sdkNqSz6/image.png",
    description:
      "NexUSCore is a modern educational platform where users can explore and enroll in a wide variety of courses. Designed for flexibility and ease, learners can level up their skills at their own pace. It features interactive course discovery and secure authentication. The platform is fully responsive and optimized for both students and instructors.",
    features: [
      "Access the most popular and newly added courses",
      "Easily explore courses by topic or interest",
      "Track your progress and manage all your enrolled courses",
      "Role-based for admin and students",
      "Authentication with JWT and Firebase",
    ],
    technologies: [
      "React.js",
      "Tailwind",
      "CSS",
      "JavaScript",
      "MongoDB",
      "Firebase",
      "JWT Token",
      "Node.js",
      "Express.js",
    ],
    challenges:
      "Applying JWT-based authentication and protecting routes securely was a major challenge, especially while handling token expiration and user role verification.",
    whatILearned:
      "Gained deep understanding of JWT authentication flow, and efficient database querying in MongoDB.",
    futurePlans:
      "Add real-time messaging between instructors and students, and implement progress-based certificates.",
  },
  {
    id: 4,
    title: "EventExplorar",
    image: "https://i.ibb.co/6jJhcgC/image.png",
    description:
      "EventExplorar is your ultimate event discovery platform. Whether it's workshops, festivals, or tech meetups, users can stay informed and engaged with the latest events. Users can book seats for events and manage their enrolled sessions. It is built with a focus on interactivity, smooth animations, and mobile-first design.",
    features: [
      "Find events across various categories",
      "View full event descriptions, schedules and locations",
      "Keep track of your booked events",
      "Firebase-based secure login system",
    ],
    technologies: ["React.js", "Tailwind", "JavaScript", "CSS", "Firebase"],
    challenges:
      "Implementing Firebase authentication and integrating it with route protection and user state management was challenging, especially for first-time setup.",
    whatILearned:
      "I learned how to set up Firebase Auth in React, manage user login/logout state, and secure access to protected components.",
    futurePlans:
      "In the future, I plan to add a role-based dashboard where users and organizers can manage events, view bookings, and post their own events.",
  },
  {
    id: 5,
    title: "RecipeBook",
    image: "https://i.ibb.co/v6d1rKdF/image.png",
    description:
      "RecipeBook is a community-driven cooking web app that empowers users to create, explore, and manage recipes with ease. Featuring an elegant interface and personalized dashboards, users can browse others’ recipes, like their favorites, and manage their own culinary creations. Designed with performance, accessibility, and interactivity in mind.",
    features: [
      "Create, edit, and organize personal recipes",
      "Explore shared recipes from other users",
      "Like your favorite dishes",
      "Dashboard interface to view and manage your recipes",
      "Filter recipes based on cuisine and popularity",
    ],
    technologies: [
      "React.js",
      "Tailwind",
      "CSS",
      "JavaScript",
      "MongoDB",
      "Firebase",
      "Node.js",
      "Express.js",
    ],
    challenges:
      "The main challenge was building the backend and dashboard from scratch for the first time, especially setting up routes, database operations, and state handling.",
    whatILearned:
      "I learned how to structure a full-stack project with a backend using Node.js and Express, and how to build a functional dashboard in React connected to the database.",
    futurePlans:
      "Introduce comment sections, ratings, and export-to-PDF functionality for recipes.",
  },
];