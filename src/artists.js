import React, { Component } from 'react';

class Artists extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            // items: [],
            // alphabet: this.props.alphabet
        };
      }

componentWillReceiveProps(nextProps, nextContext) {
    this.componentDidUpdate();
}
componentDidMount() {
        // this.setState({alphabet:  this.props.alphabet});
    fetch("http://localhost:8000/api/singers/byletter/" + this.props.alphabet)
        .then(res => res.json())
        .then(
        (result) => {
            console.log(result);
            this.setState({
                isLoaded: true,
                items: result
            });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
            this.setState({
            isLoaded: true,
            error
            });
        }
        )
    }
    
  render() {
        // console.log(this.props.alphabet);

    const { error, isLoaded, items } = this.state;

    var content = '';
    if(error){
        content = <div>Error: {error.message}</div>;
    }else if(!isLoaded) {
        content = <div>Loading...</div>;
    }else {
        content = items.map(item => (
            <div className="col-lg-6 col-sm-6 col-xs-6" key={item.name}>1.
                <a href="artists/adele/">{item.name}</a>
            </div>
        ));
    }



    return (

        <div className="row margint10 marginb10">
        <div className="col-lg-8 col-sm-8">
           <div className="album-line clearfix margint10">
              <div className="col-lg-6 col-sm-6 col-xs-6">
                 <div className="table-title">{this.props.alphabet}</div>
              </div>
           </div>
           <div className="list-line margint10 clearfix">

                {content}
           </div>
           <div className="row margint40">
              <div className="col-lg-12">
              </div>
           </div>
        </div>
        <div className="col-lg-4 col-sm-4">
           <div className="single-lyric-ads margint10 single-widget">
              <div className="title">
                 <h4>ADVERTISEMENT</h4>
              </div>
              <img src="http://www.2035themes.com/tools/muusico/sidebar_ads.jpg" alt="advertisement"></img>
           </div>
        </div>
     </div>
    );
  }
}

export default Artists;