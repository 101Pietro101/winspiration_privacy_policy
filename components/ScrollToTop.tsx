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

import { useEffect, useState } from 'react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-zinc-900 text-white shadow-lg transition-all hover:bg-zinc-800 hover:scale-110 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200"
          aria-label="Scroll to top"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            className="h-5 w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18"
            />
          </svg>
        </button>
      )}
    </>
  );
}
