import AIMarketingApp from "../../../AIMARKETING/src/App";
import marketingStyles from "../../../AIMARKETING/src/index.css?inline";
import { ScopedStyleHost } from "../components/ScopedStyleHost";

export default function AIMarketingPage() {
  return (
    <ScopedStyleHost styles={marketingStyles}>
      <AIMarketingApp />
    </ScopedStyleHost>
  );
}
