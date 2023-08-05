import React from "react";
import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
// import DetailsPage from '../components/DetailsPage';
import HomePage from '../components/HomePage';
// import SettingsModal from '../components/SettingsModal';
import store from '../redux/store';
jest.mock('../assets/mapMexico.png');
describe('Test Components',()=> {
    describe('test DetailsPage Component', ()=>{
        test("this is just a test for testing enviroment",()=>{
            expect(2+2).toBe(4);
        }),
        test('HomePage should render Mexico',()=>{
            render(
                <BrowserRouter><Provider store={store}><HomePage /></Provider></BrowserRouter>
            )
            const mexico = screen.getByText('Mexico')
            expect(mexico).toBeInTheDocument();
        })
        
    })
})