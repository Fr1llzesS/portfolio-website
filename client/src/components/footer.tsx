import { useLanguage } from "@/contexts/language-context";

export default function Footer() {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-dark border-t border-slate-800 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-slate-400">
            {t('footer.copyright')}
          </p>
          <p className="text-slate-500 text-sm mt-2">
            {t('footer.subtitle')}
          </p>
        </div>
      </div>
    </footer>
  );
}
