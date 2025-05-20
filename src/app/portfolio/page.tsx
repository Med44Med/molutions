import Header from "../../../components/portfolio/header";
import ProjectList from "../../../components/portfolio/projectList";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Molutions | Portfolio",
  description: "Solutions begin with letter M.",
};

const Portfolio = () => {

  
  const posts = [
    {
      id: 1,
      name: "Todo app",
      content:
        "lorem ipsium lorem ipsium lorem ipsium lorem ipsium lorem ipsium lorem ipsium ",
      link: "todo",
      platform: ["web", "mobile"],
      image: ["https://picsum.photos/id/237/300/200","https://picsum.photos/id/23/300/200","https://picsum.photos/id/44/300/200"],
      views: 240,
      likes: 25,
    },
  ];

  return (
    <>
      <main>
        <Header />
        <ProjectList projectProps={posts} />
      </main>
    </>
  );
};

export default Portfolio;
