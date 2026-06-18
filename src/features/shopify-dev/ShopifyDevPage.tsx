import ProjectListPage from "@/components/common/ProjectListPage";
import { shopifyProjects } from "./data/shopifyProjects";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function ShopifyDevPage() {
  const { t } = useLanguage();
  return <ProjectListPage data={shopifyProjects} basePath="/shopify-dev" copy={t.shopifyDev} />;
}
