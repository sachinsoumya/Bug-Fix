import packages from "react-fast-marquee";
const Marquee = packages.default || packages;

const technologies = ["React", "Redux", "Node.js", "Express", "MongoDB", "AWS"];

const SuperPower = () => {
  return (
    <div>
      <Marquee>
        {technologies.map((technology) => (
          <div className="toast toast-top toast-start" key={technology}>
            <div className="alert alert-info">
              <span>{technology}</span>
            </div>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default SuperPower;
