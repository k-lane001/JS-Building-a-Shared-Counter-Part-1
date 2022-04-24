async function main(){
    const countContainer = document.querySelector('#count-container');
    const incrementButton = document.querySelector('#increment-button');
    const decrementButton = document.querySelector('#decrement-button');
//add new button - to clear counter
    const clearButton = document.createElement('button');
    clearButton.style.backgroundColor = 'red'
    clearButton.style.color = 'white'
    clearButton.textContent = 'Clear'
    document.getElementsByTagName('div')[2].appendChild(clearButton);

//asynchronous fetch variable to retrieve stored counter data from local host
    const response = await fetch('http://localhost:9001/counter');
//asynchronous response variable to parse returned json data
    const result = await response.json();
//modified countValue variable to show returned count using local host data
    let countValue = result.value;

    function increment(){
        countValue++;
        countContainer.textContent = countValue;
    }

    function decrement(){
        countValue--;
        countContainer.textContent = countValue;
    }
//Clear function
    function clearResult() {
        countValue = 0;
        countContainer.textContent=countValue;
    }

    incrementButton.addEventListener('click', increment);
    decrementButton.addEventListener('click', decrement);
    //Clear function event listener
    clearButton.addEventListener('click', clearResult);
    countContainer.textContent = countValue;

}
main()



