

function Card({item}) {
  return (
    <div className={`${item.className} max-w-xl cursor-pointer transform transition hover:scale-105`}>
         <div className="p-8">
            <div className="text-2xl font-bold">{item.title}</div>
            <div className="font-semibold underline  mt-10 underline-offset-4">SHOP NOW +</div>
         </div>
        <img className="absolute left-[40%] top-5 h-40 w-56" src={item.src} />
    </div>
  )
}

export default Card