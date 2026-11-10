import CrudTablica from '../components/CrudTablica'
import { useLista } from '../hooks'
import ArtiklService from '../services/ArtiklService'
import TrgovinaService from '../services/TrgovinaService'

export default function Trgovine() {

    const trgovine = useLista(TrgovinaService)
    const artikli = useLista(ArtiklService)

    const brojArtikala = (sifra) => artikli.stavke.filter((a) => a.trgovinaSifra === sifra).length

    return (
        <CrudTablica
            naslov="Trgovine"
            novi="Nova trgovina"
            servis={TrgovinaService}
            stavke={trgovine.stavke}
            osvjezi={trgovine.osvjezi}
            prazno="Još nema trgovina."
            fields={[
                { name: 'naziv', label: 'Naziv trgovine', required: true },
                { name: 'grad', label: 'Grad', required: true },
                { name: 'napomena', label: 'Napomena', type: 'textarea' },
            ]}
            columns={[
                { key: 'naziv', label: 'Naziv' },
                { key: 'grad', label: 'Grad' },
                { render: (t) => t.napomena || '—', label: 'Napomena' },
                { render: (t) => brojArtikala(t.sifra), label: 'Artikala' },
            ]}
            blokirajBrisanje={(t) =>
                brojArtikala(t.sifra) > 0 ? 'Trgovina ima artikle i ne može se obrisati. Prvo obrišite njezine artikle.' : null}
        />
    )
}
