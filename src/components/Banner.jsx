import { useState, useEffect } from 'react'

export default function Banner() {
    const [currentSlide, setCurrentSlide] = useState(0)

    const slides = [
        {
            id: 1,
            image: '/src/img/banners/1.webp'
        },
        {
            id: 2,
            image: '/src/img/banners/2.webp'
        },
        {
            id: 3,
            image: '/src/img/banners/3.webp'
        },
    ]

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length)
        }, 5000)
        return () => clearInterval(timer)
    }, [])

    const goToSlide = (index) => {
        setCurrentSlide(index)
    }

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length)
    }

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    }

    return (
        <div className="relative w-full h-96 bg-ml-gray overflow-hidden">
            {/* Slides */}
            <div className="relative h-full">
                {slides.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={`absolute w-full h-full transition-opacity duration-500 ${index === currentSlide ? 'opacity-100' : 'opacity-0'
                            }`}
                    >
                        <img
                            src={slide.image}
                            alt={slide.title}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 flex flex-col justify-center items-start pl-16">
                            <h2 className="text-white text-5xl font-bold mb-4 max-w-2xl">
                                {slide.title}
                            </h2>
                            <p className="text-white text-2xl mb-6">{slide.subtitle}</p>
                            <button className="bg-ml-yellow text-ml-blue px-8 py-3 rounded font-bold hover:bg-yellow-300 transition">
                                {slide.button}
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Botones de navegación */}
            <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-100 text-ml-blue rounded-full w-12 h-12 flex items-center justify-center transition z-10"
            >
                ❮
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-100 text-ml-blue rounded-full w-12 h-12 flex items-center justify-center transition z-10"
            >
                ❯
            </button>

            {/* Indicadores */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-3 h-3 rounded-full transition ${index === currentSlide
                                ? 'bg-ml-yellow w-8'
                                : 'bg-white bg-opacity-50 hover:bg-opacity-75'
                            }`}
                    />
                ))}
            </div>
        </div>
    )
}
