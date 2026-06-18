import ProjectDetailPage from "@/components/common/ProjectDetailPage";
import { frontendProjects } from "./data/frontendProjects";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function FrontendProjectDetail() {
  const { t } = useLanguage();
  const fp = t.frontendProjects;
  return (
    <ProjectDetailPage
      data={frontendProjects}
      basePath="/frontend-projects"
      copy={{ notFound: fp.notFound, backLink: fp.backLink, ctaLabel: fp.liveProject }}
    />
  );
}
