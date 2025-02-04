---
title: Feet and inches calculator
---

I wrote this little tool a few years ago and it came in quite handy doing some basic measurements in feet, inches, and fractiontional inches. Just enter some lengths in the format `IN`, `FT'`, or `FT'IN"` and add (`+`), subtract (`-`), multiply (`*`), or divide (`/`). Note that measurements without a unit are assumed to be inches.

Some examples:

To get the total length of (3) lengths of 2'-3 5/64", enter `(2'3+5/64)*3`, which is 6'-9 0.234375".
To divide a length of 21'-7 1/8" into 3 parts, enter `(21'7+1/8)/3`, which is 7'-2 1/2".

&nbsp;

<script src="{{ '/assets/js/feet-and-inches-parser.js' | relative_url }}"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/mathjs/11.5.1/math.min.js"></script>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">

<body>
    <input type="text" id="inputField" placeholder="Enter expression here" style="width: 100%; margin-bottom: 20px;">
    <div style="margin: 10px 0;">
        <label>Precision:</label>
        <button data-precision="0.25" style="padding-left: 14px;" class="active">1/4"</button>
        <button data-precision="0.125" style="padding-left: 14px;">1/8"</button>
        <button data-precision="0.25" style="padding-left: 14px;">1/16"</button>
        <button data-precision="0.03125" style="padding-left: 14px;">1/32"</button>
        <button data-precision="0.015625" style="padding-left: 14px;">1/64"</button>
    </div>
    <div class="result-container" style="display: flex; align-items: center; gap: 20px;">
        <span class="result-label">Result:</span>
        <div class="result-values">
            <div class="copyable-text">
                <span id="ResultInchesDecimal">0"</span>
                <i class="fas fa-copy copy-icon"></i>
            </div>
            <div class="copyable-text">
                <span id="ResultInchesFraction">0"</span>
                <i class="fas fa-copy copy-icon"></i>
            </div>
                <div class="copyable-text">
                <span id="ResultCM">0 cm</span>
            <i class="fas fa-copy copy-icon"></i>
        </div>
        </div>
    </div>
</body>
