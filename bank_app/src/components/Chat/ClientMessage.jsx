
import React, {Component} from 'react';

class ClientMessage extends Component {
    render() {
        return (
            <div>
                <div className='flex'>
                    <p className="bg-blue-gradient rounded px-4 py-2">Lorem ipsum?</p>
                </div>
                <p className='flex text-sm opacity-60 justify-start'></p>
                <p className='flex text-xs opacity-60 justify-start '></p>
            </div>
        );
    }
}

export default ClientMessage;