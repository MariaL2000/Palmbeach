"use client";
import { useState } from "react";
import { lora, libreBaskerville } from "@/app/fonts/fonts";
import {
  LayoutDashboard,
  Image as ImageIcon,
  Settings,
  PlusCircle,
} from "lucide-react";

export default function AdminPanelClient() {
  const [status, setStatus] = useState("Ready to work");

  return (
    <div className={`max-w-6xl mx-auto ${lora.className}`}>
      {/* Header del Panel */}
      <div className="mb-12">
        <h2
          className={`${libreBaskerville.className} text-4xl font-bold text-[#0A192F]`}
        >
          Management Dashboard
        </h2>
        <p className="text-gray-500 mt-2 italic">
          Control your gallery and site content from here.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Card: Subida de Imágenes (Placeholder para Cloudinary) */}
        <div className="lg:col-span-2 bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-lg font-bold uppercase tracking-widest flex items-center gap-2">
              <ImageIcon className="text-[var(--buttons)]" /> Gallery Manager
            </h3>
            <span className="text-[10px] bg-green-100 text-green-700 px-3 py-1 rounded-full font-black">
              {status.toUpperCase()}
            </span>
          </div>

          <div className="border-2 border-dashed border-gray-200 rounded-2xl p-12 flex flex-col items-center justify-center bg-gray-50 group hover:border-[var(--buttons)] transition-colors cursor-pointer">
            <PlusCircle
              size={48}
              className="text-gray-300 group-hover:text-[var(--buttons)] transition-colors mb-4"
            />
            <p className="text-sm font-bold text-gray-500">
              Cloudinary Widget is not configured yet
            </p>
            <p className="text-xs text-gray-400 mt-2 italic">
              Go to Cloudinary to get your Upload Preset
            </p>
          </div>
        </div>

        {/* Card: Estadísticas o Accesos rápidos */}
        <div className="space-y-8">
          <div className="bg-[#0A192F] text-white rounded-3xl p-8 shadow-xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-white/10 rounded-lg">
                <LayoutDashboard size={20} className="text-[var(--buttons)]" />
              </div>
              <span className="text-xs font-black uppercase tracking-widest">
                Site Metrics
              </span>
            </div>
            <div className="space-y-4">
              <div>
                <p className="text-white/40 text-[10px] uppercase font-bold">
                  Total Projects
                </p>
                <p className="text-3xl font-serif">12</p>
              </div>
              <div>
                <p className="text-white/40 text-[10px] uppercase font-bold">
                  Inquiries Today
                </p>
                <p className="text-3xl font-serif text-[var(--buttons)]">4</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
            <h4 className="text-sm font-bold uppercase mb-4 flex items-center gap-2">
              <Settings size={16} /> Quick Settings
            </h4>
            <ul className="space-y-3">
              <li className="text-xs text-gray-600 hover:text-[var(--primary)] cursor-pointer transition-colors border-b pb-2">
                Manage Service Pages
              </li>
              <li className="text-xs text-gray-600 hover:text-[var(--primary)] cursor-pointer transition-colors border-b pb-2">
                Update Phone & Contact
              </li>
              <li className="text-xs text-gray-600 hover:text-[var(--primary)] cursor-pointer transition-colors border-b pb-2">
                View Site Analytics
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
