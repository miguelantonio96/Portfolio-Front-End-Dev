import { useState } from "react";
import { ContextApp } from "./context";
import { useDispatch, useSelector } from "react-redux";
import { setCertificateActive } from "../redux/portfolioSlice";
import { onToggleContactMeChat } from "../redux/uiSlice";

export const AppPortfolioContext = ({ children }) => {
  const { IsContactMe } = useSelector((state) => state.ui);
  const [isModal, setIsModal] = useState(false);
  const [InfoModal, setInfoModal] = useState({
    contactMeModal: false,
    certificateModal: false,
  });
  const dispatch = useDispatch();

  const handleToggleContactMeChat = () => {
    dispatch(onToggleContactMeChat());
  };

  const openModal = (isModalOpen) => {
    
    setIsModal(true);
    setInfoModal({
      contactMeModal: isModalOpen === "contactMeModal" ? true : false,
      certificateModal: isModalOpen === "certificateModal" ? true : false,
    });
  };

  const closeModal = () => {
    setIsModal(false);
  };

  const handleCertificateOnModal = (certificateActive) => {
    openModal("certificateModal");
   
    dispatch(setCertificateActive(certificateActive));
  };

  return (
    <ContextApp.Provider
      value={{
        isModal,
        InfoModal,
        IsContactMe,
        setInfoModal,
        openModal,
        closeModal,
        handleCertificateOnModal,
        handleToggleContactMeChat,
      }}
    >
      {children}
    </ContextApp.Provider>
  );
};
