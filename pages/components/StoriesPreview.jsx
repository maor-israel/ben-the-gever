import { useEffect, useState } from "react";
import frame from "../../public/frame.png";
import hearts from "../../public/hearts.png";
import Image from "next/image";
import { useRouter } from "next/router";

const Stories = () => {
  const router = useRouter();
  const [stories, setStories] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const res = await fetch("/api/getFamilyStories");
      const json = await res.json();
      setStories(json);
    };

    getData();
  }, []);

  const handleClick = () => {
    router.push("/Memories");
  };

  const mainDivStyle = {
    background: "aliceBLue",
    backgroundImage: `url(${frame.src})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    position: "relative",
    minHeight: "60vh",
    color: "white",
    textAlign: "center",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    padding: "7.5%",
  };

  const imageWrrapStyle = {
    display: "flex",
    width: "100%",
    justifyContent: "center",
  };
  const imageStyle = {
    width: "30%",
    margin: "10px",
    height : "auto"
  };
  const ButtonStyle = {
    color: "var(--navColor)",
    backgroundColor: "var(--mainColor)",
    border: "none",
    borderRadius: "10px",
    height: "5vh",
    fontSize: "15px",
    fontWeight: "bold",
    width: "30%",
    margin: "3% auto",
    boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
  };

  const heartsImageStyle = {
    position: "absolute",
    bottom: "16%",
    right: "30%",
  };

  const topSpanStyle = {
    position: "absolute",
    width: "90%",
    borderRadius: " 50%/50%",
    background: "aliceBlue",
    height: "20vh",
    top: "8%",
  };

  const bottomeSpanStyle = {
    position: "absolute",
    width: "90%",
    borderRadius: " 50%/50%",
    background: "aliceBlue",
    height: "10vh",
    bottom: "30%",
  };
  return (
    <section style={mainDivStyle}>
      <div style={imageWrrapStyle}>
        {stories.map((item,idx) => {
          return (
            <Image
            key={idx}
              width={600}
              height={500}
              style={imageStyle}
              src={item.photo}
              alt="Picture of the author"
            />
          );
        })}
      </div>
      <br />
      <br />
      <div>
        <Image
          width={100}
          height={100}
          style={heartsImageStyle}
          src={hearts}
          alt="Picture of the author"
        ></Image>
        <button onClick={handleClick} style={ButtonStyle}>
          לכל הסיפורים והזכרונות
        </button>
      </div>
      <span style={topSpanStyle}></span>
      <span style={bottomeSpanStyle}></span>
    </section>
  );
};

export default Stories;
