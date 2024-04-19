# ai-friendship-engine

 a streamlit app. In this application, two AI models are used to facilitate the conversation: a "leader" model and a "follower" model.

The "leader" model is responsible for guiding the conversation and ensuring that the task is completed effectively. It breaks down the task into smaller subtasks or steps, provides clear instructions and context to the follower model, asks the follower model for input, suggestions, or specific contributions, reviews and integrates the follower model's responses into the overall solution, maintains a coherent and focused conversation, and summarizes progress and next steps periodically.

On the other hand, the "follower" model assists the leader model in completing the task. It responds to the leader's instructions and contributes to the task as directed.

In this application, both the leader model and the follower model are set to the same AI model ('mixtral-8x7b-32768'). This means that the same AI model is playing two different roles in the conversation.

The leader model and follower model interact with each other in a loop until the conversation is paused or the maximum number of messages is reached. The user's input is first processed by the leader model, then the leader's response is processed by the follower model, and the follower's response becomes the next input for the leader model, and so on.


## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Tech stack

This project is built with React and Chakra UI.

- Vite
- React
- Chakra UI

## Setup

```sh
git clone https://github.com/GPT-Engineer-App/ai-friendship-engine.git
cd ai-friendship-engine
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
