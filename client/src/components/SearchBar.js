import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

function SearchBar (props) {
    return (
        <Form inline>
        <FormGroup>
          <Label for="text" hidden>Book Search</Label>
          <Input type="text" name="search" id="search" placeholder="Search a Book" />
        </FormGroup>
        <Button>Search</Button>
        </Form>
    );
}
export default SearchBar;