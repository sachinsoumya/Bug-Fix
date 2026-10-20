import packages from "react-fast-marquee";
const Marquee = packages.default || packages;

const technologies = [
  "React.js",
  "Redux-ToolKit",
  "Node.js",
  "Express.js",
  " Next.js",
  "TypeScript",
  "Tailwind CSS",
  "React Query",
  "JWT",
  "Docker",
  "MongoDB",
  "AWS",
  "Jest",
];

const SuperPower = () => {
  return (
    <div>
      <Marquee>
        {technologies.map((technology) => (
          <button className="btn btn-accent mx-2 font-bold text-black" key={technology}>
            {technology}
          </button>
        ))}
      </Marquee>
    </div>
  );
};

export default SuperPower;
