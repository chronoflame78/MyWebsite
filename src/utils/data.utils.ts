export const getData = async <T>(url: string): Promise<T> => {
    const response = await fetch(url);
    return await response.json();
}


/*
    type Monster = {
        id: string,
        name: string,
        email: string
    }

    useEffect(() => {
        const fetchUsers = async() => {
            const users = await getData<Monster[]>("https://jsonplaceholder.typicode.com/users")
            //const users = await getData<<Array<Monster>>("https://jsonplaceholder.typicode.com/users")
        }
    }, [])

*/