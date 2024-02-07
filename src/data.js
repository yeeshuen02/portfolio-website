import pythonImg from "./assets/skills/python.png";
import javaImg from "./assets/skills/java.png";
import firebaseImg from "./assets/skills/firebase.png";
import gitImg from "./assets/skills/git.png";
import htmlImg from "./assets/skills/html.png";
import javascriptImg from "./assets/skills/javascript.png";
import rImg from "./assets/skills/R.png";
import reactImg from "./assets/skills/reactjs.png";
import cssImg from "./assets/skills/css.png";
import figmaImg from "./assets/skills/figma.png";

import strokeImg from "./assets/projects/stroke.png";
import churnImg from "./assets/projects/churn.png";
import carImg from "./assets/projects/car.png";
import onemindImg from "./assets/projects/onemind.png";

export const LANGUAGES = [
  {
    image: pythonImg,
    title: "Python",
  },
  {
    image: javaImg,
    title: "Java",
  },
  {
    image: htmlImg,
    title: "HTML",
  },
  {
    image: cssImg,
    title: "CSS",
  },
  {
    image: javascriptImg,
    title: "Javascript",
  },
  {
    image: rImg,
    title: "R",
  },
];

export const TECHNOLOGIES = [
  {
    image: gitImg,
    title: "Git",
  },
  {
    image: figmaImg,
    title: "Figma",
  },
  {
    image: reactImg,
    title: "React",
  },
  {
    image: firebaseImg,
    title: "Firebase",
  },
];

export const PROJECTS = [
  {
    image: onemindImg,
    title: "OneMind (In Progress)",
    description:
      "OneMind is a website designed specifically for clinicians and psychiatrists. The platform can process EEG data as input and utilise a CNN+LSTM model to predict the likelihood of depression. This advanced functionality empowers clinicians with actionable insights derived from EEG analysis. Moreover, OneMind offers robust capabilities for securely storing and managing patient information, enabling seamless access to comprehensive reports. Developed collaboratively by a team of five members in an agile environment.",
    tech: "React, Firebase",
    link: "https://github.com/yeeshuen02/one-mind",
    isReverse: false,
  },
  {
    image: strokeImg,
    title: "Stroke Prediction",
    description:
      "The aim of this project is to apply various machine learning models to find the best model that can predict the likelihood of an individual getting a stroke. Also, by analysing the data, features that are connected to a happening of stroke was found. A few models was deployed and the best model was found after trail and error.",
    tech: "Python",
    link: "https://github.com/yeeshuen02/ml-projects/blob/24a83b0138c3700100cb82c3e3d1b0ef551c9b76/Stroke_Prediction.ipynb",
    isReverse: true,
  },
  {
    image: carImg,
    title: "Electric Car Price Prediction",
    description:
      "This project utilised a linear regression model to predict the car price by including various features. Data cleaning and feature selection was done to ensure that the data was ready for model deployment. Some graphs were plotted to gain a better insight on the dataset.",
    tech: "R",
    link: "https://github.com/yeeshuen02/ml-projects/blob/24a83b0138c3700100cb82c3e3d1b0ef551c9b76/Electric_Car_Price.ipynb",
    isReverse: false,
  },
  {
    image: churnImg,
    title: "Bank Customer Churning Prediction",
    description:
      "Data visualisation was performed using Matplotlib, with RUS and SMOTE employed to address imbalanced data in predicting bank customer churn. Machine learning models including k-nearest neighbour and logistic regression were utilised to analyse and compare their performance in predicting customer churn. By implementing RUS and SMOTE, the accuracy of each model was evaluated, providing valuable insights into the effectiveness of different techniques in handling imbalanced datasets and predicting customer behaviour.",
    tech: "Python",
    link: "https://github.com/yeeshuen02/ml-projects/blob/24a83b0138c3700100cb82c3e3d1b0ef551c9b76/ML_Individual.ipynb",
    isReverse: true,
  },
];
