# Shopping lista

Popis za kupnju po trgovinama. Izrađeno na temelju početnog projekta autorice (React + Vite).


## Entiteti (CRUD nad oba)

- **Trgovina**: naziv, grad, napomena
- **Artikl**: naziv, trgovina, količina, jedinica, cijena po jedinici (€), kupiti do (datum), kupljeno (kvačica); svaki artikl pripada jednoj trgovini (1 : N)

Trgovina s artiklima ne može se obrisati dok se ne obrišu njezini artikli. Artikli se mogu pretraživati, filtrirati na nekupljene i jednim klikom označiti kupljenima.

## Stranice

Početna (popis za kupnju po trgovinama: artikli s kvačicom, iznos po trgovini, ukupan procijenjeni trošak i „Označi sve kupljeno"), Artikli i Trgovine.

Početni podaci su izmišljeni (demo). Podaci se spremaju u `localStorage` preglednika.

## Tehnologije

React 19, Vite
