import React, { useState } from 'react';
import { X, CheckCircle2, Building, Mail, Phone, User, Send, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultIntent?: string;
}

export const InquiryModal: React.FC<InquiryModalProps> = ({ isOpen, onClose, defaultIntent = 'demo' }) => {
  const { lang } = useLanguage();
  const t = TRANSLATIONS[lang].modal;

  const [formData, setFormData] = useState({
    fullName: '',
    workEmail: '',
    phoneWhatsApp: '',
    organization: '',
    role: 'cold_storage_operator',
    commodity: 'mango_banana',
    chamberCapacity: '50-200 MT',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-[#DCE5DC] relative max-h-[90vh] overflow-y-auto">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-[#5E7A68] hover:text-[#132A1C] hover:bg-[#F0F6F0] transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="mb-6">
              <span className="text-xs font-mono font-bold text-[#2D6A4F] uppercase tracking-wider bg-[#EAF3EB] px-3 py-1 rounded-md inline-block mb-2">
                B2B Consultation & Pilot Demo
              </span>
              <h3 className="text-2xl font-bold text-[#132A1C] font-display">
                {t.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#465A4E] mt-1">
                {t.subtitle}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#132A1C] mb-1">
                    {t.nameLabel}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ir. Hendra Pratama"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border border-[#D0DFD0] focus:outline-none focus:ring-2 focus:ring-[#2D6A4F] bg-[#FAFDF9]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#132A1C] mb-1">
                    {t.emailLabel}
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="hendra@coldchain.id"
                    value={formData.workEmail}
                    onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                    className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border border-[#D0DFD0] focus:outline-none focus:ring-2 focus:ring-[#2D6A4F] bg-[#FAFDF9]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#132A1C] mb-1">
                    {t.orgLabel}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. PT Nusantara Agro Coldstore"
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border border-[#D0DFD0] focus:outline-none focus:ring-2 focus:ring-[#2D6A4F] bg-[#FAFDF9]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#132A1C] mb-1">
                    {t.phoneLabel}
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+62 812-3456-7890"
                    value={formData.phoneWhatsApp}
                    onChange={(e) => setFormData({ ...formData, phoneWhatsApp: e.target.value })}
                    className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border border-[#D0DFD0] focus:outline-none focus:ring-2 focus:ring-[#2D6A4F] bg-[#FAFDF9]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#132A1C] mb-1">
                    {t.roleLabel}
                  </label>
                  <select
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border border-[#D0DFD0] focus:outline-none focus:ring-2 focus:ring-[#2D6A4F] bg-[#FAFDF9]"
                  >
                    <option value="cold_storage_operator">{lang === 'id' ? 'Operator Cold Storage' : 'Cold Storage Operator'}</option>
                    <option value="packhouse">{lang === 'id' ? 'Packhouse Komersial' : 'Commercial Packhouse'}</option>
                    <option value="fruit_distributor">{lang === 'id' ? 'Distributor / Grosir Buah' : 'Fruit Distributor / Wholesale Hub'}</option>
                    <option value="exporter_importer">{lang === 'id' ? 'Eksportir / Importir Buah' : 'Fruit Exporter / Importer'}</option>
                    <option value="cas_facility">{lang === 'id' ? 'Fasilitas CAS (Controlled Atmosphere)' : 'Controlled Atmosphere (CAS) Facility'}</option>
                    <option value="investor_partner">{lang === 'id' ? 'Investor / Mitra Strategis' : 'Investor / Strategic Partner'}</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#132A1C] mb-1">
                    {t.commodityLabel}
                  </label>
                  <select
                    value={formData.commodity}
                    onChange={(e) => setFormData({ ...formData, commodity: e.target.value })}
                    className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border border-[#D0DFD0] focus:outline-none focus:ring-2 focus:ring-[#2D6A4F] bg-[#FAFDF9]"
                  >
                    <option value="mango_banana">{lang === 'id' ? 'Mangga / Pisang (Etilen Tinggi)' : 'Mangoes / Bananas (High Ethylene)'}</option>
                    <option value="avocado_papaya">{lang === 'id' ? 'Alpukat / Pepaya' : 'Avocados / Papayas'}</option>
                    <option value="apples_pears">{lang === 'id' ? 'Apel / Pir / Buah Subtropis' : 'Apples / Pears / Temperate Fruits'}</option>
                    <option value="tomatoes_peppers">{lang === 'id' ? 'Tomat / Cabai / Sayur Buah' : 'Tomatoes / Fruiting Vegetables'}</option>
                    <option value="mixed">{lang === 'id' ? 'Gudang Campuran (Multi-Komoditas)' : 'Mixed Inventory Bays'}</option>
                    <option value="other">{lang === 'id' ? 'Komoditas Hortikultura Lainnya' : 'Other Horticultural Crops'}</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#132A1C] mb-1">
                  {t.messageLabel}
                </label>
                <textarea
                  rows={3}
                  placeholder={
                    lang === 'id'
                      ? 'Sebutkan estimasi volume ruangan (m³), sistem pendingin saat ini, atau tantangan susut mutu yang dihadapi...'
                      : 'Share details regarding room volume (m³), cooling setup, or specific post-harvest quality challenges...'
                  }
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border border-[#D0DFD0] focus:outline-none focus:ring-2 focus:ring-[#2D6A4F] bg-[#FAFDF9]"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 rounded-xl text-sm font-bold text-white bg-[#1E4D2B] hover:bg-[#15381F] transition-all flex items-center justify-center gap-2 shadow-xs cursor-pointer"
                >
                  {isSubmitting ? (
                    <span>{t.submittingBtn}</span>
                  ) : (
                    <>
                      <span>{t.submitBtn}</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-[11px] text-[#5E7A68] text-center pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#2D6A4F]" />
                <span>
                  {lang === 'id'
                    ? 'Kerahasiaan fasilitas industri dijamin. Dokumen NDA tersedia.'
                    : 'Enterprise confidentiality guaranteed. B2B facility NDA available.'}
                </span>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-8">
            <div className="w-16 h-16 rounded-2xl bg-[#EAF3EB] text-[#2D6A4F] flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="text-2xl font-bold text-[#132A1C] font-display mb-2">
              {t.successTitle}
            </h3>

            <p className="text-sm text-[#465A4E] max-w-md mx-auto mb-6 leading-relaxed">
              {t.successDesc}
            </p>

            <div className="bg-[#FAFDF9] p-4 rounded-2xl border border-[#DCE5DC] text-xs text-left max-w-sm mx-auto mb-6 space-y-1 text-[#2A4835]">
              <div><strong>Facility:</strong> {formData.organization}</div>
              <div><strong>Category:</strong> {formData.role.replace(/_/g, ' ').toUpperCase()}</div>
              <div><strong>Email:</strong> {formData.workEmail}</div>
            </div>

            <button
              onClick={handleReset}
              className="py-2.5 px-6 rounded-xl text-xs font-bold text-[#1E4D2B] bg-[#EAF3EB] hover:bg-[#DDE9DF] transition-colors cursor-pointer"
            >
              {t.closeBtn}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
