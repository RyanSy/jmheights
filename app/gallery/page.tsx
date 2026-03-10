"use client";

import { useState } from "react";
import { galleryItems, galleryCategories } from "@/data/gallery-items";
import { X, Play, ZoomIn, Grid, Layers } from "lucide-react";
import type { GalleryItem } from "@/types";

function VideoModal({ item, onClose }: { item: GalleryItem; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white/70 hover:text-white p-2 z-10"
        aria-label="Close"
      >
        <X size={28} />
      </button>
      <div
        className="w-full max-w-4xl aspect-video"
        onClick={(e) => e.stopPropagation()}
      >
        {item.videoId ? (
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${item.videoId}?autoplay=1`}
            title={item.title || "Gallery video"}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-900 text-white text-center p-8">
            <div>
              <Play size={64} className="mx-auto mb-4 text-orange-500" />
              <p className="text-lg font-semibold">Video coming soon</p>
              <p className="text-gray-400 text-sm mt-2">Replace videoId in gallery-items.ts with your YouTube video ID</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function ImageModal({ item, onClose }: { item: GalleryItem; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white/70 hover:text-white p-2"
        aria-label="Close"
      >
        <X size={28} />
      </button>
      <div
        className="max-w-5xl max-h-[90vh] relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={item.src}
          alt={item.alt}
          className="max-w-full max-h-[80vh] object-contain"
        />
        {(item.title || item.description) && (
          <div className="bg-black/60 backdrop-blur-sm px-6 py-4 mt-2">
            {item.title && (
              <h3 className="text-white font-semibold">{item.title}</h3>
            )}
            {item.description && (
              <p className="text-white/60 text-sm mt-1">{item.description}</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const filtered =
    activeCategory === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <>
      {/* Hero */}
      <section className="bg-[#0B1D3A] pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute right-0 top-0 bottom-0 w-1 bg-orange-500" />
        <div className="container-custom relative">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-orange-500" />
            <span className="text-orange-400 text-sm font-semibold tracking-widest uppercase">
              Our Work
            </span>
          </div>
          <h1
            className="font-display text-6xl md:text-7xl font-900 text-white uppercase tracking-tight leading-[0.9] mb-4"
            style={{ fontFamily: "var(--font-barlow), 'Barlow Condensed'", fontWeight: 900 }}
          >
            Project <span className="text-orange-500">Gallery</span>
          </h1>
          <p className="text-white/60 text-lg max-w-2xl">
            Browse our portfolio of completed projects — roofing, gutters, siding, and more. Every photo represents our commitment to quality craftsmanship.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 mb-10">
            {galleryCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2.5 text-sm font-bold tracking-wider uppercase transition-all duration-200 ${
                  activeCategory === cat.id
                    ? "bg-orange-500 text-white"
                    : "bg-white border border-gray-200 text-gray-600 hover:border-orange-400 hover:text-orange-500"
                }`}
                style={{ fontFamily: "var(--font-barlow), 'Barlow Condensed'", fontWeight: 700 }}
              >
                {cat.label}
              </button>
            ))}
            <span className="ml-auto flex items-center text-gray-400 text-sm">
              {filtered.length} {filtered.length === 1 ? "item" : "items"}
            </span>
          </div>

          {/* Masonry-style Grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {filtered.map((item) => (
              <div
                key={item.id}
                className="break-inside-avoid gallery-item rounded-sm overflow-hidden cursor-pointer group relative bg-gray-200 block"
                onClick={() => setSelectedItem(item)}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.thumbnail || item.src}
                  alt={item.alt}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />

                {/* Overlay */}
                <div className="gallery-overlay absolute inset-0 bg-[#0B1D3A]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center">
                  <div className="w-12 h-12 bg-orange-500 flex items-center justify-center mb-3">
                    {item.type === "video" ? (
                      <Play size={20} className="text-white ml-0.5" />
                    ) : (
                      <ZoomIn size={20} className="text-white" />
                    )}
                  </div>
                  {item.title && (
                    <div className="text-white font-semibold text-sm text-center px-4">{item.title}</div>
                  )}
                  {item.description && (
                    <div className="text-white/70 text-xs text-center px-6 mt-1">{item.description}</div>
                  )}
                </div>

                {/* Video badge */}
                {item.type === "video" && (
                  <div className="absolute top-3 left-3 bg-orange-500 px-2 py-1 flex items-center gap-1">
                    <Play size={10} className="text-white fill-white" />
                    <span className="text-white text-[10px] font-bold uppercase tracking-wider">Video</span>
                  </div>
                )}

                {/* Category badge */}
                <div className="absolute bottom-3 right-3 bg-black/50 backdrop-blur-sm px-2 py-1">
                  <span className="text-white text-[10px] uppercase tracking-wider font-medium">
                    {item.category}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-gray-400">
              <Grid size={40} className="mx-auto mb-4 opacity-30" />
              <p>No items in this category yet.</p>
            </div>
          )}

          {/* Add Photos Note */}
          <div className="mt-12 bg-blue-50 border border-blue-100 p-6 text-center">
            <Layers size={24} className="text-blue-400 mx-auto mb-3" />
            <p className="text-blue-800 font-semibold text-sm mb-1">Adding Your Own Photos & Videos</p>
            <p className="text-blue-600/80 text-xs max-w-lg mx-auto">
              Replace Unsplash URLs with your actual project photos in{" "}
              <code className="bg-blue-100 px-1 rounded">data/gallery-items.ts</code>.
              Upload images to{" "}
              <code className="bg-blue-100 px-1 rounded">public/images/gallery/</code>{" "}
              and update the{" "}
              <code className="bg-blue-100 px-1 rounded">src</code> fields accordingly.
              For videos, set{" "}
              <code className="bg-blue-100 px-1 rounded">videoId</code> to your YouTube video ID.
            </p>
          </div>
        </div>
      </section>

      {/* Modals */}
      {selectedItem && selectedItem.type === "video" && (
        <VideoModal item={selectedItem} onClose={() => setSelectedItem(null)} />
      )}
      {selectedItem && selectedItem.type === "image" && (
        <ImageModal item={selectedItem} onClose={() => setSelectedItem(null)} />
      )}
    </>
  );
}
