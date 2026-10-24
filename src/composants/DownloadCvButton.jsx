function DownloadCvButton({ onClick }) {
  return (
    <a
      className="cv-download"
      href="mailto:bagnandeljes@gmail.com?subject=Demande%20de%20CV"
      onClick={onClick}
      aria-label="Demander le CV de Lemuel par e-mail"
    >
      Demander mon CV <span aria-hidden="true">↗</span>
    </a>
  );
}

export default DownloadCvButton;
