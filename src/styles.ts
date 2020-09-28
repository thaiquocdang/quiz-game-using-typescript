export const setColor = {
    primaryColor: "#b8a284",
    mainWhite: "#fff",
    mainBlack: "#222",
    mainGrey: "ececec",
    lightGrey: "#f7f7f7"
}

export const setFont = {      
    main: "font-family: 'Lato', sans-serif; ",
    slanted: "font-family: 'Caveat', cursive;",
}

export const setFlex = ({x='center', y='center', direction='row'} = {}) => {
    return `display: flex; flex-direction: ${direction}; align-items:${y}; justify-content: ${x}`
}