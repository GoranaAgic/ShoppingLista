import { napraviServis } from './Kolekcija'

// Entitet 1: Trgovina (gdje se kupuje).
export const trgovine = [
    { sifra: 1, naziv: 'Lidl', grad: 'Vukovar', napomena: 'Radi do 21 sat.' },
    { sifra: 2, naziv: 'Gradska tržnica', grad: 'Vukovar', napomena: 'Voće i povrće, ujutro.' },
    { sifra: 3, naziv: 'Ljekarna Zdravlje', grad: 'Vukovar', napomena: '' },
    { sifra: 4, naziv: 'eBay.de', grad: 'Online (DE)', napomena: 'Dostava iz Njemačke.' },
    { sifra: 5, naziv: 'Amazon.co.uk', grad: 'Online (UK)', napomena: 'Dostava iz UK-a.' },
    { sifra: 6, naziv: 'Tvornica Zdrave Hrane', grad: 'Osijek', napomena: 'Zdrava hrana i dodaci prehrani.' },
]

export default napraviServis('sl_trgovine', trgovine)
