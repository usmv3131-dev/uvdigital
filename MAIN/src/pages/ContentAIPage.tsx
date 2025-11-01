import ContentAIApp from "../../../CONTENTAI/src/App";
import contentStyles from "../../../CONTENTAI/src/index.css?inline";
import { ScopedStyleHost } from "../components/ScopedStyleHost";

export default function ContentAIPage() {
  return (
    <ScopedStyleHost styles={contentStyles}>
      <ContentAIApp />
    </ScopedStyleHost>
  );
}
