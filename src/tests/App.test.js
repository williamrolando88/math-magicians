import React from "react";
import renderer from "react-test-renderer";
import App from "../App";

describe('Rendering Component: App', () => {
    it('Structure of App renders correctly.', () => {
        const component = renderer.create(<App />);
        expect(component).toMatchSnapshot();
    });
});