import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "./components/utility/Navigation";
import Footer from "./components/utility/Footer";
import GoogleTranslate from "../GoogleTranslate";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Support Palestine",
  description:
    "Make a difference in the lives of the people of Palestine by joining our dedicated community. Explore our website and discover impactful ways to contribute, from humanitarian aid to educational initiatives. Your support can bring hope and positive change to those in need. Donate today and be a beacon of compassion for Palestine – together, we can create a brighter future for all.",
  keywords: `
  donate, humanitarian aid, Palestine relief, charitable giving, support for Palestine, philanthropy, giving back, community outreach, fundraising, social impact, solidarity, empower lives, crisis response, charity efforts, sustainable development, aid organizations, rebuilding hope, educational initiatives, humanitarian projects, crisis intervention, emergency relief, community development, advocacy, peacebuilding, healthcare support, poverty alleviation, children's welfare, human rights, compassion in action, global citizenship, refugee support, empowerment programs, relief efforts, kindness matters, change-makers, nonprofit collaboration, unity for Palestine, humanitarian partnership, economic recovery, sustainable solutions, crisis recovery, resilience building, rebuilding communities, positive change, empower women, educational opportunities, medical assistance, social justice, crisis support, hope restoration, cultural preservation, conflict resolution,disaster response, grassroots initiatives, community resilience, human dignity, social welfare, aid distribution, healthcare access, vocational training, youth empowerment, cultural exchange, peace advocacy, clean water projects, sustainable agriculture, technology for good, international solidarity, housing support, mental health initiatives, women's rights, educational empowerment, community building, conflict transformation, sustainable futures, collaborative philanthropy, grassroots movements, inclusive development, community empowerment, conflict-sensitive aid, economic empowerment, grassroots organizations, interfaith cooperation, human development, social inclusion, sustainable livelihoods, ethical giving, emergency assistance, social entrepreneurship, cross-cultural understanding, awareness campaigns, social responsibility, intercultural exchange, cross-border solidarity,help,palestine,donor,bitcoin`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const pathname = usePathname()
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <div className="pt-[90px]">{children}</div>
        <Footer />
        <script
          src="//code.tidio.co/hhqgzbeuldkevhznpknxpgf5bs8y3mfy.js"
          async
        ></script>
      </body>
    </html>
  );
}
