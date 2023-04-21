import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import FlapContext from "../contexts/FlapContext";

export function useNavButtonLogic() {
  const { isFlapOpen, setIsFlapOpen } = useContext(FlapContext);
  const navigate = useNavigate();
  const location = useLocation();

  function handleOpenNav() {
    if (location.pathname !== "/myduck") {
      navigate("/myduck");
      setIsFlapOpen(true);
    }
    setIsFlapOpen(!isFlapOpen);
  }

  function handleCloseNav() {
    setIsFlapOpen(false);
  }

  return { handleOpenNav, handleCloseNav } ;
}
