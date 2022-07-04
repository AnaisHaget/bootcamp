function normalPDF(x, mu, sigma) {
    // comment
    let expArg = (x - mu) ** 2/ 2.0 / sigma ** 2;
    return Math.exp(-expArg) / sigma / Math.sqrt(2 * Math.PI);
}

// For convenience let's get view into the data course
let x = source.data['x'];
let pdf = source.data['pdf'];

let mu = mu_slider.value;
let sigma = sigma_slider.value;

// Update the data source
let xLen = x.length;
for (let i = 0; i < xLen; i++){
    pdf[i] = normalPDF(x[i], mu, sigma);
}

source.change.emit();
// to emit the changes to the plot. Different from python.