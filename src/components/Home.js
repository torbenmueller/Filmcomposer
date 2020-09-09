import React from 'react';
import ReactAudioPlayer from 'react-audio-player';
import action from '../assets/music/99firefilm2018_torben_jan_mueller_16bit_48khz_v3m_action.mp3';
import adventure from '../assets/music/schmonz_ep2_goldgraeber3_torben_jan_mueller_ueberarbeitet_n_cut.mp3';
import animation from '../assets/music/revolution_radio_torben_jan_mueller_16bit_48khz_final_m.mp3';
import comedy from '../assets/music/99firefilm2018_torben_jan_mueller_16bit_48khz_v3m.mp3';
import crime from '../assets/music/schmonz_ep3_tracys_theme_piano_torben_jan_mueller_16bit_48kHz.mp3';
import doku from '../assets/music/mein_ahnenland_peru_maintheme_titel_torben_jan_mueller.mp3';
import drama from '../assets/music/mein_ahnenland_peru_umweltzerstoerung_torben_jan_mueller.mp3';
import erotic from '../assets/music/02- Carefree.mp3';
import fantasy from '../assets/music/logo_jugendfoerderung_torben_jan_mueller_16bit_48khz_v8_final_master.mp3';
import horror from '../assets/music/13- Searching For Their Friends.mp3';
import lovemovie from '../assets/music/mein_ahnenland_peru_wiedersehen2_torben_jan_mueller.mp3';
import music from '../assets/music/daughterly_trailer_strings.mp3';
import other from '../assets/music/wodka_gorbatschow_plakadiva_torben_jan_mueller_16bit_48khz_v2m.mp3';
import sciencefiction from '../assets/music/block701_crowdfunding_halfbeat_atmo_torben_jan_mueller_16bit_48khz_n.mp3';
import thriller from '../assets/music/raising_death_buchtrailer-torben_jan_mueller_16bit_48khz_v2_master.mp3';
import western from '../assets/music/italowestern_suite_torben_jan_mueller_16bit_48khz_vintage1.mp3';

