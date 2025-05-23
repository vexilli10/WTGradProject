// src/components/OverlayTile.jsx
export default function OverlayTile({ src, title, cta }) {
    return (
      <div
        className="
          relative flex items-center justify-center
          bg-cover bg-center
          rounded-lg overflow-hidden
          aspect-[4/3] lg:aspect-auto h-full w-full 
          // aspect-[4/3] default for smaller screens
          // lg:aspect-auto ensures it fills the cell on large screens, relying on bg-cover
          // h-full w-full makes the tile fill its parent grid cell
        "
        style={{ backgroundImage: `url(${src})` }}
      >
        <div className="absolute inset-0 bg-black/40" />
  
        <div className="relative z-10 text-center px-4">
          <h3 className="text-white text-lg sm:text-xl font-semibold mb-2">
            {title}
          </h3>
          <button className="bg-primary text-white rounded px-5 py-2 text-sm">
            {cta}
          </button>
        </div>
      </div>
    );
  }