import { danas, formatCijena, formatDatum } from '../constants'
import { useLista } from '../hooks'
import ArtiklService from '../services/ArtiklService'
import TrgovinaService from '../services/TrgovinaService'

export default function Pocetna({ idi }) {

    const artikli = useLista(ArtiklService)
    const trgovine = useLista(TrgovinaService)

    const iznos = (a) => a.kolicina * a.cijena
    const nekupljeno = artikli.stavke.filter((a) => !a.kupljeno)
    const ukupno = nekupljeno.reduce((z, a) => z + iznos(a), 0)

    // Za svaku trgovinu njezini artikli: nekupljeni prvi, po datumu "kupiti do"
    const grupe = trgovine.stavke
        .map((t) => ({
            trgovina: t,
            stavke: artikli.stavke
                .filter((a) => a.trgovinaSifra === t.sifra)
                .sort((a, b) => Number(a.kupljeno) - Number(b.kupljeno) || (a.kupitiDo || '9999').localeCompare(b.kupitiDo || '9999')),
        }))
        .filter((g) => g.stavke.length > 0)

    async function prebaci(artikl) {
        await ArtiklService.promijeni(artikl.sifra, { kupljeno: !artikl.kupljeno })
        await artikli.osvjezi()
    }

    async function oznaciSve(stavke) {
        for (const a of stavke.filter((x) => !x.kupljeno)) {
            await ArtiklService.promijeni(a.sifra, { kupljeno: true })
        }
        await artikli.osvjezi()
    }

    return (
        <>
            <div className="glava">
                <div>
                    <h1>Za kupiti</h1>
                    <p className="prigusen sazetak">
                        {nekupljeno.length === 0
                            ? 'Sve je kupljeno.'
                            : `${nekupljeno.length} artikala · procijenjeno ${formatCijena(ukupno)}`}
                    </p>
                </div>
                <button className="gumb" onClick={() => idi('artikli')}>+ Novi artikl</button>
            </div>

            {grupe.length === 0 ? (
                <div className="kutija"><p className="prigusen popuna">Popis je prazan.</p></div>
            ) : (
                <div className="popis">
                    {grupe.map(({ trgovina, stavke }) => {
                        const otvoreno = stavke.filter((a) => !a.kupljeno)
                        return (
                            <section key={trgovina.sifra} className="kutija trgovina">
                                <h2>{trgovina.naziv} <span className="prigusen">{trgovina.grad}</span></h2>
                                <ul>
                                    {stavke.map((a) => (
                                        <li key={a.sifra} className={a.kupljeno ? 'gotov' : ''}>
                                            <label>
                                                <input type="checkbox" checked={a.kupljeno} onChange={() => prebaci(a)} />
                                                <span>{a.naziv}</span>
                                            </label>
                                            <span className="prigusen">{a.kolicina} {a.jedinica}</span>
                                            <span className={!a.kupljeno && a.kupitiDo && a.kupitiDo < danas() ? 'kasni' : 'prigusen'}>
                                                {formatDatum(a.kupitiDo)}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="podnozje-kartice">
                                    <b>{otvoreno.length === 0 ? 'Sve kupljeno' : formatCijena(otvoreno.reduce((z, a) => z + iznos(a), 0))}</b>
                                    {otvoreno.length > 0 && (
                                        <button className="veza" onClick={() => oznaciSve(stavke)}>Označi sve kupljeno</button>
                                    )}
                                </div>
                            </section>
                        )
                    })}
                </div>
            )}
        </>
    )
}
