import Clip from "@/components/templates/landingPage/clip";
import Comments from "@/components/templates/landingPage/comments";
import Originality from "@/components/templates/landingPage/originality";
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
      <Originality />
      <Comments />
    </>
  );
}

export default LandingPage;
