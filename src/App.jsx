import React, { Component } from 'react';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className='myInfo'>
                <img className='photo' src='/myphoto.png' alt='photo' />
                <table>
                    <tr>
                        <td><label>Name</label></td>
                        <td><label>M. Sai Sandeep</label></td>
                    </tr>
                    <tr>
                        <td><label>Program</label></td>
                        <td><label>B.Tech. - CSE</label></td>
                    </tr>
                    <tr>
                        <td><label>Mobile No.</label></td>
                        <td><label>1234567890</label></td>
                    </tr>
                    <tr>
                        <td><label>Email ID</label></td>
                        <td><label>2400030537@kluniversity.in</label></td>
                    </tr>
                </table>
            </div>
        );
    }
}

export default App;