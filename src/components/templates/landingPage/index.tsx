import Clip from "@/components/templates/landingPage/clip";
import Satisfaction from "@/components/templates/landingPage/satisfaction";
import VariousDrinks from "@/components/templates/landingPage/variousDrinks";
import ProductFeatures from "@/components/templates/landingPage/productFeatures";

function LandingPage() {
  return (
    <>
      <ProductFeatures />
      <Clip />
      <VariousDrinks />
      <Satisfaction />
    </>
  );
}

export default LandingPage;
