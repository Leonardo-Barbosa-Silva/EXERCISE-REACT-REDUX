import './Intervalo.css';

import Card from './Card';

import { connect } from 'react-redux'

import { actionChangeMin, actionChangeMax } from '../store/actions/changeNumber';



function Intervalo({ min, max, changeMin, changeMax }) {

    return (
        <Card title="Range Number" range>
            <div className="Intervalo">
                <span>
                    <strong>Mín</strong>
                    <input type="number" value={min} onChange={changeMin} />
                </span>
                <span>
                    <strong>Máx</strong>
                    <input type="number" value={max} onChange={changeMax} />
                </span>
            </div>
        </Card>
    )
}



function mapStateToProps(state) {

    return {
        ...state.numbers
    }
}

function mapDispatchToProps(dispatch) {

    return {
        changeMin(event) {
            const newNumber = event.target.value
            const action = actionChangeMin(newNumber)
            dispatch(action)
        },

        changeMax(event) {
            const newNumber = event.target.value
            const action = actionChangeMax(newNumber)
            dispatch(action)
        },
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Intervalo);