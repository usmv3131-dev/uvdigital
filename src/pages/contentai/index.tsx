import ContentAIApp from "./App";
import contentStyles from "./index.css?inline";
import { ScopedStyleHost } from "../../components/ScopedStyleHost";

export default function ContentAIPage() {
  return (
    <ScopedStyleHost styles={contentStyles} scopeId="contentai">
      <ContentAIApp />
    </ScopedStyleHost>
  );
}
