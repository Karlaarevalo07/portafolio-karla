export type GlossaryTerm = { term: string; def: string }

export const glossary: Record<string, GlossaryTerm[]> = {
  A: [
    { term: 'API', def: 'Interfaz para que dos sistemas se comuniquen.' },
    { term: 'Algoritmo', def: 'Conjunto de pasos para resolver un problema.' },
  ],
  C: [
    { term: 'Cliente/Servidor', def: 'Modelo donde un cliente solicita y un servidor responde.' },
    { term: 'CSS', def: 'Lenguaje de estilos para páginas web.' },
  ],
  D: [
    { term: 'DOM', def: 'Representación en memoria del documento HTML.' },
    { term: 'Deploy', def: 'Proceso de publicar una aplicación.' },
  ],
}
