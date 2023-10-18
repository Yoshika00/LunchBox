import React from "react"

class UserClass extends React.Component {
    constructor(props){
        super(props)
      this.state = {
        count:0
      }
      console.log(this.props.name + "child constructor called");
    };

    componentDidMount() {
        console.log(this.props.name + "child componentDidMount called");
    }

    render() {
        const {name, location} = this.props;
        const {count} = this.state;
        console.log(this.props.name + "child render called");

        return (
            <div className="userClass">
                <h1>Classbase Component</h1>
                <h2>Name : {name}</h2>
                <h3>Loaction : {location}</h3>
                <h4>COUNT : {count}</h4>
                <button onClick={
                    () => {
                        this.setState({
                            count: this.state.count + 1
                        })
                    }
                }>Click here to increase count</button>
            </div>
        )
    }

};

export default UserClass;

