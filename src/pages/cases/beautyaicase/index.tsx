import BeautyAICaseApp from "./App";
import caseStyles from "./index.css?inline";
import { ScopedStyleHost } from "../../../components/ScopedStyleHost";
import { SeoHead } from "../../../components/feature/seo/SeoHead";

const META = {
  title: "Кейс Beauty AI — рост записи клиентов на 38% | UVDigital",
  description:
    "Подробный кейс внедрения Beauty AI: автоматизация записи, анализ воронки, рост повторных клиентов на 38%.",
  keywords:
    "кейс AI, автоматизация салона красоты, Beauty AI, UVDigital, рост продаж",
  canonical: "https://uvdigital.ru/cases/beautyaicase",
  image: "https://uvdigital.ru/og-image.jpg",
};

export default function BeautyAICasePage() {
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
        <BeautyAICaseApp />
      </ScopedStyleHost>
    </>
  );
}
