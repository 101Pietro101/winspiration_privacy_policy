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
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="flex flex-col items-center gap-4 md:items-start">
            <Link href="https://www.pheptech.com" className="flex items-center gap-3 transition-opacity hover:opacity-90">
              <Image
                src="/images/pheptech-logo.jpg"
                alt="PhepTech Logo"
                width={40}
                height={40}
                className="rounded shadow-sm"
              />
              <div className="flex flex-col">
                <span className="text-sm font-bold text-zinc-900 dark:text-white">PhepTech</span>
                <span className="text-xs text-zinc-500">by Pietro Guglielmi</span>
              </div>
            </Link>
            <p className="max-w-xs text-center text-xs leading-5 text-zinc-500 md:text-left">
              PhepTech is the project and brand associated with the development of Winspiration.
            </p>
          </div>
          
          <div className="flex flex-col items-center gap-2 md:items-end">
            <div className="flex gap-4 text-xs font-medium text-zinc-600 dark:text-zinc-400">
              <Link href="mailto:pietrog.developer@gmail.com" className="hover:text-zinc-900 dark:hover:text-white">
                Contact Support
              </Link>
              <Link href="https://www.pheptech.com" className="hover:text-zinc-900 dark:hover:text-white">
                Website
              </Link>
            </div>
            <p className="text-xs text-zinc-400">
              &copy; {currentYear} PhepTech di Pietro Guglielmi. All rights reserved.
            </p>
          </div>
        </div>
        
        <div className="mt-8 border-t border-zinc-200 pt-8 text-center dark:border-zinc-800">
          <p className="text-[10px] uppercase tracking-widest text-zinc-400">
            Enterprise Grade Legal Documentation Site
          </p>
        </div>
      </div>
    </footer>
  );
}
