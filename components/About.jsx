function About() {
  return (
    <div
      name="about"
      className="h-screen text-white w-full bg-[#0a192f]">
      <div className="flex justify-center items-center w-full h-full flex-col">
        <div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8">
          <div className=" sm:text-right pb-8 pl-4 ">
            <p className="text-4xl font-bold inline border-b-4 border-[#7abe41] ">
              About
            </p>
          </div>
          <div className="hidden md:text-right md:inline">
            {/* <Image src={'/hero.png'} height={100} width={100} alt='hero' /> */}
          </div>
        </div>
        <div className="max-w-[1000px] w-full py-4 px-4 grid sm:grid-cols-2 gap-8">
          <div className="sm:text-right pb-4 pl-4 text-3xl font-bold">
            <p>
              Hi, I&apos;m Patrick. It&apos;s nice to have you here and I&apos;d
              like you to check around my website.
            </p>
          </div>
          <div className="text-xs pl-4 pb-4 sm:text-lg md:text-xl">
            <p>
              Welcome to my website! I&apos;m a web developer with expertise in
              full-stack application development. From individuals to large
              companies, I create custom software solutions. Let&apos;s
              collaborate for exceptional web development. Explore my portfolio
              to see my expertise in action.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
