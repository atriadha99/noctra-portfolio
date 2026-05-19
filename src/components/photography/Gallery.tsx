export default function Gallery() {
  return (
    <div>
      <h2 className="mb-10 text-4xl font-bold">Photography</h2>

      <div className="grid gap-4 md:grid-cols-3">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div
            key={item}
            className="aspect-square rounded-3xl bg-zinc-900"
          />
        ))}
      </div>
    </div>
  )
}
