import ProjectListPage from "@/components/common/ProjectListPage";
import { frontendProjects } from "./data/frontendProjects";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function FrontendProjectsPage() {
  const { t } = useLanguage();
  return <ProjectListPage data={frontendProjects} basePath="/frontend-projects" copy={t.frontendProjects} />;
}
