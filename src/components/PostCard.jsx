// src/components/PostCard.jsx
import { CalendarDays, MessageSquare } from 'lucide-react'

export default function PostCard({ img, tag, title, date, comments }) {
  return (
    <article
      className="
        flex flex-col gap-3 bg-white rounded-lg shadow-sm
        overflow-hidden w-64
      "
    >
      <div
        className="h-40 bg-cover bg-center"
        style={{ backgroundImage: `url(${img})` }}
      />

      <div className="px-4 pb-5">
        <span className="inline-block text-xs uppercase text-primary mb-2">
          {tag}
        </span>

        <h4 className="font-semibold leading-snug mb-3">{title}</h4>

        <div className="flex items-center text-xs text-gray-500 gap-4">
          <span className="flex items-center gap-1">
            <CalendarDays size={14} />
            {date}
          </span>
          <span className="flex items-center gap-1">
            <MessageSquare size={14} />
            {comments}
          </span>
        </div>
      </div>
    </article>
  )
}
