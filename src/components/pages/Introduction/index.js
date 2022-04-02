import React, { useContext, useEffect } from "react";
import { Container, Table } from "react-bootstrap";
import getColor from "../../../context/actions/getColor";
import { GlobalContext } from "../../../context/Provider";
import { VCirCle, XCirCle } from "../../common/icon";

export const Introduction = () => {

  return (
    <Container className="mt-3">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Field</th>
            <th>Type</th>
            <th>Can be updated?</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>ID</td>
            <td>Label</td>
            <td>
              <XCirCle />
            </td>
          </tr>
          <tr>
            <td>Error Description</td>
            <td>Label</td>
            <td>
              <XCirCle />
            </td>
          </tr>
          <tr>
            <td>Production Image</td>
            <td>Image</td>
            <td>
              <XCirCle />
            </td>
          </tr>
          <tr>
            <td>Production Name</td>
            <td>Input text</td>
            <td>
              <VCirCle />
            </td>
          </tr>
          <tr>
            <td>SKU</td>
            <td>Input text</td>
            <td>
              <VCirCle />
            </td>
          </tr>
          <tr>
            <td>Color</td>
            <td>Selection</td>
            <td>
              <VCirCle />
            </td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
};
