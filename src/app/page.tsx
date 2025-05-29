import Header from "@/components/Header";
import Title from "@/components/Title";
import MissionVision from "@/components/MissionVision";
import FeaturesSection from "@/components/FeaturesSection";
import Roadmap from "@/components/Roadmap";
import EncryptedMessaging from "@/components/EncryptedMessaging";
import CreatePosts from "@/components/CreatePosts";
import StrategicPartners from "@/components/StrategicPartners";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-[#000] text-white">
      <Header />
      <Title />
      <MissionVision />
      <EncryptedMessaging />
      <FeaturesSection />
      <CreatePosts />
      <Roadmap />
      <StrategicPartners />
      <Footer />
    </main>
  );
}