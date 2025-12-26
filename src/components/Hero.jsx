import heroImage from "../assets/portrait2.jpg";
import Icon from "./Icon";

const Hero = ({ data }) => {
  return (
    <>
      {/* Hero Text Tile */}
      <div className="col-span-1 md:col-span-2 lg:col-span-3 rounded-3xl bg-card-light dark:bg-card-dark p-6 sm:p-10 shadow-sm border border-gray-100 dark:border-gray-800 flex flex-col justify-center relative overflow-hidden group">
        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
          <span className="material-symbols-outlined text-9xl text-primary rotate-12">
            cloud
          </span>
        </div>
        <div className="relative z-10 space-y-6 max-w-2xl">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight tracking-tight">
            {data.personal.tagline}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">
              {data.personal.taglineHighlight}
            </span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            {data.personal.description}
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              className="inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3 text-sm font-bold text-white transition-all hover:bg-blue-700 hover:shadow-lg hover:shadow-primary/25"
              href={data.social_links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              Get in touch
            </a>
            {data.hero.buttons.map((button, index) => (
              <a
                key={index}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gray-100 dark:bg-gray-800 px-6 py-3 text-sm font-bold text-gray-900 dark:text-white transition-all hover:bg-gray-200 dark:hover:bg-gray-700"
                href={data.social_links[button.socialKey]}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon name={button.icon} className="h-[18px] w-[18px]" />
                {button.text}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Portrait Tile */}
      <div className="col-span-1 md:col-span-2 lg:col-span-1 h-full min-h-[300px] lg:min-h-auto relative rounded-3xl overflow-hidden shadow-sm border border-gray-100 dark:border-gray-800 group">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 z-10"></div>
        <img
          alt={data.personal.imageAlt}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          src={heroImage}
        />
        <div className="absolute bottom-6 left-6 z-20">
          <p className="text-white font-bold text-xl">{data.personal.name}</p>
          <p className="text-white/80 text-sm">{data.personal.role}</p>
        </div>
      </div>
    </>
  );
};

export default Hero;
