import React from "react";
import { render, screen } from "@testing-library/react";
import DetailsPage from '../components/DetailsPage';
import HomePage from '../components/HomePage';
import SettingsModal from '../components/SettingsModal';

describe('Test Components',()=> {
    describe('test DetailsPage Component', ()=>{
        test("this is just a test for testing enviroment",()=>{
            expect(2+2).toBe(4);
        })
    })
})