import { Parallax } from "react-scroll-parallax";

const ParallaxImage = () => {
  return (
    <Parallax
      translateY={["-100px", "100px"]}
      speed={10}
      className="h-svh container relative rounded-[35px] bg-red-600"
      style={{
        backgroundImage: `url(https://d3aj5vjnhssdu4.cloudfront.net/wp-content/uploads/AW_Team_01-2200x1650.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    ></Parallax>
  );
};

export default ParallaxImage;
