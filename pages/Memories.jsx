import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { Modal, ImageListItemBar } from "@mui/material";
import React, { useEffect, useState } from "react";
import Story from "./components/Story"; // Ensure this path is correct
import heroImg from "../public/memoriesBackground.png"; // Adjust the path as necessary
import smiley from "../public/smiley.png"; // Adjust the path as necessary
import Image from "next/image";

const AddStoryForm = ({ openModal, handleClose }) => (
  <Modal
    open={openModal}
    onClose={handleClose}
    sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
  >
    <iframe
      className="airtable-embed"
      src="https://airtable.com/embed/appJ2qsAVwaRQvqWW/pagGcSMDLIMkzoX5S/form"
      frameBorder="0"
      onWheel={(e) => e.preventDefault()}
      width="50%"
      height="80%"
      style={{ background: "transparent", border: "none" }}
    />
  </Modal>
);

const MemoriesPage = () => {
  const [openStoryModal, setOpenStoryModal] = useState(false);
  const [memory, setMemory] = useState({});
  const [memories, setMemories] = useState([]);
  const [openAddStoryForm, setOpenAddStoryForm] = useState(false);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch("/api/getAllMemories");
      const json = await res.json();
      setMemories(json);
    };

    getData();
  }, []);

  const handleCloseStoryModal = () => setOpenStoryModal(false);
  const handleOpenStoryModal = (memory) => {
    setMemory(memory);
    setOpenStoryModal(true);
  };

  const handleCloseAddStoryForm = () => setOpenAddStoryForm(false);
  const handleOpenAddStoryForm = () => setOpenAddStoryForm(true);

  const handleChange = async (e) => {
    const value = e.target.value.toLowerCase();
    if (value === "") {
      const res = await fetch("/api/getAllMemories");
      const json = await res.json();
      setMemories(json);
    } else {
      const filteredMemories = memories.filter((rec) =>
        rec.name.toLowerCase().includes(value)
      );
      setMemories(filteredMemories);
    }
  };

  //STYLES
  const imageListStyle = {
    borderRadius: "3px",
    boxShadow: "0 0 0px black",
    marginBottom: "4%",
    width: "90%",
    margin: "auto",
    marginTop: "1%",
    ":hover": {
      cursor: "pointer",
    },
  };

  const heroStyle = {
    backgroundImage: `url(${heroImg.src})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center 30%",
    position: "relative",
    minHeight: "60vh",
    scale: "1",
    color: "white",
    textAlign: "center",
    width: "100%",
  };

  const h1Style = {
    position: "absolute",
    top: "22%",
    right: "10%",
    color: "var(--navColor)",
    width: "30%",
    height: "60%",
  };

  const qouteStyle = {
    color: "var(--navColor)",
    height: "60%",
    textAlign: "center",
  };

  const searchDivStyle = {
    width: "100%",
    margin: "auto 0",
    display: "flex",
    justifyContent: "left",
    alignItems: "center",
  };

  const inputStyle = {
    border: "none",
    borderRadius: "7px",
    boxShadow: "0 0 4px grey",
    width: "20%",
    marginLeft: "5.5%",
    height: "4vh",
    background: "var(--mainColor)",
    color: "var(--navColor)",
    padding: "5px",
    fontSize: "20px",
    placeholder: {
      color: "var(--navColor)",
    },
  };

  const ButtonStyle = {
    position: "absolute",
    top: "35%",
    right: "18.5%",
    color: "var(--navColor)",
    backgroundColor: "var(--mainColor)",
    border: "none",
    borderRadius: "10px",
    height: "10%",
    fontSize: "15px",
    fontWeight: "bold",
    width: "13%",
    boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
    ":hover": {
      cursor: "pointer",
    },
  };

  const getMemoryDate = (memory) => {
    return new Date(memory.date).toLocaleDateString("he");
  };
  // Styles and helper functions remain unchanged...

  return (
    <div style={{ width: "100%" }}>
      <div style={heroStyle}>
        <h1 style={h1Style}>הסיפורים שלנו</h1>
        <button style={ButtonStyle} onClick={handleOpenAddStoryForm}>
          להוספת סיפור משותף
        </button>
      </div>
      <br />
      <br />
      <div style={{ position: "relative" }}>
        <h1 style={qouteStyle}>אני לא משוגע אני נורמלי בסטנדרטים שלי</h1>
        <Image
          src={smiley}
          alt="Smiley"
          layout="fixed"
          width={50}
          height={50}
          style={{ position: "absolute", top: "0", left: "29%" }}
        />
      </div>
      <div style={searchDivStyle}>
        <input
          style={inputStyle}
          type="text"
          onChange={handleChange}
          placeholder="חיפוש..."
        />
      </div>
      {memories?.length > 0 && (
        <ImageList cols={3} sx={imageListStyle} variant={"standard"}>
          {memories.map((memory, idx) => (
            <ImageListItem
              sx={{ margin: "4%", borderRadius: "7px" }}
              key={idx}
              onClick={() => handleOpenStoryModal(memory)}
            >
              <img
                key={idx}
                src={memory.files[0].url}
                alt={memory.name}
                style={{ borderRadius: "7px" }}
              />
              <ImageListItemBar
                title={memory.name}
                subtitle={getMemoryDate(memory)}
                sx={{ borderRadius: "0 0px 7px 7px" }}
              />
            </ImageListItem>
          ))}
        </ImageList>
      )}
      <AddStoryForm
        openModal={openAddStoryForm}
        handleClose={handleCloseAddStoryForm}
      />
      <Modal
        open={openStoryModal}
        onClose={handleCloseStoryModal}
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Story
          imagesArray={memory.files}
          bodyText={memory.text}
          headline={memory.headline}
        />
      </Modal>
    </div>
  );
};

export default MemoriesPage;
