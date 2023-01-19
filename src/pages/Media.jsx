import Card from '../components/Card';

import { connect } from 'react-redux';



function Media({ max, min }) {

    return (
        <Card title="Average" purple>
            <div>
                <span>
                    <strong>{(max + min) / 2}</strong>
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



export default connect(mapStateToProps)(Media);