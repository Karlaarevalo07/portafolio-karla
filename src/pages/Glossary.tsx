import SectionTitle from '../components/SectionTitle'
import Card from '../components/Card'
import { glossary } from '../data/glossary'

export default function Glossary() {
  const letters = Object.keys(glossary)

  return (
    <div className="space-y-6">
      <SectionTitle>Glosario</SectionTitle>

      <div className="flex flex-wrap gap-2">
        {letters.map(l => (
          <a key={l} href={`#sec-${l}`} className="px-2 py-1 border rounded">
            {l}
          </a>
        ))}
      </div>

      {letters.map(letter => (
        <section key={letter} id={`sec-${letter}`} className="space-y-3">
          <h3 className="text-xl font-semibold mt-4">{letter}</h3>
          <div className="grid md:grid-cols-2 gap-3">
            {glossary[letter].map(item => (
              <Card key={item.term} title={item.term}>
                <p className="text-sm leading-relaxed">{item.def}</p>
              </Card>
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}
