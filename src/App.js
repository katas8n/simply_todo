import './App.css';

import Users from './components/Users/Users';
import Form from './components/Form/Form';
import Error from './components/Error/Error';

import { useState } from 'react';

function App() {
    const [users, setUsers] = useState([
        {
            name: 'Mark',
            age: 23
        }
    ]);
    const [error, setError] = useState(false);

    const addNewUserHandler = user => {
        if (user.name.length <= 2) {
            setError(prev => !prev);
        } else {
            setUsers(prev => [user, ...prev]);
        }
    };
    const closeModalHandler = click => {
        if (click) setError(false);
    };

    return (
        <div className="app">
            {error ? (
                <Error
                    closeModalHandler={closeModalHandler}
                    title="Empty value"
                    message="Property should't be an empty"
                />
            ) : null}

            <Form addNewUserHandler={addNewUserHandler} />
            <Users users={users} />
        </div>
    );
}

export default App;
