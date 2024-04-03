import heroImg from "../public/benInTheSunset.jpeg";

const TimeLine = () => {

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
  const h2Style = {
    position: "absolute",
    top: "30%",
    right: "10%",
    color: "var(--navColor)",
    width: "30%",
    height: "60%",
  };

  return (<div>

    <div style={heroStyle}>
        <h1 style={h1Style}>הסיפור שלי</h1>
        <h2 style={h2Style}>בן אברהם רומנו ז״ל</h2>
    </div>

  </div>)
};


export default TimeLine;