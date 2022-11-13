import Head from "next/head";
import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

function Home() {
    return (
        <div name="home" className="bg-[#0a192f] h-screen">
            <Head>
                <title>Wambua</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
                <p className="text-[#7abe41]">Hi, my name is</p>
                <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
                    Wambua <span className="text-[#7abe41]">Kitheka</span>
                </h1>
                <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
                    I&apos;m a full stack developer.
                </h2>
                <p className="text-[#8892b0] py-4 max-w-[840px] text-lg">
                    I major in the building and development of digital web experiences. I
                    have a special focus on responsive full-stack development of web
                    applications
                </p>
                <div>
                    <Link to='work' smooth={true}>
                        <button className="text-[#8892b0] group border-2 rounded-lg w-[150px] p-2 justify-center flex items-center hover:bg-[#7abe41] hover:text-white">
                            View Work{" "}
                            <HiArrowNarrowRight className="ml-4 group-hover:rotate-90 group-hover:text-[#0a192f] duration-500" />
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Home;
