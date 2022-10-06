import React from "react";
import NotVerified from "./user/NotVerified";
import Container from "./Container";
import HeroSlideshow from "./user/HeroSlideshow";

export default function Home() {
  return (
    <div className="dark:bg-primary bg-white min-h-screen">
      <Container className="px-2 xl:p-0">
        <NotVerified />
        {/* slider */}
        <HeroSlideshow />
        {/* Most rated movies */}
      </Container>
    </div>
  );
}
