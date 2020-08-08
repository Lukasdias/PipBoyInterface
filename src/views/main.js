import React from 'react'
import './styles.scss'
import VaultBoy from './../assets/vaultboy.gif'

export default function main() {
    return (
        <div id='pipboy'>
            <div id='container'>
                <header>
                    <div>
                        <h2 className='selected-node'>STAT</h2>
                        <h2>INV</h2>
                        <h2>DATA</h2>
                        <h2>MAP</h2>
                        <div className='subnodes'>
                            <h3>STATUS</h3>
                            <h3>SPECIAL</h3>
                            <h3>PERKS</h3>
                        </div>
                    </div>
                </header>
                <main>
                    <div className='status-bar top' />
                    <div className='status-bar left1' />
                    <div className='status-bar left2' />
                    <div className='status-bar right1' />
                    <div className='status-bar right2' />
                    <div className='status-bar bottom' />
                    <img src={VaultBoy} alt='vault-boy' />
                </main>
                <footer>
                    <div className='hp-bar'>
                        <h2>HP 100/100</h2>
                    </div>
                    <div className='lvl-bar'>
                        <h2>Level 1</h2>
                        <div className='bar'>
                            <div className='fill-bar' />
                        </div>
                    </div>
                    <div className='ap-bar'>
                        <h2>AP 50/50</h2>
                    </div>
                </footer>
            </div>
        </div>
    )
}
