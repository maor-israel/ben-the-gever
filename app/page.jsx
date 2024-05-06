import About from "@/components/home-page/about";
import BenBlogTeaser from "@/components/home-page/ben-blog-teaser";
import HisWayTeaser from "@/components/home-page/his-way-teaser";
import BackgroundImage from "@/components/background-img";
import MemoriesSection from "@/components/home-page/memories-section";
import heroImg from '@/assets/imgs/home-hero-img.jpeg'
import nameImg from '@/assets/imgs/ben-name-title.png'
import HomePageHero from "@/components/home-page-hero";

export default function HomePage() {
  return (
    <>
      <BackgroundImage imgSrc={heroImg} adjustImageStyleTailwindString={'lg:object-heroImg object-heroImgSetZero object-cover'}/>
      <HomePageHero subTitle={'הילד עם החיוך הנצחי...'} titleImgSrc={nameImg} buttonTitle="להוספת סיפור משותף" 
      mainArticleAdjustmentTailwindString={'-top-10vh right-0vw'} subTitleAdjustmentTailwindString="smMobile:hidden"/>
      <About />
      <MemoriesSection />
      <HisWayTeaser />
      <BenBlogTeaser />
    </>
  );
}
