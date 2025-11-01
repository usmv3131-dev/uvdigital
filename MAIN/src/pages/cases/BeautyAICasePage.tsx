import BeautyAICaseApp from "../../../../CASES/BEAUTYAICASE/src/App";
import caseStyles from "../../../../CASES/BEAUTYAICASE/src/index.css?inline";
import { ScopedStyleHost } from "../../components/ScopedStyleHost";

export default function BeautyAICasePage() {
  return (
    <ScopedStyleHost styles={caseStyles}>
      <BeautyAICaseApp />
    </ScopedStyleHost>
  );
}
