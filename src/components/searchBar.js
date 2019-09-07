import React from "react";
import {
    Form,
    FormGroup,
    Input,
    // Button
} from 'reactstrap';

const SearchBar = () => {

    return (
        <div className="searchbar" style={{ marginTop: "1%", paddingBottom: "2%" }}>
            <Form inline className="float-right" style={{ paddingRight: "10%" }}>
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0 " >
                    <Input type="text" name="search" size="sm" id="search" placeholder="Search" aria-label="Search" />
                    {/* <Button className="mb-2 mr-sm-2 mb-sm-0" size="sm">SEARCH ICON</Button> */}
                </FormGroup>
            </Form>
        </div>
    );
}

export default SearchBar;