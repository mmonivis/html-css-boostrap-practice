<script type="text/javascript">

var array = [5,3,7,2,1,6];

function bubbleSort(array){
    var notSorted = true
    while (notSorted){
        numSwaps = 0;
        for (i = 0; i < array.length; i++){
            if (array[i] > array[i + 1]){
                var largerNum = array[i];
                array.splice(i, 1);
                array.splice(i + 1, 0, largerNum);
                numSwaps += 1;
            }
        }
        console.log(array);
        if(numSwaps == 0){
            notSorted = false;
        }else{
            numSwaps = 0;
        }
    }
    console.log(array);
}
// bubbleSort(array);


function mergeSort(){
    var firstArray = array.slice(0, Math.floor(array.length / 2));
    var secondArray = array.slice(Math.floor(array.length / 2), array.length);
    var arrayList = [firstArray, secondArray];

    for (j = 0; j < arrayList.length; j++){
        var notSorted = true
        while (notSorted){
            numSwaps = 0;
            for (i = 0; i < arrayList[j].length; i++){
                if (arrayList[j][i] > arrayList[j][i + 1]){
                    var largerNum = arrayList[j][i];
                    arrayList[j].splice(i, 1);
                    arrayList[j].splice(i + 1, 0, largerNum);
                    numSwaps += 1;
                }
            }
            console.log(arrayList[j]);
            if(numSwaps == 0){
                notSorted = false;
            }else{
                numSwaps = 0;
            }
        }
    }
    // Both lists are sorted
    mergeSortedList = [];

    while ((firstArray.length > 0) || (secondArray.length > 0)){
        var firstNum = firstArray[0];
        var secondNum = secondArray[0];
        if ((firstNum < secondNum) || (secondArray.length == 0)){
            firstArray.splice(0, 1);
            mergeSortedList.push(firstNum);
        }else{
            secondArray.splice(0, 1);
            mergeSortedList.push(secondNum);
        }
        // console.log(firstArray);
        // console.log(secondArray);
        console.log(mergeSortedList);
    }
}
mergeSort();


</script>