import { napraviServis } from './Kolekcija'

// Entitet 2: Artikl na popisu. Svaki artikl se kupuje u jednoj trgovini (trgovinaSifra). Početni podaci su demo.
export const artikli = [
    { sifra: 1, naziv: 'Mlijeko', trgovinaSifra: 1, kolicina: 2, jedinica: 'l', cijena: 1.1, kupitiDo: '2026-11-02', kupljeno: false },
    { sifra: 2, naziv: 'Kruh', trgovinaSifra: 1, kolicina: 1, jedinica: 'kom', cijena: 1.5, kupitiDo: '2026-11-01', kupljeno: false },
    { sifra: 3, naziv: 'Jabuke', trgovinaSifra: 2, kolicina: 2, jedinica: 'kg', cijena: 1.8, kupitiDo: '2026-11-05', kupljeno: false },
    { sifra: 4, naziv: 'Sirup za kašalj', trgovinaSifra: 3, kolicina: 1, jedinica: 'kom', cijena: 6.5, kupitiDo: '2026-11-10', kupljeno: false },
    { sifra: 5, naziv: 'Kava', trgovinaSifra: 1, kolicina: 1, jedinica: 'pak', cijena: 4.9, kupitiDo: '2026-10-28', kupljeno: true },
]

export default napraviServis('sl_artikli', artikli)
