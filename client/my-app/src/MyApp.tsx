import { useState, useEffect } from "react";

function MyApp() {
    const [data, setData] = useState<string[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:8080/users')
            .then(res => res.json())
            .then(data => {
                const names: string[] = data['users'].map(x => x['name']);
                setData(names);
                setLoading(false);
            });
    }, []);

    return (
        <div>
            { loading ? 'Loading...' : <ul>{data.map(e => <li>{e}</li>)}</ul> }
        </div>
    );
}

export default MyApp;