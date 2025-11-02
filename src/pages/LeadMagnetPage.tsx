import LeadMagnetApp from "./fiftybots/App";
import leadMagnetStyles from "./fiftybots/index.css?inline";
import { ScopedStyleHost } from "../components/ScopedStyleHost";

export default function LeadMagnetPage() {
  return (
    <ScopedStyleHost styles={leadMagnetStyles}>
      <LeadMagnetApp />
    </ScopedStyleHost>
  );
}
