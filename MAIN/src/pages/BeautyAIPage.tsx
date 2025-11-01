import BeautyAIApp from "../../../BEAUTYAI/src/App";
import beautyStyles from "../../../BEAUTYAI/src/index.css?inline";
import { ScopedStyleHost } from "../components/ScopedStyleHost";

export default function BeautyAIPage() {
  return (
    <ScopedStyleHost styles={beautyStyles}>
      <BeautyAIApp />
    </ScopedStyleHost>
  );
}
