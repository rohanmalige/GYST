# GYST
GYST (Get Your Stuff Together) is a React-based chatbot application designed to be a "best friend in a bot" for students at UC Davis. The chatbot, named Marv, leverages the OpenAI API to provide helpful, compassionate, and knowledgeable responses about campus life, local attractions, and more.

## Features

- **Conversational AI:** Interact with Marv, a friendly chatbot powered by OpenAI's `text-davinci-003` model.
- **UC Davis Centric:** Marv is equipped with knowledge about UC Davis, including campus resources, popular restaurants, parks, bike paths, and sports facilities.
- **Supportive Persona:** The prompt for Marv is engineered to be kind, compassionate, and supportive, acting as a virtual friend.
- **Dynamic Responses:** Marv can provide movie recommendations, directions, and discuss hobbies like baking, music, and sports.
- **Simple Chat Interface:** A clean and intuitive chat interface built with React and styled with CSS.

## Technology Stack

- **Frontend:** React.js
- **AI:** OpenAI API
- **Styling:** CSS

## Setup and Installation

Follow these steps to get the application running on your local machine.

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/rohanmalige/gyst.git
    ```

2.  **Navigate to the project directory:**
    ```bash
    cd gyst/gyst_app-main/gyst
    ```

3.  **Install dependencies:**
    ```bash
    npm install
    ```

4.  **Configure OpenAI API Key:**
    Open the `src/App.js` file and replace the hardcoded API key with your own OpenAI API key.

    ```javascript
    // In src/App.js
    const configuration = new Configuration({
      apiKey: "YOUR_OPENAI_API_KEY_HERE", 
    });
    ```

5.  **Start the development server:**
    ```bash
    npm start
    ```
    The application will open in your default browser at `http://localhost:3000`.

## How It Works

The core of the application is in `src/App.js`. When a user sends a message, it is passed to the `ChatBot1` function. This function constructs a detailed prompt that defines the personality and knowledge base of "Marv." This prompt, along with the user's message, is sent to the OpenAI `text-davinci-003` model, which generates a relevant and in-character response. The conversation state is managed using React hooks, and the chat interface updates in real-time.
