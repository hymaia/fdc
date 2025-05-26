console.log("Hello2 from Hymaia");


import { NeatConfig, NeatGradient } from "@firecms/neat";

// Define your config
export const config: NeatConfig = {
    colors: [
        {
            color: '#360717',
            enabled: true,
        },
        {
            color: '#F44A66',
            enabled: true,
        },
        {
            color: '#F78B41',
            enabled: true,
        },
        {
            color: '#FBBF92',
            enabled: true,
        },
        {
            color: '#FFF2E3',
            enabled: false,
        },
    ],
    speed: 3.5,
    horizontalPressure: 4,
    verticalPressure: 8,
    waveFrequencyX: 2,
    waveFrequencyY: 1,
    waveAmplitude: 1,
    shadows: 3,
    highlights: 8,
    colorBrightness: 1,
    colorSaturation: 7,
    wireframe: false,
    colorBlending: 10,
    backgroundColor: '#004E64',
    backgroundAlpha: 1,
    grainScale: 3,
    grainSparsity: 0,
    grainIntensity: 0.375,
    grainSpeed: 2,
    resolution: 1,
    yOffset: 377,
};

// Define an element with id="gradient" in your HTML
const gradientElement = document.getElementById("gradient") as HTMLCanvasElement | null;

if (gradientElement) {
    const neat = new NeatGradient({
        ref: gradientElement,
        ...config
    });

    // You can change the config at any time
    neat.speed = 6;

} else {
    console.error('Element with id "gradient" not found or is not a canvas element');
}
/**
 * Creates a new HTML element and appends it to the specified parent element.
 * @param {string} tag - The type of element to create (e.g., 'div', 'p', 'span').
 * @param {Record<string, string>} attributes - An object containing key-value pairs of attributes to set on the element.
 * @param {string} textContent - The text content to set inside the element.
 * @param {string} parentSelector - A CSS selector for the parent element to which the new element will be appended.
 */
function createElement(tag: string, attributes: Record<string, string>, textContent: string, parentSelector: string): void {
    // Create the new element
    const newElement = document.createElement(tag);
    
    // Set the attributes on the new element
    for (const key in attributes) {
        if (attributes.hasOwnProperty(key)) {
            newElement.setAttribute(key, attributes[key]);
        }
    }
    
    // Set the text content of the new element
    newElement.textContent = textContent;
    
    // Find the parent element
    const parentElement = document.querySelector(parentSelector);
    if (parentElement) {
        // Append the new element to the parent element
        parentElement.appendChild(newElement);
    } else {
        console.error(`Parent element with selector "${parentSelector}" not found.`);
    }
}

// Example usage:
// This will create a <div id="newDiv" class="myClass">Hello, World!</div> inside an element with id "container"
createElement('div', { id: 'newDiv', class: 'myClass' }, 'Hello, World!', '#containerdiv');


