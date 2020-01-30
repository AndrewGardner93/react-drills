import React, {component} from 'react'

class Image extends component{
    render() {
        return (
            <div>
                <img src={this.props.url}/>
                <div>Error 599</div>
            </div>
        )
    }
}
