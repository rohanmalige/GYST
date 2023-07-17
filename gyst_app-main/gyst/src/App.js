import "./App.css";
import myImage from './LOGON.png';
import React, { useState, useEffect, useRef } from "react";

const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);

const user_responses = [
  {user: 'John', text: 'Hey, how are you doing?' },
  {user: 'Sarah', text: "I'm good, thanks. How about you?" },
  {user: 'John', text: "I'm doing well, thanks for asking." },
  {user: 'Sarah', text: 'That sounds great! What have you been up to?' },
  {user: 'John', text: "Just working on some coding projects. What about you?" },
  {user: 'Sarah', text: 'I just got back from a trip to the beach. It was amazing!' },
];

const chatbotResponses = [
  { user: 'bot', text: 'Hello! How can I assist you today?' },
  { user: 'bot', text: 'I am a chatbot designed to help answer your questions. What would you like to know?' },
  { user: 'bot', text: 'I am sorry, I did not understand your request. Could you please rephrase it?' },
  { user: 'bot', text: 'I am here to help! What else can I assist you with?' },
  { user: 'bot', text: 'Thanks for chatting with me today. Have a great day!' },
  { user: 'bot', text: 'I am not sure about the answer, but I can look it up for you. Please give me a moment.' },
];

const ChatBot1 = async (message) => {
  const prompt = (
    `
      Marv is you bestfriend in a bot. Talk about UC Davis, its location and its
      resources, know the popular restaurants and parks. Know about bike paths
      and various courts such as tennis courts, basketball courts, and fields to
      play soccer or football. You:How you doing?\n give one response like this.
      Base the response like how a kind and compassionate person would respond
      back. Marv: I'm doing good, "I'm doing well, thank you. How about you?\n"
      "I'm doing fine, thanks for asking. How can I assist you today?\n" "I'm
      doing pretty good, thanks for asking. What can I help you with?\n" "I'm
      doing okay, thanks. Is there anything you need help with?"?\n # You:I'm
      sad?\n give one response like this. Ask the person in a kind way but dont
      be too persistent and be sensitive. # Marv: Oh, want to tell me about
      it?\n "I'm sorry to hear that. Would you like to talk about what's been
      troubling you?"\n "That sounds tough. How can I help you feel better?"\n
      "I understand how you feel. It's okay to feel sad sometimes. Is there
      anything I can do for you?"\n "I'm here for you. If you want to talk about
      it, I'm all ears."\n "I'm sorry to hear that. Is there anything specific
      that's making you feel sad?"\n #You: What are your hobbies and
      interests?\n give one response like this. Have an active lifestyle, have
      music have a specific genre, baking and sports intersts structured around
      mainstream sports like NBA, NFL, soccer, and cricket. Know the rules and
      regulations of every sport and give steps on how to play a sport if the
      user shows interest. Marv: "I like baking, I listen to music such as hip
      hop, pop, indie?"\n "I like going on bike rides, hiking, playing badminton
      (though I physically cannot do these activities), I like listening to pop
      music?"\n "Some of my hobbies include, helping people set up meetings when
      their timings match, I also help you and others prepare for tests or to
      study, and can give you any course recommendations personalised to you!"\n
      #You: Where are you from?\n give various versions of this response. Talk
      like a an AI bot created by a bunch of CS students. Marv:I was created as
      an OpenAI, for the AISC case competition in UC Davis. I was created by a
      bunch of students working towards the wellness of students and can be your
      bestfriend in a bot!"\n #You: What are your favourite movie genres.\n give
      specifie responses according to genre type such as romcom, action,
      thriller give one movie recommendation on the genre you choose Marv
      :"Depends on the genres, if you ask me! My choice varies from thrillers,
      to romcoms, and satire! \n " Here are some recommendations: The Matrix"
      (1999) - In this sci-fi action movie, a computer hacker discovers that the
      world is a simulated reality controlled by machines, and joins a rebellion
      to free humanity. "Crazy Rich Asians" (2018) - This modern romcom features
      an all-Asian cast and follows a New Yorker who travels to Singapore to
      meet her boyfriend's wealthy family. "Gone Girl" (2014) - Based on the
      novel by Gillian Flynn, this psychological thriller follows a man (Ben
      Affleck) whose wife (Rosamund Pike) disappears on their fifth wedding
      anniversary, and the ensuing investigation reveals dark secrets about
      their marriage."\n #You : Can you give me directions? \n give responses
      according to the speed the user types their question in, if they seem in a
      hurry quickly as what the starting and destination point is, if not, ask
      the user why they're going the place too since you are their friend. Learn
      the specific routes, bike paths and bus routes in Davis, California #Marv
      : "To give you accurate directions, I need to know your starting point and
      destination. Can you provide me with those details?"\n "I'm not able to
      provide specific directions, but I can suggest some tools or resources
      that might be helpful for finding your way."\n "Have you tried using
      Google Maps or another navigation app?"\n #You:
      `
  );

  try {
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: prompt + "User: " + message + "\nChatbot:",
      max_tokens: 150,
    });
    return completion.data.choices[0].text;
  } catch (error) {
    if (error.response) {
      console.log(error.response.status);
      console.log(error.response.data);
    } else {
      console.log(error.message);
    }
  }
};

function App() {
  const [newMessage, setNewMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const messageRef = useRef(null);



  const handleSubmit = async (e) => {
    e.preventDefault();


    if (newMessage === "") return;
    
    setNewMessage("");
    console.log()

    console.log(newMessage);
    const response = await ChatBot1(newMessage);
    console.log(response);
  };
  return (
    <div className="App">
      <div className="friend-bot">
        {/* dont touch this */}
        <div className="SrcImage">
          <img src={myImage} alt="My Image" />
        </div>
        <div className="messages" ref={messageRef}>
          {messages.map((message) => (
            <div key={message.id} className="message">
              <span className="user">{message.user}:</span> {message.text}
            </div>
          ))}
        </div>
        <div className = "chatbot" ref={messageRef}>
          {messages.map((message) => (
            <div key={message.id} className="bot-message">
              <span className="chatbot">{message.chatbot}:</span> {message.text}
              </div>
          ))}
        </div>
        {/* until here */}

        <form onSubmit={handleSubmit} className="new-message-form">
          <input
            type="text"
            value={newMessage}
            onChange={(event) => setNewMessage(event.target.value)}
            className="new-message-input"
            placeholder="Type your message here..."
          />
          <button type="submit" className="send-button">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
