import React , {Component} from 'react';
import Form from "./component/Form";
import TodoList from "./component/TodoList";
import TopMess from "./component/TopMess";


class App extends Component{
  constructor(props){
    super(props);
    this.state = {items:[],
      text:'',
      count:[]
    }
    this.handeMessageChange = this.handeMessageChange.bind(this);
    this.SubmitMessage = this.SubmitMessage.bind(this);
  }

  handeMessageChange(event){
    this.setState({ text: event.target.value })
  }

  SubmitMessage(event){
    event.preventDefault();
    if (this.state.text.length === 0) {
      return;
    }
    const newItem = {
      text: this.state.text,
      id: Date.now(),
    };

    this.setState(state => ({
      count: state.count.concat(newItem.text),
      items: state.items.concat(newItem),
      text: ''
    }));

    console.log('form submit',this.state.text)
    console.log('this is items',this.state.items)
    console.log('this is count',this.state.count)
  }


  render(){
    return(
        <div className='box'>
          <div className='OneMess'>
            <TopMess vall={this.state.count}/>
          </div>
          <div className='allMes'>
            <TodoList items={this.state.items}/>
          </div>
          <Form
              value={this.state.text}
              handleMessage={this.handeMessageChange}
              Submit={this.SubmitMessage}/>
        </div>
    )
  }
}

export default App;
