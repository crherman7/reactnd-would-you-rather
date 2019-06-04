# reactnd-would-you-rather
Web application for the game "Would You Rather?". The user is able to login with an existing user only. The three users that a user can login as is: "sarahedo", "tylermcginnis" and "johndoe". There is no need to supply a password; a password is not necessary to log in. A user can then view the unanswered and answered questions from the game from the home page. The user can click on any question to either answer or view the stats of the question. If the user is unanswered the user how has the option to select an answer which will be displayed as green and the data will be updated. Once answered, you cannot change your answer. The user has the option to create a new question from the "New Question". Enter text in both cards and click submit. The data will be updated and the new question will show up under the unanswered questions section. You can also view the leaderboard to see who has answered and asked the most questions. To logout simply click on your username in the upper right hand corner and click logout.

## TL;DR

To get started developing right away:

- install all project dependencies with `npm install`
- start the development server with `npm start`

## What You're Getting

```bash
├── README.md
├── package-lock.json
├── package.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
├── src
│   ├── actions
│   │   ├── authedUser.js
│   │   ├── questions.js
│   │   ├── shared.js
│   │   └── users.js
│   ├── assets
│   │   ├── fonts
│   │   │   ├── Karla-Bold.ttf
│   │   │   ├── Karla-BoldItalic.ttf
│   │   │   ├── Karla-Italic.ttf
│   │   │   └── Karla-Regular.ttf
│   │   ├── icons
│   │   │   ├── avatar.png
│   │   │   ├── contact.svg
│   │   │   ├── facebook.svg
│   │   │   ├── info.svg
│   │   │   ├── instagram.svg
│   │   │   ├── lock.svg
│   │   │   ├── name.png
│   │   │   └── twitter.svg
│   │   └── images
│   │       ├── johndoe.jpg
│   │       ├── sarahedo.jpeg
│   │       └── tylermcginnis.jpg
│   ├── components
│   │   ├── App.js
│   │   ├── Footer.js
│   │   ├── Leaderboard.js
│   │   ├── Login.js
│   │   ├── LoginForm.js
│   │   ├── Nav.js
│   │   ├── NewQuestion.js
│   │   ├── Question.js
│   │   ├── Questions.js
│   │   ├── QuestionsItem.js
│   │   └── RegistrationForm.js
│   ├── index.css
│   ├── index.js
│   ├── middleware
│   │   ├── index.js
│   │   └── logger.js
│   ├── reducers
│   │   ├── authedUser.js
│   │   ├── index.js
│   │   ├── questions.js
│   │   └── users.js
│   ├── styles
│   │   ├── Footer.css
│   │   ├── Leaderboard.css
│   │   ├── Login.css
│   │   ├── Nav.css
│   │   ├── NewQuestion.css
│   │   ├── Question.css
│   │   ├── Questions.css
│   │   └── QuestionsItem.css
│   └── util
│       ├── _DATA.js
│       └── api.js
└── yarn.lock
```