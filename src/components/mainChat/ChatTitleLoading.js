import React, { useContext, useEffect, useState } from "react";
import ChatCollectionContext from "../../context/ChatCollectionContext";
import MainChatContext from "../../context/MainChatContext";
// import classes from "./ChatTitle.module.css";

export default function ChatTitle() {


  return (
    <div>
      <div>
        <h2>Welcome to MyDuck</h2>

        <div>
          <div>{tag}</div>
        </div>
      </div>
    </div>
  );
}
