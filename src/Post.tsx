import * as React from "react";

export default class Post extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            data: {}
        };
    }
    
    componentDidMount() {
        this.setState({
            data: this.props.location.state
        })
    }
    
    render() {
        return (
            <div>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    Detail View
                </div>
            </div>
        )
    }
}
