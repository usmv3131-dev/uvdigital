import BeautyAICaseApp from "./beautyaicase/App";
import caseStyles from "./beautyaicase/index.css?inline";
import { ScopedStyleHost } from "../../components/ScopedStyleHost";

export default function BeautyAICasePage() {
  return (
    <ScopedStyleHost styles={caseStyles}>
      <BeautyAICaseApp />
    </ScopedStyleHost>
  );
}
