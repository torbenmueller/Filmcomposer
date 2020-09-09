import React from 'react';
import './footer.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const Footer = () => {
    return (
        <div className="main-footer">
            <div className="container">
                <div className="flexible-container">
                    <div>
                        <h4>Address</h4>
                        <ul className="list-unstyled">
                            <li>Am Hammershöfchen 23</li>
                            <li>45219 Essen</li>
                            <li>Germany</li>
                        </ul>
                    </div>
                    <div>
                        <h4>Contact</h4>
                        <table>
                            <tbody>
                                <tr>
                                    <td id="icons">
                                        <p><FontAwesomeIcon icon="phone"/></p>
                                        <p><FontAwesomeIcon icon="mobile-alt"/></p>
                                        <p><FontAwesomeIcon icon="at"/></p>
                                    </td>
                                    <td id="links">
                                        <p>02054 - 81399</p>
                                        <p>0151 - 28 47 20 59</p>
                                        <p><a href="mailto:info@torben-jan-mueller.com">info@torben-jan-mueller.com</a></p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div>
                        <h4>Links</h4>
                        <ul className="list-unstyled">
                            <li><a href="https://www.imdb.com/name/nm6470908/" rel="noopener noreferrer" target="_blank">IMDb</a></li>
                            <li><a href="https://soundcloud.com/torben-jan-mueller" rel="noopener noreferrer" target="_blank">SOUNDCLOUD</a></li>
                            <li><a href="https://www.crew-united.com/de/Torben-Jan-Mueller_355793.html#!searchterm=torben%20jan%20m%C3%BCller" rel="noopener noreferrer" target="_blank">crew united</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4>Social Media</h4>
                        <table>
                            <tbody>
                                <tr>
                                    <td id="icons">
                                        <p><FontAwesomeIcon icon={['fab', 'facebook']}/></p>
                                        <p><FontAwesomeIcon icon={['fab', 'twitter']}/></p>
                                        <p><FontAwesomeIcon icon={['fab', 'instagram']}/></p>
                                    </td>
                                    <td id="links">
                                        <p>Facebook</p>
                                        <p>Twitter</p>
                                        <p>Instagram</p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <p className="col-sm">
                        &copy;{new Date().getFullYear()} Torben Jan Müller | All rights reserved
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer;