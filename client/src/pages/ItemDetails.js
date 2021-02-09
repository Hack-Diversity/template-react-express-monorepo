import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { fetchSingleItem } from '../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


class ItemDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
        _id: '',
        isbn: '',
        title: '',
        author: '',
        publication_year: 0,
        publisher:'',
        image_url_s: '',
        image_url_m: '',
        image_url_l: '',
        copies: 0,
        available: 0,
    };
  }

  componentDidMount() {
    console.log("Print id: " + this.props.match.params.id);
    console.log("ItemsList: props");
    console.log("props", this.props);
    this.props.fetchSingleItem(this.props.itemId)
            .then(resp => {
                const { item } = resp.data;
                this.setState({ ...item });
            })
      .catch(err => {
        console.log("Error from BookDetails");
      });
  };




  render() {

    const book = this.state;
    let BookItem = <div>
      <table className="table table-hover table-dark">
        
        <tbody>
          <tr>
            <td>ISBN</td>
            <td>{ book.isbn }</td>
          </tr>
          <tr>
            <td>Title</td>
            <td>{ book.title }</td>
          </tr>
          <tr>
            <td>Author</td>
            <td>{ book.author }</td>
          </tr>
          <tr>
            <td>Publisher</td>
            <td>{ book.publisher }</td>
          </tr>
          <tr>
            <td>Publication Year</td>
            <td>{ book.publication_year }</td>
          </tr>
          <tr>
            <td>Copies</td>
            <td>{ book.copies }</td>
          </tr>
          <tr>
            <td>Available</td>
            <td>{ book.available }</td>
          </tr>
        </tbody>
      </table>
    </div>

    return (
      <div className="ShowBookDetails">
        <div className="container">
          <div className="row">
            <div className="col-md-10 m-auto">
              <br /> <br />
              <Link to="/items" className="btn btn-outline-warning float-left">
                  Show all books
              </Link>
            </div>
            <br />
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Book's Record</h1>
    
              <hr /> <br />
            </div>
          </div>
          <div>
            { BookItem }
          </div>

        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
    return {
        ...state,
        itemId: ownProps.match.params.id,
    };
};

const mapDispatchToProps = dispatch => bindActionCreators({ fetchSingleItem }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ItemDetails);