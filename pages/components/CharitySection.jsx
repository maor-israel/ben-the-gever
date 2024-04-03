import Image from "next/image";
import { useEffect, useState } from "react";
import birds from "../../public/birds.png";

const CharitySection = () => {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch("/api/getCharity");
      const json = await res.json();
      setStories(json);
    };
    getData();
  }, []);

  const wrapperStyle = {
    display: "flex",
    justifyContent: "center",
    width: "100%",
  };

  const imgStyle = { margin: "2%", borderRadius: "7px", objectFit : "cover" };
  return (
    <section
      style={{
        width: "100%",
        display: "flex",
        height: "80vh",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
      }}
    >
      <h1
        style={{
          fontFamily: "Rubik",
          fontSize: "60px",
          fontWeight: "600",
          lineHeight: "22px",
          textAlign: "right",
          color: "rgba(15, 33, 103, 1)",
        }}
      >
        ממשיכים את דרכו
      </h1>
      <h4
        style={{
          fontFamily: "Rubik",
          fontSize: "30px",
          fontWeight: "600",
          lineHeight: "22px",
          textAlign: "right",
          color: "rgba(15, 33, 103, 1)",
        }}
      >
        את המצווה שעשיתי לך תעביר הלאה ...
      </h4>
      <div style={wrapperStyle}>
        {stories.map((item, idx) => (
          <Image
            key={idx}
            alt="ben romano"
            style={imgStyle}
            width={400}
            height={400}
            src={item.photo}
          ></Image>
        ))}
      </div>
      <Image
        alt="ben romano"
        style={{
          position: "absolute",
          zIndex: "-1",
          transform: "rotate(40deg)",
          left: "0",
        }}
        width={1000}
        height={400}
        src={birds.src}
      ></Image>
      <Image
        alt="ben romano"
        style={{
          position: "absolute",
          zIndex: "-1",
          transform: "rotate(40deg)",
          left: "40%",
          bottom: "-10%",
        }}
        width={1000}
        height={400}
        src={birds.src}
      ></Image>
    </section>
  );
};

export default CharitySection;
