import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import IonicButton from "../Common/IonicButton";
import FlapContext from "../../contexts/FlapContext";
import GlobalConfigContext from "../../contexts/GlobalConfigContext";
import NavButton from "../Common/NavButton";
import duck from "../../assets/logo/rubberduck4-yellow-512.png";

export default function Heading() {
  const { mode, toggleMode } = useContext(GlobalConfigContext);

  const { setIsFlapOpen } = useContext(FlapContext);
  const navigate = useNavigate();

  function handleLinkClick(link) {
    setIsFlapOpen(false);
    navigate(link);
  }

  return (
    <div className="w-effective flex-none px-2">
      <div className="flex-row-center h-full justify-between px-2 pt-2">
        <div className="flex-row-center gap-1 ">
          <NavButton addIonicClass="text-daffodil" />
          <div>
            <button
              onClick={() => handleLinkClick("/myduck")}
              className="white-button flex items-center rounded-full px-2 text-lg font-bold uppercase tracking-wide text-daffodil "
            >
              
              <div>MyDuck</div>
            </button>
          </div>
        </div>
        <div className="text-xs text-vincent-700 font-bold uppercase">{(mode === "mock") ? "(Mock mode)" : <img className="h-8 pr-1" src={duck} alt="rubber duck" />}</div>

        <div className="flex-row-center icon-parent gap-2 pr-1">
          <IonicButton ionic="bulb" linkto="/myduck/about" addIonicClass="text-daffodil"/>
          <IonicButton ionic="beaker" linkto="/myduck/sandbox" addIonicClass="text-daffodil"/>
          <IonicButton ionic="build" onClick={toggleMode} addIonicClass="text-daffodil" />
        </div>
      </div>
    </div>
  );
}
