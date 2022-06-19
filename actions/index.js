export const AT_INC = "inc"
export const AT_DEC = "dec"
export const AT_DEL = "del"
export const AT_ADD = "add"

export function increment(id = 0) {
    return (
        {
            type: AT_INC,
            id: id
        }
    )
}

export function decrement(id = 0) {
    return (
        {
            type: AT_DEC,
            id: id
        }
    )
}

export function reset(id = 0) {
    return (
        {
            type: AT_DEL,
            id: id
        }
    )
}

export function addProduct(text) {
    return (
        {
            type: AT_ADD,
            text: text
        }
    )
}
