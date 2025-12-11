"use client";

import React from "react";
import { 
  Download, 
  ArrowRightLeft, 
  FileText, 
  Mail, 
  CheckCircle, 
  Star,
  ChevronRight,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Music
} from "lucide-react"; 

// --- PROFILE DATA ---
const profile = {
  name: "Abraham Allotey",
  role: "CEO of MIWORLD TRAVEL AND TOUR, BETHEL HOSTELS, UNLIMITED SOLUTIONS SERVICES Grp",
  location: "Accra, Ghana",
  bio: "Abraham Allotey is the CEO of MiWorld Travel and Tour, Bethel Hostels, and Unlimited Solutions Services Group. Based in Accra, Ghana, he leads multiple ventures spanning travel, hospitality, and business services, driving growth through innovation and a commitment to excellence.",
  image: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Angelina_Jolie_2_June_2014_%28cropped%29.jpg",
  socials: {
    facebook: "#",
    youtube: "#",
    instagram: "#",
    twitter: "#",
    spotify: "#",
  }
};

const links = [
  {
    title: "The National Task Force to End Sexual and Domestic Violence",
    image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=500&auto=format&fit=crop&q=60",
    url: "#"
  },
  {
    title: "UNHCR appeal for Afghanistan",
    image: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=500&auto=format&fit=crop&q=60",
    url: "#"
  },
  {
    title: "We Cannot Rest in Our Fight: Talk with Dr. Mukwege",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=60",
    url: "#"
  },
  {
    title: "Support for Refugees Worldwide",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=500&auto=format&fit=crop&q=60",
    url: "#"
  },
];

