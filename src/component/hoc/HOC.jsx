import { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
// const { bindActionCreators } = require("redux");
// const container = (WrappedComponent, actions) =>{
//     const HOC = (...props) =>{
//         <WrappedComponent {...props} />
//     }
    
//     const mapStateToProps = (state) => ({ state })
    
//     const mapDispatchToProps = (dispatch) => (bindActionCreators(actions, dispatch))
    
//     return connect(mapStateToProps, mapDispatchToProps)(HOC)
// }

// export default container;


const Container = (Comp, actions) => {
    const Wrapper = (props) => (
      class extends Component {
        render () {
          return <Comp {...this.props} />
        }
      }
    )
    const mapStateToProps = (state) => ({ state })
    const mapDispatchToProps = (dispatch) => (bindActionCreators(actions, dispatch))

    return connect(mapStateToProps, mapDispatchToProps)(Wrapper());
  }
    
export default Container;