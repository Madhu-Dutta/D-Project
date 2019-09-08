import React from "react";
import {
    Form,
    FormGroup,
    Input,
    Button
} from 'reactstrap';

const SearchBar = () => {

    return (
        <div className="searchbar" style={{ marginTop: "1%", paddingBottom: "4%" }}>
            <Form inline className="float-right" >
                <FormGroup className="md-6" >
                    <Input type="text" name="search" size="sm" id="search" placeholder="Search" aria-label="Search" />
                    <Button className="md-6" size="sm" style={{fontSize: '10px', backgroundColor: "#E3E3E3",color: '#818181', border: "none"}}><i class="fa fa-search"></i></Button>
                </FormGroup>
            </Form>
        </div>
    );
}

export default SearchBar;