import AboutSkills from "./components/AbouSkills";
import AchievementsTimeline from "./components/Achiev";
import SkillGraph from "./components/Chart";
// import SkillHierarchy from "./components/Chart";
import Footer from "./components/Footer";
import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
import ProcessSteps from "./components/process";

export default function Home() {
  return (
    <>
      <main className="overflow-x-hidden">
        <LandingPage />
        <AboutSkills />
        <ProcessSteps />
        <AchievementsTimeline />
      </main>
    </>
  );
}
