export function fetchAutomatico(url, options = {}) {
    const token = localStorage.getItem("jwt");
    
    return fetch(url, {
        ...options,
        headers: {
            ...options.headers,
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json"
        }
    })
}
