import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const URL_BACKEND = "http://localhost:3333/";

export const getCategories = createAsyncThunk("categories/getCategories", 
    async() => {
        try{
            const responce = await axios.get(`${URL_BACKEND}categories/all`)
            return responce.data
        } catch (error) {
            console.log(error.message);
        }
    } );

    export const getProducts = createAsyncThunk("products/getProducts", 
        async() => {
            try{
                const responce = await axios.get(`${URL_BACKEND}products/all`)
                return responce.data
            } catch (error) {
                console.log(error.message);
            }
        } )





