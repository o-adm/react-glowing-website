import SectionAbout from "../sections/SectionAbout";
import SectionCollection from "../sections/SectionCollection";
import SectionDiscover from "../sections/SectionDiscover";
import SectionHero from "../sections/SectionHero";
import SectionOffer from "../sections/SectionOffer";
import SectionProducts from "../sections/SectionProducts";
import SectionPromo from "../sections/SectionPromo";

function Main() {
  return (
    <main>
      <SectionHero />
      <SectionCollection />
      <SectionProducts />
      <SectionPromo />
      <SectionAbout />
      <SectionOffer />
      <SectionDiscover />
    </main>
  );
}

export default Main;
