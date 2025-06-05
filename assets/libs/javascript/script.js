const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');
let particles = [];

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

window.addEventListener('resize', resize);
resize();

class particle {
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
  particles.push(new particle());
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
	this.audio = new Audio('assets/music/index.mp3');
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

const reviews = [
  `"has some mid anime on his profile" – 40 yr old Gunraiders moderator.`,
  `"Your menu's kinda old, you need to update it." – Random Bsu skid`,
  `"+rep he's cool" - 18yr shut-in pedo`,
  `"Ur my slave, that's why, alll love <3" - Sside`,
  `"boi i will ddos you with my ddos ripper github tool DOMT MESS WITH ME" - JaeAPK`,
  `"youll get harmed dont get on my bad side.. dont let me harm you.. im a hacker now.. i can hack into discord accounts" - Astral`,
  `"can i still get that kiss?" - Zealot`,
  `"not this nigger again" - Random newgen larp`,
  `"fuck u nigga" - Bugisha`,
  `"good boy, say sorry to daddy, all the time" - Sside`,
  `"i fuck with u" - Mr.e`,
  `"Galaxizs.. I wanna fuck ur butt" - Mr.e`,
  `"Don't say sorry, just aplogize" - zxn`,
  `"nigger ur the one who wants to play robloxx" - jay`,
  `"he sounds like mickey mouse" - Mr.e's sister`,
  `"do you want me to say your ip?" - Random vrchat skid furry`,
  `"you're a skidder" - Galaxizs`,
  `"ban @newt.. Oops banned the wrong person." - Mod of 'Mold' dsc server`,
  `"your cool beans and uh nonchalant, 10/10 very cool guy." - JaeAPK`,
  `"Can't wait till i catch me a little liam." - isaiah`,
];

const popup = document.getElementById('review-popup');
let index = 0;

function show() {
  popup.textContent = reviews[index];
  popup.style.opacity = 1;

  setTimeout(() => {
    popup.style.opacity = 0;
  }, 5000);

  index = (index + 1) % reviews.length;
}

setInterval(show, 7000);
show();

const content_area = document.getElementById('content-area');

function show_home() {
  content_area.innerHTML = `
    <div class="profile-section">
      <div class="profile-pic" style="background-image: url('assets/images/newtfigpic.gif');"></div>
      <div class="tagline">Ismokefigbars</div>
    </div>
  `;
}

function show_about() {
  content_area.innerHTML = `
    <div class="about-box">
      <p>
	- Programmer (C#, C++, Python)<br>
	- Been in game development & game reverse engineering for 3 years.<br>
	- Discord: ismokefigbars, felonssextape, 6starsx., kittenkatana2016<br>
	- Github: ieatroachss<br>
      </p>
    </div>
  `;
}

show_home();
