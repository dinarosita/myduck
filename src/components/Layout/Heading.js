import React, { useContext } from "react";
import IonicButton from "../Common/IonicButton";
import GlobalConfigContext from "../../contexts/GlobalConfigContext";
import NavButton from "../Common/NavButton";
import duck from "../../assets/logo/rubberduck4-yellow-512.png";
import useHandleLinkClick from "../../hooks/useHandleLinkClick";

export default function Heading() {
  const { mode, toggleMode } = useContext(GlobalConfigContext);
  const handleLinkClick = useHandleLinkClick();

  return (
    <div className="w-effective flex-none px-2 heading-fade-in">
      <div className="flex-row-center h-full justify-between px-2 pt-2">
        <div className="flex-row-center gap-1">
          <div className="min-w-12"><NavButton addIonicClass="text-daffodil" /></div>
          <div className="flex-none">
            <button
              onClick={() => handleLinkClick("/myduck")}
              className="blush-button flex items-center rounded-full px-2 text-lg font-bold uppercase tracking-wide text-daffodil "
            >
              <div>MyDuck</div>
            </button>
          </div>
        </div>
        <div className="text-xs font-bold uppercase text-vincent-700">
          {mode === "mock" ? (
            "(Mock mode)"
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

        <div className="flex-row-center icon-parent gap-2 pr-1">
          <IonicButton
            ionic="bulb"
            linkto="/myduck/about"
            addIonicClass="text-daffodil"
          />
          <IonicButton
            ionic="beaker"
            linkto="/myduck/sandbox"
            addIonicClass="text-daffodil"
          />
          <IonicButton
            ionic="build"
            onClick={toggleMode}
            addIonicClass="text-daffodil"
          />
        </div>
      </div>
    </div>
  );
}
