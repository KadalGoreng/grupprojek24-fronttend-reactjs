import React from "react";
import styled from "styled-components";
import Slide from "../components/Slider";
import '../FolderCSS/Slider.css'


const dataSlider = [
    {
        image:"https://images.unsplash.com/photo-1587542513982-535059868fad?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1935&q=80",
        alt:"Image 1"
    },
    {
        image:"https://images.unsplash.com/photo-1554931670-4ebfabf6e7a9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1887&q=80", 
        alt:"Image 2"
    },
    {
        image:"https://images.unsplash.com/photo-1587542513982-535059868fad?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1935&q=80", 
        alt:"Image 3"
    },
    {
        image:"https://images.unsplash.com/photo-1554931670-4ebfabf6e7a9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1887&q=80", 
        alt:"Image 4"
    },
    {
        image:"https://images.unsplash.com/photo-1555433258-d095529cd481?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1974&q=80",
        alt:"Image 5"
    }
];

 const Slider = () => (
     <>
     <div>
         <Slide src={dataSlider}/>
     </div>
     </>
 )

export default Slider;