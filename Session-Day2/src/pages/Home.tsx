import { FC } from "react";
import Hero from "../features/home/components/Hero";
import Posts from "../features/home/components/Posts";

const Home: FC = () => {
  return (
    <>
      <Hero />
      <Posts />
    </>
  );
};

export default Home;
