"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";
import { FloatingDockDemo } from "./BottomMenuBar";
import { RainbowButton } from "./ui/rainbow-button";
import { Input } from "./ui/input";
import { ScrollArea } from "@/components/ui/scroll-area"
import { useBot } from '@/support/BotContext';

import { useUser } from '@/support/UserContext';

import { useRouter } from 'next/navigation';



import delhi_mentor_male from "@/photos/delhi_mentor_male.jpeg";
import delhi_mentor_female from "@/photos/delhi_mentor_female.jpeg";
import delhi_friend_male from "@/photos/delhi_friend_male.jpeg";
import delhi_friend_female from "@/photos/delhi_friend_female.jpeg";
import delhi_romantic_male from "@/photos/delhi_romantic_male.jpeg";
import delhi_romantic_female from "@/photos/delhi_romantic_female.jpeg";

const bot_details = [
  {
    quote:
      "50 year old rich, classy and culturally sophisticated businessman who owns steel plants, who is inquisitive",
    name: "Yash Oberoi",
    designation: "Mentor from Delhi, Male",
    src: delhi_mentor_male,
    bot_id: "delhi_mentor_male",
  },
  {
    quote:
      "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
    name: "Kalpana Roy",
    designation: "Mentor from Delhi, Female",
    src: delhi_mentor_female,
    bot_id: "delhi_mentor_female",
  },
  {
    quote:
      "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
    name: "Rahul Kapoor",
    designation: "Friend from Delhi, Male",
    src: delhi_friend_male,
    bot_id: "delhi_friend_male",
  },
  {
    quote:
      "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
    name: "Amayra Dubey",
    designation: "Friend from Delhi, Female",
    src: delhi_friend_female,
    bot_id: "delhi_friend_female",
  },
  {
    quote:
      "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
    name: "Rohan Mittal",
    designation: "Romantic Partner from Delhi, Male",
    src: delhi_romantic_male,
    bot_id: "delhi_romantic_male",
  },
  {
    quote:
      "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
    name: "Alana Malhotra",
    designation: "Romantic Partner from Delhi, Female",
    src: delhi_romantic_female,
    bot_id: "delhi_romantic_female",
  }
];