export default function ProfilePage() {

  const handleSaveContact = () => {
    const vCardData = `BEGIN:VCARD
VERSION:3.0
FN:${profile.name}
ORG:${profile.role}
ADR:;;${profile.location}
NOTE:${profile.bio}
END:VCARD`;

    const blob = new Blob([vCardData], { type: "text/vcard" });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", `${profile.name.replace(" ", "_")}.vcf`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleExchange = () => {
    window.location.href = "mailto:contact@angelinajolie.com?subject=Let's Connect";
  };

  return (
    <>
      {/* 1. GLOBAL STYLES FOR SCROLLBAR HIDING */}
      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
            display: none;
        }
        .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
      `}</style>

      {/* WRAPPER:
         - Mobile: w-full, h-full, white background (Looks native)
         - Desktop: centered, gray background (Looks like a preview)
      */}
      <div className="min-h-screen w-full bg-white md:bg-neutral-100 flex items-start md:items-center justify-center md:p-8">
        
        {/* MOBILE CARD:
           - Mobile: Full width (w-full), min-height screen, no radius, no shadow
           - Desktop: Fixed width (max-w-[400px]), rounded corners, shadow
        */}
        <div className="w-full md:max-w-[400px] bg-white md:rounded-[36px] md:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.15)] overflow-hidden relative min-h-screen md:min-h-0">
          
          {/* --- HEADER IMAGE --- */}
          {/* Use 'vh' (viewport height) so it adjusts to screen size automatically */}
          <div className="relative h-[45vh] md:h-[400px] w-full">
            <img 
              src={profile.image} 
              alt={profile.name} 
              className="w-full h-full object-cover object-top"
            />
            {/* Gradient Overlay for better text contrast if needed */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-60 md:hidden" />
            
            {/* Pro Badge */}
            <div className="absolute bottom-10 left-6 bg-black/70 backdrop-blur-md text-white px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 shadow-sm border border-white/10">
              <Star size={10} className="fill-white" /> PRO
            </div>
          </div>

          {/* --- CONTENT CARD (Overlap Effect) --- */}
          {/* -mt-8 pulls the white card UP over the image */}
          <div className="relative -mt-8 bg-white rounded-t-[36px] px-6 pt-10 pb-12 z-10">
            
            {/* DRAG HANDLE (Visual Cue for 'Sheet' feel) */}
            <div className="absolute top-3 left-1/2 -translate-x-1/2 w-12 h-1.5 bg-neutral-200 rounded-full md:hidden" />

            {/* NAME & HEADER */}
            <div className="mb-8">
              <h1 className="text-[28px] font-extrabold text-black flex items-center gap-2 tracking-tight leading-none">
                {profile.name}
                <CheckCircle size={22} className="text-yellow-400 fill-yellow-400 text-white" />
              </h1>
              <p className="text-neutral-500 text-sm mt-3 leading-snug font-medium">
                {profile.role} <br /> {profile.location}
              </p>
            </div>

            {/* MAIN ACTIONS */}
            <div className="flex gap-3 mb-10">
              <button 
                onClick={handleSaveContact}
                className="flex-1 cursor-pointer bg-black text-white h-[52px] rounded-2xl font-bold text-sm flex items-center justify-center gap-2.5 active:scale-95 transition-transform shadow-lg shadow-black/20"
              >
                <Download size={18} strokeWidth={2.5} />
                Save contact
              </button>
             
            </div>

            {/* BIO */}
            <div className="mb-10">
              <h3 className="font-bold text-black text-lg mb-3">Bio</h3>
              <p className="text-neutral-600 text-[15px] leading-relaxed">
                {profile.bio}
              </p>
            </div>

            {/* FEATURED BUTTONS */}
            <div className="mb-10">
              <h3 className="font-bold text-black text-lg mb-3">Featured</h3>
              <div className="flex gap-3">
                <button className="flex-1 border border-neutral-200 h-[52px] rounded-2xl text-sm font-semibold text-neutral-800 flex items-center justify-center gap-2.5 hover:bg-neutral-50 transition-colors active:bg-neutral-100">
                  <FileText size={18} />
                  Resume
                </button>
                <button className="flex-1 border border-neutral-200 h-[52px] rounded-2xl text-sm font-semibold text-neutral-800 flex items-center justify-center gap-2.5 hover:bg-neutral-50 transition-colors active:bg-neutral-100">
                  <Mail size={18} />
                  Subscribe
                </button>
              </div>
            </div>

            {/* SOCIAL ICONS */}
            <div className="mb-10">
              <h3 className="font-bold text-black text-lg mb-4">Social</h3>
              <div className="flex gap-4 overflow-x-auto pb-4 -mx-6 px-6 scrollbar-hide">
                <SocialBtn icon={<Facebook size={22} />} href={profile.socials.facebook} />
                <SocialBtn icon={<Youtube size={22} />} href={profile.socials.youtube} />
                <SocialBtn icon={<Instagram size={22} />} href={profile.socials.instagram} />
                <SocialBtn icon={<Twitter size={22} />} href={profile.socials.twitter} />
                <SocialBtn icon={<Music size={22} />} href={profile.socials.spotify} />
              </div>
            </div>

            {/* CAROUSEL LINKS */}
            <div className="relative">
              <div className="flex items-center justify-between mb-4 cursor-pointer group">
                <h3 className="font-bold text-black text-lg">Links</h3>
                <ChevronRight size={20} className="text-neutral-400 group-hover:translate-x-1 transition-transform" />
              </div>

              {/* Horizontal Scroll Container */}
              <div className="flex overflow-x-auto gap-4 pb-8 -mx-6 px-6 scrollbar-hide snap-x snap-mandatory">
                {links.map((link, idx) => (
                  <a 
                    key={idx} 
                    href={link.url}
                    className="flex-shrink-0 w-[160px] snap-start bg-white border border-neutral-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow active:scale-95 duration-200"
                  >
                    <div className="h-28 w-full bg-neutral-100 relative">
                      <img src={link.image} alt={link.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="p-3.5">
                      <p className="text-[13px] font-bold text-black line-clamp-3 leading-tight">
                        {link.title}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
              
              {/* Pagination Dots */}
              <div className="flex justify-center gap-2 mt-[-15px]">
                <div className="w-5 h-1.5 bg-black rounded-full" />
                <div className="w-1.5 h-1.5 bg-neutral-200 rounded-full" />
                <div className="w-1.5 h-1.5 bg-neutral-200 rounded-full" />
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

// Helper Component for Social Buttons
const SocialBtn = ({ icon, href }: { icon: React.ReactNode, href: string }) => (
  <a 
    href={href}
    className="w-14 h-14 flex-shrink-0 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-800 hover:bg-neutral-50 hover:border-neutral-300 transition-all active:scale-90 shadow-sm"
  >
    {icon}
  </a>
);