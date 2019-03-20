import React, {
    Component
} from 'react'

export default class AddTodo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todo: "",
            todoError: false
        };
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onTodo(e) {
        e.preventDefault();
        console.log({ todo: this.state.todo });
        // this.service
        //   .isAuthenticate(user)
        //   .then(res => res.json())
        //   .then(resp => {
        //     if (resp.status === 401) {
        //       this.setState({ loginStatus: true });
        //     } 
        //     else {
        //       localStorage.setItem("token", resp.token);
        //       history.push("/admin-dashboard");
        //     }
        //   })
        //   .catch(err => console.log(err));
    }

    render() {
        return (
            <div className="container bg-light login login">
            <div className=" row  justify-content-center align-items-center">
              <div className="col-md-12">
                <h1 className="text-center">Todo Page</h1>
                <hr />
                { this.state.todoError && (
                  <span className="alert alert-danger col-md-12 row align-items-center" role="alert">
                    Todo already exist
                  </span>
                )}
                <form>
                  <div className="input-group col-md-12">
                    <input
                      type="text"
                      className="form-control"
                      id="todo"
                      name="todo"
                      value={this.state.todo}
                      onChange={this.onChange.bind(this)}
                      placeholder="Todo"
                      autoComplete="off"
                    />
                    <span className="input-group-btn todo-button">
                    <button
                        type="button"
                        className="btn btn-success"
                        onClick={this.onTodo.bind(this)}>
                        + Add
                    </button>
                    </span>
                  </div>
                </form>
            </div>
            </div>
          </div>
        )
    }
}