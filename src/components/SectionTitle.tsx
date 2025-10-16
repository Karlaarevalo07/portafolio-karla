type Props = { children: string }
export default function SectionTitle({ children }: Props) {
  return (
    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight mb-4 text-gray-900">
      {children}
    </h2>
  )
}
