import React, {Component} from 'react';
import NewSingle from './NewSingle';

class News extends Component{

    constructor(props) {
        super(props);
        this.state = {
            news: [],
        };
    }

    componentDidMount(){
        //const url = 'https://newsapi.org/v2/everything?q=apple&from=2021-06-01&to=2021-06-01&sortBy=popularity&apiKey=512048dd86e44fd6b581c59ed715908f';
        const url = 'http://localhost:8000/registros';
        fetch(url).then((response) => {
            return response.json();
        })
        .then((data) => {
            this.setState({
                news: data
            })
        })
        .catch((error) => console.log(error));
    }

    renderItems(){
        return this.state.news.map((item) => (
            <NewSingle key={item.id} item={item} />
        ));
    }
    render(){
        return (
            <ul>
                <h3>Auditiva <span>-</span> Visual <span>-</span> Grupo</h3>
                {this.renderItems()}
            </ul>
        )
    }
}

export default News;
