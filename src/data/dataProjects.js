import calculatorimg from "@/assets/projects/calculator.jpg"
import f1img from "@/assets/projects/f1.jpg"
import expensesimg from "@/assets/projects/expenses.jpg"
import HeroesApp from "@/assets/projects/HeroesApp.jpg"
import CelestialChronicle from "@/assets/projects/celestial-chronicle.jpg"
import chatNonContact from "@/assets/projects/Chat-non-contact-whatsapp.jpg"
import journal from "@/assets/projects/journal.jpg"
import last from "@/assets/setup.jpg"



export const IconTech = {
  HTML: "HTML",
  CSS: "CSS",
  REACT: "REACT"
}

export const dataProjects = [
  {
    img: calculatorimg,
    title: "calculator",
    tech: {
      icon: [IconTech.HTML, IconTech.CSS, IconTech.REACT],
      text: ["useReducer", "styled-components"]
    },
    url: "https://seebaasiman.github.io/Calculator-useReducer/"
  },
  {
    img: f1img,
    title: "f1-fan",
    tech: {
      icon: [IconTech.HTML, IconTech.CSS, IconTech.REACT],
      text: ["axios", " react-router-dom", " react-twitter-embed", " styled-components", "API'ergast'", "(customHooks: useCalendar, useCountdown, useDeviceType)"]
    },
    url: "https://f1-fan.vercel.app/"
  },
  {
    img: expensesimg,
    title: "expenses calculate",
    tech: {
      icon: [IconTech.HTML, IconTech.CSS, IconTech.REACT],
      text: ["Reduxjs/toolkit", " animate.css", "react-router-dom", "sweetalert2", "styled-components", "boostrap", "customHooks: useCostPerson, useForm"]
    },
    url: "https://seebaasiman.github.io/Expenses-App/"
  },
  {
    img: HeroesApp,
    title: "heroes app",
    tech: {
      icon: [IconTech.HTML, IconTech.CSS, IconTech.REACT],
      text: ["query-string",
        "react-router-dom (private routes and public routes)",
        "API 'superheroapi'",
        "styled-components", " useContext (Auth)", " useReducer", ,
        "customHooks: useCardEffect, useForm, useGetHeroPage, useGetPublisher,useBagInvetory, useDragDice, useWindowResize",
      ]
    },
    url: "https://heroes-app-beige.vercel.app"
  },
  {
    img: CelestialChronicle,
    title: "celestial chronicle",
    tech: {
      icon: [IconTech.HTML, IconTech.CSS, IconTech.REACT],
      text: ["intersection-observer",
        "react-router-dom",
        "styled-components",
        "customHooks: useCardPlanet, useCountDownTimer, useFetch, useLocalStorage"]

    },
    url: "https://celestial-chronicle.vercel.app/"
  },
  {
    img: chatNonContact,
    title: "chat-non-contact-whatsapp",
    tech: {
      icon: [IconTech.HTML, IconTech.CSS, IconTech.REACT],
      text: ["styled-components", "CustomHook: useForm"]

    },
    url: "https://seebaasiman.github.io/Chat-non-contact-whatsapp/"
  },
  {
    img: journal,
    title: "journal app",
    tech: {
      icon: [IconTech.HTML, IconTech.CSS, IconTech.REACT],
      text: ["firebase", "react-router-dom", "@reduxjs/toolkit", "styled-components", "sweetalert2", "customHooks: useCheckAuth, useDraggable, useForm, useNoteView, useThemeMode"]

    },
    url: "https://journal-app-eight-pi.vercel.app/"
  },
  {
    img: last,
  }
];
