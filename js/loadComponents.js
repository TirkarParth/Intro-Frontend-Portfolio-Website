document.addEventListener("DOMContentLoaded", function() {
    // Define the header and footer HTML as strings
    // const headerHTML = `
    //     <div class="page-header">
    //         <a href="index.html">
    //             <img src="../img/PTlogo1.png" alt="logo">
    //         </a>
    //         <nav class="page-header__item">
    //             <ul role="menubar" class="navigation-list">
    //                 <li role="presentation">
    //                     <a href="index.html" role="menuitem" class="navigation-list__item navigation-list__item--active">Home</a>
    //                 </li>
    //                 <li role="presentation">
    //                     <a href="about.html" role="menuitem" class="navigation-list__item">About</a>
    //                 </li>
    //                 <li role="presentation">
    //                     <a href="work.html" role="menuitem" class="navigation-list__item">Work</a>
    //                 </li>
    //                 <li role="presentation">
    //                     <a href="contact.html" role="menuitem" class="navigation-list__item">Contact</a>
    //                 </li>
    //             </ul>
    //         </nav>
    //     </div>
    // `;

    const footerHTML = `
    <div class="page-footer">
    <p class="glory-button">Find me on</p>
        <div class="social-media">

        <!-- GitHub Button -->
        <a href="https://github.com/TirkarParth" target="_blank" rel="noopener noreferrer">
            <button class="Btn" aria-label="GitHub">
                <span class="svgContainer">
                    <svg fill="white" viewBox="0 0 496 512" height="1.6em">
                        <path
                            d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z">
                        </path>
                    </svg>
                </span>
                <span class="BG"></span>
            </button>
            </a>

            <!-- LinkedIn Button -->
            <a href="https://www.linkedin.com/in/parth-tirkar-541a4678/" target="_blank" rel="noopener noreferrer">
            <button class="Btn" aria-label="LinkedIn">
                <span class="svgContainer">
                    <svg viewBox="0 0 448 512" height="1.6em" xmlns="http://www.w3.org/2000/svg" class="svgIcon"
                        fill="white">
                        <path
                            d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z">
                        </path>
                    </svg>
                </span>
                <span class="BG1"></span>
            </button>
            </a>

            <!-- Twitter Button -->
            <a href="https://twitter.com/tirkar_parth" target="_blank" rel="noopener noreferrer">
            <button class="Btn" aria-label="Twitter">
                <span class="svgContainer">
                    <svg viewBox="0 0 512 512" height="1.7em" xmlns="http://www.w3.org/2000/svg" class="svgIcon"
                        fill="white">
                        <path
                            d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z">
                        </path>
                    </svg>
                </span>
                <span class="BG"></span>
            </button>
            </a>

            <!-- YouTube Button 
            <a href="https://www.youtube.com/c/YourChannel" target="_blank" rel="noopener noreferrer">
            <button class="Btn" aria-label="YouTube">
                <span class="svgContainer">
                    <svg viewBox="0 0 576 512" fill="white" height="1.6em" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z">
                        </path>
                    </svg>
                </span>
                <span class="BG2"></span>
            </button>
            </a> -->
            </div>
        </div>
        `;

    // Inject the HTML
    // document.getElementById('header-placeholder').innerHTML = headerHTML;
    document.getElementById('footer-placeholder').innerHTML = footerHTML;
});
