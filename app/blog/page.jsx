import BackgroundImage from '@/components/background-img'
import benInDesert from '@/assets/imgs/ben-in-desert.jpeg'
import PageHero from '@/components/page-hero'
import BlogSection from '@/components/ben-blog-page/blog-section'

export default function BlogPage() {
  return (
    <>
        <BackgroundImage imgSrc={benInDesert} adjustImageStyleTailwindString='h-40vh object-cover object-center' />
        <PageHero title={'הבלוג של בן'} mainArticleAdjustmentTailwindString={'top-17vh mobile:top-4vh mobile:right-4vw'} />
        <p className={`font-bold max-w-fit text-center self-center text-2xl text-headline-font-color`}>
              {'“מחר יום חדש אי אפשר לדעת מה יקרה, תחיו את הרגע וכשיגיע מחר תתעסקו בו”'}
        </p>
        <BlogSection />
    </>
  )
}


