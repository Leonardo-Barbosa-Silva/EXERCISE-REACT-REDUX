import { connect } from 'react-redux';
import Card from '../components/Card';


function Sorteio({ min, max }) {

    return (
        <Card title="Random" pink>
            <div>
                <span>
                    <strong>{parseInt(Math.random() * (max - min) + min) }</strong>
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


export default connect(mapStateToProps)(Sorteio);