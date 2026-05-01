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

"use client";

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
 * Utilizzando o accedendo al codice sorgente o alle idee della presente applicazione, l'utente accetta di essere vincolato dai termini e dalle condizioni del presente avviso di copyright. L'utente riconosce inoltre che il presente avviso di copyright costituisce l'intero accordo tra l'utente, Pietro Guglielmi e la PhepTech di Pietro Guglielmi in relazione dall'oggetto del presente documento e sostituisce qualsiasi accordo o comunicazione precedente, scritta o orale.
 *
 * *Legge applicabile e foro competente:**
 *
 * Il presente avviso di copyright sarà regolato e interpretato in conformità con le leggi vigenti. Qualsiasi controversia derivante da o relativa al presente avviso di copyright sarà soggetta alla giurisdizione esclusiva dei tribunali di competenza.
 */

import { useEffect, useState } from 'react';
import { Section } from '@/lib/privacy';

interface SidebarProps {
  sections: Section[];
}

export default function Sidebar({ sections }: SidebarProps) {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-10% 0% -80% 0%', // Trigger when section is near the top
        threshold: 0,
      }
    );

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => {
      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) observer.unobserve(element);
      });
    };
  }, [sections]);

  return (
    <aside className="sticky top-24 hidden h-[calc(100vh-8rem)] w-64 shrink-0 overflow-y-auto pr-8 lg:block">
      <nav className="flex flex-col gap-4">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-900 dark:text-zinc-100">
          On this page
        </h2>
        <ul className="flex flex-col gap-2">
          {sections.map((section) => {
            const isActive = activeId === section.id;
            return (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className={`block text-sm transition-all duration-200 hover:text-zinc-900 dark:hover:text-white ${
                    isActive
                      ? 'font-semibold text-zinc-900 dark:text-white border-l-2 border-zinc-900 dark:border-white pl-3 -ml-px'
                      : section.level === 1
                        ? 'font-medium text-zinc-900 dark:text-zinc-100 border-l border-transparent pl-3'
                        : 'pl-6 text-zinc-500 dark:text-zinc-400 border-l border-transparent'
                  }`}
                >
                  {section.title}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
