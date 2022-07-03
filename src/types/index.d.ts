declare module '*.jpg' {
    const value: any
    export = value
}

declare module '*.jpeg' {
    const value: any
    export = value
}

declare module '*.svg' {
    const content: any
    export default content
}

declare module '*.mp4' {
    const src: string
    export default src
}

declare module '*.webm' {
    const src: string
    export default src
}
