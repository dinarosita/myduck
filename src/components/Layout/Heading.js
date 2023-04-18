import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import IonicButton from "../Common/IonicButton";
import MainHr from "../Common/MainHr";
import FlapContext from "../../contexts/FlapContext";
import GlobalConfigContext from "../../contexts/GlobalConfigContext";
import NavButton from "../Common/NavButton";

export default function Heading() {
  const { toggleMode } = useContext(GlobalConfigContext);

  const { setIsFlapOpen } = useContext(FlapContext);
  const navigate = useNavigate();

  function handleLinkClick(link) {
    setIsFlapOpen(false);
    navigate(link);
  }

  return (
    <div className="w-effective flex-none px-mainspace">
      <div className="flex-row-center h-full justify-between pb-1 pt-mainspace">
        <div className="flex-row-center gap-1 ">
          <NavButton />
          <div>
            <button
              onClick={() => handleLinkClick("/myduck")}
              className="text-sprig-100 hover:text-vincent-500/80 hover:bg-sprig-100/50 text-lg px-2 rounded-full font-bold uppercase tracking-wide "
            >
              Talking to my almond
            </button>
          </div>
        </div>

        <div className="flex-row-center icon-parent gap-2 pr-1">
          <IonicButton ionic="information-circle" linkto="/myduck/about" />
          <IonicButton ionic="fish" linkto="/myduck/sandbox" />

          <IonicButton ionic="construct" onClick={toggleMode}></IonicButton>
        </div>
      </div>
      <hr
        className={` absolute left-0 h-0.5 w-screen border-0 border-x-0 border-b-0 bg-gradient-to-r from-blossom-400 via-sprig-400 to-almond-400`}
      />
    </div>
  );
}
