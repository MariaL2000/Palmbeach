"use client";
import { useState } from "react";
import { uploadProjectAction } from "@/actions/gallery-actions";
import { CldUploadWidget } from "next-cloudinary"; // Debes instalar next-cloudinary

export default function AdminPanel() {
  const [status, setStatus] = useState("");

  return (
    <div className="min-h-screen bg-secondary/20 pt-32 pb-20">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="bg-white rounded-3xl p-8 shadow-xl border border-primary/5">
          <h1 className="text-4xl font-serif italic text-primary mb-8">
            Admin Dashboard
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Formulario de Subida */}
            <div className="space-y-6">
              <h2 className="text-xl font-bold uppercase tracking-widest text-accent">
                Upload Project
              </h2>

              <CldUploadWidget
                uploadPreset="tu_preset_de_cloudinary"
                onSuccess={(result: any) => {
                  const data = new FormData();
                  data.append("url", result.info.secure_url);
                  data.append("publicId", result.info.public_id);
                  data.append("category", "Epoxy"); // Podrías tener un select aquí
                  data.append("title", "New Project");

                  uploadProjectAction(data).then(() =>
                    setStatus("Image uploaded successfully!"),
                  );
                }}
              >
                {({ open }) => (
                  <button
                    onClick={() => open()}
                    className="w-full h-40 border-2 border-dashed border-primary/20 rounded-2xl flex flex-col items-center justify-center hover:border-primary transition-colors bg-secondary/10"
                  >
                    <span className="text-primary font-medium">
                      Click to upload image
                    </span>
                    <span className="text-xs text-muted-foreground mt-2">
                      Powered by Cloudinary
                    </span>
                  </button>
                )}
              </CldUploadWidget>

              {status && (
                <p className="text-green-600 font-medium text-sm">{status}</p>
              )}
            </div>

            {/* Estadísticas rápidas */}
            <div className="bg-primary text-white rounded-2xl p-6 flex flex-col justify-between">
              <div>
                <p className="text-white/60 text-xs uppercase tracking-widest">
                  Site Status
                </p>
                <h3 className="text-2xl font-serif italic mt-2">
                  Active & Running
                </h3>
              </div>
              <div className="mt-8">
                <button className="text-sm border-b border-white/30 hover:border-white transition-all">
                  View Analytics →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
