import React from "react";
import { mergeSort, selectionSort } from "../Algorithms/Algorithms";
import "./Sorter.css";

export default class Sorter extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            arr: [],
        };
    }

    componentDidMount() {
        this.resetArray();
    }

    resetArray() {
        const arr = [];
        for (let i = 0; i < 50; i++) {
            arr.push(randomIntFromInterval(5, 1000));
        }
        this.setState({arr});
    }

    selectionSort() {
        const animations = selectionSort(this.state.arr);
        console.log(animations);
        var idx = 0
        for (let i = 0; i < animations.length; i++) {
            const arrBars = document.getElementsByClassName("array-bar");
            const change = animations[i][3];
            if (change) {
                setTimeout(() =>{
                    const [barOneIdx, barTwoIdx, newHeight, oldHeight] = animations[i]
                    const barOneStyle = arrBars[barOneIdx].style;
                    const barTwoStyle = arrBars[barTwoIdx].style;
                    barOneStyle.height = `${newHeight}px`
                    barTwoStyle.height = `${oldHeight}px`
                }, i*10);
            } else {
                const [barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = arrBars[barOneIdx].style;
                const barTwoStyle = arrBars[barTwoIdx].style;
                const prevStyle = arrBars[barTwoIdx-1].style;
                // eslint-disable-next-line no-loop-func
                setTimeout(() =>{
                    if(barTwoIdx === this.state.arr.length - 1) {
                        barTwoStyle.backgroundColor = 'navy'
                        prevStyle.backgroundColor = "navy"
                        barOneStyle.backgroundColor = 'navy'
                    } else {
                        if (barOneIdx === idx) {
                            barOneStyle.backgroundColor = 'red'
                            barTwoStyle.backgroundColor = 'red'
                            prevStyle.backgroundColor = 'navy'
                        }
                        else if (barOneIdx !== idx) {
                            idx++;
                        }
                    }
                    
                }, i*10);
                
            }
        }
    }

    bubbleSort() {}

    insertionSort() {}

    quickSort() {}

    mergeSort() {
        const jsSorted = this.state.arr.slice().sort((a,b) => a-b);
        const sorted = mergeSort(this.state.arr);
        console.log(checkArrays(jsSorted, sorted));
    }

    render() {
        const {arr} = this.state;

        return (
            <div>
                <div className="column">
                    <button onClick={() => this.resetArray()}>Create New Array</button>
                    <button onClick={() => this.bubbleSort()}>Bubble Sort</button>
                    <button onClick={() => this.selectionSort()}>Selection Sort</button>
                    <button onClick={() => this.insertionSort()}>Insertion Sort</button>
                    <button onClick={() => this.quickSort()}>Quick Sort</button>
                    <button onClick={() => this.mergeSort()}>Merge Sort</button>
                </div>
                <div className="array-container">
                {arr.map((value, idx) => (
                    <div 
                        className="array-bar"
                        key={idx}
                        style={{height: `${value}px`}}></div>
                ))}
                </div>
            </div>
        );
    }
}

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max-min+1) + min);
}

function checkArrays(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }
    return true;
}
