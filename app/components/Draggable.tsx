'use client'
import useEmblaCarousel  from 'embla-carousel-react'
import {  EmblaOptionsType } from 'embla-carousel';
import { PropsWithChildren } from 'react'

type EmblaCarouselProps = PropsWithChildren<{
  options?: Partial<EmblaOptionsType> 
}>

export function EmblaCarousel({ children, options }: EmblaCarouselProps) {
  const [emblaRef] = useEmblaCarousel(options)

  return (
    <div className="embla" ref={emblaRef}>
      <div draggable={false} className="select-none embla__container flex gap-5  w-full">
        {children}
      </div>
    </div>
  )
}