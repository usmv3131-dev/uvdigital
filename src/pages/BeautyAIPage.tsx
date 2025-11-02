import BeautyAIApp from "./beautyai/App";
import beautyStyles from "./beautyai/index.css?inline";
import { ScopedStyleHost } from "../components/ScopedStyleHost";

export default function BeautyAIPage() {
  return (
    <ScopedStyleHost styles={beautyStyles}>
      <BeautyAIApp />
    </ScopedStyleHost>
  );
}
