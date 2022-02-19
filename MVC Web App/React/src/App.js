import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
    const [persons, setPersons] = useState([]);
    const APIUrl = '/API/GetData';

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        const res = await axios(
            APIUrl
        );
        setPersons(res.data);
    }

    return (
        <>
            <h1>People that we know</h1>
            {persons && persons.length > 0 &&
                <table style={{ borderCollapse: "collapse" }}>
                    <thead>
                        <tr>
                            <th style={{ border: "solid 1px black" }}>Name</th>
                            <th style={{ border: "solid 1px black" }}>Favourite Colour</th>
                        </tr>
                    </thead>
                    <tbody>
                        {persons.map(p => {
                            return <tr key={p.Name}>
                                <td style={{ border: "solid 1px black" }}>{p.Name}</td>
                                <td style={{ border: "solid 1px black" }}>{p.FavouriteColour}</td>
                            </tr>
                        })
                        }
                    </tbody>
                </table>
            }
        </>
    );
}

export default App;