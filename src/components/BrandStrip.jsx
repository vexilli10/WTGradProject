const logos = [
    'https://dummyimage.com/100x40?text=Lyft',
    'https://dummyimage.com/100x40?text=Stripe',
    'https://dummyimage.com/100x40?text=Dropbox',
    'https://dummyimage.com/100x40?text=Slack',
    'https://dummyimage.com/100x40?text=AWS',
    'https://dummyimage.com/100x40?text=Google',
  ]
  
  export default function BrandStrip() {
    return (
      <section className="py-8">
        <div
          className="
            flex gap-8 items-center justify-between
            px-4 sm:px-8
            overflow-x-auto sm:overflow-visible
          "
        >
          {logos.map((src, i) => (
            <img
              key={i}
              src={src}
              alt="brand logo"
              className="h-8 flex-shrink-0 opacity-60 hover:opacity-100 transition-opacity"
            />
          ))}
        </div>
      </section>
    )
  }
  