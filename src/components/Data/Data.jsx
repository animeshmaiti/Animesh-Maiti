// ================= About ===============

// Services data
import webDev from '@assets/web-page.svg';
import machineLearning from '@assets/ai_icon.svg';
import dataAnalysis from '@assets/data_analysis.svg';
import awsCloud from '@assets/aws_icon.svg';

export const ServicesData = [
  {
    img: webDev,
    title: 'Web Development',
    desc: "Mostly working with modern full stack web technologies like MERN stack. Now I'm working lot with backend with python flask,...",
  },
  {
    img: machineLearning,
    title: 'Machine Learning',
    desc: "I'm working on a machine learning project to predict Dyslexia using EEG data, applying supervised learning techniques...",
  },
  {
    img: dataAnalysis,
    title: 'Data Analysis',
    desc: "I'm applying data science techniques to analyze and interpret complex datasets, focusing on projects in predictive....",
  },
  {
    img: awsCloud,
    title: 'AWS Cloud',
    desc: "I'm starting out with AWS Cloud, focusing on web hosting and architecting efficient solutions that...",
  },
];

// Projects data
import dyslexia from '@assets/dyslexia.jpg';
import chatBot from '@assets/chatbot_icon.svg';
import chatIcon from '@assets/chat_icon.svg';
import textIcon from '@assets/text_icon.svg';

export const projectData = [
  {
    avatar: dyslexia,
    name: 'Dyslexia Prediction',
    text: "Project Objective: I'm developing a machine learning model to predict Dyslexia through EEG data analysis. The model currently leverages supervised learning techniques to classify or predict instances of Dyslexia.\n\nData Processing & Visualization: For data manipulation and pre-processing, I use tools like pandas and numpy. Data cleaning and feature engineering help refine the dataset, and I visualize feature relationships and insights using matplotlib and seaborn.\n\nDimensionality Reduction: Given the high dimensionality of EEG data, I use Principal Component Analysis (PCA) from sklearn to reduce dimensions and streamline model training and performance.\n\nAlgorithms and Model Building: My current approach uses SVM from sklearn and a simple neural network from TensorFlow's Keras library for classification tasks. The models are trained on labeled EEG data to identify patterns and features correlated with Dyslexia.",
    link: 'https://github.com/animeshmaiti/dyslexia-detection-eeg',
  },
  {
    avatar: chatBot,
    name: 'Ai chat Web App',
    text: 'In my recent project, I developed a web application interface similar to ChatGPT using Vite and ReactJS on the frontend, paired with a C++ backend specifically designed for model inference. The backend leverages BitNet, an open-source inference framework developed in collaboration with Microsoft, which is optimized to run fast, lossless inference on CPUs for 1-bit Large Language Models (LLMs).\n\nFor the inference process, I implemented a runInference.h file, which triggers the BitNet model inference through a Python command. This command processes text-based prompts, extracts answers, and returns responses in JSON format. On the server side, a server.cpp file handles HTTP POST requests, calling the inference function and serving the results via an API using the Crow and nlohmann/json libraries.\n\nThe tech stack includes core C++ libraries such as <iostream>, <cstdio>, and <unistd.h>, allowing me to manage process calls, path handling, and data extraction efficiently. This setup facilitates real-time question-answering, showcasing an advanced use of C++ for serving AI models, with a robust backend that complements the responsive frontend.',
    link: 'https://github.com/animeshmaiti/Ai-chat-bot',
  },
  {
    avatar: chatIcon,
    name: 'Chat Application',
    text: 'I created a full-stack chat application using the NERN stack—Node.js, Express, React, and MongoDB—with a focus on real-time messaging and secure communication. The frontend leverages React along with socket.io-client for live updates, zustand for state management, and react-router-dom for navigation. Notifications are integrated with react-hot-toast, and icons are provided by react-icons. On the backend, Express and Node.js power the server, using socket.io for real-time functionality, while bcryptjs and jsonwebtoken manage secure authentication. MongoDB, accessed through Mongoose, serves as the database, enabling efficient data handling for seamless user interactions.',
    link: 'https://github.com/animeshmaiti/Chat-App',
  },
  {
    avatar: textIcon,
    name: 'Text Utility App',
    text: 'It is a react based web app which provides various text utility functions like changing case, removing extra spaces, Extract email from text, Count words, Approximate read time, Copy output to clipboard, With different theme dark and light mode.',
    link: 'https://github.com/animeshmaiti/textUtils',
  },
];

