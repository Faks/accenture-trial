import * as React from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import _ from "lodash";
import {DateTime} from 'luxon';

export default class Home extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            data: []
        };
    }
    
    componentDidMount() {
        axios.get('https://api.punkapi.com/v2/beers').then(response => {
            this.setState({
                data: response.data
            })
        }).catch(errors => {
            console.log(errors);
            this.setState({
                data: []
            })
        });
    }
    
    private filterBeers() {
        let dataFilter = _.map(this.state.data, 'first_brewed')
        
        dataFilter.map((item: any) => {
            let normalizedDate = item.replace(/\//g, '-');
            console.log(normalizedDate);
            console.log(DateTime.fromISO(normalizedDate));
        })
    }
    
    render() {
        return (
            <div>
                <button className='btn btn-info mb-3'
                        type="button"
                        onClick={() => this.filterBeers()}>
                    Filter: Beers on 2010 or before
                </button>
                
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {
                        this.state.data ? this.state.data.map((beer: any) => {
                            return <Link to={{pathname: `/post/${beer.id}`, state: beer}}
                                         key={beer.id}
                                         data-bs-toggle="tooltip"
                                         data-bs-placement="top"
                                         title={beer.tagline}>
                                <div className="col"
                                     key={beer.id}>
                                    <div className="card">
                                        <img src={beer.image_url}
                                             className="card-img-top img-fluid"
                                             alt={beer.name}
                                        />
                                        <div className="card-body">
                                            <h5 className="card-title">{beer.name}</h5>
                                            <p className="card-text">{beer.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>;
                        }) : null
                    }
                </div>
            </div>
        )
    }
}
