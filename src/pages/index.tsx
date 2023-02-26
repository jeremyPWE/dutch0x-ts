import Content from "@/components/Content";
import DashboardSelect from "@/components/DashboardSelect";
import Events from "@/components/Events";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Overview from "@/components/Overview";

export default function Home() {
  return (
    <>
      <Header />
      <Navbar />
      <DashboardSelect />
      <Content>
        <Events />
        <Overview />
      </Content>
    </>
  );
}
