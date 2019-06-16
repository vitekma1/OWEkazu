import React from 'react';
import PropTypes from 'prop-types';


        const AppName = ({ email, username, name }) => {
            return (

                <div className="sidenav">
                    <div className="sidenav-cont">
                        <p className={'logo'}></p>
                        <a href="/">Home</a>
                        <a href="/services">Services</a>
                        <a href="/clients">Clients</a>
                        {
                            username ? (
                                <a href="#" className={'login-btn'}>Prihlasen jako <strong>{username}</strong></a>
                            ) : (
                                <a href="/login" className={'login-btn'}>Prihlasit se</a>
                            )
                        }
                    </div>
                    <p className={'creators'}>Vytvořil: Schneider, Vítek, Cellar a Milenković</p>
                </div>

            )
        }

// hovno na políčku



AppName.propTypes = {
    name: PropTypes.string,
};

export default AppName;
