import React, { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import IonicButton from "../common/IonicButton";
import MainHr from "../common/MainHr";
import FlapContext from "../../contexts/FlapContext";
import useWindowSize from "../../hooks/useWindowSize";
import FocusContext from "../../contexts/FocusContext";
// import GlobalConfigContext from "../../contexts/GlobalConfigContext";

export default function Heading() {
//   const { modeReload } = useContext(GlobalConfigContext);
  const { chatFormRef, focus, toggleFocus, focusText } =
    useContext(FocusContext);
  const { flapOpen, setFlapOpen, setOverlayVisible } = useContext(FlapContext);
  const { width } = useWindowSize();
  const location = useLocation();
  const navigate = useNavigate();
  const isLargeScreen = width >= 1024;

  function handleNavClick() {
    if (location.pathname !== "/myduck") {
      navigate("/myduck");
    }
    if (isLargeScreen) {
      setFlapOpen(false);
    } else {
      setFlapOpen(!flapOpen);
      setOverlayVisible(!flapOpen);
      focus(chatFormRef);
    }
  }

  function handleLinkClick(link) {
    setFlapOpen(false);
    navigate(link);
  }

  return (
    <div className="w-effective flex-none px-mainspace">
      <div className="flex-row-center h-full pb-1 pt-mainspace">
        <div className="flex-row-center gap-2">
          <div>
            <IonicButton ionic="chatbubbles" onClick={handleNavClick} />
          </div>
          <div>
            <button
              onClick={() => handleLinkClick("/myduck")}
              className=" title text-lg font-bold uppercase tracking-wide"
            >
              MyDuck
            </button>
          </div>
        </div>
        <div
          className="border-1 h-full w-full flex-1 border-sol"
          onClick={() => setFlapOpen(false)}
        ></div>
        <div className="flex-row-center icon-parent gap-1.5">
          <IonicButton ionic="information-circle" linkto="/myduck/about" />
          <IonicButton ionic="fish" linkto="/myduck/sandbox" />
          <IonicButton
            ionic="pencil"
            onClick={toggleFocus}
            addClass="hidden lg:block"
            text={focusText}
          />
          {/* <IonicButton ionic="construct" onClick={modeReload}></IonicButton> */}
        </div>
      </div>
      <MainHr screen />
    </div>
  );
}
