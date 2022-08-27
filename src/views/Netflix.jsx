import ChildrenSection from "../components/Netflix/ChildrenSection";
import DownloadSection from "../components/Netflix/DownloadSection";
import EnjoySection from "../components/Netflix/EnjoySection";
import FAQSection from "../components/Netflix/FAQSection";
import Footer from "../components/Netflix/Footer";
import MainSection from "../components/Netflix/MainSection";
import WatchEverySection from "../components/Netflix/WatchEverySection";
const Netflix = () => {
  return (
    <div className="font-netflix text-white bg-black h-screen w-full">
      <MainSection />
      <EnjoySection />
      <DownloadSection />
      <WatchEverySection />
      <ChildrenSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Netflix;
