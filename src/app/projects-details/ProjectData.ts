
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
    title: "Betrak",
    image: "https://res.cloudinary.com/ddsy9qaaj/image/upload/v1777534806/Screenshot_2026-04-30_133924_pn9zx6.png",
    description:
      "Betrak takes a short assessment covering daily usage habits, sleep patterns and mental health, then runs the data through a machine learning backend to classify your addiction level with a confidence score. The results page breaks down your profile with interactive charts and gives personalized recommendations based on the prediction. Built with Next.js on the frontend and FastAPI + scikit-learn on the backend, with Google OAuth.",
    features: [
      "Addiction level classification: Low, Medium or High with confidence score",
      "Multi-step assessment covering usage, sleep and mental health",
      "Interactive results with daily usage chart, intensity gauge and sleep correlation chart",
      "Personalized suggestions based on prediction output",
      "Assessment history stored per user in PostgreSQL",
    ],
    technologies: [
      "Next js",
      "Tailwind CSS",
      "TypeScript",
      "PostgreSQL",
      "NextAuth",
      "Tan Stack Query",
      "Shadcn UI", 
      "Python", 
      "FastAPI", 
      "SQLAlchemy", 
      "scikit-learn", 
      "SMOTE", 
      "pandas", 
      "joblib"
    ],
    challenges:
      "First time using Python as a backend and training an actual ML model, bridging a FastAPI service with a Next.js frontend while handling data preprocessing, SMOTE balancing and model serialization was all new territory.",
    whatILearned:
      "How to connect a Next.js frontend with a Python/FastAPI backend across different runtimes and how a trained classifier actually turns input features into a real prediction with confidence.",
    futurePlans:
      "Allow users to retake the assessment over time and track how their habits shift, add a personalized progress tracker showing improvement or decline across sessions and introduce a comparison view showing how a user's lifestyle stacks up against the healthiest profiles in the dataset.",
  },
  {
    id: 2,
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
    id: 3,
    title: "ThreadQube",
    image: "https://res.cloudinary.com/ddsy9qaaj/image/upload/v1769540010/Screenshot_2026-01-28_005220_jwd5vn.png",
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
    id: 4,
    title: "NexUScore",
    image: "https://res.cloudinary.com/ddsy9qaaj/image/upload/v1769540209/Screenshot_2026-01-28_005625_fxzogq.png",
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
  
];