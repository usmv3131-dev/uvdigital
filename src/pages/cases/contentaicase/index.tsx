import ContentAICaseApp from "./App";
import caseStyles from "./index.css?inline";
import { ScopedStyleHost } from "../../../components/ScopedStyleHost";
import { SeoHead } from "../../../components/feature/seo/SeoHead";

const META = {
  title: "Кейс Content AI — автоматизация контента салона красоты | UVDigital",
  description:
    "Как Content AI автоматизировал создание контента, сократил время маркетинга и увеличил охваты салона красоты.",
  keywords:
    "кейс Content AI, автоматизация контента, SMM кейс, UVDigital",
  canonical: "https://uvdigital.ru/cases/contentaicase",
  image: "https://uvdigital.ru/og-image.jpg",
};

export default function ContentAICasePage() {
  return (
    <>
      <SeoHead
        title={META.title}
        description={META.description}
        keywords={META.keywords}
        canonical={META.canonical}
        image={META.image}
      />
      <ScopedStyleHost styles={caseStyles}>
        <ContentAICaseApp />
      </ScopedStyleHost>
    </>
  );
}
