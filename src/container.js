import React, { Component } from 'react';
import Artists from './artists';
import Page from './page';
import Home from './home';
import { Link } from "react-router-dom";

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
            ],
            alphabet : 'A',
            page : true
        };
      }

      
  render() {
    const pages = ['/', '/about' , '/artist' , '/album' , '/geners' , '/news' , '/contact'];
    let url = this.props.match.url;  
    let content  = '';
    if(pages.includes(url) && url !== '/'){
        let page = this.props.match.params.page;
        content = <Page page={page}></Page>;
    }
    // else if (pages.includes(url) && url === '/'){
    //     content = <Home></Home>;
    // }
    else{
        let alphabet = this.props.match.params.id;
        content = <Artists alphabet={alphabet}></Artists>;
    }
    return (
        <div className="container content-capsule">
        <div className="content-pull">
            <div className="page-container clearfix">
                <div className="container">
                    <div className="second-container padding-in clearfix" style={{minHeight: '179px'}}>
                      {content}
                    </div>
                </div>
            </div>
            <div className="footer clearfix">
                <div className="pull-left footer-logo">
                    <img alt="" src="http://www.2035themes.com/muusico/wp-content/themes/muusico/images/logo-footer.png"></img>
                    <div className="clearfix"></div>
                </div>
                <div className="pull-right footer-menu">
                    <ul id="nav" className="sf-menu">
                    {this.state.menu.map(item => (
                        <li id={"menu-item-" + item.id}  key={item.id} className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home ">
                            <Link to={item.url}> {item.title}</Link>
                        </li>
                    ))}
                        {/* <li id="menu-item-1844" className=" menu-item menu-item-type-post_type menu-item-object-page menu-item-home"><a href="http://www.2035themes.com/muusico/">Home</a></li>
                        <li id="menu-item-1817" className=" menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-1815 current_page_item"><a href="http://www.2035themes.com/muusico/about-2/">About</a></li>
                        <li id="menu-item-1841" className=" menu-item menu-item-type-post_type menu-item-object-page"><a href="http://www.2035themes.com/muusico/artists/">Artists</a></li>
                        <li id="menu-item-1830" className=" menu-item menu-item-type-post_type menu-item-object-page"><a href="http://www.2035themes.com/muusico/albums/">Albums</a></li>
                        <li id="menu-item-2787" className=" menu-item menu-item-type-post_type menu-item-object-page"><a href="http://www.2035themes.com/muusico/genres/">Genres</a></li>
                        <li id="menu-item-1849" className=" menu-item menu-item-type-post_type menu-item-object-page"><a href="http://www.2035themes.com/muusico/blog/">News</a></li>
                        <li id="menu-item-1824" className=" menu-item menu-item-type-post_type menu-item-object-page"><a href="http://www.2035themes.com/muusico/contact/">Contact</a></li> */}
                    </ul>
                </div>
            </div>
        </div>
    </div>
    );
  }
}

export default Container;

