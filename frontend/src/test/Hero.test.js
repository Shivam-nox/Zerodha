import React from "react";
import {render,screen} from '@testing-library/react';
import '@testing-library/jest-dom/extent-expect'; 
import Hero from "../landing_page/home/Hero";

//Test Suite

describe('Hero Component',()=>{
    test("render hero image",() => {
        render(<Hero/>);
        const heroImage = screen.getByAltText("Hero-Image");
        expect(heroImage).toBeInTheDocument();
        expect(heroImage).toHaveAttribute("src","media/images/landing.png");
    });
     
    test("render signup image",() => {
        render(<Hero/>);
        const SignUpButton = screen.getByRole("button",{name:"/signup now/i"});
        expect(SignUpButton).toBeInTheDocument();
        expect(SignUpButton).toHaveClass("btn-primary");
    });
});