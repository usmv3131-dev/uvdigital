import AIMarketingApp from "./aimarketing/App";
import marketingStyles from "./aimarketing/index.css?inline";
import { ScopedStyleHost } from "../components/ScopedStyleHost";

export default function AIMarketingPage() {
  return (
    <ScopedStyleHost styles={marketingStyles} scopeId="aimarketing">
      <AIMarketingApp />
    </ScopedStyleHost>
  );
}
