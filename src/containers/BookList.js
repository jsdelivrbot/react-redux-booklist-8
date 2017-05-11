import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { selectBook } from '../actions/index';

class BookList extends React.Component {
  renderList = () => {
    return this.props.books.map(book => {
      return (
        <li
          key={book.title}
          onClick={() => this.props.selectBook(book)}
          className="list-group-item"
          >
          {book.title}
        </li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

function mapStateToProps(state) {
  return {
    books: state.books
  };
}

// Function returns as props for BookList container
function mapDispatchToProps(dispatch) {
  // Whenever selectBook is called, the result is passed to all reducers via dispatch
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}

// Promotes BookList to a 'container' and needs to know about dispatch methods.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
