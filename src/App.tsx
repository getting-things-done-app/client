import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_SERVER_URL } from "./constants/globals";

export function App() {
    const [title, setTitle] = useState("App");
    useEffect(() => {
        axios.get<string>(`${BASE_SERVER_URL}/test`).then((r) => setTitle(r.data));
    }, []);
    return <div>{title}</div>;
}
