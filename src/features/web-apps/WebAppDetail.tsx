import ProjectDetailPage from "@/components/common/ProjectDetailPage";
import { webApps } from "./data/webApps";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function WebAppDetail() {
  const { t } = useLanguage();
  const wa = t.webApps;
  return (
    <ProjectDetailPage
      data={webApps}
      basePath="/web-apps"
      copy={{ notFound: wa.notFound, backLink: wa.backLink, ctaLabel: wa.knowApp }}
    />
  );
}
