const social = {
  github: {
    title: "Github profile",
    url: "https://github.com/justin-phxm/",
    user: "justin-phxm",
  },
  linkedin: {
    title: "LinkedIn profile",
    url: "https://www.linkedin.com/in/justin-pham-32a309153/",
    user: "Justin Pham",
  },
  facebook: {
    title: "Facebook profile",
    url: "https://www.facebook.com/profile.php?id=100009637969718",
    user: "Justin Pham",
  },
  twitter: {
    title: "Twitter account",
    url: "https://twitter.com/phamx04/",
    user: "Justin Pham",
  },
};
const about = {
  sections: [
    {
      title: "professional-info",
      info: [
        {
          title: "experience",
          description:
            "I have a background in game development where I worked at a coding academy called Code Ninjas. I taught young students from the ages of 5 to 15 the basics of coding and game development. I also have experience in web development where I worked with a team of other university students in the 'Calgary Solar Car Club' where I developed their telemetry site and inventory portal.",
        },
        {
          title: "hard-skills",
          description:
            "As a front-end developer, I have experience with NextJS and Angular. When developing the frontend, I prefer to use TailwindCSS but I also have experience in Bulma and Bootstrap. I'm always looking to import a new Node library to spice up my website. As for back-end development, I mainly use Python, AWS, mySQL, and sometimes Firebase. On top of my web development skills, I also have experience in a multitude of different languages such as C, C++, Java, and Assembly. While I typically prefer web development, I take great interest in embedded hardware and software programming. I also have skills in version control, most notably git, and when working with others, I frequently use Figma and Jira. Currently, I am learning about the MERN stack and investigating in machine learning.",
        },
        {
          title: "soft-skills",
          description:
            "I bring more than a tech stack to the table. When it comes to working with others I like to convey my ideas through drawings, diagrams, and neatly presented slide decks. I like to resolve conflict immediately and cannot leave grudges in the back of my mind. I love it when I feel like I am contributing to something greater than myself. Problem solving comes naturally to me, especially when given the right tools and information. I prefer to be a listener rather than a talker, I'm an introvert and like to carefully sort out my thoughts before thinking. When it comes to building relationships with others, I am not afraid to ask the hard questions and invite others to challenge me.",
        },
      ],
    },
    {
      title: "personal-info",
      info: [
        {
          title: "bio",
          description:
            "Hello, I'm Justin Pham, a third-year software engineering student with a passion for web development. My coding journey began when I was first introduced to Python in my freshman year of university. I immediately showed interest in being able to write robust and beautiful code. In the future, I hope I can find an exciting career in web-development where I can tackle challenging problems and come up with creative solutions.",
        },
        {
          title: "interests",
          description:
            "I am quite interested in learning about the relationship between technology and society, specifically on how technology can be used to improve equity, diversity, and inclusion. I am currently taking a class on the subject and am learning about how artifical intelligence has been used to disrupt the status quo. I am hoping that I can use my skills in software engineering to make technology more accessible and available to those in need.",
        },
        {
          title: "education",
          description:
            "I am currently enrolled in the University of Calgary, taking the Bachelors of Science in Software Engineering. I am hoping to graduate in 2025 or 2026. Some relevant courses I have taken include Data Structures and Algorithms, Object Oriented Programming, Principles of Software design and Computer Organization, Operating Systems, Machine Learning, and Full-Stack web development.",
        },
      ],
    },
    {
      title: "hobbies-info",
      info: [
        {
          title: "clubs",
          description:
            " You can find me at a vareity of different clubs at the university, such as the Calgary Solar Car club, where I am busy developing the Telemetry system for the car. I am also a member of the Vietnamese Student Association (VSA), where I am planning the next volleyball tournament. And I also am a member of the Live Event Production club, where I am learning about the different aspects of live event production and helping the team run a light show.",
        },
        {
          title: "favorite-games",
          description:
            "One of my favorite games at the moment is Team Fight Tactics, developed by Riot Games. It is a strategy type game similar to Chess where you assemble your units to defeat your opponents. I am happy to have reached a competitive level in that game, reaching Masters (top 1% playerbase) in Set 3. When I am feeling more relaxed, I like to play Pokemon Go on the university campus and catch Pokemon with my friends.",
        },
      ],
    },
  ],
};

type InfoSection = {
  title: string;
  description: string;
};

type ContactSource = {
  title: string;
  url: string;
  user: string;
};

type Contacts = {
  direct: {
    title: string;
    sources: {
      email: string;
      phone: string;
    };
  };
  social: Record<keyof typeof social, ContactSource>;
  find_me_also_in: Record<string, ContactSource>;
};

type DevInfo = {
  name: string;
  logo_name: string;
  role: string;
  about: {
    sections: {
      title: string;
      info: InfoSection[];
    }[];
  };
  contacts: Contacts;
  gists: string[];
};

export const devInfo: DevInfo = {
  name: "Justin Pham",
  logo_name: "justin-pham",
  role: "Full-stack web developer",
  about,
  contacts: {
    direct: {
      title: "contacts",
      sources: {
        email: "justin.phamx4@gmail.com",
        phone: "+825-712-1219",
      },
    },
    social,
    find_me_also_in: {
      youtube: {
        title: "YouTube channel",
        url: "https://www.youtube.com/",
        user: "username",
      },
      instagram: {
        title: "Instagram account",
        url: "https://www.instagram.com/justinphxm/",
        user: "justinphxm",
      },
      twitch: {
        title: "Twitch profile",
        url: "https://www.twitch.tv/cheziboi/",
        user: "cheziboi",
      },
    },
  },
  gists: [
    "edbac6dc9f294fbe9c4a06aee2ed3d08",
    "0ca4b710774dabe87a73cc9bab63bf03",
  ],
} as const;
