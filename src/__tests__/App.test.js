import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import NavigationBar from '../components/NavigationBar';
import DetailsPage from '../components/DetailsPage';
import HomePage from '../components/HomePage';
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
          data: [
            {
              components: {
                co: 0.2,
                nh3: 0.03,
                no: 0.01,
                no2: 0.02,
                o3: 0.03,
                pm2_5: 0.01,
                pm10: 0.02,
                so2: 0.01,
              },
              main: {
                aqi: 35,
              },
            },
          ],
          img: 'test',
          imgAlt: 'Map of Tabasco',
        },
      ],
    },
  },
  navigation: [{ isModalOpen: false, citiesToRender: 'VILLAHERMOSA' }],
  details: [
    {
      selected: 'VILLAHERMOSA',
    }
  ]
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
        render(
          <Provider store={store}>
            <BrowserRouter>
              <NavigationBar />
            </BrowserRouter>
          </Provider>
        );
        const nowElement = screen.getByText('Go Back');
        expect(nowElement).toBeInTheDocument;
        
      });
    });
/*
    describe('Test for Details Page', ()=> {
      test('DetailsPage should render state and air quality', () => {
        const store = mockStore(initialState);
        render(
          <Provider store={store}>
            <DetailsPage />
          </Provider>
        );
      
        const stateNameElement = screen.getByText('VILLAHERMOSA');
        expect(stateNameElement).toBeInTheDocument();
      
        const airQualityElement = screen.getByText('Air Quality');
        expect(airQualityElement).toBeInTheDocument();
      });
    })*/
    
  });
