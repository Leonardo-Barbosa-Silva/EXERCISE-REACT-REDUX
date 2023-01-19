import Card from '../components/Card';

import { connect } from 'react-redux';



function Soma({ max, min }) {

    return (
        <Card title="Sum" green>
            <div>
                <span>
                    <strong>{max + min}</strong>
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



export default connect(mapStateToProps)(Soma);