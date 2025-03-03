import Skill from "./skill/page";
import Service from "./service/page";
import Contact from "./contact/page";

export default function ProfilePage() {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-200 p-8">
        <div className="w-full max-w-6xl bg-white shadow-lg rounded-2xl overflow-hidden">
          {/* Bagian Header Profil */}

          <div className="text-black">
            <section className="mb-6">
              <Skill />
            </section>
            <Service />
            <Contact />
          </div>
        </div>
      </div>
    </>
  );
}
