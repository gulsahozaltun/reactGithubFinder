import React, { Component } from 'react'

class Search extends Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
        this.state = {
            keyword: ''
        }
    }
    onChange(e) {
        this.setState({
            keyword: e.target.value
        })

    }


    onSubmit(e) {
        e.preventDefault();
        if(this.state.keyword===''){
            this.props.setAlert('Lutfen bir anahtar kelime giriniz','danger');
        }
        else{
           this.props.searchUsers(this.state.keyword);
        this.setState({ keyword: '' });
        }

    }



    render() {

        return (

            <div className="container my-5">
                <form onSubmit={this.onSubmit}>

                    <div className="input-group">
                        <input type="text" value={this.state.keyword} onChange={this.onChange} className="form-control" />
                        <div className="input-group-append">
                            <button type="submit" className="btn btn-warning text-light">Search</button>
                        </div>
                    </div>
                </form>
                {this.props.showClearButton && <button onClick={this.props.clearUsers} className="btn btn-danger btn-sm btn-block mt-3">Clear Results</button>}
                
            </div>
        )
    }
}

export default Search
