import React, { useContext } from "react";
import { Link } from "react-router-dom";
import IonicButton from "../common/IonicButton";
import MainHr from "../common/MainHr";
import FlapContext from "../../contexts/FlapContext";

export default function Heading() {
    const {flap, setFlap} = useContext(FlapContext)

    const handleButtonClick = () => {
        setFlap(!flap);
      };

  return (
    <div className="w-effective flex-none px-mainspace">
      <div className="flex-row-center justify-between pt-mainspace pb-1 ">
        <div className="flex-row-center gap-2">
          <div>
            <IonicButton
              ionic="chatbubbles"
              onClick={handleButtonClick}
            />
          </div>
          <div>
            <Link
              to="/myduck"
              className=" title text-lg font-bold uppercase tracking-wide"
            >
              MyDuck
            </Link>
          </div>
        </div>
        <div className="flex-row-center gap-1.5 icon-parent">
          <IonicButton ionic="fish" linkto="/myduck/sandbox" />
          <IonicButton ionic="information-circle" linkto="/myduck/about" />
          <IonicButton ionic="add-circle" />
          <IonicButton ionic="person-circle" />
        </div>
      </div>
      <MainHr screen />
    </div>
  );
}
