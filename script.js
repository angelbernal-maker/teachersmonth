// ========================================
// TEACHER TRIBUTE WEBSITE
// ========================================

document.addEventListener("DOMContentLoaded", () => {


    // ========================================
    // SMOOTH SCROLL
    // ========================================

    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", function (e) {

            const targetId = this.getAttribute("href");

            if (targetId === "#") return;

            const target = document.querySelector(targetId);

            if (target) {

                e.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    });



    // ========================================
    // NAVBAR SCROLL EFFECT
    // ========================================

    const topbar = document.querySelector(".topbar");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 50) {

            topbar.classList.add("scrolled");

        } else {

            topbar.classList.remove("scrolled");

        }

    });



    // ========================================
    // SCROLL REVEAL
    // ========================================

    const animatedElements = document.querySelectorAll(
        ".story-content, " +
        ".story-side, " +
        ".memory-card, " +
        ".letter-paper, " +
        ".song-intro, " +
        ".cassette-wrapper, " +
        ".final-content"
    );


    const observer = new IntersectionObserver(
        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.15
        }
    );


    animatedElements.forEach(element => {

        element.classList.add("fade-in");

        observer.observe(element);

    });



    // ========================================
    // MUSIC PLAYER
    // ========================================

    const audio =
        document.getElementById("teacherSong");

    const playButton =
        document.getElementById("playButton");

    const playIcon =
        document.getElementById("playIcon");

    const songStatus =
        document.getElementById("songStatus");

    const progressBar =
        document.getElementById("progressBar");


    if (audio && playButton) {

        playButton.addEventListener("click", () => {

            if (audio.paused) {

                audio.play()
                    .then(() => {

                        playIcon.textContent = "Ⅱ";

                        songStatus.textContent =
                            "NOW PLAYING";

                        playButton.classList.add(
                            "playing"
                        );

                    })
                    .catch(() => {

                        songStatus.textContent =
                            "CLICK AGAIN TO PLAY";

                    });

            } else {

                audio.pause();

                playIcon.textContent = "▶";

                songStatus.textContent =
                    "PAUSED";

                playButton.classList.remove(
                    "playing"
                );

            }

        });


        audio.addEventListener("ended", () => {

            playIcon.textContent = "▶";

            songStatus.textContent =
                "PLAY AGAIN";

            playButton.classList.remove(
                "playing"
            );

            if (progressBar) {
                progressBar.style.width = "0%";
            }

        });


        audio.addEventListener("timeupdate", () => {

            if (
                audio.duration &&
                progressBar
            ) {

                const progress =
                    (audio.currentTime /
                        audio.duration) * 100;

                progressBar.style.width =
                    `${progress}%`;

            }

        });

    }



    // ========================================
    // MEMORY CARD HOVER EFFECT
    // ========================================

    const memoryCards =
        document.querySelectorAll(".memory-card");


    memoryCards.forEach(card => {

        card.addEventListener("mousemove", (e) => {

            const rect =
                card.getBoundingClientRect();

            const x =
                e.clientX - rect.left;

            const y =
                e.clientY - rect.top;

            const centerX =
                rect.width / 2;

            const centerY =
                rect.height / 2;

            const rotateX =
                (y - centerY) / 35;

            const rotateY =
                (centerX - x) / 35;

            card.style.transform =
                `perspective(900px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)
                 translateY(-8px)`;

        });


        card.addEventListener("mouseleave", () => {

            card.style.transform = "";

        });

    });



    // ========================================
    // FOOTER YEAR
    // ========================================

    const year =
        document.getElementById("year");

    if (year) {

        year.textContent =
            new Date().getFullYear();

    }



    // ========================================
    // HERO ANIMATION
    // ========================================

    setTimeout(() => {

        const heroText =
            document.querySelector(".hero-copy");

        const heroPhoto =
            document.querySelector(".hero-photo");


        if (heroText) {

            heroText.classList.add(
                "hero-visible"
            );

        }


        if (heroPhoto) {

            heroPhoto.classList.add(
                "hero-photo-visible"
            );

        }

    }, 200);

});