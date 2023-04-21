import React, { useContext } from "react";
import GlobalConfigContext from "../../contexts/GlobalConfigContext";
import duck from "../../assets/logo/rubberduck4-yellow-512.png";
import { useLinkButtonLogic } from "../../hooks/useLinkButtonLogic";
import IconButton from "../Common/IconButton";

export default function Heading() {
  const { mode, toggleMode } = useContext(GlobalConfigContext);
  const handleLinkClick = useLinkButtonLogic();

  return (
    <div className="w-effective heading-fade-in flex-none px-2">
      <div className="flex-row-center h-8 justify-between px-2 pt-2">
        <div className="flex-row-center flex-1 gap-1">
          <div className="min-w-12">
            <IconButton
              type="navigation"
              task="navMenu"
              addButtonClass="lg:nonactive-button"
              addIconClass="lg:nonactive-button"
            />
          </div>
          <div className="flex-none">
            <button
              onClick={() => handleLinkClick("/myduck")}
              className="blush-button flex items-center rounded-full px-2 text-lg font-bold uppercase tracking-wide text-daffodil "
            >
              <div>MyDuck</div>
            </button>
          </div>
        </div>

        <div className=" flex justify-center text-xs font-bold uppercase text-vincent-700">
          {mode === "mock" ? (
            "- Mock -"
          ) : (
            <img
              className="h-8 pr-1"
              src={duck}
              alt="rubber duck"
              width="32"
              height="32"
            />
          )}
        </div>

        <div className="flex flex-1 justify-end gap-2">
          <IconButton type="routing" task="about" />
          <IconButton type="routing" task="sandbox" />
          <IconButton task="toggleMode" onClick={toggleMode} />
        </div>
      </div>
    </div>
  );
}
