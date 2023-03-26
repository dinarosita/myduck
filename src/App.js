import React, { useContext } from "react";
import LoadingPage from "./pages/LoadingPage";
import WelcomePage from "./pages/WelcomePage";
import ChatPage from "./pages/ChatPage";
import ChatCollectionContext from "./context/ChatCollectionContext"

export default function App() {
  const { isLoading, mainChatId } = useContext(ChatCollectionContext);

  if (isLoading) return <LoadingPage />;
  if (!mainChatId) return <WelcomePage />;

  return <ChatPage />;
}
