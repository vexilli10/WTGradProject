// src/components/FeaturedPostsSection.jsx
import Slider from './Slider'
import PostCard from './PostCard'

const posts = [
  {
    img: 'https://picsum.photos/seed/post1/400/300',
    tag: 'Fashion',
    title: 'Top tips for choosing the perfect outfit',
    date: 'May 21, 2025',
    comments: 12,
  },
  {
    img: 'https://picsum.photos/seed/post2/400/300',
    tag: 'Lifestyle',
    title: 'Creating a minimalist wardrobe that lasts',
    date: 'May 18, 2025',
    comments: 7,
  },
  {
    img: 'https://picsum.photos/seed/post3/400/300',
    tag: 'Trend',
    title: 'Colour palettes that dominate this summer',
    date: 'May 10, 2025',
    comments: 5,
  },
  {
    img: 'https://picsum.photos/seed/post4/400/300',
    tag: 'Inspiration',
    title: 'How to mix patterns like a pro',
    date: 'Apr 28, 2025',
    comments: 19,
  },
]

export default function FeaturedPostsSection() {
  return (
    <section className="px-4 sm:px-8 py-16">
      <h2 className="text-center text-2xl font-bold mb-10">Featured Posts</h2>

      {/* Slider wrapper */}
      <Slider
        slides={posts.map((p) => ({
          src: p.img,            // background for keen-slide (not visible)
          children: <PostCard {...p} />,
        }))}
      />
    </section>
  )
}
