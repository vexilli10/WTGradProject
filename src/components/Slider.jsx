import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'

function Slider({ slides }) {
  const [sliderRef] = useKeenSlider({
    loop: true,
    slides: { perView: 1 },
  })

  return (
    <div ref={sliderRef} className="keen-slider w-full h-full">
      {slides.map((slide, i) => (
        <div
          key={i}
          className="keen-slider__slide flex items-center justify-center bg-cover bg-center"
          style={{ backgroundImage: `url(${slide.src})` }}
        >
          {slide.children}
        </div>
      ))}
    </div>
  )
}

export {Slider as default}
