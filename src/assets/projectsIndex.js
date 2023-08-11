import whereswaldo from "./whereswaldo.png";
import membersOnly from "./membersOnly.png";
import battleship from "./battleship.png";
import todolist from "./todolist.png";
import blog from "./blog.png";
import mood from "./mood.png";

export const myProjects = [
  {
    title: "Mood App",
    img: mood,
    github: "https://github.com/skim2264/Mood-App",
    demo: "https://mood-app-production.up.railway.app/",
    description: "A mood tracking app that provides users recommendations based on their mood. App fetches data from my API and is deployed on Railway.",
    skills: ["typescript", "react", "html", "sass", "nodejs", "expressjs", "mongodb", "git"]
  },
  {
    title: "Blog API",
    img: blog,
    github: "https://github.com/skim2264/Blog_Client",
    demo: "https://skim2264.github.io/Blog_Client/",
    description: "A blog using an API backend with 2 different front-ends for accessing and editing posts.",
    skills: ["javascript", "react", "html", "css", "nodejs", "expressjs", "mongodb", "git"]
  },
  {
    title: "Where's Waldo",
    img: whereswaldo,
    github: "https://github.com/skim2264/Where-s-Waldo",
    demo: "https://where-s-waldo-551fb.web.app/",
    description: "A fun app where you locate characters within an image.",
    skills: ["react", "html", "sass", "firebase", "git"]
  },
  {
    title: "Members' Only",
    img: membersOnly,
    github: "https://github.com/skim2264/Members-Only",
    demo: "https://members-only-clubhouse.up.railway.app/",
    description: "An exclusive clubhouse for only members to write and read anonymous posts",
    skills: ["javascript", "pug", "html", "css", "nodejs", "expressjs", "firebase", "git"]
  },
  {
    title: "Battleship",
    img: battleship,
    github: "https://github.com/skim2264/Battleship",
    demo: "https://skim2264.github.io/Battleship/",
    description: "Battleship game against the computer",
    skills: ["javascript", "html", "sass", "webpack", "jest", "git"]
  },
  {
    title: "To Do List",
    img: todolist,
    github: "https://github.com/skim2264/To-Do-List",
    demo: "https://skim2264.github.io/To-Do-List/",
    description: "To Do List Website where you can segregate different projects and display by due dates.",
    skills: ["javascript", "html", "css", "webpack", "git"]
  },
]