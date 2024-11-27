const cursor = document.getElementById('customCursor');
let lastX = 0;
let lastY = 0;
let targetX = 0;
let targetY = 0;
let currentX = 0;
let currentY = 0;
let currentRotation = 0;
let targetRotation = 0;

const SMOOTHING = 0.2;
const MOVEMENT_THRESHOLD = 0.1;
const MAX_ROTATION_SPEED = 10;

function lerp(start, end, factor) {
    return start + (end - start) * factor;
}

function angleDifference(angle1, angle2) {
    const diff = ((angle2 - angle1 + 180) % 360) - 180;
    return diff < -180 ? diff + 360 : diff;
}

function updateCursor(e) {
    targetX = e.clientX;
    targetY = e.clientY;

    // Check if the target element is interactive
    const targetElement = e.target;
    const isInteractive = targetElement.matches('a, button, input, textarea, select, [role="button"], [contenteditable="true"], span, p, li, ul, pre, code, iframe, lite-youtube, img');
    
    // Toggle cursor visibility
    cursor.classList.toggle('hidden', isInteractive);
    cursor.style.display = "block";
    
    cursor.style.translate = `${targetX}px ${targetY}px`;
}

function animate() {
    currentX = lerp(currentX, targetX - 10, SMOOTHING);
    currentY = lerp(currentY, targetY - 10, SMOOTHING);
    
    const deltaX = targetX - lastX;
    const deltaY = targetY - lastY;
    const movement = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

    if (movement > MOVEMENT_THRESHOLD) {
    const angle = Math.atan2(deltaY, deltaX) * 180 / Math.PI + 90;
    targetRotation = angle;
    
    const rotationDiff = angleDifference(currentRotation, targetRotation);
    
    const rotationDelta = Math.min(
        Math.abs(rotationDiff),
        MAX_ROTATION_SPEED
    ) * Math.sign(rotationDiff);
    
    currentRotation += rotationDelta;
    currentRotation = ((currentRotation + 180) % 360) - 180;
    }

    cursor.style.rotate = `${currentRotation}deg`;

    lastX = targetX;
    lastY = targetY;

    requestAnimationFrame(animate);
}

// Start animation loop
requestAnimationFrame(animate);

// Add event listener
document.addEventListener('mousemove', updateCursor);