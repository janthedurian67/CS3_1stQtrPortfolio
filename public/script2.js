    function totalMeal(){
    let mp = parseFloat(document.getElementById("mealPrice").value);
    let tip = parseFloat(document.getElementById("Tip").value);
    let sc = parseFloat(document.getElementById("serviceCharge").value);


    let  totalCost = mp + tip + (sc / 100 * mp);
    document.getElementById("totalHere").innerHTML = totalCost.toFixed(2);
}