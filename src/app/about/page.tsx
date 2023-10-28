import React from "react";
import JagaIcon from "../components/icons/JagaIcon";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <div className="pt-[70px] px-3 sm:px-5 md:px-10 lg:px-16 xl:px-20">
      <div className="px-2 pt-5 sm:px-4 md:px-8 lg:px-12 xl:px-20 pb-0 xl:pb-0 lg:pb-0 md:pb-0 sm:pb-0">
        <h1 className="text-3xl py-3">How to help Palestine</h1>
        <p>
          Palestine has been embroiled in a long-standing conflict with Israel
          for decades, resulting in a severe humanitarian crisis. The ongoing
          conflict has led to the displacement of{" "}
          <a
            className="text-palRed underline"
            href="https://reliefweb.int/report/occupied-palestinian-territory/enduring-palestine-refugee-crisis-nakba-sheikh-jarrah-gaza"
          >
            millions of Palestinians
          </a>
          , and the situation remains dire for those who are still living in the
          Palestinian territories of the Gaza Strip and the West Bank. If
          you&apos;re wondering how to help Palestine, there are several
          impactful actions you can take:
        </p>
        <ul className="list-disc py-4 px-4">
          <li className="py-2">
            <p>
              <b>Educate Yourself</b> - The first step toward taking meaningful
              action to help Palestine is to educate yourself about{" "}
              <a
                className="text-palRed underline"
                href="https://www.bbc.com/news/newsbeat-44124396"
              >
                the conflict and its root causes.
              </a>{" "}
              Research and read about the history of the conflict, the current
              political situation, and the various cases of human rights abuse
              that have taken place. This will give you a better understanding
              of the issues at hand and help you identify the most effective
              ways to help.
            </p>
          </li>
          <li className="py-2">
            <p>
              <b>Advocate for change</b> - After you’ve educated yourself on the
              issue, you can help Palestine by advocating for political change.
              This can include writing to your elected representatives, signing
              petitions, and supporting political campaigns that promote peace
              and justice in the region. By using your voice to raise awareness
              about the issues facing Palestinians, you can help to bring about
              positive change.
            </p>
          </li>
          <li className="py-2">
            <p>
              <b>Stay Informed and Engaged</b> - It&apos;s also essential to
              stay informed and engaged regarding the situation in Palestine.
              Follow reputable news outlets that cover the conflict, and stay up
              to date on the latest developments. By staying informed, you can
              continue to advocate for change and take meaningful action to help
              those who are affected by the conflict.
            </p>
          </li>
          <li className="py-2">
            <p>
              <b>Support Palestinian Businesses</b> - Another important way to
              help Palestine is by supporting Palestinian businesses. By
              purchasing goods and services from Palestinian-owned businesses,
              you can help to support the local economy and promote economic
              growth in the region. You can find Palestinian-owned businesses
              online, or by visiting local markets and shops in your area that
              specialize in Middle Eastern products.
            </p>
          </li>
          <li className="py-2">
            <p>
              <b>Donate to Reputable Organizations</b> - One of the quickest and
              most impactful ways to help Palestine is by donating to reputable
              organizations that provide humanitarian aid to Palestinians.
              Organizations like the Palestine Children’s Relief Fund (PCRF)
              provide vital assistance to those affected by the conflict,
              including food, shelter, and medical care. Your donation can go a
              long way in making a difference in the lives of those who are
              suffering.
            </p>
          </li>
        </ul>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 p-2 sm:p-4 md:p-8 lg:p-12 xl:p-20 w-full">
        <div className="mb-5">
          <div className="relative">
            <h3 className="text-3xl text-center md:text-left">
              Our Mission By 2024
            </h3>
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 -z-10">
              <JagaIcon height={20} />
            </div>
          </div>
          <p className="py-4 text-center md:text-left">
            Our Mission is to provide medical and humanitarian relief
            collectively and individually to Arab children throughout the
            Levant, regardless of their nationality, politics or religion.
            Provides life-saving, life-sustaining and life-enriching
            humanitarian aid to under-served populations around the world
            regardless of faith or nationality.
          </p>
          <div className="flex justify-center w-full md:justify-start">
            {/* <button className="bg-palRed p-3 rounded text-white w-[200px] hover:bg-palRed hover:text-white transition-all">
              Learn More
            </button> */}
          </div>
        </div>
        <div className="w-full sm:px-6">
          <div className="w-full h-[300px] relative">
            <Image
              alt="protest"
              className="rounded-lg"
              src={"/images/protest3.jpg"}
              fill
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 p-2 sm:p-4 md:p-8 lg:p-12 xl:p-20 pt-0 xl:pt-0 md:pt-0 lg:pt-0 sm:pt-0 w-full">
        <div className="w-full sm:px-6">
          <div className="w-full h-[300px] relative">
            <Image
              alt="protest"
              className="rounded-lg"
              src={"/images/protest2.jpg"}
              fill
            />
          </div>
        </div>
        <div className="mb-5">
          <div className="relative">
            <h3 className="text-3xl text-center md:text-left">
              Our Vision By 2024
            </h3>
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 -z-10">
              <JagaIcon height={20} />
            </div>
          </div>
          <p className="py-4 text-center md:text-left">
            We envision a world where all children in the Middle East have
            access to quality medical care, regardless of nationality, religious
            or political affiliation, and specialized health services for
            children are independent and developed at the highest standards
          </p>
          <div className="flex justify-center w-full md:justify-start">
            {/* <button className="bg-palRed p-3 rounded text-white w-[200px] hover:bg-palRed hover:text-white transition-all">
              Learn More
            </button> */}
          </div>
        </div>
      </div>
      <div>
        <div className="grid sm:grid-cols-3 justify-items-center text-center pb-5">
          <div className="flex flex-col">
            <h3 className="text-3xl font-bold text-palRed">$78,000</h3>
            <h3>Raised</h3>
          </div>
          <div className="flex flex-col">
            <h3 className="text-3xl font-bold text-palRed">4,000+</h3>
            <h3>Rescued</h3>
          </div>
          <div className="flex flex-col">
            <h3 className="text-3xl font-bold text-palRed">200,000+</h3>
            <h3>Fed</h3>
          </div>
          {/* <div className="flex flex-col">
            <h3></h3>
            <h3>Raised</h3>
        </div> */}
        </div>
      </div>
    </div>
  );
};

export default page;
