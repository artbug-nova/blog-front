import {React} from 'react'
import { connect } from 'react-redux';

const Like = (props) =>{
    let {likeName} = props;
    return(<div>
        {likeName}
    </div>)
} 

export default connect(state => state.like)(Like);