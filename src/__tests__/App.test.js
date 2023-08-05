import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import NavigationBar from '../components/NavigationBar';
import DetailsPage from '../components/DetailsPage';
import HomePage from '../components/HomePage';
import SettingsModal from '../components/SettingsModal';
// import store from '../redux/store';
import navigationReducer from '../redux/navigation/navigationSlice';
jest.mock('../assets/mapMexico.png');
const mockStore = configureStore([]);
const initialState = {
  weather: {
    mexico: {
      states: [
        {
          state: 'VILLAHERMOSA',
          latitude: 17,
          longitude: 92,
          data: null,
          img: 'test',
          imgAlt: 'Map of Tabasco',
        },
        {
          state: 'CANCUN',
          latitude: 21,
          longitude: -86,
          data: null,
          img: 'test',
          imgAlt: 'Map of Tabasco',
        },
      ],
    },
  },
  navigation: [{ isModalOpen: false, citiesToRender: 'VILLAHERMOSA' }],
};

const store = mockStore(initialState);

  describe('Test Components', () => {
    describe('Test HomePage Component', () => {
      test('HomePage should render Mexico', () => {
        render(
          <BrowserRouter>
            <Provider store={store}>
              <HomePage />
            </Provider>
          </BrowserRouter>
        );
        const mexico = screen.getByText('Mexico');
        expect(mexico).toBeInTheDocument();
      });

      test('HomePage should render at least 1 picture', () => {
        render(
          <BrowserRouter>
            <Provider store={store}>
              <HomePage />
            </Provider>
          </BrowserRouter>
        );

        // Find all the img elements
        const images = screen.queryAllByRole('img');

        // Check if there is at least one image
        expect(images.length).toBeGreaterThan(0);
      });
    });

    describe('Test NavigationBar Component', () => {
      test('NavigationBar should render "Now" and setting button should be present', () => {
        const mockInitialState = {
            navigaton: [{ isModalOpen: false, citiesToRender: undefined }], // Set initial state as needed
          };

          const mockReducer = {
            navigation: navigationReducer, // Include your navigation reducer here
            // Add other reducers if you have them
          };

          const mockStore = configureStore(mockReducer);
        const finalMockStore = mockStore(mockInitialState);

        render(
          <Provider store={finalMockStore}>
            <BrowserRouter>
              <NavigationBar />
            </BrowserRouter>
          </Provider>
        );
        const nowElement = screen.getByText('Now');
        expect(nowElement).toBeInTheDocument;

        // Initially, the SettingsModal should not be visible
        const settingsModal = screen.queryByRole('dialog');
        expect(settingsModal).not.toBeInTheDocument();

        // Click the settings button using the icon's name as the accessible name
        const settingsButton = screen.getByTestId('settings-button');
        fireEvent.click(settingsButton);
      });
    });
  });
