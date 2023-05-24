import React, {Component} from 'react';

class ManagerMessage extends Component {
    render() {
        return (
            <div>
                <div className='flex justify-end   rounded'>
                    <p className="bg-black text-white rounded px-4 py-2">Lorem ipsum!</p>

                </div>
                <p className='flex text-sm opacity-60 justify-end'>${Date.now()}</p>
                <p className='flex text-xs opacity-60 justify-end '></p>

            </div>
        );
    }
}

export default ManagerMessage;