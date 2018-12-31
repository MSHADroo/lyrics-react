import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Header extends Component {
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
          alphabet: [
            {id: 1, title: '#', url: '/alphabet/num' },
            {id: 2, title: 'A', url: '/alphabet/A' },
            {id: 3, title: 'B', url: '/alphabet/B' },
            {id: 4, title: 'C', url: '/alphabet/C' },
            {id: 5, title: 'D', url: '/alphabet/D' },
            {id: 6, title: 'E', url: '/alphabet/E' },
            {id: 7, title: 'F', url: '/alphabet/F' },
            {id: 8, title: 'G', url: '/alphabet/G' },
            {id: 9, title: 'H', url: '/alphabet/H' },
            {id: 10, title: 'I', url: '/alphabet/I' },
            {id: 11, title: 'J', url: '/alphabet/J' },
            {id: 12, title: 'K', url: '/alphabet/K' },
            {id: 13, title: 'L', url: '/alphabet/L' },
            {id: 14, title: 'M', url: '/alphabet/M' },
            {id: 15, title: 'N', url: '/alphabet/N' },
            {id: 16, title: 'O', url: '/alphabet/O' },
            {id: 17, title: 'P', url: '/alphabet/P' },
            {id: 18, title: 'Q', url: '/alphabet/Q' },
            {id: 19, title: 'R', url: '/alphabet/R' },
            {id: 20, title: 'S', url: '/alphabet/S' },
            {id: 21, title: 'T', url: '/alphabet/T' },
            {id: 22, title: 'U', url: '/alphabet/U' },
            {id: 23, title: 'V', url: '/alphabet/V' },
            {id: 24, title: 'W', url: '/alphabet/W' },
            {id: 26, title: 'X', url: '/alphabet/X' },
            {id: 27, title: 'Y', url: '/alphabet/Y' },
            {id: 28, title: 'Z', url: '/alphabet/Z' }
          ]
        };
      };

  render() {
    return (
        <div className="lyric-home" style={{background: 'url(http://www.2035themes.com/muusico/wp-content/uploads/2015/01/homepage-min.jpg) center center', backgroundSize:'cover'}}>
        <div className="blog-back">
        <div className="container">
            <div className="row">
                <div className="nav-top menu-container">
                    <div className="main-header clearfix">
                        <div className="logo pull-left">
                            <div className="limg">
                                <a href="http://www.2035themes.com/muusico/"><img alt="logo" className="img-responsive" src="http://www.2035themes.com/muusico/wp-content/themes/muusico/images/logo.png"></img>
                                </a>
                            </div>
                        </div>
                        <div className="pull-right">
                            <div className="pull-left">
                                <div id="navigation-menu" className="menu">
                                    <nav id="menu">
                                    <ul id="nav" className="sf-menu navigate">
                                        {this.state.menu.map(item => (
                                            <li id={"menu-item-" + item.id}  key={item.id} className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home ">
                                                <Link to={item.url}> {item.title}</Link>
                                            </li>
                                        ))}
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <div className="pull-left header-search">
                                <a id="search-button" href="void:function(0)"><i className="fa fa-search open-search"></i></a>
                                <div id="mini-search-wrapper">
                                    <form role="search" action="http://www.2035themes.com/muusico/" method="get">
                                        <input type="search" id="s" name="s" className="s-input" required=""></input>
                                        <input type="submit" className="s-submit" value="Search"></input>
                                        <div className="searchminicats">
                                            <ul>
                                                <li>
                                                    <input type="radio" name="post_type" value="lyrics" defaultChecked></input>Lyrics</li>
                                                <li>
                                                    <input type="radio" name="post_type" value="album"></input>Albums</li>
                                                <li>
                                                    <input type="radio" name="post_type" value="artist"></input>Artists</li>
                                            </ul>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="pull-right social-icons">
                                <ul>
                                    <li><a href="http://twitter.com/2035themes"><i className="fa fa-twitter"></i></a></li>
                                    <li><a href="https://soundcloud.com/2035themes"><i className="fa fa-soundcloud"></i></a></li>
                                    <li><a href="http://spotify.com/2035themes"><i className="fa fa-spotify"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="social-media pull-right">
                            <div id="mobile-header">
                                <div id="responsive-menu-button">
                                    <span className="top"></span><span className="middle"></span><span className="middlecopy"></span><span className="bottom"></span></div>
                            </div>
                        </div>
                    </div>
                    <div className="pre-header clearfix">
                        <div className="lyric-alphabet  pull-left">
                            <ul>
                                {this.state.alphabet.map(item => (
                                    <li key={item.id}>
                                        <Link to={item.url}> {item.title}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="submit-lyric pos-center pull-right">
                            <a href="http://www.2035themes.com/muusico/submit-lyrics/"><i className="fa fa-plus"></i> Submit Lyric</a></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <div className="container">
        <div className="lyrics-title marginb20">
            <div className="pull-left">
                <h1>About</h1></div>
        </div>
    </div>
    
    </div>
    );
  }
}

export default Header;

