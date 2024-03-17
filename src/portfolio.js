/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Kevin Tsafack",
  title: "Hi all, I'm Kevin",
  subTitle: emoji(
    "I am an avid follower and lover of modern technology. I enjoy the limitless potential of impact that I can have with what I build. It is what pushes me every day to become a better professional, and a better person. I love everything open source and self hosting. When I'm not working, you'll most likely find me either on xda developper or /r/sysadmin."
  ),
  resumeLink:
    "https://docs.google.com/document/d/1Iv-634S-XQ7g9k0ll4M83eIzA91FET0-/edit?usp=sharing&ouid=111942231121839925695&rtpof=true&sd=true", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/8ten10",
  linkedin: "https://www.linkedin.com/in/8ten10/",
  gmail: "lestaf4@protonmail.com",
  youtube: "https://youtube.com/@8ten10",
  // facebook: "https://www.facebook.com/saad.pasta7",
 // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "linux",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "windows",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Montgomery College",
      logo: require("./assets/images/college1.jpg"),
      subHeader: "Associate of Applied Science in Cybersecurity",
      duration: " June - May",
      desc: "Designated as a Center of Academic Excellence in Cyber Defense (CAE-CD) by the National Security Agency (NSA).",
      descBullets: [
        "follows National Security Telecommunications and Systems Security Instruction (NSTISSI) 4011 and 4013 standards.",
        "certified as mapping 100% to the Committee on National Security Systems (CNSS) National Standard 4011"
      ]
    },
    {
      schoolName: "Server Academy",
      logo: require("./assets/images/server.png"),
      subHeader: "Certified Deployment Associate",
      duration: "September 1975 - April 1978",
      desc: "Designed CCu to build the skills needed to embrace the challenges of any job",
      descBullets: [
	 "Offered curriculum in cloud, and development technologies"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "IT Support",
      company: "Vontas",
      companylogo: require("./assets/images/vontas.png"),
      date: " Present",
      desc: "My most recent position",
      descBullets: [
        "Implemented fully automated and unattended deployment of Windows hosts with PowerShell script, WDS and MDT",
        "Maintained the monitoring and alerting policy and procedures documentation in collaboration with the InfoSec team",
	"Managed OU, Applying GPOs to sites, OUs, and Local computers",
	"Deployed Active Directory DS roles on Windows Server 2016",
	"Maintained the monitoring and alerting policy and procedures documentation"
      ]
    },
    {
      role: "Volunteer",
      company: "Project Reboot",
      companylogo: require("./assets/images/reboot.jpg"),
      date: "February 2016 – May 2018",
      desc: "Volunteered to fix and provide computers to low-income residents",
      descBullets: [
	  "Assembled and disassembled Desktops and Laptops (HP, Dell, Lenovo, Acer, …) for refurbishment purpose",
	  "Suggested and Implemented MDT to automate Windows 10 deployment, reducing workload, and received praises from management",
	  "Deployed Windows 10 on various computers through Microsoft Deployment Toolkit (MDT",
	  "Performed various software and patches installations"
      ]
    },
    {
      role: "Projects",
      company: "Github",
      companylogo: require("./assets/images/git.jpg"),
      date: "Present",
      desc: "All my personnal Projects are hostedmmpn my github repository and youtube channel."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "My Projects",
  subtitle: "A FEW PROJECTS I HAVE WORKED ON",
  projects: [
    {
      image: require("./assets/images/bottom_Diag.png"),
      projectName: "Network Design, Implementation and Security",
      projectDesc: "IT networks are the backbone of today’s communication infrastructures. As they become mission-critical for business functions, design decisions made by IT professionals can have far-reaching implications. A network with a well-planned design will perform better. It will be more secure and resilient and easier to troubleshoot, and it will scale easily and adapt to future technologies. This project demonstrates my expertise in crafting and implementing such solutions.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/8Ten10/Network-Design-Implementation-and-Security"
	},
        {
          name: "Video demonstration",
          url: "https://www.youtube.com/watch?v=1HC-K3ZQtRo&list=PLcsz_xs5B86QdHUge6v2alwKYctA-qpro"
        }
      ]
    },
    {
      image: require("./assets/images/an.png"),
      projectName: "Ansible Automate Managed Environment",
      projectDesc: "This is a pretty simple playbook to set up an environment between a control node and managed nodes.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/8Ten10/Ansible_automate_managed_environment"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications Obtained in Recent months 🙂",

  achievementsCards: [
    {
      title: "Red Hat Certified Engineer",
      subtitle:
        "The performance-based Red Hat Certified Engineer (RHCE) exam (EX294) tests your knowledge and skill in managing multiple systems using Red Hat Ansible Engine and executing common system administration tasks across a number of systems with Ansible.",
      image: require("./assets/images/rhce.png"),
     // imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://rhtapps.redhat.com/verify?certId=230-052-730"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/1vx1RKUFFwnB4D3Ax7cKzJ0uV84iPYYNj/view?usp=drive_link"
        },
      ]
    },
    {
      title: "Red Hat Certified System Administrator",
      subtitle:
        "The performance-based Red Hat Certified System Administrator (RHCSA) exam (EX200) tests your knowledge in areas of system administration common across a wide range of environments and deployment scenarios.",
      image: require("./assets/images/rhcsa.png"),
      //imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://rhtapps.redhat.com/verify?certId=230-052-730"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/17BYyK_iNlpJQHrDA-_Tn_ULtIz-L3R1p/view?usp=sharing"
        },
      ]
    },

    {
      title: "CompTIA Security+ ce ",
      subtitle: "Earners of the CompTIA Security+ certification have the knowledge and skills necessary to perform core security functions required of any cybersecurity role. CompTIA Security+ professionals know how to identify and address potential threats, attacks and vulnerabilities and they have established techniques in risk management, risk mitigation, threat management and intrusion detection.",
      image: require("./assets/images/security.png"),
      //imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: "https://www.credly.com/badges/e39d7589-e7f1-42ab-b2f0-57326f3cee26/public_url"},
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/1kfKY44iR0Upv81o-kRJPSpMTR-jl_pCv/view?usp=sharing"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    " I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://github.com/8Ten10/HUANANZHI-X99-8M-F-Hackintosh",
      title: "Hacking a Huananzhi X99-8M-F MoBo",
      description:
        "A relatively simple guide on how to hack a MoBo to get SOnoma to work with it. My EFI is shared here with a few other tools used to get things done."
    },
    {
      url: "https://www.youtube.com/watch?v=1HC-K3ZQtRo&list=PLcsz_xs5B86QdHUge6v2alwKYctA-qpro",
      title: "Building a Network Infrastructure",
      description:
        "Here I have a playlist containing a few videos showcasing a complete network deployment with both frontend and backend infrastructures in a nested VM. "
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "Youtube Channel 🎥 🎙️",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "All The Cool Stuff on my Youtube Channel ",
      //subtitle: "",
      slides_url: "https://www.youtube.com/watch?v=1HC-K3ZQtRo&list=PLcsz_xs5B86QdHUge6v2alwKYctA-qpro",
      event_url: "https://www.youtube.com/watch?v=1HC-K3ZQtRo&list=PLcsz_xs5B86QdHUge6v2alwKYctA-qpro"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Youtube Channel 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    ""
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "(202) 825 4521",
  email_address: "lestaf4@protonmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
