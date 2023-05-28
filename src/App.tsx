import { BsGithub, BsInstagram } from "react-icons/bs";
function App() {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="lg:w-[800px] lg:px-0 px-6">
        <div className="flex items-center mt-32 gap-6 w-full lg:flex-row flex-col justify-start">
          <img
            src="https://avatars.githubusercontent.com/u/61335176?v=4"
            alt="logo"
            className="rounded-full w-36 h-36"
          />
          <div className="text-gray-900 flex flex-col lg:items-start items-center">
            <div className="text-3xl">Hello, I'm</div>
            <div className="text-5xl font-semibold text-center">
              Dmitri Sergheevich Cunev
            </div>
          </div>
        </div>
        <div className="text-lg mt-12 lg:text-left text-center">
          I'm a developer and a reverse engineer from Republic of Moldova. I'm
          passionate about frontend development and I have created a few
          websites that are used by thousands of people on daily bases. The
          projects I led and contributed to are{" "}
          <span className="text-blue-600 hover:underline">
            <a href="https://nightcore.studio">Nightcore Studio</a>
          </span>{" "}
          and{" "}
          <span className="text-blue-600 hover:underline">
            <a href="https://assist.games">Assist Games</a>
          </span>
          . During my journey I also made a small and scuffed game called
          Pretend which sold over 25000 copies{" "}
          <span className="text-xs text-blue-600 hover:underline">
            <a href="https://www.youtube.com/watch?v=5-dn4NsIEC0">
              xQc played it day 1 :)
            </a>
          </span>
          . I worked at Amazon as a Software Development Engineer for 5 months.
        </div>
        <div className="text-lg mt-12 lg:text-left text-center">
          I'm also a guitar player and my favorite band is Alternosfera.
        </div>
      </div>

      <div className="relative w-full mt-12 flex justify-center mb-12">
        <div className="flex flex-col w-full absolute -z-40">
          <div className="bg-black h-2"></div>
          <div className="bg-white h-2"></div>
          <div className="bg-black h-2"></div>
          <div className="bg-white h-2"></div>
          <div className="bg-black h-2"></div>
          <div className="bg-white h-2"></div>
        </div>
        <div className="flex w-[800px] justify-between lg:px-0 px-4">
          <div className="flex justify-center items-center px-4 bg-white text-gray-500 gap-4 h-10">
            <a href="https://github.com/cunev">
              <BsGithub className="w-6 h-6 hover:text-gray-700" />
            </a>
            <a href="https://www.instagram.com/cunev.dmitri/">
              <BsInstagram className="w-6 h-6 hover:text-gray-700" />
            </a>
          </div>
          <div className="flex">
            <div className="overflow-hidden w-8">
              <div className="flex flex-col w-5 skew-x-[-33deg] translate-x-4">
                <div className="bg-[#E40303] h-2"></div>
                <div className="bg-[#FF8C00] h-2"></div>
                <div className="bg-[#FFED00] h-2"></div>
                <div className="bg-[#008026] h-2"></div>
                <div className="bg-[#24408E] h-2"></div>
                <div className="bg-[#732982] h-2"></div>
              </div>
            </div>
            <div className="overflow-hidden w-8 -scale-x-100">
              <div className="flex flex-col w-5 skew-x-[-33deg] translate-x-4">
                <div className="bg-[#E40303] h-2"></div>
                <div className="bg-[#FF8C00] h-2"></div>
                <div className="bg-[#FFED00] h-2"></div>
                <div className="bg-[#008026] h-2"></div>
                <div className="bg-[#24408E] h-2"></div>
                <div className="bg-[#732982] h-2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
