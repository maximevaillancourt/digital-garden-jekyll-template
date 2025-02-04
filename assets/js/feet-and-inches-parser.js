document.addEventListener('DOMContentLoaded', function() {
  const parser = math.parser();
  const textField = document.querySelector('#inputField');
  const resultInDecimal = document.getElementById('ResultInchesDecimal');
  const resultInFraction = document.getElementById('ResultInchesFraction');
  const resultCM = document.getElementById('ResultCM');
  const precisionButtons = document.querySelectorAll('[data-precision]');

  let selectedPrecision = 0.25;  // Default precision

  // Precision button click event
  precisionButtons.forEach(button => {
    button.addEventListener('click', () => {
      selectedPrecision = parseFloat(button.dataset.precision);

      // Remove active class from all buttons, then add it to the clicked one
      precisionButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      calcResult();
    });
  });

  // Debounce user input to avoid excessive calculations
  let debounceTimer;
  textField.addEventListener('input', () => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(calcResult, 100);
  });

  function calcResult() {
    let parsedInput = 0;
    try {
      parsedInput = parser.evaluate(parseInput(textField.value)) || 0;
    } catch (e) {
    }

    resultInDecimal.textContent =
        createInchOutput(parsedInput, selectedPrecision);
    resultInFraction.textContent =
        decimalToFraction(parsedInput, selectedPrecision);
    resultCM.textContent = convertToCM(parsedInput);
  }

  // Copy function with icon change
  function copyToClipboard(text, icon) {
    navigator.clipboard.writeText(text).then(() => {
      // Change icon to checkmark
      icon.classList.remove('fa-copy');
      icon.classList.add('fa-check');

      // Reset icon after 1.5 seconds
      setTimeout(() => {
        icon.classList.remove('fa-check');
        icon.classList.add('fa-copy');
      }, 1000);
    });
  }

  // Click to copy event listeners
  const copyableTextInchesDecimal =
      resultInDecimal.parentElement.querySelector('.copy-icon');
  const copyableTextInchesFraction =
      resultInFraction.parentElement.querySelector('.copy-icon');
  const copyableTextCM = resultCM.parentElement.querySelector('.copy-icon');

  copyableTextInchesDecimal.addEventListener('click', () => {
    copyToClipboard(resultInDecimal.textContent, copyableTextInchesDecimal);
  });

  copyableTextInchesFraction.addEventListener('click', () => {
    copyToClipboard(resultInFraction.textContent, copyableTextInchesFraction);
  });

  copyableTextCM.addEventListener('click', () => {
    copyToClipboard(resultCM.textContent, copyableTextCM);
  });
});

/* ----- Parsing Functions ----- */
function parseInput(input) {
  return input
      .replace(/\s+/g, '')  // Remove all spaces
      .replace(
          /(\d+)'\s*(\d*)"?/g,
          (_, feet, inches) => {
            inches =
                inches ? parseInt(inches, 10) : 0;  // Handle cases like "5'"
            return `${feet}*12+${inches}`;
          })
      .replace(/[A-Za-z"]/g, '')  // Remove any remaining letters or quotes
      .replace(/\s*([+\-*/()])\s*/g, '$1')   // Remove spaces around operators
      .replace(/(\d+)\/(\d+)/g, '($1/$2)');  // Handle fractions
}

/* ----- Formatting Functions ----- */
function createInchOutput(value, precision) {
  value = Math.abs(value.toFixed(4));  // Round and remove extra zeros
  let feet = Math.floor(value / 12);
  let inches = Math.floor(value % 12);
  let fraction = Math.round((value % 1) / precision) * precision;
  let fractionText = fraction ? ` ${math.fraction(fraction)}` : '';

  return `${feet ? `${feet}'-` : ''}${inches}${fractionText}"`;
}

function convertToCM(value) {
  return `${(value * 2.54).toFixed(4).replace(/\.?0+$/, '')} cm`;
}

function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b);  // Euclidean algorithm to reduce fraction
}

function decimalToFraction(value, precision = 1 / 16) {
  if (value === 0) return `0"`;  // Explicitly handle zero case

  let totalInches = Math.round(value * (1 / precision)) *
      precision;  // Round to nearest fraction
  let feet = Math.floor(totalInches / 12);
  let inches = totalInches % 12;

  let wholeInches = Math.floor(inches);
  let fraction = inches - wholeInches;

  let denominator = Math.round(1 / precision);
  let numerator = Math.round(fraction * denominator);

  // Reduce the fraction
  if (numerator > 0) {
    let divisor = gcd(numerator, denominator);
    numerator /= divisor;
    denominator /= divisor;
  }

  // Simplify the fraction if numerator reaches denominator
  if (numerator === denominator) {
    wholeInches += 1;
    numerator = 0;
  }

  // Construct fractional part
  let fractionText = numerator ? `${numerator}/${denominator}` : '';

  // Construct inch part
  let inchPart = wholeInches ?
      `${wholeInches}${fractionText ? ` ${fractionText}` : ''}"` :
      fractionText                  ? `${fractionText}"` :
                                      '';

  // Handle cases where there's only a fractional inch
  if (!feet && !wholeInches && fractionText) {
    return `${fractionText}"`;
  }

  return `${feet ? `${feet}' ` : ''}${inchPart}`.trim();
}
