import React, { Component } from 'react';

class Container extends Component {
    constructor(props) {
        super(props);
        this.state = {
          home: false,
          menu: [
              {id: 1, title: 'Home', url: '/' },
              {id: 2, title: 'About', url: '/about' },
              {id: 3, title: 'Artist', url: '/artist' },
              {id: 4, title: 'Album', url: '/album' },
              {id: 5, title: 'Geners', url: '/geners' },
              {id: 6, title: 'News', url: '/news' },
              {id: 7, title: 'Contact', url: '/contact' },
        
        ]
        };
      }

      
  render() {
    const home = this.state.home;
    return (
        <div class="container content-capsule">
        <div class="content-pull">
            <div class="page-container clearfix">
                <div class="container">
                    <div class="second-container padding-in clearfix" style={{minHeight: '179px'}}>
                        <div class="row">
                            <div class="col-lg-12 col-sm-12 clearfix">
                                <h3>LYRICS THEME</h3>
                                <p>Donec ullamcorper nulla non metus auctor fringilla. Curabitur blandit tempus porttitor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Donec sed odio dui. Nullam id dolor id nibh ultricies vehicula ut id elit. Nullam quis risus eget urna mollis ornare vel eu leo. Etiam porta sem malesuada magna mollis euismod.</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Cras mattis consectetur purus sit amet fermentum. Nullam id dolor id nibh ultricies vehicula ut id elit. Curabitur blandit tempus porttitor. Nulla vitae elit libero, a pharetra augue. Maecenas faucibus mollis interdum. Curabitur blandit tempus porttitor. Donec id elit non mi porta gravida at eget metus. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vestibulum id ligula porta felis euismod semper.</p>
                                <p>&nbsp;</p>
                                <h4>COOL LIST<img class=" alignright" src="https://0.s3.envato.com/files/131404405/01_preview.__large_preview.png" alt="" width="590" height="300"></img></h4>
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
                    </div>
                </div>
            </div>
            <div class="footer clearfix">
                <div class="pull-left footer-logo">
                    <img alt="" src="http://www.2035themes.com/muusico/wp-content/themes/muusico/images/logo-footer.png"></img>
                    <div class="clearfix"></div>
                </div>
                <div class="pull-right footer-menu">
                    <ul id="nav" class="sf-menu">
                    {this.state.menu.map(item => (
            <li id="menu-item-{item.id}" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home ">
             
              <a href={item.url}> {item.title}</a>
            </li>
          ))}
                        {/* <li id="menu-item-1844" class=" menu-item menu-item-type-post_type menu-item-object-page menu-item-home"><a href="http://www.2035themes.com/muusico/">Home</a></li>
                        <li id="menu-item-1817" class=" menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-1815 current_page_item"><a href="http://www.2035themes.com/muusico/about-2/">About</a></li>
                        <li id="menu-item-1841" class=" menu-item menu-item-type-post_type menu-item-object-page"><a href="http://www.2035themes.com/muusico/artists/">Artists</a></li>
                        <li id="menu-item-1830" class=" menu-item menu-item-type-post_type menu-item-object-page"><a href="http://www.2035themes.com/muusico/albums/">Albums</a></li>
                        <li id="menu-item-2787" class=" menu-item menu-item-type-post_type menu-item-object-page"><a href="http://www.2035themes.com/muusico/genres/">Genres</a></li>
                        <li id="menu-item-1849" class=" menu-item menu-item-type-post_type menu-item-object-page"><a href="http://www.2035themes.com/muusico/blog/">News</a></li>
                        <li id="menu-item-1824" class=" menu-item menu-item-type-post_type menu-item-object-page"><a href="http://www.2035themes.com/muusico/contact/">Contact</a></li> */}
                    </ul>
                </div>
            </div>
        </div>
    </div>
    );
  }
}

export default Container;

