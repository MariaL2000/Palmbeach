"use client";
import { useState, useEffect } from "react";
import { lora, libreBaskerville } from "@/app/fonts/fonts";
import {
  ImageIcon,
  PlusCircle,
  Trash2,
  LogOut,
  CheckCircle2,
  Loader2,
} from "lucide-react";
import { CldUploadWidget } from "next-cloudinary";
import {
  uploadProjectAction,
  getAdminProjects,
  deleteProjectAction,
} from "@/actions/gallery-actions";
import { logout } from "@/actions/auth-actions";
import Image from "next/image";

export default function AdminPanelClient() {
  const [images, setImages] = useState<any[]>([]);
  const [status, setStatus] = useState<
    "Ready" | "Saving" | "Deleting" | "Error"
  >("Ready");

  // EFECTO DE LIMPIEZA: Corrige el error de scroll bloqueado de Cloudinary
  useEffect(() => {
    const fixScroll = () => {
      document.body.style.overflow = "auto";
      document.documentElement.style.overflow = "auto";
    };

    fixScroll(); // Limpiar al cargar
    return () => fixScroll(); // Limpiar al desmontar
  }, [images]); // Se re-ejecuta al cambiar la galería

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    const data = await getAdminProjects();
    setImages(data || []);
  };

  const onUploadSuccess = async (result: any) => {
    // Forzar recuperación de scroll tras cerrar el modal de Cloudinary
    document.body.style.overflow = "auto";

    const info = result.info;
    const formData = new FormData();
    formData.append("url", info.secure_url);
    formData.append("publicId", info.public_id);

    setStatus("Saving");
    const res = await uploadProjectAction(formData);

    if (res.ok) {
      await fetchImages();
      setStatus("Ready");
    } else {
      setStatus("Error");
    }
  };

  const handleDelete = async (id: string, publicId: string) => {
    if (!confirm("Are you sure you want to delete this project image?")) return;

    setStatus("Deleting");
    const res = await deleteProjectAction(id, publicId);

    if (res.ok) {
      setImages((prev) => prev.filter((img) => img.id !== id));
      setStatus("Ready");
    } else {
      setStatus("Error");
    }
  };

  return (
    <div
      className={`min-h-screen bg-[#F8FAFC] ${lora.className} pb-20 pt-10 px-6`}
    >
      <div className="max-w-6xl mx-auto">
        {/* HEADER SECTION */}
        <div className="mb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
          <div>
            <h2
              className={`${libreBaskerville.className} text-4xl font-bold text-[#0A192F]`}
            >
              Dashboard
            </h2>
            <p className="text-gray-500 mt-2 italic flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              Management Panel — MariaL2000
            </p>
          </div>

          <div className="flex items-center gap-3 bg-white px-4 py-2 rounded-full border border-gray-100 shadow-sm">
            <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">
              Status:
            </span>
            <span className="text-[10px] font-black uppercase tracking-widest text-[var(--buttons)]">
              {status}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* MAIN COLUMN: UPLOAD & GALLERY */}
          <div className="lg:col-span-2 space-y-8">
            {/* UPLOAD CARD */}
            <div className="bg-white rounded-[2.5rem] p-8 shadow-sm border border-gray-100">
              <h3 className="text-sm font-black mb-6 flex items-center gap-2 uppercase tracking-[0.2em] text-[#0A192F]">
                <PlusCircle className="text-[var(--buttons)]" size={18} />
                Add New Work
              </h3>

              <CldUploadWidget
                uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET}
                onSuccess={onUploadSuccess}
                onClose={() => {
                  document.body.style.overflow = "auto";
                }}
              >
                {({ open }) => (
                  <button
                    onClick={() => open()}
                    className="w-full border-2 border-dashed border-gray-200 rounded-[2rem] p-12 flex flex-col items-center bg-gray-50 hover:bg-white hover:border-[var(--buttons)] hover:shadow-xl hover:shadow-yellow-500/5 transition-all group"
                  >
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm mb-4 group-hover:scale-110 transition-transform">
                      <ImageIcon
                        size={28}
                        className="text-gray-400 group-hover:text-[var(--buttons)]"
                      />
                    </div>
                    <span className="text-xs font-black uppercase tracking-widest text-gray-500 group-hover:text-[#0A192F]">
                      Upload to Cloudinary
                    </span>
                    <p className="text-[10px] text-gray-400 mt-2">
                      JPG, PNG or WebP up to 10MB
                    </p>
                  </button>
                )}
              </CldUploadWidget>
            </div>

            {/* ASSETS GRID */}
            <div className="bg-white rounded-[2.5rem] p-8 shadow-sm border border-gray-100">
              <h3 className="text-sm font-black mb-6 flex items-center gap-2 uppercase tracking-[0.2em] text-[#0A192F]">
                <ImageIcon className="text-[var(--buttons)]" size={18} />
                Live Gallery
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {images.map((img) => (
                  <div
                    key={img.id}
                    className="relative aspect-square group rounded-2xl overflow-hidden border border-gray-100 shadow-sm"
                  >
                    <Image
                      src={img.url}
                      alt="Project"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-[#0A192F]/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-2">
                      <button
                        onClick={() => handleDelete(img.id, img.publicId)}
                        className="bg-red-500 hover:bg-red-600 text-white p-3 rounded-full shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300"
                        title="Delete Image"
                      >
                        <Trash2 size={20} />
                      </button>
                      <span className="text-[8px] text-white/70 font-bold uppercase tracking-widest">
                        Remove
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {images.length === 0 && (
                <div className="text-center py-20 border-2 border-dashed border-gray-100 rounded-[2rem]">
                  <p className="text-gray-400 text-xs italic">
                    No projects found in database.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* SIDEBAR */}
          <div className="space-y-6">
            {/* STATS CARD */}
            <div className="bg-[#0A192F] text-white rounded-[2.5rem] p-10 shadow-2xl relative overflow-hidden group">
              <div className="absolute -right-4 -top-4 w-24 h-24 bg-[var(--buttons)] rounded-full opacity-10 group-hover:scale-150 transition-transform duration-700"></div>
              <p className="text-white/40 text-[10px] uppercase font-black tracking-[0.3em] mb-2">
                Total Portfolio
              </p>
              <div className="flex items-baseline gap-2">
                <p className="text-6xl font-serif text-[var(--buttons)] font-bold">
                  {images.length}
                </p>
                <span className="text-white/60 text-xs font-bold uppercase tracking-widest">
                  Images
                </span>
              </div>
            </div>

            {/* INFO CARD */}
            <div className="bg-white rounded-[2.5rem] p-8 border border-gray-100 shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                  <CheckCircle2 size={20} />
                </div>
                <div>
                  <p className="text-xs font-black uppercase tracking-widest text-[#0A192F]">
                    Live Sync
                  </p>
                  <p className="text-[10px] text-gray-400">
                    Database & Cloudinary
                  </p>
                </div>
              </div>

              <button
                onClick={() => logout()}
                className="w-full flex items-center justify-center gap-3 py-5 rounded-2xl bg-gray-50 text-gray-400 text-[10px] font-black uppercase tracking-[0.2em] border border-gray-100 hover:bg-red-50 hover:text-red-500 hover:border-red-100 transition-all"
              >
                <LogOut size={14} /> Close Session
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
