import ProjectListPage from "@/components/common/ProjectListPage";
import { webApps } from "./data/webApps";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function WebAppsPage() {
  const { t } = useLanguage();
  return <ProjectListPage data={webApps} basePath="/web-apps" copy={t.webApps} />;
}