// Programming language data
import cpp from '@assets/C++.svg';
import python from '@assets/Python.wine.svg';
import jupyter from '@assets/Jupyter_logo.svg';
import js from '@assets/JavaScript_logo.svg';
import react from '@assets/react.svg';
import sql from '@assets/SQL.svg';
import mongoDB from '@assets/MongoDB.svg';
import android from '@assets/Android.svg';
import aws from '@assets/AWS.svg';
import vsCode from '@assets/VScode.svg';
import visio from '@assets/Visio.svg';
import ubuntu from '@assets/Ubuntu.svg';
import windows from '@assets/Windows.svg';
import tensorflow from '@assets/Tensorflow.svg';
import pandas from '@assets/Pandas.svg';

export const languageData = [
  cpp,
  python,
  jupyter,
  tensorflow,
  pandas,
  react,
  js,
  sql,
  mongoDB,
  android,
  aws,
  vsCode,
  visio,
  ubuntu,
  windows,
];

// ==================== Resume ======================
// Education data
export const EducationData = [
  {
    title: 'Gyandeep Vidyapith, West Bengal, WBBSE',
    date: '2018 — 2019',
    description: 'Completed my secondary education with 81% marks.',
  },
  {
    title: 'Egra JL High School, West Bengal, WBCHSE',
    date: '2019 — 2021',
    description: 'Completed my higher secondary education with 84% marks.',
  },
  {
    title: 'Kalinga Institute of Industrial Technology, Bhubaneswar',
    date: '2021 — current',
    description:
      'Currently pursuing my B.Tech in Electronics & Computer Science and Engineering. Final year student.',
  },
];

// Experience data
export const ExperienceData = [
  {
    title: 'Dyslexia Detection Using EEG',
    date: 'Sep 2023 - Present',
    description:
      'Led a team of four in a research-driven project aimed at detecting dyslexia using EEG data. Responsible for developing the ML model, data processing pipeline, and coordinating research efforts.'
  },
  {
    title: 'Project\'s key achievements',
    date: 'Feb 2024',
    description:'Selected for KIIT Annual Project Expo, KREATIVITY-2024 (Feb 10, 2024)'
  },
  {
    title: 'Aspiring Professional',
    date: 'Present',
    description:
      'I am a motivated student actively seeking opportunities to apply my knowledge and skills in a professional setting. Eager to gain hands-on experience and contribute to a dynamic team.',
  },
  {
    title: 'Continuous Learner',
    date: 'Present',
    description:
      'Although I do not have prior industry experience, I am dedicated to building a strong foundation through ongoing learning and practical projects. My academic journey and personal initiatives reflect my commitment to growth and excellence.',
  },
];

export const SkillsData = [
  {
    title: 'Web development',
    value: 80,
  },
  {
    title: 'Machine Learning',
    value: 70,
  },
  {
    title: 'Data Analysis',
    value: 70,
  },
  {
    title: 'Cloud Computing',
    value: 50,
  },
];

// ==================== Project ======================
import bitNet from '@assets/BitNet.jpg';
import sentimental from '@assets/sentimental.png';
import chatApp from '@assets/chatApp.png';
import aiChat from '@assets/AiChatBot.png';
import expense from '@assets/expenseTrack.png';
import newsApp from '@assets/newsApp.png';
import notebook from '@assets/notebook.png';

export const ProjectListData = [
  {
    title: 'Dyslexia Prediction using EEG',
    category: 'Machine Learning',
    img: dyslexia,
    link: 'https://github.com/animeshmaiti/dyslexia-detection-eeg',
  },
  {
    title: 'BitNet',
    category: 'Machine Learning',
    img: bitNet,
    link: 'https://github.com/animeshmaiti/BitNet/tree/dev',
  },
  {
    title: 'Sentiment Analysis',
    category: 'Machine Learning',
    img: sentimental,
    link: 'https://github.com/animeshmaiti/AI-Python/tree/master/sentimental-analysis',
  },
  {
    title: 'Chat Application',
    category: 'Web App',
    img: chatApp,
    link: 'https://github.com/animeshmaiti/Chat-App',
  },
  {
    title: 'Chat Bot',
    category: 'Web App',
    img: aiChat,
    link: 'https://github.com/animeshmaiti/Ai-chat-bot',
  },
  {
    title: 'Expanse Tracker',
    category: 'Web App',
    img: expense,
    link: 'https://github.com/animeshmaiti/Expense-Tracker',
  },
  {
    title: 'News App',
    category: 'Web App',
    img: newsApp,
    link: 'https://github.com/animeshmaiti/News-App',
  },
  {
    title: 'Notebook',
    category: 'Web App',
    img: notebook,
    link: 'https://github.com/animeshmaiti/Notebook',
  },
];

// =============== Blog ==============
import blog1 from '@assets/blog-1.jpg';

export const blogPosts = [
  {
    link: '#',
    img: blog1,
    category: 'Tech',
    date: 'Coming Soon',
    title: 'Ai Will Change The World',
    sortDescription:
      'How AI is changing the world and how it will impact the future.',
  },
];
