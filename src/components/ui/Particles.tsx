export default function Particles() {
  return (
    <div className="pointer-events-none absolute inset-0 opacity-20">
      <div className="absolute left-1/4 top-1/4 h-2 w-2 rounded-full bg-white" />
      <div className="absolute right-1/4 top-1/3 h-2 w-2 rounded-full bg-white" />
      <div className="absolute bottom-1/4 left-1/3 h-2 w-2 rounded-full bg-white" />
    </div>
  )
}
