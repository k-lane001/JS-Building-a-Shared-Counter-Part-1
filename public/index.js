async function main(){
    const countContainer = document.querySelector('#count-container');
    const incrementButton = document.querySelector('#increment-button');
    const decrementButton = document.querySelector('#decrement-button');
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

    incrementButton.addEventListener('click', increment);
    decrementButton.addEventListener('click', decrement);
    countContainer.textContent = countValue;
}
main()