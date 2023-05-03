import React from "react";
import duck from "../../assets/logo/rubberduck4-yellow-512.png";
import { useLinkButtonLogic } from "../../hooks/useLinkButtonLogic";
import IconButton from "../Common/IconButton";
import { useNavButtonLogic } from "../../hooks/useNavButtonLogic";

export default function Heading() {
  const { handleNavMenu } = useNavButtonLogic();
  const handleLinkClick = useLinkButtonLogic();

  return (
    <div className="w-effective heading-fade-in flex-none px-2">
      <div className="flex items-center h-10 justify-between px-2 ">
        <div className="flex-row-center flex-1 gap-1 items-center">
          <div className="min-w-12 leading-none">
            <IconButton
              onClick={handleNavMenu}
              task="navMenu"
              addButtonClass="lg:nonactive-button h-6 w-6"
              addIconClass="lg:nonactive-button "
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
          
            <img
              className="h-8 pr-1"
              src={duck}
              alt="rubber duck"
              width="32"
              height="32"
            />
        </div>

        <div className="flex flex-1 justify-end items-start gap-2">
          <IconButton type="routing" page="about" addButtonClass="h-6 w-6" />
          <IconButton type="routing" page="sandbox" addButtonClass="h-6 w-6" />
        </div>
      </div>
    </div>
  );
}
