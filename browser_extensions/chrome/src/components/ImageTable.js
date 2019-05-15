import React from 'react';
import { Table, Button } from 'reactstrap';

export default class ImageTable extends React.Component {

  constructor(props) {
    super()
  }

  nullRows() {
    return (<td> There is nothing to show here </td>);
  }

  shortenString(str, len) {
    return (str.length < len) ? str : str.substr(0, len-1) + "...";
  }

  /*
   * Generate the rows of the table given a list of images
   */
  generateRows(images) {
    if (images == null || images.length < 1) {
      return this.nullRows();
    }

    var rows = []
    for(var i = 0; i < images.length; i++) {
      rows.push(
        <tr> 
          <td>
             <img width="50px" src={images[i]} alt="Image" />
          </td>
          <td>
            <Button color="link" href={images[i]}>
              {this.shortenString(images[i],30)} 
            </Button>
          </td> 
        </tr>);
    }
    return rows;
  }

  render() {
    return (
      <Table hover>
        <tbody>
          {this.generateRows(this.props.images)}
        </tbody>
      </Table>
    );
  }
}
