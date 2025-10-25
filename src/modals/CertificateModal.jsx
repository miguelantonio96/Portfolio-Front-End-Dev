import { useSelector } from "react-redux";

export const CertificateModal = () => {
  const { certificateActive } = useSelector((state) => state.portfolio);
  return (
    <>
      <div className="certificate-image-container">
        <iframe
          src={certificateActive.image}
          alt={certificateActive.name}
          className="certification-image"
          allowFullScreen
          loading="lazy"
        />
        <p className="certification-description">
          {certificateActive.description}
        </p>
      </div>
    </>
  );
};
