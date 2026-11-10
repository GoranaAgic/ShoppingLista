import { napraviServis } from './Kolekcija'

// Entitet 1: Trgovina (gdje se kupuje). Početni podaci su demo.
export const trgovine = [
    { sifra: 1, naziv: 'Supermarket (demo)', grad: 'Osijek', napomena: 'Radi do 21 sat.' },
    { sifra: 2, naziv: 'Tržnica (demo)', grad: 'Osijek', napomena: 'Voće i povrće, ujutro.' },
    { sifra: 3, naziv: 'Ljekarna (demo)', grad: 'Osijek', napomena: '' },
]

export default napraviServis('sl_trgovine', trgovine)
