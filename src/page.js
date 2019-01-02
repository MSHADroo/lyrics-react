import React, { Component } from 'react';

class Page extends Component {
    constructor(props) {
        super(props);
        this.state = {
          home: false
        };
      }

      
  render() {
      // console.log(this.props)
    return (
        <div className="row">
        <div className="col-lg-12 col-sm-12 clearfix">
            <h3>{this.props.page} Page</h3>
            <p>Donec ullamcorper nulla non metus auctor fringilla. Curabitur blandit tempus porttitor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Donec sed odio dui. Nullam id dolor id nibh ultricies vehicula ut id elit. Nullam quis risus eget urna mollis ornare vel eu leo. Etiam porta sem malesuada magna mollis euismod.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Cras mattis consectetur purus sit amet fermentum. Nullam id dolor id nibh ultricies vehicula ut id elit. Curabitur blandit tempus porttitor. Nulla vitae elit libero, a pharetra augue. Maecenas faucibus mollis interdum. Curabitur blandit tempus porttitor. Donec id elit non mi porta gravida at eget metus. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vestibulum id ligula porta felis euismod semper.</p>
            <p>&nbsp;</p>
            <h4>COOL LIST<img className=" alignright" src="https://0.s3.envato.com/files/131404405/01_preview.__large_preview.png" alt="" width="590" height="300"></img></h4>
            <p>Maecenas faucibus mollis interdum. Curabitur blandit tempus porttitor. Donec id elit non mi porta gravida at eget metus. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vestibulum id ligula porta felis euismod semper.</p>
            <p>&nbsp;</p>
            <ul>
                <li><em>Trendy Design</em></li>
                <li><em>Responsive Design</em></li>
                <li><em>Artist List</em></li>
                <li><em>Album Support</em></li>
                <li><em>Advertisement Area</em></li>
                <li><em>Seo Optimization</em></li>
                <li><em>Speed Loading</em></li>
            </ul>
            <p>&nbsp;</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Cras mattis consectetur purus sit amet fermentum. Nullam id dolor id nibh ultricies vehicula ut id elit. Curabitur blandit tempus porttitor. Nulla vitae elit libero, a pharetra augue. Maecenas faucibus mollis interdum. Curabitur blandit tempus porttitor. Donec id elit non mi porta gravida at eget metus. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vestibulum id ligula porta felis euismod semper.</p>
        </div>
        </div>
    );
  }
}

export default Page;




