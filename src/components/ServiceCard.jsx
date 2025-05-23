// src/components/ServiceCard.jsx
export default function ServiceCard({ Icon, title, blurb }) {
    return (
      <article
        className="
          flex flex-col items-center text-center gap-4
          p-6 rounded-lg shadow-sm bg-white
          hover:shadow-md transition
          flex-1
        "
      >
        <Icon size={40} strokeWidth={1.5} className="text-primary" />
        <h4 className="font-semibold">{title}</h4>
        <p className="text-sm text-gray-600 max-w-xs">{blurb}</p>
      </article>
    )
  }
  