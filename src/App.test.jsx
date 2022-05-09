import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('Testing App', () => {
    it('renders list of characters, on click navigates to detail page', async () => {
        render(
            <MemoryRouter initialEntries={['/']} initialIndex={1}>
                <App />
            </MemoryRouter>
        );

        screen.getByText(/loading/i);
        await waitForElementToBeRemoved(await screen.findByText(/loading/i));

        const detailLink = await screen.findByText('Morty Smith');
        userEvent.click(detailLink);

        await screen.findByText('Species: Human')
    });

    it('renders the character Morty Smiths detail page', async () => {
        render(
            <MemoryRouter initialEntries={['/characters/2']}>
                <App />
            </MemoryRouter>
        );
        screen.getByText(/loading/i);
        await waitForElementToBeRemoved(await screen.findByText(/loading/i));
    
      const name = await screen.findByText('Morty Smith')
      const species = await screen.findByText('Species: Human')
      const gender = await screen.findByText('Gender: Male')
      const location =await screen.findByText('Location: Citadel of Ricks')
    })
})