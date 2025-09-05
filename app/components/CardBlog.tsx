
export default function CardBlog() {
  return (
    <div className="min-w-[200px] grid  h-[300px] bg-white rounded-xl p-5">
        <div className="h-[30%]">
            <img src="/icon.png" alt="cover" />
        </div>
        <div className="flex h-[100%]  flex-col gap-1">
            <div className="text-lg text-[--secondary] line-clamp-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ullam!</div>
            <div className="text-sm line-clamp-3 text-black/30">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus ipsa earum, nostrum asperiores possimus maiores at commodi sit officiis nesciunt adipisci repudiandae corporis ex sequi aut molestiae ipsum eligendi nam.!</div>
        </div>
    </div>
  )
}
