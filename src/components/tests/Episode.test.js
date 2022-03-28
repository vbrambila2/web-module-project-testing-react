import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Episode from './../Episode';

test("renders without error", async () => { 
    render(<Episode episode={{ name: 'name', image: 'image', summary: 'summary', seasons: 'seasons' }}/>)
    await screen.findByText('minutes')
});

test("renders the summary test passed as prop", () => { });

test("renders default image when image is not defined", () => { });
