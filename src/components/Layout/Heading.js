import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import IonicButton from "../Common/IonicButton";
import FlapContext from "../../contexts/FlapContext";
import GlobalConfigContext from "../../contexts/GlobalConfigContext";
import NavButton from "../Common/NavButton";
import duck from "../DeveloperCard/logo128.png";

export default function Heading() {
  const { toggleMode } = useContext(GlobalConfigContext);

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
              {/* <img className="h-5 pr-1" src={duck} alt="rubber duck" /> */}
              <div>MyDuck</div>
            </button>
          </div>
        </div>

        <div className="flex-row-center icon-parent gap-2 pr-1">
          <IonicButton ionic="information-circle" linkto="/myduck/about" addIonicClass="text-daffodil"/>
          <IonicButton ionic="fish" linkto="/myduck/sandbox" addIonicClass="text-daffodil"/>
          <IonicButton ionic="construct" onClick={toggleMode} addIonicClass="text-daffodil" />
        </div>
      </div>
    </div>
  );
}
