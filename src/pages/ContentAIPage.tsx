import ContentAIApp from "./contentai/App";
import contentStyles from "./contentai/index.css?inline";
import { ScopedStyleHost } from "../components/ScopedStyleHost";

export default function ContentAIPage() {
  return (
    <ScopedStyleHost styles={contentStyles} scopeId="contentai">
      <ContentAIApp />
    </ScopedStyleHost>
  );
}
