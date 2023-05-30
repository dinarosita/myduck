import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import FlapContext from "../contexts/FlapContext";

export function useNavFlap() {
  const { isFlapOpen, setIsFlapOpen } = useContext(FlapContext);
  const navigate = useNavigate();
  const location = useLocation();

  function handleNavMenu() {
    if (location.pathname !== "/myduck") {
      navigate("/myduck");
      setIsFlapOpen(true);
    }
    setIsFlapOpen(!isFlapOpen);
  }

  function handleNavClose() {
    setIsFlapOpen(false);
  }

  return { handleNavMenu, handleNavClose } ;
}