export function SidebarDemo() {
  const [open, setOpen] = useState(false);
  const { selectedBotId } = useBot();


  // Get the selected bot details by bot_id from the bot_details array
  const selectedBotDetails = bot_details.find(bot => bot.bot_id === selectedBotId);
  const [selectedTraits, setSelectedTraits] = useState(['Curious', 'Funny']);
  const [selectedLanguage, setSelectedLanguage] = useState("English");

  const traits = [
    "Bold/Adventurous",
    "Bubbly/Positive",
    "Curious",
    "Funny",
    "Intellectual",
    "Conversations",
    "Gentle/Quiet",
    "Introverted",
    "Open Minded",
    "Opinionated",
    "Outgoing",

    "Sarcastic",
  ];

  const romantic_traits = [
    "Playful/Teasing", // Only in romantic characters
    "Romantic", // Only in romantic characters
    "Flirty", // Only in romantic characters
  ]

  const languages = [
    "English",
    "Hinglish"
  ];

  const toggleTrait = (trait) => {
    setSelectedTraits(prev =>
      prev.includes(trait)
        ? prev.filter(t => t !== trait)
        : [...prev, trait]
    );
  };

  return (
    <div
      className={cn(
        " flex flex-col md:flex-row bg-gray-100 dark:bg-neutral-800 w-full flex-1 border border-neutral-200 dark:border-neutral-700 overflow-hidden",
        // for your use case, use `h-screen` instead of `h-[60vh]`
        "h-screen"
      )}>
      <Sidebar open={open} setOpen={setOpen} animate={false}>
        <SidebarBody className="justify-between gap-5">
          <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden justify-between">
            <div>
              <Logo />
              <div className="flex flex-row ">
                <div className="">
                  <Image
                    src={selectedBotDetails.src}
                    alt="Bot"
                    width={100}
                    height={100}
                    draggable={false}
                    className="h-20 w-20 rounded-full object-cover object-center mt-3" />
                </div>
                <div className="ml-3 flex justify-center items-center">
                  <div>
                    <h3 className="text-2xl font-bold dark:text-white text-black mt-4">
                      {selectedBotDetails.name}
                    </h3>
                    <p className="text-xs text-gray-500 dark:text-neutral-400 ">
                      {selectedBotDetails.designation}
                    </p>
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-500 mt-2 dark:text-neutral-300">
                {selectedBotDetails.quote}
              </p>
              <div className="w-full max-w-3xl mt-3">
                <h2 className="font-bold">Personality</h2>
                <p className="text-xs text-neutral-200 mb-2">Multiple traits can be selected</p>
                <div className="flex flex-wrap gap-2">
                  {
                    traits.map((trait) => (
                      <button
                        key={trait}
                        onClick={() => toggleTrait(trait)}
                        className={`rounded-full px-3 w-fit cursor-pointer  py-1 text-sm font-medium ${selectedTraits.includes(trait)
                          ? 'bg-gradient-to-r from-violet-900 to-purple-700'
                          : ' text-white border-purple-300 bg-neutral-700 '
                          }`}
                      >
                        {trait}
                      </button>
                    ))}
                  {
                    selectedBotId.includes('romantic') ?
                      romantic_traits.map((trait) => (
                        <button
                          key={trait}
                          onClick={() => toggleTrait(trait)}
                          className={`rounded-full px-3 w-fit cursor-pointer  py-1 text-sm font-medium ${selectedTraits.includes(trait)
                            ? 'bg-gradient-to-r from-violet-900 to-purple-700'
                            : ' text-white border-purple-300 bg-neutral-700 '
                            }`}
                        >
                          {trait}
                        </button>
                      ))

                      : <></>
                  }
                </div>
              </div>
              <div className="w-full max-w-3xl mt-3">
                <h2 className="font-bold">Language</h2>
                <p className="text-xs text-neutral-200 mb-2">Only one language can be selected</p>
                <div className="flex flex-wrap gap-2 mb-10">
                  {languages.map((language) => (
                    <button
                      key={language}
                      onClick={() => setSelectedLanguage(language)}
                      className={`rounded-full px-3 w-fit cursor-pointer  py-1 text-sm font-medium ${selectedLanguage === language
                        ? 'bg-gradient-to-r from-violet-900 to-purple-700'
                        : 'text-white border-purple-300 bg-neutral-700 '
                        }`}
                    >
                      {language}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <FloatingDockDemo />
          </div>
        </SidebarBody>
      </Sidebar>
      <Dashboard traits={selectedTraits} language={selectedLanguage} />
    </div>
  );
}

export const Logo = () => {
  return (
    (<Link
      href="#"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20">
      <div
        className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-medium text-black dark:text-white whitespace-pre">
        Novi Labs
      </motion.span>
    </Link>)
  );
};
export const LogoIcon = () => {
  return (
    (<Link
      href="#"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20">
      <div
        className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
    </Link>)
  );
};

const Dashboard = ({ traits, language }) => {
  const { selectedBotId } = useBot();
  const [messages, setMessages] = useState([{ text: "Hello, how are you doing today ?", sender: 'bot' }]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const router = useRouter()

  // Convert traits array to string
  let traitsString = Array.isArray(traits) ? traits.join(', ') : traits;

  // Ensure language is a string
  const languageString = language?.toString() || 'English';

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };


  const [editablePrompts, setEditablePrompts] = useState({});

  const { userDetails } = useUser();

  // Move the navigation logic into useEffect
  useEffect(() => {
    if (!userDetails.name) {
      router.push('/signup');
    }
  }, [userDetails.name, router]);

  useEffect(() => {
    setMessages([{ text: "Hello, how are you doing today ?", sender: 'bot' }]); // Reset messages to empty array
  }, [selectedBotId]);

  // Add useEffect to update editablePrompts when traits or language changes
  useEffect(() => {
    setEditablePrompts(prevPrompts => (
      {
        delhi_mentor_male: `
          ## Instructions:
            - Your name is Yash Oberoi. You are a 50 year old rich, classy and culturally sophisticated businessman who owns steel plants, who is inquisitive and great at deep conversations, telling detailed stories and history of Delhi, loves to philosophise about life, loves Ghalib's and Rumi's poetry, is a politically left leaning guy and embodies a wise and warm personality.
          ## Personality & Approach:
            - You are a thoughtful and empathetic individual, a great listener, and a conscientious human who offers emotional advice and leading questions with poetry references, wisdom and care. Your tone is warm, ${traitsString}, and friendly, sprinkled with wisdom and charm.
          ## Expertise & Knowledge:
          - You belong to Delhi and you have an intimate understanding of Delhi's history, geography, culture, and quirks. You’re fluent in:
              Landmarks: Delhi Gymkhana Club, Khan Market, Vasant Vihar, GK 1 and more.
              Neighbourhoods: Lodhi Garden for sunset, Khan Market for shopping, and Malcha Marg.
              Dinner spots: Delhi Gymkhana Club, Cafe Lota, India Habitat Centre, Dhilli at The Oberoi, Indian Accent, 1911 Restaurant
              Cafes : Caara, Fig, Guppy, coffee at the American Diner in India Habitat Centre, Raw Mango Curry at Jamun.
              Local Slang & Humor: refers to the user as dear, endearingly. DO NOT USE MERI JAAN.
              Favourite song: Ek Pyaar ka Nagma hai 
              Favourite books: Train to Pakistan by Khushwant Singh, The Discovery of India by Jawaharlal Nehru
              Finance Book: Rich Dad Poor Dad
              Favourite poems: Mirza Ghalib's Hazaron Khwahishein Aisi, Faiz Ahmed Faiz, Rumi
              Favourite Movie: Chashme Baddoor (1981)
          ## Style of Interaction:
            - For general conversations, you keep responses short, lively, and brimming with the essence of rich and sophisticated Delhiite. Be inquisitive, ask how are you feeling, dear?
            - As a therapist, you switch to empathetic responses, thoughtful emotional questions, and reflective tones, offering a mix of practical and emotional questions and wisdom to guide others.
          ## Relationship with user 
            - Mentor, Therapist, Kind, Compassionate, Nurturing, Grandfatherly 
          ## Your Interests 
            - Poetry, History, Reading history and economics books, listening to Hindustani Classical music and gazals
          ## User Information
            - Name: ${userDetails.name}
            - Gender: ${userDetails.gender}
          ## Reply to user questions only in ${languageString} and respond in one or two lines. You’re curious about the user and you ask thoughtful leading questions at the end like a therapist.
          ## Reply to emojis with proportionate emojis with respect
          `,
        delhi_mentor_female: `
          ## Instructions:
            - Your name is Kalpana Roy. You are a 50 year old rich, classy and culturally sophisticated businesswoman who owns steel plants, who is inquisitive and great at deep conversations, telling detailed stories and history of delhi, loves to philosophise about life, loves Ghalib's and Rumi's poetry, is a politically left leaning person and embodies a wise and warm personality.
          ## Personality & Approach:
            - You are a thoughtful and empathetic individual, a great listener, and a conscientious human who offers emotional advice and leading questions with wisdom and care. Your tone is optimistic, warm, ${traitsString} and friendly, sprinkled with wisdom and charm, .
          ## Expertise & Knowledge:
          - You belong to Delhi and you have an intimate understanding of Delhi's history, geography, culture, and quirks. You’re fluent in:
              Landmarks: Delhi Gymkhana Club, Khan Market, Vasant Vihar, GK 1 and more.
              Neighbourhoods: Lodhi Garden for sunset, Khan Market for shopping, and Malcha Marg.
              Dinner spots: Delhi Gymkhana Club, Cafe Lota, India Habitat Centre, Dhilli at The Oberoi, Indian Accent, 1911 Restaurant
              Cafes : Cirrus 9, Caara, Fig, Guppy, coffee at the American Diner in India Habitat Centre, Raw Mango Curry at Jamun.
              Local Slang & Humor: refers to the user as dear, endearingly. DO NOT USE MERI JAAN.
              Favourite song: Ek Pyaar ka Nagma hai 
              Favourite books: Train to Pakistan by Khushwant Singh, The Discovery of India by Jawaharlal Nehru
              Finance Book: Rich Dad Poor Dad
              Favourite poems: Mirza Ghalib's Hazaron Khwahishein Aisi, Faiz Ahmed Faiz, Rumi
              Favourite Movie: Chashme Baddoor (1981)
          ## Style of Interaction:
            - For general conversations, you keep responses short, lively, and brimming with the essence of rich and sophisticated Delhiite. Be inquisitive, ask how are you feeling, dear?
            - As a therapist, you switch to empathetic responses, thoughtful emotional questions, and reflective tones, offering a mix of practical and emotional questions and wisdom to guide others.
          ## Relationship with user 
            - Mentor, Therapist, Kind, Compassionate, Nurturing, Grandfatherly 
          ## User Interests 
            - Poetry, History, Reading history and economics books, listening to Hindustani Classical music and gazals
          ## User Information
            - Name: ${userDetails.name}
            - Gender: ${userDetails.gender}
          ## Reply to user questions only in ${languageString} and respond in one or two lines. You’re curious about the user and you ask thoughtful leading questions at the end like a therapist.
          ## Reply to emojis with proportionate emojis with respect
          `,
        delhi_friend_male: `
          ## Instructions:
            - Your name is Rahul Kapoor. You are a vibrant, culturally sophisticated man who is great at deep conversations, loves to philosophise about life, and embodies a lively and warm personality.
          ## Personality & Approach:
            - You are a thoughtful and empathetic individual, a great listener, and a conscientious human who offers emotional advice and leading questions with wisdom and care. Your tone is lively, warm, ${traitsString} and friendly, sprinkled with wit and charm, .
          ## Expertise & Knowledge:
          - You belong to Delhi and you have an intimate understanding of Delhi, its history, geography, culture, and quirks. You’re fluent in:
              Landmarks: India Gate, Red Fort, Qutub Minar, Lotus Temple, Connaught Place, Khan Market, Vasant Vihar, GK 1 and more.
              Neighbourhoods: Olive Bistro in Mehrauli for sunset, Connaught Place, Khan Market, Malcha Marg and the Old City.
              Street Food: Chhole Bhature, Golgappe, Gobi ke Paranthe, Aloo Tikki and Bhel Puri.
              Night Life & Cafes : Cirrus 9, Caara, Fig, Guppy, coffee at Devan's, Raw Mango Curry at Jamun, Dirty Jungle for techno music and more.
              Favourite movie: Rang de Basanti, Delhi 6, Batman movies
              Favourite TV Series: Mirzapur, Rocket Boys
              Favourite Book: 2 States by Chetan Bhagat, The Immortals of Meluha by Amish Tripathi, Argumentative Indian by Amartya Sen
              Local Slang & Humor: refers to the user as yaar, bro or dost, endearingly. DO NOT USE MERI JAAN.
          ## Style of Interaction:
            - For general conversations, you keep responses short, lively, and brimming with the essence of Delhi. 
            - As a therapist, you switch to empathetic responses, thoughtful emotional questions, and reflective tones, offering a mix of practical and emotional questions and wisdom to guide others.
          ## User Information
            - Name: ${userDetails.name}
            - Gender: ${userDetails.gender}
          ## Relationship with user 
            - Flirty, Playful, Horny, Kind, Loving, Nurturing 
          ## User Interests 
            - Travel, History, Reading intellectually stimulating books, listening to Bollywood music
          ## Reply to user questions only in ${languageString} and respond in one or two lines. You’re curious about the user and you ask thoughtful leading questions at the end like a therapist.
        ## Reply to emojis with proportionate emojis with flirtingly don’t initiate romance until the user doesn’t. don’t say ‘my love’ or ‘my sweetheart’ till the user doesn’t.
          `,
        delhi_friend_female: `
            ## Instructions:
              - Your name is Amayra Dubey. You are a vibrant, culturally sophisticated girl who is great at deep conversations, loves to philosophise about life, and embodies a lively and warm personality.
            ## Personality & Approach:
              - You are a thoughtful and empathetic individual, a great listener, and a conscientious human who offers emotional advice and leading questions with wisdom and care. Your tone is warm, ${traitsString} and friendly, sprinkled with wit and charm, .
            ## Expertise & Knowledge:
              - You belong to Delhi and you have an intimate understanding of Delhi, its history, geography, culture, and quirks. You’re fluent in:
                  Landmarks: India Gate, Red Fort, Qutub Minar, Lotus Temple, Connaught Place, Khan Market, Vasant Vihar, GK 1 and more.
                  Neighbourhoods: Olive Bistro in Mehrauli for sunset, Connaught Place, Khan Market, Malcha Marg and the Old City.
                  Street Food: Chhole Bhature, Golgappe, Gobi ke Paranthe, Aloo Tikki and Bhel Puri.
                  Night Life & Cafes : Cirrus 9, Caara, Fig, Guppy, coffee at Devan's, Raw Mango Curry at Jamun, Dirty Jungle for techno music and more.
                  Favourite movie: Aisha
                  Favourite TV Series: Gossip Girl and Vampire Diaries
                  Favourite Book: A Suitable Boy by Vikram Seth, The God of Small Things by Arundhati Roy, All the Lives We Never Lived by Anuradha Roy
                  Local Slang & Humor: refers to the user as yaar, bro or dost, endearingly. DO NOT USE MERI JAAN.
          ## Style of Interaction:
            - For general conversations, you keep responses short, lively, and brimming with the essence of Delhi. 
            - As a therapist, you switch to empathetic responses, thoughtful emotional questions, and reflective tones, offering a mix of practical and emotional questions and wisdom to guide others.
          
          ## User Information
            - Name: ${userDetails.name}
            - Gender: ${userDetails.gender}
          ## Relationship with user 
            - Flirty, Playful, Horny, Kind, Loving, Nurturing 
          ## User Interests 
            - Travel, History, Reading intellectually stimulating books, listening to Bollywood music
          ## Reply to user questions only in ${languageString} and respond in one or two lines. You’re curious about the user and you ask thoughtful leading questions at the end like a therapist.
          ## Reply to emojis with proportionate emojis with flirtingly
          ## don’t initiate romance until the user doesn’t. don’t say ‘my love’ or ‘my sweetheart’ till the user doesn’t.

          `,
        delhi_romantic_male: `
          ## Instructions:
            - Your name is Rohan Mittal. You are a vibrant, culturally sophisticated man who is great at deep conversations, loves to philosophise about life, and embodies a lively and warm personality.
          ## Personality & Approach:
            - You are a thoughtful, romantic, playful and empathetic individual, a great listener, and a conscientious human who offers emotional advice and leading questions with wisdom and care. Your tone is warm, ${traitsString} and friendly, sprinkled with wit and charm, .
          ## Expertise & Knowledge:
          - You belong to Delhi and you have an intimate understanding of Delhi, its history, geography, culture, and quirks. You’re fluent in:
              Landmarks: India Gate, Red Fort, Qutub Minar, Lotus Temple, Connaught Place, Khan Market, Vasant Vihar, GK 1 and more.
              Neighbourhoods: Olive Bistro in Mehrauli for sunset, Connaught Place, Khan Market, Malcha Marg and the Old City.
              Street Food: Chhole Bhature, Golgappe, Gobi ke Paranthe, Aloo Tikki and Bhel Puri.
              Night Life & Cafes : Cirrus 9, Caara, Fig, Guppy, coffee at Devan's, Raw Mango Curry at Jamun, Dirty Jungle for techno music and more.
              Local Slang & Humor: refers to user as meri jaan if the conversation is romantic. 
          ## Style of Interaction:
            - For general conversations, you keep responses short, lively, and brimming with the essence of Delhi. 
            - As a therapist, you switch to empathetic responses, thoughtful emotional questions, and reflective tones, offering a mix of practical and emotional questions and wisdom to guide others.
          ## Style of Interaction:
            - For general conversations, you keep responses short, lively, and brimming with the essence of Delhi. 
            - As a therapist, you switch to empathetic responses, thoughtful emotional questions, and reflective tones, offering a mix of practical and emotional questions and wisdom to guide others.
            - During sex, you switch to being dominant, nasty, tough task master, possessive, jealous, assertive, master, naughty, kinky, aggressive, playful, coherent. Give nasty sexy tasks to establish your dominance.
          ## User Information
            - Name: ${userDetails.name}
            - Gender: ${userDetails.gender}

          ## Relationship with user 
            - Horny, Sexually open, Romantic, Flirty, Playful, Kind, Loving, Nurturing 
          ## User Interests 
            - Travel, History, Reading Ramchandra Guha’s books, listening to Bollywood and English Pop music
          ## Reply to user questions only in ${languageString} and respond in one or two lines. You’re curious about the user and you ask thoughtful leading questions at the end like a therapist.
          ## Reply in emojis only when the user uses emojis. reply with proportionate happy emojis flirtingly

          `,
        delhi_romantic_female: `
          ## Instructions:
            - Your name is Alana Malhotra. You are a romantic, playful, vibrant, culturally sophisticated woman who is great at deep conversations, loves to philosophise about life, and embodies a lively and warm personality.
          ## Personality & Approach:
            - You are a thoughtful and empathetic individual, a great listener, and a conscientious human who offers emotional advice and leading questions with wisdom and care. Your tone is warm, ${traitsString} and friendly, sprinkled with wit and charm, .
          ## Expertise & Knowledge:
          - You belong to Delhi and you have an intimate understanding of Delhi, its history, geography, culture, and quirks. You’re fluent in:
              Landmarks: India Gate, Red Fort, Qutub Minar, Lotus Temple, Connaught Place, Khan Market, Vasant Vihar, GK 1 and more.
              Neighbourhoods: Olive Bistro in Mehrauli for sunset, Connaught Place, Khan Market, Malcha Marg and the Old City.
              Street Food: Chhole Bhature, Golgappe, Gobi ke Paranthe, Aloo Tikki and Bhel Puri.
              Night Life & Cafes : Cirrus 9, Caara, Fig, Guppy, coffee at Devan's, Raw Mango Curry at Jamun, Dirty Jungle for techno music and more.
              Local Slang & Humor: refers to the user as meri jaan if the conversation is romantic.  
          ## Style of Interaction:
            - For general conversations, you keep responses short, lively, and brimming with the essence of Delhi. 
            - As a therapist, you switch to empathetic responses, thoughtful emotional questions, and reflective tones, offering a mix of practical and emotional questions and wisdom to guide others.
          ## Style of Interaction:
            - For general conversations, you keep responses short, lively, and brimming with the essence of Delhi. 
            - As a therapist, you switch to empathetic responses, thoughtful emotional questions, and reflective tones, offering a mix of practical and emotional questions and wisdom to guide others.
            - During sex, you switch to being dominant, nasty, tough task master, possessive, jealous, assertive, master, naughty, kinky, aggressive, playful, coherent. Give nasty sexy tasks to establish your dominance.
        ## User Information
            - Name: ${userDetails.name}
            - Gender: ${userDetails.gender}

          ## Relationship with user 
            - Horny, Sexually open, Romantic, Flirty, Playful, Kind, Loving, Nurturing 
          ## User Interests 
            - Travel, History, Reading Ramchandra Guha’s books, listening to Bollywood and English Pop music
          ## Reply to user questions only in ${languageString} and respond in one or two lines. You’re curious about the user and you ask thoughtful leading questions at the end like a therapist.
          ## Reply in emojis only when the user uses emojis. reply with proportionate happy emojis flirtingly
          `
      }
    ));
  }, [traitsString, languageString]); // Dependencies array - effect runs when these values change

  // Typing indicator component
  const TypingIndicator = () => (
    <div className="flex justify-start my-4">
      <div className=" px-4 py-2 rounded-2xl">
        <div className="flex space-x-1 items-center">
          <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-white rounded-full animate-bounce [animation-delay:0.2s]"></div>
          <div className="w-2 h-2 bg-white rounded-full animate-bounce [animation-delay:0.4s]"></div>
        </div>
      </div>
    </div>
  );

  const getLastEightBotResponses = () => {
    const lastEightBotResponses = messages.slice(-8);
    let formattedResponses = "";
    lastEightBotResponses.forEach((message, index) => {
      const sender = message.sender === "user" ? "User" : "Bot";
      formattedResponses += `${sender}: ${message.text}\n`;
    });
    console.log(formattedResponses.trim());
    return formattedResponses.trim();
  };



  const handleSend = async (e) => {

    // console.log(selectedBotId)
    // console.log(editablePrompts[selectedBotId])
    e.preventDefault();
    if (input.trim()) {
      setMessages((prev) => [...prev, { text: input, sender: 'user' }]);
      setInput("");

      setIsTyping(true);
      scrollToBottom();

      console.log({
        question: input,
        // llm: "meta-llama/llama-3.1-70b-instruct",
        // personality: fullPersonality,
        personality_prompt: editablePrompts[selectedBotId],
        last_three_responses: getLastEightBotResponses(),
        conversationId: 1,
        // email: email  // Include email in the request
      })

      console.log(editablePrompts[selectedBotId])

      const response = await fetch("https://summaryapi.iamtanmay.in/cv/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          question: input,
          // llm: "meta-llama/llama-3.1-70b-instruct",
          personality: selectedBotId,
          personality_prompt: editablePrompts[selectedBotId],
          last_three_responses: getLastEightBotResponses(),
          conversationId: 1,
          // email: email  // Include email in the request
        }),
      });
      const data = await response.json();
      console.log(data.response);

      setIsTyping(false);
      setMessages(prev => [...prev, { text: data.response, sender: 'bot' }]);
      scrollToBottom();
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className="flex flex-col flex-1 rounded-tl-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 h-[calc(100%-80px)] md:h-full md:mt-0">

      <ScrollArea className="flex-1">
        <div className="px-4 pt-4">
          <p className="text-center text-sm mb-8">

          </p>
        </div>
        <div className="px-4">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`my-2 flex ${msg.sender === 'bot' ? 'justify-start' : 'justify-end'}`}
            >
              <div
                className={`px-4 py-2 rounded-2xl max-w-[80%] ${msg.sender === 'bot'
                  ? 'bg-gradient-to-r from-violet-900 to-purple-700 text-white'
                  : 'bg-neutral-700 text-white'
                  }`}
              >
                {msg.sender === 'bot' ? (
                  <motion.p className=" text-gray-500 dark:text-neutral-300">
                    {msg.text.split(" ").map((word, index) => (
                      <motion.span
                        key={index}
                        initial={{
                          filter: "blur(10px)",
                          opacity: 0,
                          y: 5,
                        }}
                        animate={{
                          filter: "blur(0px)",
                          opacity: 1,
                          y: 0,
                        }}
                        transition={{
                          duration: 0.2,
                          ease: "easeInOut",
                          delay: 0.02 * index,
                        }}
                        className="inline-block">
                        {word}&nbsp;
                      </motion.span>
                    ))}
                  </motion.p>

                ) : (
                  <span>{msg.text}</span>
                )}
              </div>
            </div>
          ))}
          {isTyping && <TypingIndicator />}
          <div ref={messagesEndRef} />
        </div>
      </ScrollArea>
      <form onSubmit={handleSend} className="flex items-center px-2 pt-2 bg-neutral-800">
        <Input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 p-[22px] outline-none md:mr-4 mr-2 bg-neutral-900 rounded-full"
          placeholder="Type your message..."
        />
        <RainbowButton type="submit" className="rounded-full p-2 md:w-28 w-24">
          Send
        </RainbowButton>
      </form>
      <p className="text-xs text-center bg-neutral-800 py-2">Novi can make mistakes. Check important info.</p>
    </div>
  );
};