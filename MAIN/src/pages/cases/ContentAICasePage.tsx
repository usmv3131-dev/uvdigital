import ContentAICaseApp from "../../../../CASES/CONTENTAICASE/src/App";
import caseStyles from "../../../../CASES/CONTENTAICASE/src/index.css?inline";
import { ScopedStyleHost } from "../../components/ScopedStyleHost";

export default function ContentAICasePage() {
  return (
    <ScopedStyleHost styles={caseStyles}>
      <ContentAICaseApp />
    </ScopedStyleHost>
  );
}
