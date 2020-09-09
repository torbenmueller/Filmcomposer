import React from 'react';
import '../App.css';
import torben from '../assets/torben_jan_mueller_438x640.jpg';

export const About = () => (
    <div>

        {/* Biografie */}
        <h2 className="handwriting">Biografie</h2>
        <div className="float-item">
            <p><img src={torben} alt="Torben Jan Müller" className="photoBiografie"></img>Torben Jan Müller ist freiberuflicher Filmkomponist. Mit 6 Jahren begann er
                Klavier zu spielen und hatte sieben Jahre klassischen Unterricht. Im Alter von 15
                Jahren lernte er Gitarre als zweites Instrument. Unterrichtet wurde er in Konzert und
                E-Gitarre von Roy Last. Als Lead-Gitarrist, Keyboarder und Background-Sänger
                spielte er in diversen Rock- und Pop-Bands, u.a. mit Anna Depenbusch.
            </p>
            <br />
            <p>
                Als Produzent und Remixer arbeitete er unter dem Künstlernamen Steve Vercetti
                für diverse nationale und internationale Labels, z.B. Peak Hour Music, New York.
            </p>
            <br />
            <p>
                Torben Jan Müller studierte an der Akademie Deutsche Pop in Köln und machte
                Diplome in den Studiengängen <b>Filmkomponist</b>, <b>Komponist</b>, <b>Arrangeur</b> und <b>Künstlerischer Produzent</b>.
            </p>
        </div>
        
        <hr />

        {/* Filmografie */}
        <h2 className="handwriting">Filmografie</h2>
        <table>
            <tbody>
                <tr>
                    <td className="year">2019</td>
                    <td>Ich liebe dich, Alex! (Short): Musik</td>
                </tr>
                <tr>
                    <td></td>
                    <td>Sparkassen Card Plus (Imagefilm): Musik</td>
                </tr>
                <tr>
                    <td className="year">2018</td>
                    <td>Virus (Short): Musik</td>
                </tr>
                <tr>
                    <td></td>
                    <td>Blow (Short): Musik</td>
                </tr>
                <tr>
                    <td></td>
                    <td>Wodka Gorbatschow PlakaDiva (Imagefilm): Musik</td>
                </tr>
                <tr>
                    <td className="year">2017</td>
                    <td>Märkischer Kreis Jugendförderung (Imagefilm): Musik</td>
                </tr>
                <tr>
                    <td></td>
                    <td>Eurotec (Imagefilm): Musik</td>
                </tr>
                <tr>
                    <td></td>
                    <td>Verfuß (Imagefilm): Musik</td>
                </tr>
                <tr>
                    <td></td>
                    <td>Rising Death (Buchtrailer): Musik</td>
                </tr>
                <tr>
                    <td></td>
                    <td>Sparkasse Hemer (Imagefilm): Musik</td>
                </tr>
                <tr>
                    <td></td>
                    <td>Eine Ode an die Liebe (Short): Musik</td>
                </tr>
                <tr>
                    <td className="year">2016</td>
                    <td>Das Casting (Short): Musik, Sounddesign</td>
                </tr>
                <tr>
                    <td></td>
                    <td>Schön Klinik (Imagefilm): Musik</td>
                </tr>
                <tr>
                    <td></td>
                    <td>Ostzone (Horrorfilm): Musik</td>
                </tr>
                <tr>
                    <td></td>
                    <td>Zusammen leben in Hemer (Imagefilm): Musik</td>
                </tr>
                <tr>
                    <td></td>
                    <td>Alles Gute kommt von oben (Short): Musik</td>
                </tr>
                <tr>
                    <td></td>
                    <td>Seven Devils (Trailer): Musik</td>
                </tr>
                <tr>
                    <td className="year">2015</td>
                    <td>Schauerland (Intro): Musik</td>
                </tr>
                <tr>
                    <td></td>
                    <td>Thomas Hümmler (Imagefilm): Musik</td>
                </tr>
                <tr>
                    <td></td>
                    <td>Ostzone (Trailer): Musik</td>
                </tr>
                <tr>
                    <td></td>
                    <td>Verfuß (Imagefilm): Musik</td>
                </tr>
                <tr>
                    <td></td>
                    <td>Neonomads (Fashion Clip): Musik</td>
                </tr>
                <tr>
                    <td></td>
                    <td>SFS Steuerberatungsgesellschaft (Imagefilm): Musik</td>
                </tr>
                <tr>
                    <td></td>
                    <td>JUKI - Jugend- und Kinderfestival München (Imagefilm): Musik</td>
                </tr>
                <tr>
                    <td></td>
                    <td>Mut (Short): Sounddesign</td>
                </tr>
                <tr>
                    <td className="year">2014</td>
                    <td>Formidling (Dokumentation): Musik</td>
                </tr>
                <tr>
                    <td></td>
                    <td>Hailgirl (Short): Musik</td>
                </tr>
                <tr>
                    <td></td>
                    <td>Art (Short): Musik</td>
                </tr>
                <tr>
                    <td></td>
                    <td>Schmonz (TV Mini-Series): Musik</td>
                </tr>
                <tr>
                    <td></td>
                    <td>Mein Ahnenland Peru (TV-Dokumentation): Musik</td>
                </tr>
                <tr>
                    <td className="year">2013</td>
                    <td>50 Cent (Short): Musik</td>
                </tr>
                <tr>
                    <td></td>
                    <td>Letting Go (Short): Musik</td>
                </tr>
            </tbody>
        </table>
        
        <hr />

        {/* Stilistik */}
        <h2 className="handwriting">Stilistik</h2>
        <p>Große Symphonik, elektronische Musik, Rock &amp; Pop, Funk</p>

    </div>
)