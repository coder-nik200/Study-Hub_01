const getMessage = async (req, res) => {
  const userMessage = req.body.message.toLowerCase();
  let reply = "";

  // 👋 Greetings
  if (userMessage.includes("hello") || userMessage.includes("hi") || userMessage.includes("hey")) {
    reply = "Hello 👋 Welcome to StudyHub! Your smart study companion 📚";

  // 🏫 StudyHub – Platform Info
  } else if (userMessage.includes("studyhub")) {
    reply = "StudyHub is an online learning platform where students can access notes, practice coding, and prepare for exams 🚀";

  } else if (userMessage.includes("what is study hub")) {
    reply = "StudyHub helps students learn DBMS, OS, DSA, and programming with notes, practice questions, and guidance 📘";

  } else if (userMessage.includes("dashboard")) {
    reply = "Your dashboard shows saved notes, recent topics, and your learning progress 📊";

  } else if (userMessage.includes("login")) {
    reply = "Use your registered email and password to login to StudyHub 🔐";

  } else if (userMessage.includes("signup") || userMessage.includes("register")) {
    reply = "You can sign up on StudyHub using your email and create your student profile 👨‍🎓";

  // 📚 Notes & Exams
  } else if (userMessage.includes("notes")) {
    reply = "StudyHub provides easy-to-understand notes for BCA subjects like DBMS, OS, and DSA 📄";

  } else if (userMessage.includes("syllabus")) {
    reply = "You can find semester-wise BCA syllabus inside the StudyHub syllabus section 📘";

  } else if (userMessage.includes("exam")) {
    reply = "StudyHub helps you prepare for exams with important questions and revision notes 📝";

  } else if (userMessage.includes("important questions")) {
    reply = "Important exam questions are available topic-wise in StudyHub to help you score better ⭐";

  // 💻 Coding & Projects
  } else if (userMessage.includes("project")) {
    reply = "StudyHub supports student projects with ideas, guidance, and sample code 💡";

  } else if (userMessage.includes("coding")) {
    reply = "You can practice coding concepts like arrays, loops, and functions on StudyHub 💻";

  } else if (userMessage.includes("mern")) {
    reply = "MERN stack includes MongoDB, Express, React, and Node.js – perfect for full-stack projects 🚀";

  } else if (userMessage.includes("bca project")) {
    reply = "StudyHub is a great BCA project that combines backend, frontend, and database concepts 🎓";

  // 📘 DBMS
  } else if (userMessage.includes("dbms")) {
    reply = "DBMS helps store and manage data efficiently. StudyHub covers DBMS with examples and exam questions 📚";

  } else if (userMessage.includes("sql")) {
    reply = "SQL is used to query databases. StudyHub explains SQL with simple examples and practice queries 🧠";

  // 💻 Operating System
  } else if (userMessage.includes("operating system") || userMessage.includes("os")) {
    reply = "Operating System manages system resources. StudyHub explains OS concepts in simple language ⚙️";

  // 🧠 DSA
  } else if (userMessage.includes("dsa")) {
    reply = "DSA stands for Data Structures and Algorithms. It helps in writing optimized and efficient code 🚀";

  } else if (userMessage.includes("array")) {
    reply = "An array stores multiple values of the same type in contiguous memory locations 📦";

  } else if (userMessage.includes("stack")) {
    reply = "Stack follows LIFO (Last In First Out). Example: Undo operation ↩️";

  } else if (userMessage.includes("queue")) {
    reply = "Queue follows FIFO (First In First Out). Example: Waiting line ⏳";

  // 🌐 Computer Networks
  } else if (userMessage.includes("network")) {
    reply = "Computer networks connect devices to share data and resources 🌐";

  } else if (userMessage.includes("ip address")) {
    reply = "An IP address uniquely identifies a device on a network 📡";

  } else if (userMessage.includes("http")) {
    reply = "HTTP is used for communication between client and server on the web 🌍";

  // 💾 Databases
  } else if (userMessage.includes("mongodb")) {
    reply = "MongoDB is a NoSQL database that stores data in JSON-like documents 📂";

  } else if (userMessage.includes("mongoose")) {
    reply = "Mongoose is an ODM library used to interact with MongoDB in Node.js 🧩";

  // 💻 Computer Basics
  } else if (userMessage.includes("computer")) {
    reply = "A computer processes data into information 💻";

  } else if (userMessage.includes("cpu")) {
    reply = "CPU is the brain of the computer 🧠";

  } else if (userMessage.includes("ram")) {
    reply = "RAM is temporary memory used to store data currently in use ⚡";

  // 🌍 Geography
  } else if (userMessage.includes("capital of india")) {
    reply = "The capital of India is New Delhi 🇮🇳";

  } else if (userMessage.includes("punjab")) {
    reply = "Punjab is a northern state of India known for agriculture and rich culture 🌾";

  } else if (userMessage.includes("largest country")) {
    reply = "Russia is the largest country in the world by area 🌍";

  } else if (userMessage.includes("smallest country")) {
    reply = "Vatican City is the smallest country in the world 🇻🇦";

  // 📅 Date & Time
  } else if (userMessage.includes("today")) {
    reply = `Today's date is ${new Date().toDateString()} 📅`;

  } else if (userMessage.includes("time")) {
    reply = `Current time is ${new Date().toLocaleTimeString()} ⏰`;

  } else if (userMessage.includes("day")) {
    reply = `Today is ${new Date().toLocaleString("en-US", { weekday: "long" })} 😊`;

  } else if (userMessage.includes("month")) {
    reply = `Current month is ${new Date().toLocaleString("en-US", { month: "long" })} 🗓️`;

  } else if (userMessage.includes("year")) {
    reply = `The current year is ${new Date().getFullYear()} 🎉`;

  } else if (userMessage.includes("leap year")) {
    reply = "A leap year occurs every 4 years and has 366 days 📆";

  // 💡 Motivation
  } else if (userMessage.includes("motivate")) {
    reply = "Small daily progress leads to big success 💪📘";

  } else if (userMessage.includes("study tip")) {
    reply = "Study for 45 minutes, take a 10-minute break, and repeat 🧠⏱️";

  // 🆘 Help
  } else if (userMessage.includes("help")) {
    reply = "You can ask about StudyHub, BCA subjects, DBMS, OS, DSA, coding, exams, or general knowledge 😊";

  // ❌ Default
  } else {
    reply = "I'm still learning 😅 Try asking about StudyHub, BCA subjects, coding, exams, or today's date!";
  }

  res.json({ reply });
};

module.exports = { getMessage };
