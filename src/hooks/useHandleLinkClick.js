import { useContext } from "react";
import FlapContext from "../contexts/FlapContext";
import { useNavigate } from "react-router-dom";

export default function useHandleLinkClick() {
    const {setIsFlapOpen} = useContext(FlapContext)
    const navigate = useNavigate()

    const handleLinkClick = (link) => {
        setIsFlapOpen(false)
        navigate(link)
    }
    return handleLinkClick
}