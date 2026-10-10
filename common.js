// Shared helpers: floating hearts + confetti

function floatHearts(list, every) {
    list = list || ['💚', '💛', '🤍', '💖'];
    every = every || 700;
    setInterval(function () {
        var h = document.createElement('div');
        h.className = 'heart';
        h.textContent = list[Math.floor(Math.random() * list.length)];
        h.style.left = Math.random() * 100 + 'vw';
        h.style.fontSize = (16 + Math.random() * 24) + 'px';
        h.style.animationDuration = (6 + Math.random() * 6) + 's';
        document.body.appendChild(h);
        setTimeout(function () { h.remove(); }, 12500);
    }, every);
}

function confetti(duration) {
    duration = duration || 6000;
    var c = document.getElementById('confetti');
    if (!c) return;
    var ctx = c.getContext('2d');
    function size() { c.width = innerWidth; c.height = innerHeight; }
    size(); addEventListener('resize', size);
    var colors = ['#ff5d8f', '#ffd93d', '#6bcB77', '#4d96ff', '#ffffff', '#ff9f1c'];
    var bits = [];
    function burst(n) {
        for (var i = 0; i < n; i++) {
            bits.push({
                x: Math.random() * c.width, y: -20,
                vx: (Math.random() - 0.5) * 4, vy: 2 + Math.random() * 4,
                s: 6 + Math.random() * 8, r: Math.random() * 6, vr: (Math.random() - 0.5) * 0.3,
                c: colors[Math.floor(Math.random() * colors.length)]
            });
        }
    }
    var start = performance.now();
    (function frame(t) {
        ctx.clearRect(0, 0, c.width, c.height);
        if (t - start < duration && Math.random() < 0.6) burst(4);
        bits.forEach(function (b) {
            b.x += b.vx; b.y += b.vy; b.r += b.vr; b.vy += 0.03;
            ctx.save(); ctx.translate(b.x, b.y); ctx.rotate(b.r);
            ctx.fillStyle = b.c; ctx.fillRect(-b.s / 2, -b.s / 4, b.s, b.s / 2); ctx.restore();
        });
        bits = bits.filter(function (b) { return b.y < c.height + 30; });
        if (t - start < duration + 3000) requestAnimationFrame(frame);
    })(start);
}
