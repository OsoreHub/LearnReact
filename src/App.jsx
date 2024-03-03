import Header from "./components/Header";
import FirstSection from "./components/FirstSection";
import SecondSection from "./components/SecondSection";
import TabsSection from "./components/TabsSection";
import FeedbackSection from "./components/FeedbackSection";
import { useState } from "react";

export default function App() {
  const [tab, setTab] = useState("main");

  return (
    <>
      <Header />
      <main>
        <TabsSection active={tab} onChange={(current) => setTab(current)} />
        {tab === "main" && (
          <>
            <FirstSection />
            <SecondSection />
          </>
        )}

        {tab === "feedback" && <FeedbackSection />}
      </main>
    </>
  );
}
