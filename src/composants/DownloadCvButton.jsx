import cvUrl from "../assets/cv/CV_BAGNAN_2026.pdf?url";

function DownloadCvButton({ onClick }) {
  return (
    <a
      className="cv-download"
      href={cvUrl}
      download="CV_BAGNAN_2026.pdf"
      onClick={onClick}
      aria-label="Télécharger le CV de Lemuel"
    >
      Demander mon CV <span aria-hidden="true">↗</span>
    </a>
  );
}

export default DownloadCvButton;
