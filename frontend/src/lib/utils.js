export function formatDate(Date){
    return Date.toLocaleDateString("en-US", {
        month:"short",
        day: "numeric",
        year: "numeric"
    })
}