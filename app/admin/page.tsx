import { auth, signOut } from "@/auth";
import AdminPanelClient from "./AdminPanelClient";

export default async function AdminPage() {
  const session = await auth();

  return (
    <main className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center border-b mb-10">
        <p className="text-sm font-bold uppercase tracking-widest">
          Welcome,{" "}
          <span className="text-[var(--buttons)]">{session?.user?.name}</span>
        </p>
        <form
          action={async () => {
            "use server";
            await signOut();
          }}
        >
          <button className="text-xs font-black text-red-500 uppercase border border-red-200 px-4 py-2 rounded-lg hover:bg-red-50 transition-all">
            Logout
          </button>
        </form>
      </div>
      <AdminPanelClient />
    </main>
  );
}
