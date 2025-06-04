    const canvas = document.getElementById('particles');
    const ctx = canvas.getContext('2d');
    let particles = [];

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    window.addEventListener('resize', resize);
    resize();

    class Particle {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = canvas.height + Math.random() * 100;
        this.size = 2 + Math.random() * 2;
        this.speed = 1 + Math.random() * 2;
        this.opacity = 0.2 + Math.random() * 0.5;
      }

      update() {
        this.y -= this.speed;
        if (this.y < -10) this.reset();
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
        ctx.fill();
      }
    }

    for (let i = 0; i < 100; i++) {
      particles.push(new Particle());
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.update();
        p.draw();
      });
      requestAnimationFrame(animate);
    }

    animate();

function autoplaymusic() {
	this.audio = new Audio('assets/music/projects.mp3');
	this.audio.loop = true;
	this.audio.volume = 0.3;
	this.playing = false;
	this.started = false;

	const startaudio = () => {
    	if (!this.started) {
        	this.audio.play()
            	.then(() => {
                	this.playing = true;
                	this.started = true;
            	})
            	.catch(e => {
                	console.error('Music Failed to Play:', e);
            	});
    	}
	};
	document.addEventListener('click', startaudio, { once: true });
}

autoplaymusic();

function copy(el, text) {
  navigator.clipboard.writeText(text).then(() => {
    const text = el.innerText;
    el.innerText = "Copied!";
    setTimeout(() => {
      el.innerText = text;
    }, 2000);
  }).catch(err => {
    const text = el.innerText;
    el.innerText = "FAILED";
    console.error("Copy failed:", err);
    setTimeout(() => {
      el.innerText = text;
    }, 2000);
  });
}
