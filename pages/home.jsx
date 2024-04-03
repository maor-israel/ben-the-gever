import { Grid } from "@mui/material";
import HomepageHero from "./components/HomepageHero";
import Story from "./components/Story";
import sideImg from "../public/sideImg.png";
import Stories from "./components/StoriesPreview";
import CharitySection from "./components/CharitySection";
import Blog from "./components/BlogSection";

const intro = ` נעים להכיר, קוראים לי בן אברהם רומנו 🙋‍♂️ אני בן 25 מבת
ים ואשמח לספר לכם את הסיפור שלי🙃
נולדתי ב-15.11.1997 ואני האח הסנדוויץ' במשפחה, לאחי
הגדול קוראים יוסי ולאחותי הקטנה שירן. מאז ומעולם אנחנו
מתגוררים בעיר בת ים.
אני אדם שאוהב את החיים ואת הסובבים שלי.
גדלתי בבית חם ועוטף כזה שמלא בערכים ואהבה לזולת. לימדו
אותי להקשיב, לעצור ולשאול, לדאוג לאלה שיושבים בסוף
הכיתה ולהגיד כל בוקר שלום לשכנה. גדלתי בבית שאבי התנדב
במשטרה ומשם ירשתי את האהבה להתנדבות. מהר מאוד הבנתי את
העוצמה וידעתי גם שזה הייעוד שלי.
ההתנדבות הראשונה שלי התחילה במשטרת ישראל ומשם צמחתי
והכרתי אנשים מדהימים והתחלתי להיות פעיל בעמותות רבות
כמו: מחייכים אל החיים , כנפיים של קרמבו, מד"א, עמותת
הילדים שלנו ועוד..
והכי חשוב בעיניי אתם שואלים? זו המצוות הקטנות - לעזור
לשכנה לסחוב קניות, לעזור לאדם עם פנצ'ר, לקנות אוכל למי
שאין, לשמח ילדים ולהפיץ אור ושמחה.
`;


const Home = () => {

  return (
    <>
      <Grid container>
        <HomepageHero />
        <Story
          headline={""}
          imagesArray={[{ url: sideImg.src }]}
          bodyText={intro}
          isMain={true}
        />
        <Stories></Stories>
        <CharitySection />
        <Blog />
      </Grid>
    </>
  );
};

export default Home;
