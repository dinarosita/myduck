import React, { useEffect, useState } from "react";
import classes from "./Layout.module.css";
import Navigation from "./Navigation";

import Header from "./Header";
import ChatWindow from "./ChatWindow";

export default function Layout() {
    const [isLoading, setIsLoading] = useState(true);
    const [loadedChats, setLoadedChats] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        fetch("https://myduck-fb785-default-rtdb.firebaseio.com/chats.json")
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                const chats = [];
                for (const key in data) {
                    const chat = {
                        id: key,
                        ...data[key],
                    };
                    chats.push(chat);
                }
                setIsLoading(false);
                setLoadedChats(chats)
            })
    }, []);



  return (
    <body>
      <Header />
      <div className={classes.bodyBulk}>
        <Navigation isLoading={isLoading} loadedChats={loadedChats} />
        <ChatWindow cisLoading={isLoading} loadedChats={loadedChats} />
      </div>
    </body>
  );
}
