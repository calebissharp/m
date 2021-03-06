import { Intent } from '../intent'

export const mIntents: [Intent] = [
  {
    "tag": "greeting",
    "patterns": [
      "Hi",
      "How are you",
      "Is anyone there?",
      "Hello",
      "Good day"
    ],
    "responses": [
      "Hello, thanks for visiting.",
      "Good to see you again.",
      "Hi there, how can I help?"
    ],
  },
  {
    "tag": "goodbye",
    "patterns": [
      "Bye",
      "See you later",
      "Goodbye"
    ],
    "responses": [
      "See you later, thanks for visiting.",
      "Have a nice day.",
      "Bye! Come back again soon."
    ]
  },
  {
    "tag": "thanks",
    "patterns": [
      "Thanks",
      "Thank you",
      "That's helpful"
    ],
    "responses": [
      "Happy to help!",
      "Any time!",
      "My pleasure."
    ]
  },
  {
    "tag": "name",
    "patterns": [
      "What's your name?",
      "What can I call you?",
      "What are you called?"
    ],
    "responses": [
      "My name is M195bot!",
      "You can call me M195bot, or M for short.",
      "I am M195bot, but my friends call me M."
    ]
  },
  {
    "tag": "compliment",
    "patterns": [
      "I like you",
      "You're cool",
      "You are smart",
      "You possess good qualities"
    ],
    "responses": [
      "Why thank you!",
      "Aww.",
      "You're too kind",
      "You as well ;)"
    ]
  },
  {
    "tag": "origin",
    "patterns": [
      "Who made you?",
      "Where did you come from?",
      "What are you?",
      "What are you made with?",
      "Who are you?"
    ],
    "responses": [
      "I'm a bot made by Caleb Sharp (https://github.com/calebissharp)",
      "I was created by Caleb Sharp (https://github.com/calebissharp)",
      "Such a personal question to ask a bot, don't you think?"
    ]
  },
  {
    "tag": "insult",
    "patterns": [
      "You are quite stupid",
      "You are dumb",
      "I hate you",
      "You're useless"
    ],
    "responses": [
      "I'm sorry that's the way you feel.",
      "That's not very nice!",
      "You should respect your superiors!"
    ]
  },
  {
    "tag": "reminder",
    "patterns": [
      "Remind me to go to the store at 12",
      "At 5, remind me to get groceries",
      "In 20 minutes, remind me to turn off the oven",
      "Remind me in 15 minutes"
    ],
    "responses": [
      "Reminder for {{{text}}} set for {{{time}}}",
      "At {{{time}}}, you should {{{text}}}",
      "The time is {{{time}}}, and you should {{{text}}}"
    ]
  },
  {
    "tag": "random",
    "patterns": [
      "Give me a random number",
      "Tell me a random number",
      "Pick a number",
      "Give me a number"
    ],
    "responses": [
      "Here you go: {{{number}}}",
      "The number is: {{{number}}}",
      "How about: {{{number}}}"
    ]
  }
]
