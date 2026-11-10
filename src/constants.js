export const IME_APLIKACIJE = 'Shopping lista'
export const AUTOR = 'Gorana Agić'

export const STRANICE = [
    { id: 'pocetna', naziv: 'Početna' },
    { id: 'artikli', naziv: 'Artikli' },
    { id: 'trgovine', naziv: 'Trgovine' },
]

export const JEDINICE = ['kom', 'kg', 'g', 'l', 'pak']

// 2027-02-14 -> 14. 02. 2027.
export const formatDatum = (d) => (d ? d.split('-').reverse().join('. ') + '.' : '')

// 5.5 -> 5,50 €
export const formatCijena = (c) =>
    new Intl.NumberFormat('hr-HR', { style: 'currency', currency: 'EUR' }).format(c)

export const danas = () => new Date().toISOString().slice(0, 10)
