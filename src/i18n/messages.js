import { LOCALES } from "./locales";

export const messages = {
  [LOCALES.ENGLISH]: {
    home_salutation: "Hi! I'm",
    home_job: "Front End Developer",
    specialisation: "Specialized in building web apps in",
    price_display:
      "How {n, number, ::currency/USD} is displayed in your selected language",
    number_display:
      "This is how {n, number} is formatted in the selected locale",
    start_today: "Start Today: {d, date}",
    // menu
    about_project: "About the project",
    contact_us: "Contact us",
  },
  [LOCALES.FRENCH]: {
    home_salutation: "Hello, Moi c'est",
    home_job: "Développeuse Front End",
    specialisation: "Specialisée dans le developemet d'application web JS ou React JS.",
    price_display:
      "Comment {n, number, ::currency/USD} $ s'affiche dans la langue sélectionnée",
    number_display:
      "Voici comment {n, number} sont formatés dans les paramètres régionaux sélectionnés ",
    start_today: "Commencez aujourd'hui: {d, date}",
    // menu
    about_project: "À propos du projet",
    contact_us: "Contactez-nous",
  }
};