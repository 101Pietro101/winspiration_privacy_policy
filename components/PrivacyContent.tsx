/*
 * Copyright (c) 2026.
 *
 * Copyright © 2026 PhepTech di Pietro Guglielmi. Tutti i diritti riservati.
 * Copyright © 2026 Pietro Guglielmi. Tutti i diritti riservati.
 *
 * *Codice sorgente:**
 *
 * Il codice sorgente di questa applicazione, inclusi tutti i file, le classi, le funzioni, gli algoritmi, le strutture dati, le interfacce utente e qualsiasi altro elemento di codice, sono protetti da copyright e altre leggi sulla proprietà intellettuale e costituiscono un segreto commerciale di Pietro Guglielmi e della PhepTech di Pietro Guglielmi.
 *
 * È severamente vietato riprodurre, distribuire, modificare, adattare, tradurre, decompilare, disassemblare, decodificare, effettuare il reverse engineering o altrimenti tentare di derivare il codice sorgente dell'applicazione, in tutto o in parte, senza la previa autorizzazione scritta di Pietro Guglielmi e della PhepTech di Pietro Guglielmi.
 *
 * *Idee e concetti:**
 *
 * Le idee, i concetti, il design, la funzionalità, l'esperienza utente, l'architettura, la logica di business, i modelli di dati, i flussi di lavoro, le innovazioni, le invenzioni e qualsiasi altro elemento creativo o intellettuale incorporato nella presente applicazione sono protetti da copyright, brevetti, segreti commerciali e altre leggi sulla proprietà intellettuale.
 *
 * È severamente vietato utilizzare, copiare, adattare, modificare, implementare, integrare, distribuire, commercializzare o altrimenti sfruttare le idee e i concetti dell'applicazione, in tutto o in parte, in altre applicazioni, prodotti, servizi o attività commerciali senza la previa autorizzazione scritta di Pietro Guglielmi e della PhepTech di Pietro Guglielmi.
 *
 * *Limitazione di responsabilità:**
 *
 * Pietro Guglielmi e la PhepTech di Pietro Guglielmi non rilasciano alcuna garanzia, esplicita o implicita, in merito al codice sorgente o alle idee dell'applicazione, inclusa ma non limitata a garanzie di commerciabilità, idoneità per uno scopo particolare, non violazione, accuratezza, completezza, affidabilità o disponibilità.
 *
 * In nessun caso Pietro Guglielmi e la PhepTech di Pietro Guglielmi saranno responsabili per eventuali danni diretti, indiretti, incidentali, consequenziali, speciali, punitivi o esemplari derivanti dall'uso o dall'impossibilità di utilizzare il codice sorgente o le idee dell'applicazione, anche se Pietro Guglielmi e la PhepTech di Pietro Guglielmi sono stati informati della possibilità di tali danni.
 *
 * *Accettazione dei termini:**
 *
 * Utilizzando o accedendo al codice sorgente o alle idee della presente applicazione, l'utente accetta di essere vincolato dai termini e dalle condizioni del presente avviso di copyright. L'utente riconosce inoltre che il presente avviso di copyright costituisce l'intero accordo tra l'utente, Pietro Guglielmi e la PhepTech di Pietro Guglielmi in relazione all'oggetto del presente documento e sostituisce qualsiasi accordo o comunicazione precedente, scritta o orale.
 *
 * *Legge applicabile e foro competente:**
 *
 * Il presente avviso di copyright sarà regolato e interpretato in conformità con le leggi vigenti. Qualsiasi controversia derivante da o relativa al presente avviso di copyright sarà soggetta alla giurisdizione esclusiva dei tribunali di competenza.
 */

import Image from 'next/image';
import { Section } from '@/lib/privacy';

interface PrivacyContentProps {
  introLines: string[];
  sections: Section[];
}

export default function PrivacyContent({ introLines, sections }: PrivacyContentProps) {
  return (
    <article className="flex-1 min-w-0">
      {/* Brand Banner */}
      <div className="mb-12 overflow-hidden rounded-2xl shadow-xl border border-zinc-200 dark:border-zinc-800">
        <Image
          src="/images/feature-graphic.png"
          alt="Winspiration Brand"
          width={1024}
          height={500}
          className="w-full object-cover"
          priority
        />
      </div>

      {/* Introduction */}
      <div className="mb-12 border-b border-zinc-100 pb-12 dark:border-zinc-800">
        <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white sm:text-5xl">
          Privacy Policy
        </h1>
        <div className="space-y-4 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
          {introLines.map((line, idx) => (
            <p key={idx} className={line.trim() === '' ? 'h-4' : ''}>
              {line}
            </p>
          ))}
        </div>
      </div>

      {/* Sections */}
      <div className="space-y-16">
        {sections.map((section) => (
          <section key={section.id} id={section.id} className="scroll-mt-24">
            <h2 className={`mb-6 font-bold tracking-tight text-zinc-900 dark:text-white ${
              section.level === 1 ? 'text-3xl' : 'text-2xl'
            }`}>
              {section.title}
            </h2>
            <div className="space-y-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">
              {section.content.map((line, idx) => {
                const trimmed = line.trim();
                
                // Simple bullet point detection
                if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
                  return (
                    <li key={idx} className="ml-4 list-disc pl-2">
                      {trimmed.substring(2)}
                    </li>
                  );
                }
                
                // Empty line
                if (trimmed === '') {
                  return <div key={idx} className="h-4" />;
                }
                
                return <p key={idx}>{line}</p>;
              })}
            </div>
          </section>
        ))}
      </div>
    </article>
  );
}
