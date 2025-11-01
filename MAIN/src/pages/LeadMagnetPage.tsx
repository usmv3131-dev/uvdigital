import LeadMagnetApp from "../../../50BOTS/src/App";
import leadMagnetStyles from "../../../50BOTS/src/index.css?inline";
import { ScopedStyleHost } from "../components/ScopedStyleHost";

export default function LeadMagnetPage() {
  return (
    <ScopedStyleHost styles={leadMagnetStyles}>
      <LeadMagnetApp />
    </ScopedStyleHost>
  );
}
