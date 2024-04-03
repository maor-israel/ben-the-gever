import { AppBar, Toolbar, Link } from "@mui/material";
import styles from "../../styles/navbar.module.css";


const NavigationBar = () => {

  const navbarLinks = [
    { id: 1, label: "בן אברהם רומנו", link: "/", icon: null },
    { id: 2, label: "הסיפורים שלנו", link: "/Memories", icon: null },
    { id: 3, label: "ציר הזמן", link: "/TimeLine", icon: null },
    { id: 4, label: "הבלוג של בן", link: "/Blog", icon: null },
  ];

  return (
    <AppBar position="sticky" sx={{ background: "var(--mainColor)" }}>
      <Toolbar>
        {navbarLinks.map(({ id, label, link }) => (
          <Link
            key={id}
            href={link}
            underline="none"
            color="rgb(255, 119, 0)"
            sx={{ marginRight: "20px" }}
            className={styles.link}
          >
            {label}
          </Link>
        ))}
      </Toolbar>
    </AppBar>
    
  );
};

export default NavigationBar;
