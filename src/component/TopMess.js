import React,{Component} from "react";

class TopMess extends Component {
    constructor(props){
        super(props);
        this.state={
            i:0
        }
    }

    tick() {
        console.log('i:', this.state.i)
        console.log('length=',this.props.vall)
        if(this.props.vall.length === 0){
            console.log('good')
            return
        }
        else if(this.state.i >  this.props.vall.length){
            console.log('1 if i=0')
            this.setState(state => ({
                i:0
            }));
        }
        else if(this.state.i == (this.props.vall.length)-1){
            console.log('2 if  i=0')
            this.setState(state => ({
                i: 0
            }));}
        else if(this.state.i <= this.props.vall.length){
            console.log('3 if i++1')
            this.setState(state => ({
                i: state.i + 1
            }));
        }
    }
    componentDidMount(){
this.interval = setInterval(() => this.tick(), 3000);
        console.log('good')
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render(){
        return (

            <div className='soob'>{this.props.vall[this.state.i]}</div>

        )
    }
}

export default TopMess;
