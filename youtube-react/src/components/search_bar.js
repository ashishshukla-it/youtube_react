import React from 'react';

// This is function based component
// const SearchBar = () => {
//     return <input />;
// }

// This is class based component. It is used when your component needs some intelligence like interacting with other components.
class SearchBar extends React.Component {
    // STATE: Only class based components have state. When state of a component changes, that component as well its child components re-renders.
    constructor(props) {
        super(props);
        this.state = { term: '' };
        // this.onInputChange = this.onInputChange.bind(this);
    }

    render() {
        // return (
        //     <div>
        //         <input onChange={this.onInputChange} />
        //         Value of input is:{this.state.term}
        //     </div>
        // );

        return (
            <div className="search-bar">
                <input 
                value={this.state.term}
                onChange={event => { this.onInputChange(event.target.value) }} />
            </div>
        )

    }

    onInputChange(term){
        this.setState({term});
        this.props.onSearchTermChange({term});
    }

    // onInputChange(event) {
    //     { this.setState({ term: event.target.value }) };
    // }
}

export default SearchBar;

