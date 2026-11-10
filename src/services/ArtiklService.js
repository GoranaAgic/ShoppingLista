import { napraviServis } from './Kolekcija'

// Entitet 2: Artikl na popisu. Svaki artikl se kupuje u jednoj trgovini (trgovinaSifra).
export const artikli = [
    { sifra: 1, naziv: 'Mlijeko', trgovinaSifra: 1, kolicina: 2, jedinica: 'l', cijena: 1.1, kupitiDo: '2026-11-02', kupljeno: false },
    { sifra: 2, naziv: 'Kruh', trgovinaSifra: 1, kolicina: 1, jedinica: 'kom', cijena: 1.5, kupitiDo: '2026-11-01', kupljeno: false },
    { sifra: 3, naziv: 'Jabuke', trgovinaSifra: 2, kolicina: 2, jedinica: 'kg', cijena: 1.8, kupitiDo: '2026-11-05', kupljeno: false },
    { sifra: 4, naziv: 'Sirup za kašalj', trgovinaSifra: 3, kolicina: 1, jedinica: 'kom', cijena: 6.5, kupitiDo: '2026-11-10', kupljeno: true },
    { sifra: 5, naziv: 'Kava', trgovinaSifra: 1, kolicina: 1, jedinica: 'pak', cijena: 4.9, kupitiDo: '2026-10-28', kupljeno: true },
    { sifra: 6, naziv: 'Jaja', trgovinaSifra: 1, kolicina: 10, jedinica: 'kom', cijena: 0.3, kupitiDo: '2026-11-12', kupljeno: false },
    { sifra: 7, naziv: 'Tjestenina', trgovinaSifra: 1, kolicina: 2, jedinica: 'pak', cijena: 1.2, kupitiDo: '2026-11-14', kupljeno: false },
    { sifra: 8, naziv: 'Maslinovo ulje', trgovinaSifra: 1, kolicina: 1, jedinica: 'l', cijena: 7.9, kupitiDo: '2026-11-18', kupljeno: false },
    { sifra: 9, naziv: 'Rajčice', trgovinaSifra: 2, kolicina: 1.5, jedinica: 'kg', cijena: 2.5, kupitiDo: '2026-11-12', kupljeno: false },
    { sifra: 10, naziv: 'Krumpir', trgovinaSifra: 2, kolicina: 5, jedinica: 'kg', cijena: 0.9, kupitiDo: '2026-11-13', kupljeno: false },
    { sifra: 11, naziv: 'Sir', trgovinaSifra: 2, kolicina: 0.5, jedinica: 'kg', cijena: 9, kupitiDo: '2026-11-15', kupljeno: false },
    { sifra: 12, naziv: 'Vitamin C', trgovinaSifra: 3, kolicina: 1, jedinica: 'pak', cijena: 5.4, kupitiDo: '2026-11-16', kupljeno: true },
    { sifra: 13, naziv: 'Flasteri', trgovinaSifra: 3, kolicina: 1, jedinica: 'pak', cijena: 2.8, kupitiDo: '2026-11-20', kupljeno: true },
    { sifra: 14, naziv: 'Krema za ruke', trgovinaSifra: 3, kolicina: 1, jedinica: 'kom', cijena: 4.2, kupitiDo: '2026-11-17', kupljeno: true },
    { sifra: 15, naziv: 'Slušalice', trgovinaSifra: 4, kolicina: 1, jedinica: 'kom', cijena: 24.9, kupitiDo: '2026-11-22', kupljeno: false },
    { sifra: 16, naziv: 'USB-C punjač', trgovinaSifra: 4, kolicina: 1, jedinica: 'kom', cijena: 19.9, kupitiDo: '2026-11-24', kupljeno: false },
    { sifra: 17, naziv: 'Futrola za mobitel', trgovinaSifra: 4, kolicina: 2, jedinica: 'kom', cijena: 7.5, kupitiDo: '2026-11-25', kupljeno: false },
    { sifra: 18, naziv: 'Powerbank', trgovinaSifra: 5, kolicina: 1, jedinica: 'kom', cijena: 21, kupitiDo: '2026-11-23', kupljeno: false },
    { sifra: 19, naziv: 'Kuhinjska vaga', trgovinaSifra: 5, kolicina: 1, jedinica: 'kom', cijena: 14.9, kupitiDo: '2026-11-26', kupljeno: false },
    { sifra: 20, naziv: 'Roman na engleskom', trgovinaSifra: 5, kolicina: 2, jedinica: 'kom', cijena: 12.5, kupitiDo: '2026-11-30', kupljeno: false },
    { sifra: 21, naziv: 'Chia sjemenke', trgovinaSifra: 6, kolicina: 2, jedinica: 'pak', cijena: 4.69, kupitiDo: '2026-11-19', kupljeno: false },
    { sifra: 22, naziv: 'Pirovo brašno', trgovinaSifra: 6, kolicina: 2, jedinica: 'kg', cijena: 2.59, kupitiDo: '2026-11-20', kupljeno: false },
    { sifra: 23, naziv: 'Kikiriki maslac', trgovinaSifra: 6, kolicina: 1, jedinica: 'pak', cijena: 8.49, kupitiDo: '2026-11-21', kupljeno: false },
]

export default napraviServis('sl_artikli', artikli)
