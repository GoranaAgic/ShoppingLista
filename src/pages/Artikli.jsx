import { useState } from 'react'
import CrudTablica from '../components/CrudTablica'
import { JEDINICE, danas, formatCijena, formatDatum } from '../constants'
import { useLista } from '../hooks'
import ArtiklService from '../services/ArtiklService'
import TrgovinaService from '../services/TrgovinaService'

export default function Artikli() {

    const artikli = useLista(ArtiklService)
    const trgovine = useLista(TrgovinaService)
    const [trazi, setTrazi] = useState('')
    const [samoNekupljeno, setSamoNekupljeno] = useState(false)

    const trgovina = (sifra) => trgovine.stavke.find((t) => t.sifra === sifra)?.naziv ?? '—'

    const q = trazi.trim().toLowerCase()
    const prikaz = artikli.stavke
        .filter((a) => !samoNekupljeno || !a.kupljeno)
        .filter((a) => !q || a.naziv.toLowerCase().includes(q))
        .sort((a, b) => Number(a.kupljeno) - Number(b.kupljeno) || (a.kupitiDo || '9999').localeCompare(b.kupitiDo || '9999'))

    async function prebaci(artikl) {
        await ArtiklService.promijeni(artikl.sifra, { kupljeno: !artikl.kupljeno })
        await artikli.osvjezi()
    }

    function validate(v) {
        const g = {}
        if (!(Number(v.kolicina) > 0)) g.kolicina = 'Količina mora biti veća od 0.'
        if (!(Number(v.cijena) > 0)) g.cijena = 'Cijena mora biti veća od 0.'
        return g
    }

    return (
        <CrudTablica
            naslov="Artikli"
            novi="Novi artikl"
            servis={ArtiklService}
            stavke={prikaz}
            osvjezi={artikli.osvjezi}
            prazno={artikli.stavke.length === 0 ? 'Popis je prazan.' : 'Nijedan artikl ne odgovara pretrazi.'}
            validate={validate}
            alat={(
                <div className="alat">
                    <input
                        type="search"
                        placeholder="Traži artikl…"
                        value={trazi}
                        onChange={(e) => setTrazi(e.target.value)}
                    />
                    <label className="kvacica-filtar">
                        <input type="checkbox" checked={samoNekupljeno} onChange={(e) => setSamoNekupljeno(e.target.checked)} />
                        Samo nekupljeno
                    </label>
                </div>
            )}
            fields={[
                { name: 'naziv', label: 'Naziv artikla', required: true },
                { name: 'trgovinaSifra', label: 'Trgovina', type: 'select', asNumber: true, required: true, options: trgovine.stavke.map((t) => ({ value: t.sifra, label: t.naziv })) },
                { name: 'kolicina', label: 'Količina', type: 'number', step: '0.1', required: true, default: 1 },
                { name: 'jedinica', label: 'Jedinica', type: 'select', required: true, default: 'kom', options: JEDINICE.map((j) => ({ value: j, label: j })) },
                { name: 'cijena', label: 'Cijena po jedinici (€)', type: 'number', step: '0.01', required: true },
                { name: 'kupitiDo', label: 'Kupiti do', type: 'date' },
                { name: 'kupljeno', label: 'Kupljeno', type: 'checkbox' },
            ]}
            columns={[
                { render: (a) => <span className={a.kupljeno ? 'precrtano' : ''}>{a.naziv}</span>, label: 'Artikl' },
                { render: (a) => trgovina(a.trgovinaSifra), label: 'Trgovina' },
                { render: (a) => `${a.kolicina} ${a.jedinica}`, label: 'Količina' },
                { render: (a) => formatCijena(a.kolicina * a.cijena), label: 'Iznos' },
                {
                    render: (a) => (
                        <span className={!a.kupljeno && a.kupitiDo && a.kupitiDo < danas() ? 'kasni' : ''}>
                            {formatDatum(a.kupitiDo) || '—'}
                        </span>
                    ),
                    label: 'Kupiti do',
                },
                {
                    render: (a) => (
                        <button className={a.kupljeno ? 'oznaka ok' : 'oznaka'} onClick={() => prebaci(a)} title="Promijeni stanje">
                            {a.kupljeno ? 'Kupljeno' : 'Treba kupiti'}
                        </button>
                    ),
                    label: 'Stanje',
                },
            ]}
        />
    )
}