export const Home = () => (
    
            <div className="flex-container">

                <div>
                    <div className="adventure genreHeight">
                        <div className="genreBackground">
                            <h4>Adventure</h4>
                        </div>
                        <div className="playerBottom">
                            <ReactAudioPlayer
                                src={adventure}
                                controls
                                preload="none"
                            />
                        </div>
                    </div>
                    <p>&copy; <a href="https://pixabay.com/de/users/thommas68-2571842/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2202910" rel="noopener noreferrer" target="_blank">Iván Tamás</a> - <a href="https://pixabay.com/de/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2202910" rel="noopener noreferrer" target="_blank">Pixabay</a></p>
                </div>
                
                <div>
                    <div className="animation genreHeight">
                        <div className="genreBackground">
                            <h4>Animation</h4>
                        </div>
                        <div className="playerBottom">
                            <ReactAudioPlayer
                                src={animation}
                                controls
                                preload="none"
                            />
                        </div>
                    </div>
                    <p>&copy; <a href="https://pixabay.com/de/users/perianjs-2866210/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1885016" rel="noopener noreferrer" target="_blank">Janos Perian</a> - <a href="https://pixabay.com/de/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1885016" rel="noopener noreferrer" target="_blank">Pixabay</a></p>
                </div>

                <div>
                    <div className="action genreHeight">
                        <div className="genreBackground">
                            <h4>Action</h4>
                        </div>
                        <div className="playerBottom">
                            <ReactAudioPlayer
                                src={action}
                                controls
                                preload="none"
                            />
                        </div>
                    </div>
                    <p>&copy; <a href="https://pixabay.com/de/users/ThePixelman-406384/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=469503" rel="noopener noreferrer" target="_blank">ThePixelman</a> - <a href="https://pixabay.com/de/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=469503" rel="noopener noreferrer" target="_blank">Pixabay</a></p>
                </div>

                <div>
                    <div className="doku genreHeight" id="peru">
                        <div className="genreBackground">
                            <h4>Doku</h4>
                        </div>
                        <div className="playerBottom">
                            <ReactAudioPlayer
                                src={doku}
                                controls
                                preload="none"
                            />
                        </div>
                    </div>
                    <p>&copy; <a href="https://pixabay.com/de/users/mailanmaik-4340251/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2774925" rel="noopener noreferrer" target="_blank">mailanmaik</a> - <a href="https://pixabay.com/de/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2774925" rel="noopener noreferrer" target="_blank">Pixabay</a></p>
                </div>
            
                <div>
                    <div className="drama genreHeight">
                        <div className="genreBackground">
                            <h4>Drama</h4>
                        </div>
                        <div className="playerBottom">
                            <ReactAudioPlayer
                                src={drama}
                                controls
                                preload="none"
                            />
                        </div>
                    </div>
                    <p>&copy; <a href="https://pixabay.com/de/users/geralt-9301/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=513525" rel="noopener noreferrer" target="_blank">Gerd Altmann</a> - <a href="https://pixabay.com/de/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=513525" rel="noopener noreferrer" target="_blank">Pixabay</a></p>
                </div>
                
                <div>
                    <div className="erotic genreHeight">
                        <div className="genreBackground">
                            <h4>Erotic</h4>
                        </div>
                        <div className="playerBottom">
                            <ReactAudioPlayer
                                src={erotic}
                                controls
                                preload="none"
                            />
                        </div>
                    </div>
                    <p>&copy; <a href="https://pixabay.com/de/users/geralt-9301/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1137271" rel="noopener noreferrer" target="_blank">Gerd Altmann</a> - <a href="https://pixabay.com/de/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1137271" rel="noopener noreferrer" target="_blank">Pixabay</a></p>
                </div>

                <div>
                    <div className="fantasy genreHeight">
                        <div className="genreBackground">
                            <h4>Fantasy</h4>
                        </div>
                        <div className="playerBottom">
                            <ReactAudioPlayer
                                src={fantasy}
                                controls
                                preload="none"
                            />
                        </div>
                    </div>
                    <p>&copy; <a href="https://pixabay.com/de/users/KELLEPICS-4893063/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=3395135" rel="noopener noreferrer" target="_blank">Stefan Keller</a> - <a href="https://pixabay.com/de/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=3395135" rel="noopener noreferrer" target="_blank">Pixabay</a></p>
                </div>

                <div>
                    <div className="horror genreHeight">
                        <div className="genreBackground">
                            <h4>Horror</h4>
                        </div>
                        <div className="playerBottom">
                            <ReactAudioPlayer
                                src={horror}
                                controls
                                preload="none"
                            />
                        </div>
                    </div>
                    <p>&copy; <a href="https://pixabay.com/de/users/KELLEPICS-4893063/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2847724" rel="noopener noreferrer" target="_blank">Stefan Keller</a> - <a href="https://pixabay.com/de/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2847724" rel="noopener noreferrer" target="_blank">Pixabay</a></p>
                </div>
            
                <div>
                    <div className="comedy genreHeight" id="walter-matthau">
                        <div className="genreBackground">
                            <h4>Comedy</h4>
                        </div>
                        <div className="playerBottom">
                            <ReactAudioPlayer
                                src={comedy}
                                controls
                                preload="none"
                            />
                        </div>
                    </div>
                    <p>&copy; <a href="https://pixabay.com/de/users/skeeze-272447/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=395764" rel="noopener noreferrer" target="_blank">skeeze</a> - <a href="https://pixabay.com/de/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=395764" rel="noopener noreferrer" target="_blank">Pixabay</a></p>
                </div>
                
                <div>
                    <div className="crime genreHeight">
                        <div className="genreBackground">
                            <h4>Crime</h4>
                        </div>
                        <div className="playerBottom">
                            <ReactAudioPlayer
                                src={crime}
                                controls
                                preload="none"
                            />
                        </div>
                    </div>
                    <p>&copy; <a href="https://pixabay.com/de/users/Republica-24347/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=820017" rel="noopener noreferrer" target="_blank">Republica</a> - <a href="https://pixabay.com/de/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=820017" rel="noopener noreferrer" target="_blank">Pixabay</a></p>
                </div>

                <div>
                    <div className="love genreHeight" id="kiss">
                        <div className="genreBackground">
                            <h4>Love movie</h4>
                        </div>
                        <div className="playerBottom">
                            <ReactAudioPlayer
                                src={lovemovie}
                                controls
                                preload="none"
                            />
                        </div>
                    </div>
                    <p>&copy; <a href="https://pixabay.com/de/users/Pexels-2286921/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1853532" rel="noopener noreferrer" target="_blank">Pexels</a> - <a href="https://pixabay.com/de/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1853532" rel="noopener noreferrer" target="_blank">Pixabay</a></p>
                </div>

                <div>
                    <div className="music genreHeight">
                        <div className="genreBackground">
                            <h4>Music</h4>
                        </div>
                        <div className="playerBottom">
                            <ReactAudioPlayer
                                src={music}
                                controls
                                preload="none"
                            />
                        </div>
                    </div>
                    <p>&copy; <a href="https://pixabay.com/de/users/Pexels-2286921/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1838390" rel="noopener noreferrer" target="_blank">Pexels</a> - <a href="https://pixabay.com/de/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1838390" rel="noopener noreferrer" target="_blank">Pixabay</a></p>
                </div>
            
                <div>
                    <div className="science-fiction genreHeight">
                        <div className="genreBackground">
                            <h4>Science-Fiction</h4>
                        </div>
                        <div className="playerBottom">
                            <ReactAudioPlayer
                                src={sciencefiction}
                                controls
                                preload="none"
                            />
                        </div>
                    </div>
                    <p>&copy; <a href="https://pixabay.com/de/users/KELLEPICS-4893063/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2861815" rel="noopener noreferrer" target="_blank">Stefan Keller</a> - <a href="https://pixabay.com/de/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2861815" rel="noopener noreferrer" target="_blank">Pixabay</a></p>
                </div>
                
                <div>
                    <div className="other genreHeight">
                        <div className="genreBackground">
                            <h4>Other</h4>
                        </div>
                        <div className="playerBottom">
                            <ReactAudioPlayer
                                src={other}
                                controls
                                preload="none"
                            />
                        </div>
                    </div>
                    <p>&copy; <a href="https://pixabay.com/de/users/pasevichbogdan-5169192/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2250056" rel="noopener noreferrer" target="_blank">Bogdan Pasevich</a> - <a href="https://pixabay.com/de/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2250056" rel="noopener noreferrer" target="_blank">Pixabay</a></p>
                </div>
                

                <div>
                    <div className="thriller genreHeight">
                        <div className="genreBackground">
                            <h4>Thriller</h4>
                        </div>
                        <div className="playerBottom">
                            <ReactAudioPlayer
                                src={thriller}
                                controls
                                preload="none"
                            />
                        </div>
                    </div>
                    <p>&copy; <a href="https://pixabay.com/de/users/SamWilliamsPhoto-10634669/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=4142636" rel="noopener noreferrer" target="_blank">SamWilliamsPhoto</a> - <a href="https://pixabay.com/de/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=4142636" rel="noopener noreferrer" target="_blank">Pixabay</a></p>
                </div>

                <div>
                    <div className="western genreHeight">
                        <div className="genreBackground">
                            <h4>Western</h4>
                        </div>
                        <div className="playerBottom">
                            <ReactAudioPlayer
                                src={western}
                                controls
                                preload="none"
                            />
                        </div>
                    </div>
                    <p>&copy; <a href="https://pixabay.com/de/users/TomaszProszek-613139/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=557261" rel="noopener noreferrer" target="_blank">Tomasz Proszek</a> - <a href="https://pixabay.com/de/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=557261" rel="noopener noreferrer" target="_blank">Pixabay</a></p>
                </div>
            </div>

)