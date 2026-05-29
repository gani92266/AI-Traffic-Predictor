import "./ExportButton.css";

import html2canvas from "html2canvas";

import {

  FaCamera,

} from "react-icons/fa";

function ExportButton() {

  const captureDashboard = async () => {

    const dashboard =

      document.querySelector(".app");

    const canvas =

      await html2canvas(dashboard);

    const image =

      canvas.toDataURL("image/png");

    const link =
      document.createElement("a");

    link.href = image;

    link.download =
      "AI-Traffic-Dashboard.png";

    link.click();

  };

  return (

    <button

      className="export-btn"

      onClick={captureDashboard}

    >

      <FaCamera />

      Export Dashboard

    </button>

  );

}

export default ExportButton;