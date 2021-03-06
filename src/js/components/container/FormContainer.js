import React, {Component} from "react"
import ReactDom from "react-dom"
import Input from "../presentational/Input"

class FormContainer extends Component {
    constructor(){
        super();

        this.state = {
            seo_title: ""
        };

        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event){
        this.setState({[event.target.id]:event.target.value})
    }

    render(){
        const {seo_title} = this.state
        return (
            <form id="article-form">
                <Input label="seo_title" text="SEO title" type="text" id="seo_title" value={seo_title} handleChange={this.handleChange}/>
            </form>
        );
    }
}
const wrapper = document.getElementById("create-article-form");
wrapper ? ReactDom.render(<FormContainer/>, wrapper): false;

export default FormContainer;