import { useContext } from "react";
import { ContextApp } from "../context/context";
import { CertificateModal } from "./CertificateModal";
import { ContactMeModal } from "./ContactMeModal";

export const ModalLayout = () => {
  const { InfoModal, isModal, closeModal } = useContext(ContextApp);

  return (
    <div
      className="contact-me-modal-container"
      style={{
        display: isModal ? "block" : "none",
        position: "relative",
      }}
    >
      <div
        // onClick={() => closeModal()}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          zIndex: 2,
        }}
      ></div>
      <dialog
        style={{
          display: isModal ? "flex" : "none",
          flexDirection: "column",
          justifyContent: "space-around",
          alignItems: "center",
          gap: "2rem",
          padding: "30px",
          color: "white",
          fontSize: "1.2rem",
          backgroundColor: "#0e0e10",
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 1000,
          borderRadius: "10px",
        }}
        className="contact-me-modal  w-3xl p-2 z-10 bg-amber-400"
      >
        <span
          onClick={() => {
            closeModal();
          }}
          className="cursor-pointer absolute right-2 top-2 p-2 font-bold rounded-md  text-gray-400 hover:bg-neutral-700 hover:text-black p-1"
        >
          X
        </span>
        {InfoModal.certificateModal ? <CertificateModal /> : ""}
        {InfoModal.contactMeModal ? <ContactMeModal /> : ""}
      </dialog>
    </div>
  );
};
