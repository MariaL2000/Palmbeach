"use client";
import { useState, useEffect } from "react";
import {
  uploadProjectAction,
  deleteProjectAction,
  getAdminProjects,
} from "@/actions/gallery-actions";
import { CldUploadWidget } from "next-cloudinary";
import { toast } from "sonner";
import { Trash2, ImageIcon, Loader2 } from "lucide-react";

export default function AdminPanel() {
  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadProjects();
  }, []);

  async function loadProjects() {
    const data = await getAdminProjects();
    setProjects(data);
    setLoading(false);
  }

  const handleDelete = async (id: string, publicId: string) => {
    if (!confirm("Delete this image permanently?")) return;

    const res = await deleteProjectAction(id, publicId);
    if (res.ok) {
      toast.success("Image removed from gallery and Cloudinary");
      setProjects(projects.filter((p) => p.id !== id));
    } else {
      toast.error("Could not delete image");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-32 pb-20">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h1 className="text-4xl font-serif text-(--primary)">
              Gallery Manager
            </h1>
            <p className="text-gray-400 text-sm mt-2">
              Manage your professional portfolio
            </p>
          </div>

          <CldUploadWidget
            uploadPreset="tu_preset" // Asegúrate de crear un "Unsigned Preset" en Cloudinary
            onSuccess={(result: any) => {
              const data = new FormData();
              data.append("url", result.info.secure_url);
              data.append("publicId", result.info.public_id);
              data.append("category", "Project");
              data.append("title", "Work Excellence");

              uploadProjectAction(data).then(() => {
                toast.success("Uploaded correctly!");
                loadProjects();
              });
            }}
          >
            {({ open }) => (
              <button
                onClick={() => open()}
                className="bg-(--buttons) text-(--primary) px-8 py-3 font-bold uppercase text-xs tracking-widest hover:brightness-110 transition-all"
              >
                Upload Photo
              </button>
            )}
          </CldUploadWidget>
        </div>

        {loading ? (
          <div className="flex justify-center py-20">
            <Loader2 className="animate-spin" />
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {projects.map((img) => (
              <div
                key={img.id}
                className="relative aspect-square group overflow-hidden bg-white border"
              >
                <img
                  src={img.url}
                  className="w-full h-full object-cover"
                  alt=""
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <button
                    onClick={() => handleDelete(img.id, img.publicId)}
                    className="p-3 bg-red-600 text-white rounded-full hover:scale-110 transition-transform"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
