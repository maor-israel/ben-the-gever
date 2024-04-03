import Image from "next/image";
import benWithCamera from "../../public/benWithCamera.jpeg";
import hahah from "../../public/hahah.png";
import { useRouter } from "next/router";

const divStyle = {
  background: "aliceBLue",
  backgroundImage: `url(${benWithCamera.src})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  position: "relative",
  color: "white",
  textAlign: "center",
  width: "70%",
  display: "flex",
  flexDirection: "column",
  padding: "7.5%",
  backgroundPosition: "center",
  margin: "auto",
  borderRadius: "7px",
  height: "40vh",
};

const Blog = () => {

  const router = useRouter();

  return (
    <section style={{ width: "100%", height: "70vh" }}>
      <h1
        style={{
          fontFamily: "Rubik",
          fontSize: "60px",
          fontWeight: "600",
          lineHeight: "22px",
          textAlign: "center",
          color: "rgba(15, 33, 103, 1)",
        }}
      >
        הבלוג של בן
      </h1>
      <Image onClick={() => router.push("/Blog")} width={200} height={100} style={{marginRight : "50%", transform : "translate(50%)"}} alt="Ben romano" src={hahah.src}></Image>
      <div style={divStyle}></div>
    </section>
  );
};

export default Blog;
