document.addEventListener("DOMContentLoaded", function (event) {

    const inputUnit = document.getElementById('unit');
    const inputValue = document.getElementById('input-value');
    const outputValue = document.getElementById('output-value');

    inputUnit.addEventListener('change', onChangeListener);
    inputValue.addEventListener('change', onChangeListener);

    //Event listener on change
    function onChangeListener(e) {
        switch (inputUnit.value) {
            case "inch":
                outputValue.value = inchToCm(inputValue.value) + " cm";
                break;
            case "centimeter":
                $('#modalForCm').modal('show');
                const buttonCmToInch = document.getElementById('cm-to-inch');
                const buttonCmToFoot = document.getElementById('cm-to-foot');
                buttonCmToInch.addEventListener('click', onClickListenerCmInch);
                buttonCmToFoot.addEventListener('click', onClickListenerCmFoot);
                break;
            case "foot":
                outputValue.value = footToCm(inputValue.value) + " cm";
                break;
            case "yard":
                outputValue.value = yardToMeter(inputValue.value) + " m";
                break;
            case "meter":
                outputValue.value = meterToYard(inputValue.value) + " yard";
                break;
            case "kilometer":
                outputValue.value = kmToMile(inputValue.value) + " mile";
                break;
            case "mile":
                outputValue.value = mileToKm(inputValue.value) + " km";
                break;
        }
    }

    //Convert inches to centimeters
    function inchToCm(inch) {
        return (2.54 * inch).toFixed(2);
    }

    //Convert centimeters to inches
    function cmToInch(cm) {
        return (cm / 2.54).toFixed(2);
    }

    //Convert feet to centimeters
    function footToCm(foot) {
        return (30.48 * foot).toFixed(2);
    }

    //Convert centimeters to feet
    function cmToFeet(cm) {
        return (cm / 30.48).toFixed(2);
    }

    //Convert yards to meters
    function yardToMeter(yard) {
        return (0.9144 * yard).toFixed(2);
    }

    //Convert meters to yards
    function meterToYard(meter) {
        return (meter / 0.9144).toFixed(2);
    }

    //Convert miles to kilometers
    function mileToKm(mile) {
        return (1.6 * mile).toFixed(2);
    }

    //Convert kilometers to miles
    function kmToMile(km) {
        return (km / 1.6).toFixed(2);
    }

    //Convert cm to inch when "Cm to inches" button is clicked
    function onClickListenerCmInch() {
        outputValue.value = cmToInch(inputValue.value) + " inch";
    }

    //Convert cm to feet when "Cm to feet" button is clicked
    function onClickListenerCmFoot() {
        outputValue.value = cmToFeet(inputValue.value) + " foot";
    }

});