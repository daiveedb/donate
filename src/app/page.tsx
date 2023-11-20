import Image from "next/image";
import BackgroundSVG from "./components/home-components/BackgroundSvg";
import WorldMapSvg from "./components/home-components/WorldMapSvg";
import PlantIcon from "./components/icons/PlantIcon";
import BookIcon from "./components/icons/BookIcon";
import JagaIcon from "./components/icons/JagaIcon";
import PhoneIcon from "./components/icons/PhoneIcon";
import FacebookIcon from "./components/icons/FacebookIcon";
import TwitterIcon from "./components/icons/TwitterIcon";
import { AiOutlineMail } from "react-icons/ai";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-screen overflow-x-hidden pt-[90px]">
      <section className="flex flex-col lg:flex-row-reverse justify-between">
        <div className="relative flex-1">
          <div className="absolute top-0 -right-[200px] z-20">
            <BackgroundSVG height={400} />
          </div>
          <div className="absolute hidden lg:block top-0 -right-[200px]">
            <WorldMapSvg height={400} />
          </div>
        </div>
        <div className="flex flex-col flex-1 z-20 justify-center sm:items-center h-[400px] px-6">
          <h1 className="text-5xl">
            <span className="text-palRed font-extrabold">Donate</span> to
            Palestine
          </h1>
          <h2 className="text-5xl">
            Fight for{" "}
            <span className="text-palGreen font-extrabold">Peace.</span>
          </h2>
          <p className="w-[70%] py-8">
            Wondering where to donate for Charity? Support Palestinian Hope
            provides life-saving, life-sustaining, and life-enriching
            humanitarian aid to underserved Palestinians around the world and
            Palestinians gruesomely affected by the war. TURN YOUR COMPASSION
            INTO HOPE !!
          </p>
          <div className="w-[70%] flex gap-x-6">
            <Link href={"/donate"}>
              <button className="bg-palGreen p-3 rounded cursor-pointer text-white w-[150px] sm:w-[200px] hover:bg-green-700 transition-all ">
                Donate Now
              </button>
            </Link>

            <Link
              href={"https://www.bbc.com/news/live/world-middle-east-67246761"}
            >
              <button className="bg-transparent p-3 rounded text-black w-[150px] sm:w-[200px] hover:bg-palRed hover:text-white transition-all">
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </section>

      <section className="px-[10px] sm:px-[30px] md:px-[50px] lg:px-[150px] xl:px-[200px] mt-[100px]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-4 items-start">
          <div className="flex flex-col justify-center items-center">
            <div>
              <div className="flex justify-center">
                <PlantIcon height={60} />
              </div>
              <h3 className="font-bold text-2xl pt-2">SAVE LIVES</h3>
            </div>
            <p className="text-center vision-text py-4 lowercase">
              THE VALUE OF LIFE IS NOT IN IT’S DURATION BUT IN IT’S DONATION.
              YOU ARE NOT IMPORTANT BECAUSE OF HOW LONG YOU HAVE LIVED, YOU ARE
              IMPORTANT BECAUSE OF HOW EFFECTIVE YOU LIVE
            </p>
          </div>

          <div className="flex flex-col justify-center vision-text items-center">
            <div>
              <div className="flex justify-center">
                <BookIcon height={60} />
              </div>
              <h3 className="font-bold text-2xl pt-2 uppercase">
                Spread Awareness
              </h3>
            </div>
            <p className="text-center py-4 lowercase">
              EVERY GOOD ACT IS CHARITY. A MANS TRUE WEALTH HEREAFTER IS THE
              GOOD THAT HE DOES IN THIS WORLD TO HIS FELLOWS. BE THE REASON
              SOMEONE DOES A GOOD DID TODAY, TOGETHER EVERYONE ACHIEVES MORE
            </p>
          </div>

          <div className="flex flex-col justify-center vision-text items-center">
            <div>
              <div className="flex justify-center">
                <PlantIcon height={60} />
              </div>
              <h3 className="font-bold text-2xl pt-2">SAY A PRAYER</h3>
            </div>
            <p className="text-center py-4 lowercase">
              OF THEIR GOODS, TAKE ALMS, THAT SO THOU MIGHTEST PURIFY AND
              SANCTIFY THEM; AND PRAY ON THEIR BEHALF. VERILY THY PRAYERS ARE A
              SOURCE OF SECURITY FOR THEM AND ALLAH IS ONE WHO HEARETH AND
              KNOWETH.
            </p>
          </div>
        </div>
      </section>

      <section className="px-[10px] sm:px-[30px] md:px-[50px] lg:px-[150px] xl:px-[200px] mt-[100px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 md:h-[400px]">
          <div className="h-full">
            <div className="relative h-[400px] md:h-full">
              <Image alt="gallery" src={"/images/disaster.webp"} fill />
            </div>
          </div>
          <div className="p-5">
            <div className="relative">
              <h3 className="text-3xl">How it Works</h3>
              <div className="absolute -bottom-1 -z-10">
                <JagaIcon height={20} />
              </div>
            </div>
            <div className="py-4 font-semibold">
              <p>
                Donate{" "}
                <span className="text-palRed text-xl font-extrabold">$10</span>{" "}
                and feed a displaced family in Palestine
              </p>
              <p>
                Donate{" "}
                <span className="text-palRed text-xl font-extrabold">$20</span>{" "}
                and feed 2 displaced families in Palestine
              </p>
              <p>
                Donate{" "}
                <span className="text-palRed text-xl font-extrabold">$50</span>{" "}
                and feed and help the rescue teams save lives
              </p>
              <p>
                Donate{" "}
                <span className="text-palRed text-xl font-extrabold">$100</span>{" "}
                and house up to 10 families who have lost homes in the war
              </p>
            </div>
            {/* <p className="text-sm ">
              
            </p> */}
            <Link href={"/donate"}>
              <button className="bg-palRed p-3 mt-5 rounded cursor-pointer text-white w-[200px] hover:bg-red-700 transition-all ">
                Donate Now
              </button>
            </Link>
          </div>
        </div>
      </section>

      <section className="p-10 mt-[100px]">
        <div>
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-semibold text-center py-3">
            Thousands Need Your Help!
          </h2>
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-center w-[90%] lg:w-[70%] mx-auto">
          <div>
            <h4 className="md:text-xl font-sans font-light text-center sm:text-left">
              Email Us @
            </h4>
            <div className="flex items-center gap-x-2">
              <p className="text-xl text-palRed">
                <AiOutlineMail />
              </p>
              <p className="text-lg font-semibold">
                info@supportpalestinianhope.com
              </p>
            </div>
          </div>

          <div>
            <h4 className="md:text-xl font-semibold">Or</h4>
          </div>
          <Link href={"/contact"}>
            <button className="bg-palRed p-3 rounded cursor-pointer text-white w-[200px] hover:bg-red-700 transition-all ">
              Contact us
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
}
