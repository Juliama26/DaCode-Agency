import BtnInput from "../components/molecules/BtnInput";
import Interested from "../components/molecules/Interested";
import Artikel from "../components/organisms/Artikel";
import LayoutLanding from "../components/templates/LayoutLanding";

export default function Blog() {
  return (
    <LayoutLanding>
      <Interested
        className="mt-[75px] lg:mt-20"
        title="News & Articles"
        description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et."
      >
        <BtnInput></BtnInput>
      </Interested>
      <Artikel></Artikel>
    </LayoutLanding>
  );
}
