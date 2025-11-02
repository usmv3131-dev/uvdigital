import ContentAICaseApp from "./contentaicase/App";
import caseStyles from "./contentaicase/index.css?inline";
import { ScopedStyleHost } from "../../components/ScopedStyleHost";

export default function ContentAICasePage() {
  return (
    <ScopedStyleHost styles={caseStyles}>
      <ContentAICaseApp />
    </ScopedStyleHost>
  );
}
