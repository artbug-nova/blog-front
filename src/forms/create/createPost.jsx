import {React} from 'react'
import * as action from '../../actions/likeAction';
import Container from '../../component/hoc/HOC';

const Home = (props) => {
  const Post = props.state.post;
  
  let array = Post.map((item, i) =>{
      return(<div key={i}>
        <h1>{item.Name}</h1>
        <h1>{item.Age}</h1>
    
      </div>)
    })
    return(<div>
     {array}
     <button onClick={() => props.addPost(1)}>Add</button> 
    </div>);
}

export default Container(Home, {addPost: action.addPost});