export const AT_INC = "inc"
export const AT_DEC = "dec"
export const AT_RES = "res"
export const AT_DEL = "del"
export function increment() {
    console.log(AT_INC);
    return(
        {
            type:AT_INC
        }
    )
}
export function decrement() {
    return(
        {
            type:AT_DEC
        }
    )
}
export function reset() {
    return(
        {
            type:AT_RES
        }
    )
}