$(document).ready(function () {
 function calculate(operation) {
        const num1 = parseFloat($("#num1").val());
        const num2 = parseFloat($("#num2").val());
        let result = 0;

        if (isNaN(num1) || isNaN(num2)) {
            alert("Please enter a valid number!");
            return
        }

        switch (operation) {
            case "add":
                 result = num1 + num2;
                break;

            case "substract": 
            result = num1 - num2;
                break;

            case "multiply": 
            result = num1 * num2;
                break;

            case "divide":
                if (num2 === 0) {
                    alert("Cannot divide by 0!");
                    return;
                }
                result = num1 / num2;
                break
        }

        $("#result").text(result)

    }

    $("#add").click(() => calculate("add"));
    $("#substract").click(() => calculate("substract"));
    $("#multiply").click(() => calculate("multiply"));
    $("#divide").click(() => calculate("divide"));

    $("#refresh").click(() => {
        $("#num1").val("");
        $("#num2").val("");
        $("#result").text("0");
        
    })
})