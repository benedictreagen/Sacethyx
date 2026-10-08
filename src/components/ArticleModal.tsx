import React from 'react';
import { X, Share2, Check } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { LocalizedArticle } from '../data/content';

interface ArticleModalProps {
  article: LocalizedArticle | null;
  onClose: () => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({ article, onClose }) => {
  const { lang } = useLanguage();
  const [copied, setCopied] = React.useState(false);

  if (!article) return null;

  const handleCopy = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const title = article.title[lang];
  const category = article.category[lang];
  const readTime = article.readTime[lang];
  const summary = article.summary[lang];
  const paragraphs = article.content[lang];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-10 shadow-2xl border border-[#DCE5DC] relative max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-[#5E7A68] hover:text-[#132A1C] hover:bg-[#F0F6F0] transition-colors cursor-pointer"
          aria-label="Close article"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Metadata */}
        <div className="flex items-center gap-2 text-xs text-[#5E7A68] mb-4">
          <span className="font-semibold text-[#2D6A4F]">{category}</span>
          <span aria-hidden="true">·</span>
          <span>{article.date}</span>
          <span aria-hidden="true">·</span>
          <span>{readTime}</span>
        </div>

        {/* Title */}
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#132A1C] font-display mb-4 leading-tight">
          {title}
        </h2>

        {/* Summary box */}
        <div className="p-4 bg-[#F2F7F2] rounded-2xl border border-[#DCE5DC] text-xs sm:text-sm text-[#2A4835] font-medium leading-relaxed mb-6">
          {summary}
        </div>

        {/* Content Paragraphs */}
        <div className="space-y-4 text-xs sm:text-sm text-[#465A4E] leading-relaxed mb-8">
          {paragraphs.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </div>

        {/* Footer */}
        <div className="pt-6 border-t border-[#EEF4EE] flex items-center justify-between text-xs">
          <div className="text-[#5E7A68] font-mono">
            SACETHYX Post-Harvest Technical Papers
          </div>
          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 text-[#2D6A4F] font-semibold hover:text-[#132A1C] transition-colors cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span>{lang === 'id' ? 'Tautan Disalin' : 'Link Copied'}</span>
              </>
            ) : (
              <>
                <Share2 className="w-3.5 h-3.5" />
                <span>{lang === 'id' ? 'Bagikan Referensi' : 'Share Reference'}</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
