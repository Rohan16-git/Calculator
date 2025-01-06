$(document).ready(function () {
    let currentInput = "";  // Tracks the current number being entered
    let expression = "";    // Builds the complete mathematical expression

    // Function to update the display
    const updateDisplay = (value) => {
        $("#result").text(value || "0");
    };

    // Handle numeric button clicks
    $(".num").on("click", function () {
        const value = $(this).text();
        currentInput += value; // Append the number to the current input
        updateDisplay(currentInput);
    });

    // Handle operator button clicks
    $(".op").on("click", function () {
        const operator = $(this).text();

        if (currentInput) {
            expression += currentInput + operator; // Append the current number and operator
            currentInput = ""; // Reset the current input
        } else if (expression && /[+\-*/]$/.test(expression)) {
            // Replace the last operator if pressed consecutively
            expression = expression.slice(0, -1) + operator;
        }
        updateDisplay(operator); // Temporarily display the operator
    });

    // Handle the dot button click
    $(".dot").on("click", function () {
        if (!currentInput.includes(".")) {
            currentInput += "."; // Append a dot if none exists in the current input
            updateDisplay(currentInput);
        }
    });

    // Handle the equal button click
    $(".equal").on("click", function () {
        if (currentInput) {
            expression += currentInput; // Append the last entered number to the expression
            try {
                const result = eval(expression); // Evaluate the expression
                updateDisplay(result); // Display the result
                currentInput = result.toString(); // Set the result as the next input
                expression = ""; // Clear the expression
            } catch (error) {
                updateDisplay("Error"); // Handle invalid expressions
                currentInput = "";
                expression = "";
            }
        }
    });

    // Handle the clear button click
    $(".clear").on("click", function () {
        currentInput = ""; // Reset the current input
        expression = "";   // Reset the expression
        updateDisplay("0"); // Reset the display
    });
});
