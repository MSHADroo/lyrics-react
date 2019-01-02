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
    <div className="height-capsule" style={{'min-height': '363px'}}>
        <div className="popular-lyrics-container clearfix">
            <div className="container">
                <div className="popular-lyrics clearfix">
                    <div className="title">
                        <h3><i className="fa fa-star"></i>POPULAR LYRICS</h3></div>
                    <div className="full-screen-list clearfix margint10">
                        <ul id="popular-list" className="owl-carousel owl-theme owl-loaded">
                            <div className="owl-stage-outer">
                                <div className="owl-stage" style="transform: translate3d(0px, 0px, 0px); transition: all 0s ease 0s; width: 2220px;">
                                    <div className="owl-item active" style="width: 212px; margin-right: 10px;">
                                        <li style="background:url('http://www.2035themes.com/muusico/wp-content/uploads/2015/02/image-18-big-min-412x548.jpg') no-repeat;">
                                            <a href="http://www.2035themes.com/muusico/lyrics/smooth-criminal-3/">
                                                <div className="item1"></div>
                                            </a>
                                            <div className="item-text">
                                                <a href="http://www.2035themes.com/muusico/lyrics/smooth-criminal-3/"></a>
                                                <h3><a href="http://www.2035themes.com/muusico/lyrics/smooth-criminal-3/"></a><a href="http://www.2035themes.com/muusico/artist/michael-jackson-3/">Michael Jackson</a></h3><a href="http://www.2035themes.com/muusico/lyrics/smooth-criminal-3/">Smooth Criminal</a></div>
                                        </li>
                                    </div>
                                    <div className="owl-item active" style="width: 212px; margin-right: 10px;">
                                        <li>
                                            <a href="http://www.2035themes.com/muusico/lyrics/bailando/">
                                                <div className="item2"></div>
                                            </a>
                                            <div className="item-text">
                                                <a href="http://www.2035themes.com/muusico/lyrics/bailando/"></a>
                                                <h3><a href="http://www.2035themes.com/muusico/lyrics/bailando/"></a><a href="http://www.2035themes.com/muusico/artist/sia/">Sia</a></h3><a href="http://www.2035themes.com/muusico/lyrics/bailando/">Bailando</a></div>
                                        </li>
                                    </div>
                                    <div className="owl-item active" style="width: 212px; margin-right: 10px;">
                                        <li style="background:url('http://www.2035themes.com/muusico/wp-content/uploads/2015/02/image-1-small-min.jpg') no-repeat;">
                                            <a href="http://www.2035themes.com/muusico/lyrics/all-day/">
                                                <div className="item3"></div>
                                            </a>
                                            <div className="item-text">
                                                <a href="http://www.2035themes.com/muusico/lyrics/all-day/"></a>
                                                <h3><a href="http://www.2035themes.com/muusico/lyrics/all-day/"></a><a href="http://www.2035themes.com/muusico/artist/jessie-j/">Jessie J</a>ft. <a href="http://www.2035themes.com/muusico/artist/rihanna/">Rihanna</a></h3><a href="http://www.2035themes.com/muusico/lyrics/all-day/">All Day</a></div>
                                        </li>
                                    </div>
                                    <div className="owl-item active" style="width: 212px; margin-right: 10px;">
                                        <li style="background:url('http://www.2035themes.com/muusico/wp-content/uploads/2015/02/image-19-small-min.jpg') no-repeat;">
                                            <a href="http://www.2035themes.com/muusico/lyrics/fix-you/">
                                                <div className="item4"></div>
                                            </a>
                                            <div className="item-text">
                                                <a href="http://www.2035themes.com/muusico/lyrics/fix-you/"></a>
                                                <h3><a href="http://www.2035themes.com/muusico/lyrics/fix-you/"></a><a href="http://www.2035themes.com/muusico/artist/christina-aguilera/">Christina Aguilera</a></h3><a href="http://www.2035themes.com/muusico/lyrics/fix-you/">Fix You</a></div>
                                        </li>
                                    </div>
                                    <div className="owl-item active" style="width: 212px; margin-right: 10px;">
                                        <li>
                                            <a href="http://www.2035themes.com/muusico/lyrics/sugar/">
                                                <div className="item1"></div>
                                            </a>
                                            <div className="item-text">
                                                <a href="http://www.2035themes.com/muusico/lyrics/sugar/"></a>
                                                <h3><a href="http://www.2035themes.com/muusico/lyrics/sugar/"></a><a href="http://www.2035themes.com/muusico/artist/beyonce/">Beyonce</a></h3><a href="http://www.2035themes.com/muusico/lyrics/sugar/">Sugar</a></div>
                                        </li>
                                    </div>
                                    <div className="owl-item" style="width: 212px; margin-right: 10px;">
                                        <li>
                                            <a href="http://www.2035themes.com/muusico/lyrics/suerte-whenever-wherever/">
                                                <div className="item2"></div>
                                            </a>
                                            <div className="item-text">
                                                <a href="http://www.2035themes.com/muusico/lyrics/suerte-whenever-wherever/"></a>
                                                <h3><a href="http://www.2035themes.com/muusico/lyrics/suerte-whenever-wherever/"></a><a href="http://www.2035themes.com/muusico/artist/shakira/">Shakira</a></h3><a href="http://www.2035themes.com/muusico/lyrics/suerte-whenever-wherever/">Suerte (Whenever, Wherever)</a></div>
                                        </li>
                                    </div>
                                    <div className="owl-item" style="width: 212px; margin-right: 10px;">
                                        <li>
                                            <a href="http://www.2035themes.com/muusico/lyrics/someone-like-you-2/">
                                                <div className="item3"></div>
                                            </a>
                                            <div className="item-text">
                                                <a href="http://www.2035themes.com/muusico/lyrics/someone-like-you-2/"></a>
                                                <h3><a href="http://www.2035themes.com/muusico/lyrics/someone-like-you-2/"></a><a href="http://www.2035themes.com/muusico/artist/adele/">Adele</a></h3><a href="http://www.2035themes.com/muusico/lyrics/someone-like-you-2/">Someone Like You</a></div>
                                        </li>
                                    </div>
                                    <div className="owl-item" style="width: 212px; margin-right: 10px;">
                                        <li style="background:url('http://www.2035themes.com/muusico/wp-content/uploads/2015/02/image-12-small-min.jpg') no-repeat;">
                                            <a href="http://www.2035themes.com/muusico/lyrics/super-bass-2/">
                                                <div className="item4"></div>
                                            </a>
                                            <div className="item-text">
                                                <a href="http://www.2035themes.com/muusico/lyrics/super-bass-2/"></a>
                                                <h3><a href="http://www.2035themes.com/muusico/lyrics/super-bass-2/"></a><a href="http://www.2035themes.com/muusico/artist/nicki-minaj/">Nicki Minaj</a></h3><a href="http://www.2035themes.com/muusico/lyrics/super-bass-2/">Super Bass</a></div>
                                        </li>
                                    </div>
                                    <div className="owl-item" style="width: 212px; margin-right: 10px;">
                                        <li style="background:url('http://www.2035themes.com/muusico/wp-content/uploads/2015/02/image-8-small-min.jpg') no-repeat;">
                                            <a href="http://www.2035themes.com/muusico/lyrics/break-free/">
                                                <div className="item1"></div>
                                            </a>
                                            <div className="item-text">
                                                <a href="http://www.2035themes.com/muusico/lyrics/break-free/"></a>
                                                <h3><a href="http://www.2035themes.com/muusico/lyrics/break-free/"></a><a href="http://www.2035themes.com/muusico/artist/enrique-iglesias/">Enrique Iglesias</a></h3><a href="http://www.2035themes.com/muusico/lyrics/break-free/">Break Free</a></div>
                                        </li>
                                    </div>
                                    <div className="owl-item" style="width: 212px; margin-right: 10px;">
                                        <li>
                                            <a href="http://www.2035themes.com/muusico/lyrics/boom-clap/">
                                                <div className="item2"></div>
                                            </a>
                                            <div className="item-text">
                                                <a href="http://www.2035themes.com/muusico/lyrics/boom-clap/"></a>
                                                <h3><a href="http://www.2035themes.com/muusico/lyrics/boom-clap/"></a><a href="http://www.2035themes.com/muusico/artist/jessie-j/">Jessie J</a></h3><a href="http://www.2035themes.com/muusico/lyrics/boom-clap/">Boom Clap</a></div>
                                        </li>
                                    </div>
                                </div>
                            </div>
                            <div className="owl-controls">
                                <div className="owl-nav">
                                    <div className="owl-prev"></div>
                                    <div className="owl-next"></div>
                                </div>
                                <div className="owl-dots" style={{display: 'none'}}></div>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className="container pos-center">
            <div className="homepage-advertisement"><img src="http://www.2035themes.com/tools/muusico/index-ads.jpg"></img></div>
        </div>
        <div className="container">
            <div className="homepage-news clearfix">
                <div className="latestnew title">
                    <h3><i className="fa fa-clock-o"></i>LATEST NEWS</h3></div>
                <div className="col-lg-4">
                    <img width="820" height="400" src="http://www.2035themes.com/muusico/wp-content/uploads/2015/01/post-1-820x400.jpg" className="attachment-post-thumbnail size-post-thumbnail wp-post-image" alt=""></img> <a href="http://www.2035themes.com/muusico/example-category/enrique-iglesias-biography/"><h4>Enrique Iglesias Biography</h4></a>
                    <p>Born in Spain in 1975, Enrique Iglesias is the son of popular Spanish singer Julio Iglesias. Iglesias grew up largely in Miami and began singing as a teenager. He released his self-titled debut album in 1995 and, like his subsequent studio works, proved to be a huge success. By early 2012, Iglesias had sold more […]</p>
                    <a href="http://www.2035themes.com/muusico/example-category/enrique-iglesias-biography/"><strong>Read More</strong></a></div>
                <div className="col-lg-4">
                    <img width="820" height="400" src="http://www.2035themes.com/muusico/wp-content/uploads/2015/01/post-3-820x400.jpg" className="attachment-post-thumbnail size-post-thumbnail wp-post-image" alt=""></img> <a href="http://www.2035themes.com/muusico/uncategorized/shakira-biography/"><h4>Shakira Biography</h4></a>
                    <p>Synopsis Born in Colombia on February 2, 1977, hugely successfully Colombian pop singer and dancer Shakira has won two Grammy Awards, seven Latin Grammy Awards and 12 Billboard Latin Music Awards, and has been nominated for a Golden Globe Award. Known for hits like “Whenever, Wherever” and “Hips Don’t Lie,” Shakira is the highest-selling Colombian […]</p>
                    <a href="http://www.2035themes.com/muusico/uncategorized/shakira-biography/"><strong>Read More</strong></a></div>
                <div className="col-lg-4">
                    <img width="820" height="400" src="http://www.2035themes.com/muusico/wp-content/uploads/2015/01/post-2-820x400.jpg" className="attachment-post-thumbnail size-post-thumbnail wp-post-image" alt=""></img> <a href="http://www.2035themes.com/muusico/uncategorized/rihanna-biography/"><h4>Rihanna Biography</h4></a>
                    <p>Synopsis Born Robyn Rihanna Fenty, on February 20, 1988 in Barbados, Rihanna signed with Def Jam records at age 16 and released her first album, which sold more than 2 million copies worldwide, in 2005. She went on to release more albums and hit songs, including “Unfaithful,” “Disturbia” and “Umbrella.” Rihanna has also won multiple […]</p>
                    <a href="http://www.2035themes.com/muusico/uncategorized/rihanna-biography/"><strong>Read More</strong></a></div>
            </div>
        </div>
        <div className="container">
            <div className="latest-lyrics-container clearfix">
                <div className="title">
                    <h3><i className="fa fa-clock-o"></i>LATEST LYRICS</h3></div>
                <div className="latest-lyrics margint10">
                    <ul>
                        <li>
                            <span className="song-number">1.</span>
                            <h5><a href="http://www.2035themes.com/muusico/artist/michael-jackson-3/">Michael Jackson</a></h5>
                            <a href="http://www.2035themes.com/muusico/lyrics/smooth-criminal-3/">Smooth Criminal</a></li>
                        <li>
                            <span className="song-number">2.</span>
                            <h5><a href="http://www.2035themes.com/muusico/artist/jessie-j/">Jessie J</a>ft. <a href="http://www.2035themes.com/muusico/artist/rihanna/">Rihanna</a></h5>
                            <a href="http://www.2035themes.com/muusico/lyrics/all-day/">All Day</a></li>
                        <li>
                            <span className="song-number">3.</span>
                            <h5><a href="http://www.2035themes.com/muusico/artist/fergie/">Fergie</a></h5>
                            <a href="http://www.2035themes.com/muusico/lyrics/lucky/">Lucky</a></li>
                        <li>
                            <span className="song-number">4.</span>
                            <h5><a href="http://www.2035themes.com/muusico/artist/christina-aguilera/">Christina Aguilera</a></h5>
                            <a href="http://www.2035themes.com/muusico/lyrics/fix-you/">Fix You</a></li>
                        <li>
                            <span className="song-number">5.</span>
                            <h5><a href="http://www.2035themes.com/muusico/artist/demi-lovato/">Demi Lovato</a></h5>
                            <a href="http://www.2035themes.com/muusico/lyrics/a-sky-full-of-stars/">A Sky Full of Stars</a></li>
                        <li>
                            <span className="song-number">6.</span>
                            <h5><a href="http://www.2035themes.com/muusico/artist/enrique-iglesias/">Enrique Iglesias</a></h5>
                            <a href="http://www.2035themes.com/muusico/lyrics/break-free/">Break Free</a></li>
                        <li>
                            <span className="song-number">7.</span>
                            <h5><a href="http://www.2035themes.com/muusico/artist/nicki-minaj/">Nicki Minaj</a></h5>
                            <a href="http://www.2035themes.com/muusico/lyrics/super-bass-2/">Super Bass</a></li>
                        <li>
                            <span className="song-number">8.</span>
                            <h5><a href="http://www.2035themes.com/muusico/artist/iggy-azalea/">Iggy Azalea</a></h5>
                            <a href="http://www.2035themes.com/muusico/lyrics/part-of-your-world/">Part Of Your World</a></li>
                        <li>
                            <span className="song-number">9.</span>
                            <h5><a href="http://www.2035themes.com/muusico/artist/nicki-minaj/">Nicki Minaj</a></h5>
                            <a href="http://www.2035themes.com/muusico/lyrics/anaconda-3/">Anaconda</a></li>
                        <li>
                            <span className="song-number">10.</span>
                            <h5><a href="http://www.2035themes.com/muusico/artist/hozier/">Hozier</a></h5>
                            <a href="http://www.2035themes.com/muusico/lyrics/one-last-time/">One Last Time</a></li>
                        <li>
                            <span className="song-number">11.</span>
                            <h5><a href="http://www.2035themes.com/muusico/artist/ed-sheeran/">Ed Sheeran</a></h5>
                            <a href="http://www.2035themes.com/muusico/lyrics/a-team/">A Team</a></li>
                        <li>
                            <span className="song-number">12.</span>
                            <h5><a href="http://www.2035themes.com/muusico/artist/lana-del-rey/">Lana Del Rey</a></h5>
                            <a href="http://www.2035themes.com/muusico/lyrics/demons/">Demons</a></li>
                        <li>
                            <span className="song-number">13.</span>
                            <h5><a href="http://www.2035themes.com/muusico/artist/jessie-j/">Jessie J</a></h5>
                            <a href="http://www.2035themes.com/muusico/lyrics/price-tag-2/">Price Tag</a></li>
                        <li>
                            <span className="song-number">14.</span>
                            <h5><a href="http://www.2035themes.com/muusico/artist/taylor-swift/">Taylor Swift</a></h5>
                            <a href="http://www.2035themes.com/muusico/lyrics/shake-it-off-2/">Shake It Off</a></li>
                        <li>
                            <span className="song-number">15.</span>
                            <h5><a href="http://www.2035themes.com/muusico/artist/jessie-j/">Jessie J</a></h5>
                            <a href="http://www.2035themes.com/muusico/lyrics/boom-clap/">Boom Clap</a></li>
                        <li>
                            <span className="song-number">16.</span>
                            <h5><a href="http://www.2035themes.com/muusico/artist/adele/">Adele</a></h5>
                            <a href="http://www.2035themes.com/muusico/lyrics/someone-like-you-2/">Someone Like You</a></li>
                        <li>
                            <span className="song-number">17.</span>
                            <h5><a href="http://www.2035themes.com/muusico/artist/taylor-swift/">Taylor Swift</a></h5>
                            <a href="http://www.2035themes.com/muusico/lyrics/style-2/">Style</a></li>
                        <li>
                            <span className="song-number">18.</span>
                            <h5><a href="http://www.2035themes.com/muusico/artist/sia/">Sia</a></h5>
                            <a href="http://www.2035themes.com/muusico/lyrics/chandelier-3/">Chandelier</a></li>
                        <li>
                            <span className="song-number">19.</span>
                            <h5><a href="http://www.2035themes.com/muusico/artist/sia/">Sia</a></h5>
                            <a href="http://www.2035themes.com/muusico/lyrics/chandelier-2/">The Hanging Tree</a></li>
                        <li>
                            <span className="song-number">20.</span>
                            <h5><a href="http://www.2035themes.com/muusico/artist/maroon-5/">Maroon 5</a></h5>
                            <a href="http://www.2035themes.com/muusico/lyrics/sugar-2/">Sugar</a></li>
                        <li>
                            <span className="song-number">21.</span>
                            <h5><a href="http://www.2035themes.com/muusico/artist/ed-sheeran/">Ed Sheeran</a></h5>
                            <a href="http://www.2035themes.com/muusico/lyrics/thinking-out-loud-2/">Thinking Out Loud</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    );
  }
}

export default Page;