import React, { useState } from 'react'

const Progress = () => {

    const [count, setCount] = useState(0);

    return (
        <div className='container'>
            <div className="btn-group" role="group" aria-label="Basic example">
                <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => setCount(count + 10)}>
                    +
                </button>
                <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => setCount(count - 10)}>
                    -
                </button>
            </div>
            <div className="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                <div className="progress-bar progress-bar-striped progress-bar-animated bg-warning" style={{ width: count + '%' }}>{count + '%'}</div>
            </div>
        </div>
    )
}

export default Progress