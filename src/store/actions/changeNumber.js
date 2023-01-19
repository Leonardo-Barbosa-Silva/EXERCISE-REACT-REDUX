export function actionChangeMin(newNumber) {

    return {
        type: 'CHANGE_MIN',
        payload: newNumber
    }
}

export function actionChangeMax(newNumber) {

    return {
        type: 'CHANGE_MAX',
        payload: newNumber
    }
}