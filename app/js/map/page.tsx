import React, { useState, useEffect} from 'react'

export default function Home() {
    let map = new Map<string, string>();
    map.set('A', 'Apple');
    map.set('B', 'Banana');
    map.set('C', 'Car');

    map.forEach((value) => {
        console.log(value);
    });

    map.forEach((value, key) => {
        console.log(key + " => " + value);
    });

    map.forEach((value, key, newMap) => {
        console.log(key + " => " + value);
        console.log(newMap);
    });

    for(const[key, value] of map){
        console.log(key + " => " + value);
    }

    for(const key of map.keys()){
        console.log(key);
    }

    for(const value of map.values()){
        console.log(value);
    }

    for(const [key, value] of map.entries()) {
       console.log(key + " => " + value);
    }

}