export const debounce = (fn: (...params: any[]) => any, timeout: number) => {
    let timer: NodeJS.Timeout
    return function (this: any, ...args: any[]) {
        if (timer === undefined) {
            fn.apply(this, args)
        }
        clearTimeout(timer)
        timer = setTimeout(() => fn.apply(this, args), timeout)
        return timer
    }
}