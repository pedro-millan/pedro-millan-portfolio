import ProjectDetailPage from "@/components/common/ProjectDetailPage";
import { shopifyProjects } from "./data/shopifyProjects";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function ShopifyDevDetail() {
  const { t } = useLanguage();
  const sd = t.shopifyDev;
  return (
    <ProjectDetailPage
      data={shopifyProjects}
      basePath="/shopify-dev"
      copy={{ notFound: sd.notFound, backLink: sd.backLink, ctaLabel: sd.liveProject }}
    />
  );
}
