import React, { useState } from "react";
import { Modal } from "@mui/material";
import Image from "next/image";
import heroImg from "../../public/hero-img.jpeg";
import Signeture from "../../public/signeture.png";

const AddStoryForm = ({ openModal, handleClose }) => (
  <Modal
    sx={{ width: "80%", margin: "auto", marginTop: "5%" }}
    open={openModal}
    onClose={handleClose}
  >
    <div>
      <iframe
        className="airtable-embed"
        src="https://airtable.com/embed/appJ2qsAVwaRQvqWW/pagGcSMDLIMkzoX5S/form"
        onWheel={() => {}}
        width="100%"
        height="100%"
        style={{ background: "transparent", height: "90vh" }}
      />
    </div>
  </Modal>
);

const HomepageHero = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleClose = () => setOpenModal(false);
  const handleOpen = () => setOpenModal(true);

  //STYLES
  const gridStyle = {
    backgroundImage: `url(${heroImg.src})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "top center",
    position: "relative",
    minHeight: "60vh",
    scale: "1",
    color: "white",
    textAlign: "center",
    width: "100%",
  };

  const ButtonStyle = {
    position: "absolute",
    top: "40%",
    right: "5%",
    transform: "translate(-50%, -50%)",
    color: "var(--navColor)",
    backgroundColor: "var(--mainColor)",
    border: "none",
    borderRadius: "10px",
    height: "10%",
    fontSize : "15px",
    fontWeight : "bold",
    width: "13%",
    boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
  };

  const signStyle = {
    position: "absolute",
    top: "-20%",
    right: "4%",
    color: "var(--navColor)",
    width : "35%",
    height : "65%"
  }

  const h4Style = {
    position: "absolute",
    top: "22%",
    right: "4%",
    color: "var(--navColor)",
    width : "30%",
    height : "60%"
  }

  return (
    <section style={gridStyle}>
      <Image
        src={Signeture}
        style={signStyle}
        alt="Picture of the author"
      />
      <h2 style={h4Style}>הילד עם החיוך הנצחי</h2>
      <button style={ButtonStyle} onClick={handleOpen}>
        להוספת סיפור משותף
      </button>
      <AddStoryForm openModal={openModal} handleClose={handleClose} />
    </section>
  );
};

export default HomepageHero;
